'use client';

import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';

const transitionVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * App Router template — re-mounts on every navigation. AnimatePresence +
 * a pathname key give each page a smooth fade-and-rise entrance transition.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={transitionVariants}
        initial="hidden"
        animate="enter"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
