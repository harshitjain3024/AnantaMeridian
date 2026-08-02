'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SANITARY_SUPPLY_SPECS } from '@/lib/site';

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

export function SupplyInfoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section aria-label="Supply information">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col gap-8 bg-navy px-6 py-20 sm:px-12 lg:px-16"
        >
          <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Supply Specifications
          </h2>
          <ul className="flex flex-col gap-5">
            {SANITARY_SUPPLY_SPECS.map((spec) => (
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
          className="flex flex-col items-start justify-center gap-6 bg-gold px-6 py-20 sm:px-12 lg:px-16"
        >
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Discuss Your Requirement
            </h2>
            <p className="max-w-md text-base leading-relaxed text-navy/80">
              Tell us your project size and we will get back within 24 hours
            </p>
          </div>

          <Button asChild variant="navy" size="xl" className="mt-2">
            <Link href="/contact">
              Contact Us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
