'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CircleCheck as CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import FormInput, { FormTextarea } from '@/components/shared/FormInput';
import Button from '@/components/shared/Button';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Full name is required';
  if (!values.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!values.message.trim()) errors.message = 'Message is required';
  else if (values.message.trim().length < 20)
    errors.message = 'Message must be at least 20 characters';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      });

      if (error) throw error;

      setIsSuccess(true);
      setValues({ name: '', email: '', message: '' });
    } catch {
      setServerError(
        'Something went wrong. Please try again or email us directly at info@zeeinx.com'
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center text-center py-16 px-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
          <CheckCircle2 size={32} className="text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
          Thank you for reaching out. A member of our team will be in touch within
          24 hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-sm text-cyan-500 font-medium hover:text-cyan-600 transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="flex flex-col gap-5">
        <FormInput
          label="Full Name"
          name="name"
          type="text"
          placeholder="Your full name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          required
          autoComplete="name"
        />

        <FormInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@company.com"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          required
          autoComplete="email"
        />

        <FormTextarea
          label="Message"
          name="message"
          placeholder="Tell us about your serialization requirements or compliance challenges..."
          rows={5}
          value={values.message}
          onChange={handleChange}
          error={errors.message}
          required
        />

        <AnimatePresence>
          {serverError && (
            <motion.div
              className="p-4 rounded-xl bg-red-50 border border-red-100 text-sm text-red-600"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              role="alert"
            >
              {serverError}
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isLoading}
          className="mt-1"
        >
          <Send size={16} aria-hidden="true" />
          Send Message
        </Button>
      </div>
    </form>
  );
}
