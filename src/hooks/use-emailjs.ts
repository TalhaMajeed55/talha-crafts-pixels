import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EmailTemplateParams } from '@/lib/emailjs-config';

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (params: EmailTemplateParams) => {
    // Check if credentials are configured
    if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID_HERE' ||
        EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID_HERE' ||
        EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
      throw new Error('EmailJS credentials not configured. Please update src/lib/emailjs-config.ts with your credentials.');
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        params,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send email';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return {
    sendEmail,
    isLoading,
    error,
    clearError,
  };
}; 