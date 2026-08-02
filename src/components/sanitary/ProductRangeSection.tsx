'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, type Variants } from 'framer-motion';

import { SectionHeader } from '@/components/shared/SectionHeader';
import { SANITARY_PRODUCTS } from '@/lib/site';

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

export function ProductRangeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-background py-24" aria-label="Our sanitary ware range">
      <div className="container">
        <SectionHeader
          eyebrow="Our Range"
          title="Our Sanitary Ware"
          highlight="Range"
          subtitle="Premium quality across every category"
        />

        <motion.div
          ref={ref}
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SANITARY_PRODUCTS.map((product) => (
            <motion.article
              key={product.name}
              variants={cardVariants}
              className="group overflow-hidden rounded-2xl border-t-2 border-transparent bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:shadow-card"
            >
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 p-6">
                <h3 className="font-heading text-xl font-semibold text-navy">
                  {product.name}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {product.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
