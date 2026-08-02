'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';

/** Deterministic particle field — fixed values avoid SSR/CSR hydration drift. */
const PARTICLES = [
  { left: '8%', top: '22%', size: 6, delay: 0, duration: 7 },
  { left: '18%', top: '70%', size: 4, delay: 1.2, duration: 9 },
  { left: '30%', top: '38%', size: 8, delay: 0.6, duration: 8 },
  { left: '44%', top: '80%', size: 5, delay: 2.1, duration: 10 },
  { left: '57%', top: '28%', size: 7, delay: 0.3, duration: 7.5 },
  { left: '68%', top: '64%', size: 4, delay: 1.7, duration: 9.5 },
  { left: '79%', top: '34%', size: 9, delay: 0.9, duration: 8.5 },
  { left: '88%', top: '74%', size: 5, delay: 2.4, duration: 7 },
  { left: '92%', top: '18%', size: 6, delay: 1.4, duration: 9 },
] as const;

/** Small drifting wheat glyphs — deterministic to avoid hydration drift. */
const WHEAT_PARTICLES = [
  { left: '12%', top: '55%', size: 26, delay: 0.4, duration: 11, drift: -34 },
  { left: '26%', top: '20%', size: 20, delay: 1.8, duration: 13, drift: -26 },
  { left: '52%', top: '68%', size: 24, delay: 0.9, duration: 12, drift: -30 },
  { left: '72%', top: '18%', size: 18, delay: 2.6, duration: 14, drift: -24 },
  { left: '86%', top: '52%', size: 22, delay: 1.3, duration: 12.5, drift: -32 },
] as const;

const HERO_TRUST_BADGES = [
  'APEDA Certified',
  'Est. 1999',
  '100+ Clients',
  'Organic Certified',
] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const floatLeftVariants: Variants = {
  animate: {
    y: [0, -22, 0],
    rotate: [0, 6, 0],
    transition: { duration: 9, ease: 'easeInOut', repeat: Infinity },
  },
};

const floatRightVariants: Variants = {
  animate: {
    y: [0, 24, 0],
    rotate: [0, -5, 0],
    transition: { duration: 11, ease: 'easeInOut', repeat: Infinity },
  },
};

function WheatIllustration() {
  return (
    <svg viewBox="0 0 64 96" fill="none" className="h-full w-full">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M32 92V40" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <path d={`M32 ${36 + i * 11} C20 ${30 + i * 11} 18 ${22 + i * 11} 22 ${16 + i * 11}`} />
            <path d={`M32 ${36 + i * 11} C44 ${30 + i * 11} 46 ${22 + i * 11} 42 ${16 + i * 11}`} />
          </g>
        ))}
        <path d="M32 36 C26 26 26 16 32 8 C38 16 38 26 32 36Z" />
      </g>
    </svg>
  );
}

function SanitaryIllustration() {
  return (
    <svg viewBox="0 0 80 96" fill="none" className="h-full w-full">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 14h8a14 14 0 0 1 14 14v6" />
        <path d="M48 34c0 10-7 18-16 18s-16-8-16-18Z" />
        <path d="M16 34h32" />
        <path d="M32 52v22" />
        <path d="M20 78h24l-3 10H23Z" />
        <circle cx="26" cy="14" r="3" />
      </g>
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-navy">
      {/* Radial glow + grain */}
      <div className="bg-hero-radial absolute inset-0" aria-hidden />
      <div
        className="bg-grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        aria-hidden
      />

      {/* Gold particles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold/70 blur-[1px]"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{ y: [0, -28, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Floating wheat particles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {WHEAT_PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute text-gold/15"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size * 1.5 }}
            animate={{ y: [0, p.drift, 0], rotate: [0, 8, 0], opacity: [0.35, 0.8, 0.35] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          >
            <WheatIllustration />
          </motion.span>
        ))}
      </div>

      {/* Floating illustrations */}
      <motion.div
        variants={floatLeftVariants}
        animate="animate"
        className="pointer-events-none absolute left-[4%] top-1/3 hidden h-40 w-28 text-gold/20 md:block lg:left-[8%]"
        aria-hidden
      >
        <WheatIllustration />
      </motion.div>
      <motion.div
        variants={floatRightVariants}
        animate="animate"
        className="pointer-events-none absolute right-[4%] top-1/3 hidden h-40 w-32 text-gold/20 md:block lg:right-[8%]"
        aria-hidden
      >
        <SanitaryIllustration />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 flex flex-col items-center gap-7 py-28 text-center"
      >
        <motion.span
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-gold-light backdrop-blur-sm"
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          Trusted Since 1999
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="max-w-4xl font-heading text-4xl font-bold leading-[1.1] text-background sm:text-5xl md:text-6xl lg:text-7xl"
        >
          A Legacy Built on Quality.
          <span className="mt-2 block text-gold-gradient">
            A Future Built on Excellence.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-base leading-relaxed text-background/75 sm:text-lg"
        >
          From the heart of India to the world. Premium organic millets and the
          finest sanitary ware, delivered with 25 years of trust.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button asChild variant="gold" size="lg">
            <Link href="/millets">Explore Our Products</Link>
          </Button>
          <Button asChild variant="outlineLight" size="lg">
            <Link href="/about">Our Story</Link>
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.ul
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3"
          aria-label="Certifications and trust indicators"
        >
          {HERO_TRUST_BADGES.map((badge) => (
            <li
              key={badge}
              className="rounded-full border border-gold/40 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-widest text-gold-light backdrop-blur-sm"
            >
              {badge}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#stats"
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-background/60 transition-colors hover:text-gold"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
      >
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </section>
  );
}
