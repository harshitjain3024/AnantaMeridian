'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** Main heading text. */
  title: string;
  /** Optional fragment of the title rendered in gold. */
  highlight?: string;
  /** Supporting paragraph beneath the title. */
  subtitle?: string;
  align?: 'left' | 'center';
  /** Colour scheme — `light` for dark backgrounds. */
  theme?: 'dark' | 'light';
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Reusable, animated heading block used to introduce page sections.
 */
export function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  theme = 'dark',
  className,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn(
        'flex max-w-2xl flex-col gap-5',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <motion.span
          variants={itemVariants}
          className={cn(
            'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest',
            theme === 'light' ? 'text-gold-light' : 'text-gold-dark',
          )}
        >
          <span className="h-px w-8 bg-gold/70" aria-hidden />
          {eyebrow}
        </motion.span>
      ) : null}

      <motion.h2
        variants={itemVariants}
        className={cn(
          'font-heading text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]',
          theme === 'light' ? 'text-background' : 'text-navy',
        )}
      >
        {title}
        {highlight ? <span className="text-gold"> {highlight}</span> : null}
      </motion.h2>

      {/* Gold underline that draws itself in as the header scrolls into view */}
      <motion.span
        aria-hidden
        className="-mt-1 block h-0.5 rounded-full bg-gold"
        initial={{ width: 0 }}
        animate={isInView ? { width: 60 } : { width: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />

      {subtitle ? (
        <motion.p
          variants={itemVariants}
          className={cn(
            'text-base leading-relaxed sm:text-lg',
            theme === 'light' ? 'text-background/75' : 'text-text-muted',
          )}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
