'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { STATS } from '@/lib/site';

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

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-navy py-20"
      aria-label="Ananta Meridian by the numbers"
    >
      <div
        className="bg-grain pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay"
        aria-hidden
      />
      <div className="bg-gold-line absolute inset-x-0 top-0 h-px" aria-hidden />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="container relative mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-x-6 gap-y-12 sm:grid-cols-3"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <span className="font-heading text-5xl font-bold text-gold sm:text-6xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="mt-3 h-px w-10 bg-gold/40" aria-hidden />
            <p className="mt-4 text-sm font-medium uppercase tracking-widest text-background/70 sm:text-base">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
