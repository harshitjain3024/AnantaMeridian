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

export function MilletsIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-background-light py-24" aria-label="Our product">
      <div className="container">
        <div
          ref={ref}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16"
        >
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Our Product
              </span>
              <span className="h-px w-12 bg-gold/60" aria-hidden />
            </div>

            <h2 className="font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Nature&apos;s Finest Grains. Our Lifelong Expertise.
            </h2>

            <div className="flex flex-col gap-5 text-base leading-relaxed text-text-muted">
              <p>
                Millets are among the oldest cultivated grains in the world,
                and India is their home. For over 25 years, Ananta Meridian has
                been at the heart of India&apos;s millet supply chain, working
                directly with farmer clusters and certified organic producers
                across Karnataka and Rajasthan.
              </p>
              <p>
                We supply a curated range of premium organic millets,
                cleaned, graded, and packaged to international export
                standards. Whether you are a food manufacturer, a health food
                distributor, or a bulk importer, we deliver consistent quality
                with every shipment.
              </p>
              <p>
                Our millets carry the trust of 25 years of honest trade,
                sourced responsibly, tested rigorously, and delivered on
                time.
              </p>
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-gold/50 bg-gold/5 px-4 py-2 text-sm font-medium text-navy">
                APEDA Certified Exporter
              </span>
              <span className="inline-flex items-center rounded-full border border-gold/50 bg-gold/5 px-4 py-2 text-sm font-medium text-navy">
                Organic Certified Supply Chain
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div
              className="absolute -inset-3 rounded-3xl border-2 border-gold/30"
              aria-hidden
            />
            <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-card sm:h-[480px]">
              <Image
                src={IMAGES.milletsCloseup}
                alt="Close-up of golden organic millet grains harvested from Indian farms"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
