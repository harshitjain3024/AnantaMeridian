import type { LucideIcon } from 'lucide-react';

/** A single primary navigation entry. */
export interface NavLink {
  label: string;
  href: string;
}

/** Animated statistic shown in the stats counter section. */
export interface Stat {
  /** Numeric target the counter animates toward. */
  value: number;
  /** Symbol appended after the number, e.g. "+". */
  suffix: string;
  /** Human readable label beneath the number. */
  label: string;
}

/** A business sector showcased on the home page. */
export interface Sector {
  id: 'millets' | 'sanitary-ware';
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  /** Tailwind gradient classes applied as the hover overlay. */
  overlay: string;
  /** Short eyebrow label, e.g. "Sector 01". */
  eyebrow: string;
}

/** A "why choose us" value proposition card. */
export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** A single footer link. */
export interface FooterLink {
  label: string;
  href: string;
}

/** A column of links rendered in the footer. */
export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

/** A line of contact information with an associated icon. */
export interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

/** A single organic millet variety in the product range. */
export interface MilletProduct {
  name: string;
  image: string;
  imageAlt: string;
  origin: string;
  uses: string;
  benefit: string;
}

/** A single sanitary ware category in the product range. */
export interface SanitaryProduct {
  name: string;
  image: string;
  imageAlt: string;
  description: string;
}

/** A sourcing region plotted on the millets sourcing map. */
export interface SourcingRegion {
  name: string;
  belt: string;
  top: string;
  left: string;
}

/** A single labelled specification line (export/supply info panels). */
export interface SpecLine {
  label: string;
  value: string;
}

/** Enquiry type options offered in the contact form dropdown. */
export type EnquiryType =
  | 'Millets'
  | 'Sanitary Ware'
  | 'General Partnership'
  | 'Other';

/** Typed shape of the contact form's fields. */
export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  enquiryType: EnquiryType;
  message: string;
}

/** A category card on the contact page that deep-links to the form. */
export interface EnquiryCard {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
}

/** A social platform link shown on the contact page. */
export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}
