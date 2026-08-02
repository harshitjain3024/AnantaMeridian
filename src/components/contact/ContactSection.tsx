'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

import { ContactForm } from '@/components/contact/ContactForm';
import { CONTACT_DETAILS, SOCIAL_LINKS } from '@/lib/site';

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="enquiry-form" className="scroll-mt-[var(--navbar-height)] bg-background-light py-24">
      <div className="container">
        <div
          ref={ref}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16"
        >
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Reach Us
            </span>
            <h2 className="font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Let&apos;s Start a Conversation
            </h2>
            <p className="text-base leading-relaxed text-text-muted">
              Whether you are looking to import organic millets, source
              premium sanitary ware, or simply want to know more about Ananta
              Meridian, we are here. A real person from our family business
              will respond to your enquiry within 24 hours.
            </p>

            <ul className="mt-2 flex flex-col gap-5">
              {CONTACT_DETAILS.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/5">
                      <Icon className="h-5 w-5 text-gold" aria-hidden />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                        {detail.label}
                      </span>
                      <span className="text-base font-medium text-navy">
                        {detail.value}
                      </span>
                    </div>
                  </>
                );

                return (
                  <li key={detail.label} className="flex items-center gap-4">
                    {detail.href ? (
                      <a href={detail.href} className="flex items-center gap-4">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-2 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 hover:bg-gold hover:text-navy"
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="rounded-2xl bg-white p-8 shadow-card sm:p-10"
          >
            <h3 className="mb-6 font-heading text-2xl font-semibold text-navy">
              Send Us a Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
