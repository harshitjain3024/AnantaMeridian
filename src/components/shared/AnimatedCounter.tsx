'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  /** Final value the counter animates toward. */
  value: number;
  /** Symbol rendered after the number (e.g. "+"). */
  suffix?: string;
  /** Animation duration in seconds. */
  duration?: number;
  className?: string;
}

/**
 * Counts up from zero to `value` once the element scrolls into view.
 */
export function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest),
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {Math.round(display).toLocaleString('en-US')}
      {suffix}
    </span>
  );
}
