'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Handshake, ShieldCheck, Star, Trophy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { SectionHeader } from '@/components/shared/SectionHeader';

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const VALUES: ValueItem[] = [
  {
    icon: ShieldCheck,
    title: 'Trust',
    description: 'Built over 25 years of honest trade and fulfilled commitments',
  },
  {
    icon: Star,
    title: 'Quality',
    description: 'Uncompromising standards across every product we supply',
  },
  {
    icon: Trophy,
    title: 'Legacy',
    description: 'A family tradition of excellence passed through generations',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'We grow when our clients grow, always',
  },
];

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

export function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-background py-24" aria-label="What we stand for">
      <div className="container">
        <SectionHeader
          eyebrow="Our Values"
          title="What We"
          highlight="Stand For"
        />

        <motion.div
          ref={ref}
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <motion.article
                key={value.title}
                variants={cardVariants}
                className="group flex flex-col gap-5 rounded-2xl border border-t-2 border-gold/20 bg-white p-8 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-transparent hover:border-t-gold hover:bg-navy hover:shadow-card"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-background-light transition-colors duration-300 group-hover:bg-white/10">
                  <Icon className="h-7 w-7 text-gold" aria-hidden />
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy transition-colors duration-300 group-hover:text-white">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted transition-colors duration-300 group-hover:text-white/75">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
