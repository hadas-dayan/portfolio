# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. **Copy the Service ID** (you'll need this)

## Step 3: Create an Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

**Template Name:** Contact Form

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
You have received a new message from your portfolio website.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Click "Save"
5. **Copy the Template ID** (you'll need this)

## Step 4: Get Your Public Key
1. Go to "Account" → "General" in the dashboard
2. Find "Public Key" section
3. **Copy your Public Key** (you'll need this)

## Step 5: Update the JavaScript File
1. Open `script.js` in your portfolio folder
2. Find these lines near the top:
```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

3. Replace with your actual values:
```javascript
const EMAILJS_SERVICE_ID = 'service_xxxxxxx';  // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx';  // Your Template ID
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxx';  // Your Public Key
```

4. Save the file

## Step 6: Test the Form
1. Open your portfolio website
2. Fill out the contact form
3. Submit it
4. Check your email inbox (hadasda8@gmail.com) - you should receive the message!

## Free Tier Limits
- 200 emails per month (free tier)
- Perfect for a portfolio website!

## Troubleshooting
- Make sure all three IDs are correctly entered
- Check that your email service is connected in EmailJS dashboard
- Verify the template variables match: {{from_name}}, {{from_email}}, {{message}}
- Check browser console for any error messages

## Need Help?
Visit EmailJS documentation: https://www.emailjs.com/docs/

