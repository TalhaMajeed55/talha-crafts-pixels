// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID (found in EmailJS dashboard under Email Services)
  SERVICE_ID: 'service_jslqlto',
  
  // Your EmailJS Template ID (found in EmailJS dashboard under Email Templates)
  TEMPLATE_ID: 'template_m5ffj2v',
  
  // Your EmailJS Public Key (found in EmailJS dashboard under Account > API Keys)
  PUBLIC_KEY: 'WFkrDv8EVs2AqH2jl',
};

// Template parameters that will be sent to EmailJS
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  message: string;
  to_name?: string; // Optional: recipient name
  [key: string]: unknown; // Allow additional properties for EmailJS
}

// Example of how to use these credentials:
/*
import emailjs from '@emailjs/browser';

const sendEmail = async (params: EmailTemplateParams) => {
  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      params,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    return result;
  } catch (error) {
    throw error;
  }
};
*/ 