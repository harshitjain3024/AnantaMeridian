'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { ENQUIRY_CARDS } from '@/lib/site';

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function InfoCardsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-background py-24" aria-label="How can we help">
      <div className="container">
        <motion.div
          ref={ref}
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {ENQUIRY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                variants={cardVariants}
                className="flex flex-col items-center gap-5 rounded-2xl border border-t-2 border-gold/20 bg-white p-8 text-center shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-t-gold hover:shadow-card"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-background-light text-gold">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {card.description}
                </p>
                <Button asChild variant="outline" size="default" className="mt-2">
                  <a href="#enquiry-form">{card.ctaLabel}</a>
                </Button>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
