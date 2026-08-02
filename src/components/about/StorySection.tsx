'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, type Variants } from 'framer-motion';

const STORY_IMAGE =
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80';

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

export function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-background-light py-24" aria-label="Our story">
      <div className="container">
        <div
          ref={ref}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16"
        >
          {/* Left — text */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Est. 1999
              </span>
              <span className="h-px w-12 bg-gold/60" aria-hidden />
            </div>

            <h2 className="font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              A Family Business Built on Integrity
            </h2>

            <div className="flex flex-col gap-5 text-base leading-relaxed text-text-muted">
              <p>
                What began as a modest trading venture in 1999 has grown into
                a trusted name across two distinct industries. Ananta Meridian
                was founded on a simple belief, that quality should never be
                compromised, and relationships should always be honoured.
              </p>
              <p>
                Over the past 25 years, we have served hundreds of businesses
                across India, building deep expertise in organic millets and
                premium sanitary ware. Our understanding of these sectors
                runs generations deep, shaped by hands-on experience, honest
                trade, and a relentless pursuit of excellence.
              </p>
              <p>
                Today, as we carry this legacy forward, we bring the same
                values to every partnership we forge, whether you are a
                distributor, a retailer, or a global buyer looking for a
                reliable Indian supplier.
              </p>
            </div>
          </motion.div>

          {/* Right — image with gold frame */}
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
                src={STORY_IMAGE}
                alt="Two generations of the Ananta Meridian family shaking hands, representing trust passed down through the business"
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
