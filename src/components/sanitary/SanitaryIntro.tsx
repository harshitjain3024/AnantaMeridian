'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, type Variants } from 'framer-motion';

import { IMAGES } from '@/lib/site';

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function SanitaryIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-background-light py-24" aria-label="Our expertise">
      <div className="container">
        <div
          ref={ref}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16"
        >
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative order-2 lg:order-1"
          >
            <div
              className="absolute -inset-3 rounded-3xl border-2 border-gold/30"
              aria-hidden
            />
            <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-card sm:h-[480px]">
              <Image
                src={IMAGES.sanitaryBathroomWide}
                alt="Premium modern bathroom interior with elegant fixtures"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-1 flex flex-col gap-6 lg:order-2"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Our Expertise
              </span>
              <span className="h-px w-12 bg-gold/60" aria-hidden />
            </div>

            <h2 className="font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Premium Sanitary Ware. Uncompromising Quality.
            </h2>

            <div className="flex flex-col gap-5 text-base leading-relaxed text-text-muted">
              <p>
                Ananta Meridian entered the sanitary ware sector with a single
                focus, supply premium quality products that builders,
                contractors, and interior designers can rely on. Today we are
                a trusted name for some of the finest residential and
                commercial projects across India.
              </p>
              <p>
                We work directly with India&apos;s leading sanitary ware
                manufacturers, giving you access to premium products at
                competitive prices, backed by reliable delivery and honest
                trade.
              </p>
              <p>
                From a single tap fitting to a complete bathroom solution,
                we treat every order with the same attention and care that
                has made Ananta Meridian a name businesses come back to.
              </p>
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-gold/50 bg-gold/5 px-4 py-2 text-sm font-medium text-navy">
                Premium Quality Assured
              </span>
              <span className="inline-flex items-center rounded-full border border-gold/50 bg-gold/5 px-4 py-2 text-sm font-medium text-navy">
                100+ Projects Supplied
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
