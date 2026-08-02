'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

import { SectionHeader } from '@/components/shared/SectionHeader';
import { SANITARY_ADVANTAGES } from '@/lib/site';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function AdvantageSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative overflow-hidden bg-navy py-24" aria-label="The Ananta advantage">
      <div
        className="bg-grain pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay"
        aria-hidden
      />

      <div className="container relative">
        <SectionHeader
          eyebrow="Why Ananta Meridian"
          title="The Ananta"
          highlight="Advantage"
          theme="light"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SANITARY_ADVANTAGES.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="flex flex-col items-center gap-5 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/40 bg-primary-light/30">
                  <Icon className="h-7 w-7 text-gold" aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
