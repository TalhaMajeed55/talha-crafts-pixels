# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality in your portfolio website.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps for your chosen provider
5. Note down the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. In your EmailJS dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Design your email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - The message content
   - `{{to_name}}` - Recipient name (optional)
4. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, go to **Account** → **API Keys**
2. Copy your **Public Key**

## Step 5: Configure Your Project

1. Open `src/lib/emailjs-config.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',      // From Step 2
  TEMPLATE_ID: 'your_template_id_here',    // From Step 3
  PUBLIC_KEY: 'your_public_key_here',      // From Step 4
};
```

## Step 6: Test the Email Functionality

1. Start your development server: `npm run dev`
2. Navigate to the contact form on your portfolio
3. Fill out the form and submit
4. Check your email to confirm the message was received

## Email Template Example

Here's a simple email template you can use:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
Hello {{to_name}},

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Your Portfolio Website
```

## Troubleshooting

### Common Issues:

1. **"EmailJS credentials not configured" error**
   - Make sure you've updated all three values in `emailjs-config.ts`
   - Ensure there are no extra spaces or quotes around the values

2. **"Failed to send email" error**
   - Check that your EmailJS service is properly connected
   - Verify your template variables match the ones in the code
   - Check your browser's console for more detailed error messages

3. **Email not received**
   - Check your spam folder
   - Verify your email service is working correctly
   - Test with a different email address

### Free Plan Limitations:

- EmailJS free plan allows 200 emails per month
- Consider upgrading if you expect more traffic

## Security Notes

- The public key is safe to use in frontend code
- Never expose your private keys or service credentials
- EmailJS handles the email sending securely on their servers

## Support

If you encounter issues:
1. Check the [EmailJS documentation](https://www.emailjs.com/docs/)
2. Visit the [EmailJS community forum](https://community.emailjs.com/)
3. Contact EmailJS support for account-related issues 