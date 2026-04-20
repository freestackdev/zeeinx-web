'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CircleCheck as CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
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
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const name = values.name.trim();
    const email = values.email.trim();
    const message = values.message.trim();
    const subject = encodeURIComponent(`Website contact: ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;

    setIsSuccess(true);
    setValues({ name: '', email: '', message: '' });
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
        <h3 className="text-xl font-bold text-navy-900 mb-2">Ready to send</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
          Your email app should open with your message. Send it from there, or
          reach us directly at{' '}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-cyan-500 hover:text-cyan-600"
          >
            {CONTACT_INFO.email}
          </a>
          .
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

        <Button type="submit" variant="primary" size="lg" className="mt-1">
          <Send size={16} aria-hidden="true" />
          Send Message
        </Button>
      </div>
    </form>
  );
}
