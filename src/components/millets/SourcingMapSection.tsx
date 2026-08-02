'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { SOURCING_REGIONS, SOURCING_STATS } from '@/lib/site';

const mapVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const dotsContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25, delayChildren: 0.4 } },
};

const dotVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const statsVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const statItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function SourcingMapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-background py-24" aria-label="Where we source">
      <div className="container">
        <SectionHeader
          eyebrow="Sourcing"
          title="Where We"
          highlight="Source"
          subtitle="Directly from India's finest millet growing regions"
        />

        <motion.div
          ref={ref}
          variants={mapVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative mx-auto mt-16 aspect-[4/5] w-full max-w-sm"
        >
          <svg
            viewBox="0 0 200 250"
            className="h-full w-full text-navy/10"
            aria-hidden
          >
            <path
              d="M70 10 L120 8 L140 30 L155 35 L160 55 L150 70 L165 90 L160 115 L145 130 L150 155 L135 185 L115 220 L100 240 L88 215 L70 190 L55 200 L45 175 L55 150 L40 130 L45 100 L35 75 L50 60 L45 35 L70 10 Z"
              fill="currentColor"
              stroke="#C9A84C"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
          </svg>

          <span className="sr-only">
            Simplified outline map of India highlighting our sourcing regions
          </span>

          <motion.div
            variants={dotsContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="absolute inset-0"
          >
            {SOURCING_REGIONS.map((region) => (
              <motion.div
                key={region.name}
                variants={dotVariants}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                style={{ top: region.top, left: region.left }}
              >
                <span className="relative flex h-3.5 w-3.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-gold shadow-gold" />
                </span>
                <span className="whitespace-nowrap rounded-full bg-navy px-2.5 py-1 text-[11px] font-semibold text-white shadow-soft">
                  {region.name}
                </span>
                <span className="whitespace-nowrap text-[11px] font-medium text-text-muted">
                  {region.belt}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={statsVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {SOURCING_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statItemVariants}
              className="flex flex-col items-center gap-2 rounded-2xl border border-gold/20 bg-white px-6 py-8 text-center shadow-soft"
            >
              <span className="font-heading text-4xl font-bold text-navy">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <p className="text-sm font-medium uppercase tracking-wide text-text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
