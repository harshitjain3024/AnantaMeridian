'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

import { FEATURES } from '@/lib/site';
import { SectionHeader } from '@/components/shared/SectionHeader';

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-background py-24" aria-label="Why choose Ananta Meridian">
      <div className="container">
        <SectionHeader
          eyebrow="Why Ananta Meridian"
          title="A Partnership Rooted in"
          highlight="Trust & Excellence"
          subtitle="Everything we do is shaped by the values that have carried our family business for a quarter of a century."
        />

        <motion.div
          ref={ref}
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                variants={cardVariants}
                className="group rounded-2xl border border-t-2 border-transparent bg-white p-8 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-gold/50 hover:border-t-gold hover:shadow-card"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-background-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-gold-light">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-navy">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
