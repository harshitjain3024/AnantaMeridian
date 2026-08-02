'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { MILLET_EXPORT_SPECS } from '@/lib/site';

const slideLeft: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
  },
};

const QUOTE_FIELDS = ['Name', 'Company', 'Product', 'Quantity'] as const;

export function ExportInfoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section aria-label="Export information">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col gap-8 bg-navy px-6 py-20 sm:px-12 lg:px-16"
        >
          <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Export Specifications
          </h2>
          <ul className="flex flex-col gap-5">
            {MILLET_EXPORT_SPECS.map((spec) => (
              <li key={spec.label} className="flex gap-3 text-white/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                <span className="text-sm leading-relaxed sm:text-base">
                  <span className="font-semibold text-gold-light">{spec.label}:</span>{' '}
                  {spec.value}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col gap-8 bg-gold px-6 py-20 sm:px-12 lg:px-16"
        >
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Request a Quote
            </h2>
            <p className="text-base leading-relaxed text-navy/80">
              Get pricing and availability for your requirement
            </p>
          </div>

          <div className="flex flex-col gap-4" aria-hidden>
            {QUOTE_FIELDS.map((field) => (
              <div key={field} className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-widest text-navy/70">
                  {field}
                </span>
                <div className="h-11 rounded-lg border border-navy/20 bg-white/40" />
              </div>
            ))}
          </div>

          <Button asChild variant="navy" size="xl" className="mt-2 self-start">
            <Link href="/contact">
              Contact Us for Pricing
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
