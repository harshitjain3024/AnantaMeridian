'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section className="bg-background py-24" aria-label="Get in touch">
      <div className="container">
        <motion.div
          ref={ref}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-navy px-6 py-20 text-center shadow-card sm:px-16"
        >
          {/* Gold grain texture */}
          <div
            className="bg-grain pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
            aria-hidden
          />
          <div className="bg-hero-radial absolute inset-0" aria-hidden />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light">
              Let&apos;s Build Together
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-background sm:text-4xl md:text-5xl">
              Ready to Partner with a Legacy?
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-background/75 sm:text-lg">
              Join 100+ businesses who trust Ananta Meridian for premium organic
              millets and world-class sanitary ware.
            </p>
            <Button asChild variant="gold" size="xl" className="mt-2">
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
