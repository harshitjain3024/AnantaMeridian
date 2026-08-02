'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { User } from 'lucide-react';

import { SectionHeader } from '@/components/shared/SectionHeader';

interface Leader {
  role: string;
  quote: string;
}

const LEADERS: Leader[] = [
  {
    role: 'Founder & Managing Director',
    quote:
      'We built this business on trust. Every order we fulfil carries the weight of 25 years of reputation.',
  },
  {
    role: 'Director, Operations',
    quote:
      'Our strength is our consistency. Clients come back because we deliver exactly what we promise.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function LeadershipSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-navy py-24" aria-label="Our leadership">
      <div className="container">
        <SectionHeader
          eyebrow="Leadership"
          title="The Family Behind"
          highlight="Ananta Meridian"
          subtitle="Guided by experience. Driven by values."
          theme="light"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {LEADERS.map((leader) => (
            <motion.article
              key={leader.role}
              variants={cardVariants}
              className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-gold/20 bg-white/5 p-8 backdrop-blur-sm sm:p-10"
            >
              <span
                className="pointer-events-none absolute right-6 top-2 select-none font-accent text-7xl leading-none text-gold/20"
                aria-hidden
              >
                &ldquo;
              </span>

              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/40 bg-primary-light/30">
                <User className="h-8 w-8 text-gold/80" aria-hidden />
              </div>

              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                {leader.role}
              </span>

              <blockquote className="relative z-10 font-accent text-xl italic leading-relaxed text-background/90 sm:text-2xl">
                &ldquo;{leader.quote}&rdquo;
              </blockquote>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
