'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  /** Optional fragment of the title rendered in gold. */
  highlight?: string;
  subtitle?: string;
  /** Optional background image URL. Falls back to the brand gradient. */
  image?: string;
  imageAlt?: string;
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Compact hero band used at the top of interior pages.
 */
export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  image,
  imageAlt = '',
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative flex min-h-[55vh] items-center overflow-hidden bg-navy pt-[var(--navbar-height)]',
        className,
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
      ) : null}

      {/* Gradient + texture overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-navy/90 to-navy-dark" />
      <div className="absolute inset-0 bg-grain opacity-[0.15] mix-blend-overlay" />
      <div className="bg-hero-radial absolute inset-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 flex flex-col items-center gap-5 py-20 text-center"
      >
        {eyebrow ? (
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light"
          >
            {eyebrow}
          </motion.span>
        ) : null}

        <motion.h1
          variants={itemVariants}
          className="max-w-4xl font-heading text-4xl font-bold leading-tight text-background sm:text-5xl md:text-6xl"
        >
          {title}
          {highlight ? <span className="text-gold"> {highlight}</span> : null}
        </motion.h1>

        {subtitle ? (
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base leading-relaxed text-background/75 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        ) : null}
      </motion.div>
    </section>
  );
}
