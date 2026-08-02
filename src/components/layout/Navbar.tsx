'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AnimatePresence,
  motion,
  useScroll,
  type Variants,
} from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { NAV_LINKS, SITE } from '@/lib/site';
import { Button } from '@/components/ui/button';

const navVariants: Variants = {
  hidden: { y: -120, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const overlayVariants: Variants = {
  hidden: { opacity: 0, clipPath: 'circle(0% at 100% 0%)' },
  visible: {
    opacity: 1,
    clipPath: 'circle(150% at 100% 0%)',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    clipPath: 'circle(0% at 100% 0%)',
    transition: { duration: 0.35, ease: 'easeInOut' },
  },
};

const mobileListVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-baseline gap-2"
      aria-label={`${SITE.name} — home`}
    >
      <span className="font-heading text-2xl font-bold tracking-tight text-background transition-colors group-hover:text-gold-light">
        Ananta<span className="text-gold"> Meridian</span>
      </span>
      <span className="hidden translate-y-[-2px] rounded-full border border-gold/40 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-widest text-gold/90 sm:inline-block">
        Est. {SITE.established}
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-gold/15 bg-navy/85 py-3 backdrop-blur-md shadow-soft'
          : 'border-b border-transparent bg-transparent py-5',
      )}
    >
      {/* Gold reading-progress bar */}
      <motion.span
        className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left bg-gold"
        style={{ scaleX: scrollYProgress }}
        aria-hidden
      />
      <nav
        className="container flex items-center justify-between"
        aria-label="Primary"
      >
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium tracking-wide transition-colors',
                    active ? 'text-gold' : 'text-background/80 hover:text-background',
                  )}
                >
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="gold" size="sm">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-background transition-colors hover:border-gold hover:text-gold lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex flex-col bg-navy lg:hidden"
          >
            <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.12]" />
            <div className="container relative flex items-center justify-between py-5">
              <Logo />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-background transition-colors hover:border-gold hover:text-gold"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.ul
              variants={mobileListVariants}
              initial="hidden"
              animate="visible"
              className="container relative flex flex-1 flex-col justify-center gap-2"
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <motion.li key={link.href} variants={mobileItemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'block border-b border-background/10 py-4 font-heading text-3xl transition-colors',
                        active ? 'text-gold' : 'text-background hover:text-gold-light',
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li variants={mobileItemVariants} className="mt-8">
                <Button asChild variant="gold" size="lg" className="w-full">
                  <Link href="/contact" onClick={() => setMenuOpen(false)}>
                    Get In Touch
                  </Link>
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
