// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Animate Skill Bars on Scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'hadasda8@gmail.com';
const EMAILJS_TEMPLATE_ID = 'template_h6w5lyo';
const EMAILJS_PUBLIC_KEY = 'wUC9uBLtwLZ3VI_j2';

// Initialize EmailJS
if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

// Form Submission - Send via EmailJS
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Prepare email parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_email: 'hadasda8@gmail.com'
        };
        
        // Send email via EmailJS
        if (typeof emailjs === 'undefined') {
            alert('EmailJS library not loaded. Please check your internet connection.');
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            return;
        }

        if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || !EMAILJS_SERVICE_ID) {
            alert('Email service is not configured yet. Please contact me directly at hadasda8@gmail.com');
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            return;
        }

        // Send email via EmailJS
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then((response) => {
                // Success
                console.log('EmailJS Success:', response.status, response.text);
                alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
                contactForm.reset();
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            })
            .catch((error) => {
                // Error - show detailed error message
                console.error('EmailJS Error Details:', error);
                let errorMessage = 'Sorry, there was an error sending your message. ';
                
                if (error.text) {
                    errorMessage += `Error: ${error.text}. `;
                }
                if (error.status) {
                    errorMessage += `Status: ${error.status}. `;
                }
                errorMessage += 'Please try again or contact me directly at hadasda8@gmail.com';
                
                alert(errorMessage);
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
    });
}

// Add fade-in animation on scroll
const fadeElements = document.querySelectorAll('.project-card, .stat-item, .tool-item');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

