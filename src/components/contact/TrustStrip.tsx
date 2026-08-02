'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

import { TRUST_BADGES } from '@/lib/site';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative overflow-hidden bg-navy py-16" aria-label="Trusted by businesses">
      <div
        className="bg-grain pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay"
        aria-hidden
      />

      <div className="container relative flex flex-col items-center gap-12">
        <h2 className="max-w-2xl text-center font-heading text-2xl font-semibold leading-tight text-white sm:text-3xl">
          Trusted by 100+ Businesses Across India &amp; Beyond
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid w-full grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {TRUST_BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                variants={itemVariants}
                className="flex flex-col items-center gap-3 text-center"
              >
                <Icon className="h-8 w-8 text-gold" aria-hidden />
                <span className="text-sm font-medium text-white/85">
                  {badge.title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
