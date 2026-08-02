import Link from 'next/link';

import {
  CONTACT_DETAILS,
  FOOTER_COLUMNS,
  SITE,
} from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy text-background/80">
      {/* Grain texture overlay */}
      <div
        className="bg-grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        aria-hidden
      />
      {/* Top gold divider */}
      <div className="bg-gold-line h-px w-full" aria-hidden />

      <div className="container relative py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gold/20 lg:[&>*]:px-8 lg:[&>*:first-child]:pl-0 lg:[&>*:last-child]:pr-0">
          {/* Column 1 — About Ananta */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-heading text-2xl font-bold text-background">
              Ananta<span className="text-gold"> Meridian</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-background/65">
              {SITE.description}
            </p>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-gold/90">
              Established {SITE.established}
            </span>
          </div>

          {/* Columns 2 & 3 — link lists */}
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-heading text-lg font-semibold text-background">
                {column.title}
              </h3>
              <span className="mt-2 block h-px w-10 bg-gold/60" aria-hidden />
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/65 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-background">
              Contact
            </h3>
            <span className="mt-2 block h-px w-10 bg-gold/60" aria-hidden />
            <ul className="mt-5 flex flex-col gap-4">
              {CONTACT_DETAILS.map((detail) => {
                const Icon = detail.icon;
                return (
                  <li key={detail.label} className="flex items-start gap-3">
                    <Icon
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      aria-hidden
                    />
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-sm leading-relaxed text-background/65 transition-colors hover:text-gold"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-sm leading-relaxed text-background/65">
                        {detail.value}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* 25 Years badge */}
        <div className="mt-14 flex flex-col items-center gap-4">
          <div className="bg-gold-line h-px w-full" aria-hidden />
          <span className="rounded-full border border-gold/40 bg-gold/10 px-6 py-2 text-center font-accent text-lg font-semibold tracking-wide text-gold-light">
            {SITE.yearsOfLegacy}+ Years of Excellence
          </span>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/50 sm:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="font-accent text-sm tracking-wide text-background/60">
            {SITE.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
