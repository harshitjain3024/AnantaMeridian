'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function AboutCTAStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-gold py-16" aria-label="Get in touch">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="container flex flex-col items-center gap-7 text-center"
      >
        <h2 className="max-w-3xl font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl md:text-4xl">
          25 Years of Excellence. Ready to Work With You.
        </h2>
        <Button asChild variant="navy" size="lg">
          <Link href="/contact">
            Get In Touch
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
