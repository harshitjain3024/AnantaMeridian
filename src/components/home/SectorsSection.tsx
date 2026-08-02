'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { SECTORS } from '@/lib/site';
import { SectionHeader } from '@/components/shared/SectionHeader';

const cardVariants: Variants = {
  hidden: (fromLeft: boolean) => ({
    opacity: 0,
    x: fromLeft ? -80 : 80,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function SectorsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-background py-24" aria-label="Our business sectors">
      <div className="container">
        <SectionHeader
          eyebrow="Two Sectors, One Standard"
          title="Crafted with Care,"
          highlight="Trusted Worldwide"
          subtitle="A quarter-century of expertise channelled into two distinct industries, each held to the same uncompromising promise of quality."
        />

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {SECTORS.map((sector, index) => {
            const Icon = sector.icon;
            const fromLeft = index === 0;
            return (
              <motion.article
                key={sector.id}
                custom={fromLeft}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="group relative h-[26rem] overflow-hidden rounded-3xl shadow-card sm:h-[30rem]"
              >
                <Image
                  src={sector.image}
                  alt={sector.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Base darkening + branded hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-t opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                    sector.overlay,
                  )}
                />

                <div className="relative flex h-full flex-col justify-end gap-4 p-8 sm:p-10">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold-light">
                    {sector.eyebrow}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-gold-light backdrop-blur-sm">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h3 className="font-heading text-3xl font-semibold text-background">
                    {sector.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-background/80">
                    {sector.description}
                  </p>
                  <Link
                    href={sector.href}
                    className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-gold transition-all duration-300 hover:gap-3 hover:text-gold-light"
                  >
                    Explore
                    <ArrowRight className="h-4 w-4" aria-hidden />
                    <span className="sr-only">{sector.title}</span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
