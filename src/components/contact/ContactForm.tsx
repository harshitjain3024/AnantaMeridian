'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ENQUIRY_TYPES } from '@/lib/site';
import type { ContactFormData, EnquiryType } from '@/types';

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const INITIAL_DATA: ContactFormData = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  enquiryType: ENQUIRY_TYPES[0],
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MAX_LENGTH = 1000;

const successVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function validate(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = 'Full name is required';
  }
  if (!data.companyName.trim()) {
    errors.companyName = 'Company name is required';
  }
  if (!data.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = 'Enter a valid email address';
  }
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters';
  }

  return errors;
}

/** Shared styling for the floating-label form controls. */
const fieldClasses =
  'peer w-full rounded-lg border border-navy/15 bg-background-light px-4 pt-5 pb-1.5 text-sm text-navy outline-none transition-colors placeholder-transparent focus:border-gold focus:ring-2 focus:ring-gold/30';

const labelClasses =
  'pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-text-muted transition-all duration-200 peer-focus:top-3.5 peer-focus:text-[0.65rem] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-gold-dark peer-[:not(:placeholder-shown)]:top-3.5 peer-[:not(:placeholder-shown)]:text-[0.65rem] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wider';

/** Animated tick that draws itself in when the form succeeds. */
function AnimatedCheckmark() {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
      <motion.svg
        viewBox="0 0 52 52"
        className="h-9 w-9 text-primary"
        fill="none"
        aria-hidden
      >
        <motion.circle
          cx="26"
          cy="26"
          r="23"
          stroke="currentColor"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.path
          d="M15 27l8 8 15-16"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.45, ease: 'easeOut' }}
        />
      </motion.svg>
    </div>
  );
}

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange<K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Send failed');
        setIsSubmitted(true);
        setData(INITIAL_DATA);
      } catch {
        setErrors({ message: 'Something went wrong. Please try again or email us directly.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        variants={successVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-4 py-12 text-center"
        role="status"
      >
        <AnimatedCheckmark />
        <h3 className="font-heading text-2xl font-semibold text-navy">
          Thank You
        </h3>
        <p className="max-w-sm text-base leading-relaxed text-text-muted">
          Thank you. We will be in touch within 24 hours.
        </p>
        <Button variant="outline" size="default" className="mt-2" onClick={() => setIsSubmitted(false)}>
          Send Another Enquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <div className="relative">
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder=" "
            value={data.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={cn(fieldClasses, 'h-14')}
          />
          <label htmlFor="fullName" className={labelClasses}>
            Full Name <span className="text-gold">*</span>
          </label>
        </div>
        {errors.fullName ? (
          <span id="fullName-error" className="text-xs font-medium text-red-600">
            {errors.fullName}
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="relative">
          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder=" "
            value={data.companyName}
            onChange={(e) => handleChange('companyName', e.target.value)}
            aria-invalid={Boolean(errors.companyName)}
            aria-describedby={errors.companyName ? 'companyName-error' : undefined}
            className={cn(fieldClasses, 'h-14')}
          />
          <label htmlFor="companyName" className={labelClasses}>
            Company Name <span className="text-gold">*</span>
          </label>
        </div>
        {errors.companyName ? (
          <span id="companyName-error" className="text-xs font-medium text-red-600">
            {errors.companyName}
          </span>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              placeholder=" "
              value={data.email}
              onChange={(e) => handleChange('email', e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={cn(fieldClasses, 'h-14')}
            />
            <label htmlFor="email" className={labelClasses}>
              Email Address <span className="text-gold">*</span>
            </label>
          </div>
          {errors.email ? (
            <span id="email-error" className="text-xs font-medium text-red-600">
              {errors.email}
            </span>
          ) : null}
        </div>

        <div className="relative">
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder=" "
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={cn(fieldClasses, 'h-14')}
          />
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
        </div>
      </div>

      <div className="relative">
        <select
          id="enquiryType"
          name="enquiryType"
          value={data.enquiryType}
          onChange={(e) => handleChange('enquiryType', e.target.value as EnquiryType)}
          className="h-14 w-full rounded-lg border border-navy/15 bg-background-light px-4 pt-5 pb-1.5 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30"
        >
          {ENQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <label
          htmlFor="enquiryType"
          className="pointer-events-none absolute left-4 top-3.5 text-[0.65rem] font-semibold uppercase tracking-wider text-text-muted"
        >
          Enquiry Type
        </label>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder=" "
            maxLength={MESSAGE_MAX_LENGTH}
            value={data.message}
            onChange={(e) => handleChange('message', e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : 'message-counter'}
            className={cn(fieldClasses, 'resize-none pt-6 pb-8')}
          />
          <label
            htmlFor="message"
            className={cn(
              labelClasses,
              'top-6 peer-focus:top-3 peer-[:not(:placeholder-shown)]:top-3',
            )}
          >
            Message <span className="text-gold">*</span>
          </label>
          <span
            id="message-counter"
            aria-live="polite"
            className={cn(
              'pointer-events-none absolute bottom-2.5 right-4 text-[0.65rem] font-medium tabular-nums',
              data.message.length > MESSAGE_MAX_LENGTH - 50
                ? 'text-gold-dark'
                : 'text-text-muted',
            )}
          >
            {data.message.length}/{MESSAGE_MAX_LENGTH}
          </span>
        </div>
        {errors.message ? (
          <span id="message-error" className="text-xs font-medium text-red-600">
            {errors.message}
          </span>
        ) : null}
      </div>

      <Button
        type="submit"
        variant="gold"
        size="xl"
        className="mt-2 w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          'Send Enquiry'
        )}
      </Button>
    </form>
  );
}
