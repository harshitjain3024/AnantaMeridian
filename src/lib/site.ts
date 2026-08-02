import {
  Award,
  Bath,
  BadgeIndianRupee,
  ClipboardCheck,
  Clock,
  FlaskConical,
  Globe,
  HeartHandshake,
  Layers,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
  Wheat,
} from 'lucide-react';

import type {
  ContactDetail,
  EnquiryCard,
  EnquiryType,
  Feature,
  FooterColumn,
  MilletProduct,
  NavLink,
  SanitaryProduct,
  Sector,
  SocialLink,
  SourcingRegion,
  SpecLine,
  Stat,
} from '@/types';

/** Core brand constants reused across the site. */
export const SITE = {
  name: 'Ananta Meridian',
  legalName: 'Ananta Meridian LLP',
  tagline: 'Continuing a Legacy of Excellence',
  established: 1999,
  yearsOfLegacy: new Date().getFullYear() - 1999,
  description:
    'From the heart of India to the world. Premium organic millets and the finest sanitary ware, delivered with 25 years of trust.',
  email: 'connect@anantameridian.com',
  phone1: '+91 79755 12669',
  phone2: '+91 80030 02227',
  address: '8, Saket Chakriya, Rampura Circle, Udaipur, Rajasthan, India',
  url: 'https://anantameridian.com',
} as const;

/** Centralised image sources (verified Unsplash assets — swap freely). */
export const IMAGES = {
  milletsField:
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
  milletsGrains:
    'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1600&q=80',
  sanitaryPremium:
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
  sanitaryInterior:
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80',
  // Millets page
  milletsCloseup:
    'https://images.unsplash.com/photo-1621956838481-f8f616950454?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hvbGUlMjBncmFpbnN8ZW58MHx8MHx8fDA%3D',
  ragi:
    'https://images.unsplash.com/photo-1768729339998-909158957162?auto=format&fit=crop&w=800&q=80',
  bajra:
    'https://images.unsplash.com/photo-1639086407827-0dadcd5718c9?auto=format&fit=crop&w=800&q=80',
  jowar: '/millets/sorghum-275258_1280.jpg',
  foxtailMillet: '/millets/images.jpg',
  littleMillet:
    'https://images.unsplash.com/photo-1651241587503-a874db54a1a7?auto=format&fit=crop&w=800&q=80',
  kodoMillet: '/millets/kodo-millet.jpg',
  // Sanitary ware page
  sanitaryBathroomWide:
    'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80',
  bathroomFittings:
    'https://images.unsplash.com/photo-1742134131017-44d377a611b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmF0aHJvb20lMjBGaXR0aW5nc3xlbnwwfHwwfHx8MA%3D%3D',
  sanitaryFixtures:
    'https://images.unsplash.com/photo-1564540583246-934409427776?auto=format&fit=crop&w=800&q=80',
  showerSystems:
    'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80',
  bathroomTiles:
    'https://images.unsplash.com/photo-1682888818704-6dc91e9d7532?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fEJhdGhyb29tJTIwdGlsZXN8ZW58MHx8MHx8fDA%3D',
  bathroomAccessories:
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
  wellnessBathroom:
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
} as const;

/** Primary navigation links. */
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Millets', href: '/millets' },
  { label: 'Sanitary Ware', href: '/sanitary-ware' },
  { label: 'Contact', href: '/contact' },
];

/** Animated counters for the stats section. */
export const STATS: Stat[] = [
  { value: 25, suffix: '+', label: 'Years of Legacy' },
  { value: 100, suffix: '+', label: 'Clients Served' },
  { value: 2, suffix: '', label: 'Industry Sectors' }
];

/** The two business sectors shown on the home page. */
export const SECTORS: Sector[] = [
  {
    id: 'millets',
    eyebrow: 'Sector 01',
    title: 'Organic Millets',
    description:
      'Naturally grown, certified-organic millets cultivated with care and delivered with purity to tables across the globe.',
    href: '/millets',
    image: IMAGES.milletsField,
    imageAlt: 'Golden organic millet field swaying at sunset',
    icon: Wheat,
    overlay:
      'from-primary-dark/90 via-primary/40 to-gold/30',
  },
  {
    id: 'sanitary-ware',
    eyebrow: 'Sector 02',
    title: 'Premium Sanitary Ware',
    description:
      'Precision-engineered, designer sanitary ware that brings global standards of craftsmanship into every modern space.',
    href: '/sanitary-ware',
    image: IMAGES.sanitaryPremium,
    imageAlt: 'Elegant modern bathroom with premium sanitary ware',
    icon: Bath,
    overlay:
      'from-navy-dark/90 via-navy/45 to-gold/25',
  },
];

/** "Why choose us" value propositions. */
export const FEATURES: Feature[] = [
  {
    icon: Award,
    title: '25 Years Experience',
    description:
      'A quarter-century of trade expertise, refined across two industries and three generations of family stewardship.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Certified',
    description:
      'Every product is verified against rigorous quality and organic-certification standards before it ships.',
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    description:
      'A dependable logistics network carries our products to clients across the globe, on time and in perfect condition.',
  },
  {
    icon: HeartHandshake,
    title: 'Family Values',
    description:
      'Relationships first. We trade the way a family does business: with honesty, warmth and the long view.',
  },
  {
    icon: Layers,
    title: 'Two Sectors, One Trust',
    description:
      'Organic millets and premium sanitary ware, united by a single uncompromising promise of excellence.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Sourcing',
    description:
      'Responsible farming and ethical supply chains ensure quality today without costing the world tomorrow.',
  },
];

/** Footer link columns. */
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Our Products',
    links: [
      { label: 'Organic Millets', href: '/millets' },
      { label: 'Sanitary Ware', href: '/sanitary-ware' },
      { label: 'Global Exports', href: '/about' },
    ],
  },
];

/** Contact details surfaced in the footer and contact page. */
export const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: SITE.address,
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: SITE.phone1,
    href: `tel:${SITE.phone1.replace(/\s+/g, '')}`,
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: SITE.phone2,
    href: `tel:${SITE.phone2.replace(/\s+/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat · 9:00 AM – 7:00 PM IST',
  },
];

/** The six organic millet varieties shown on the Millets page. */
export const MILLET_PRODUCTS: MilletProduct[] = [
  {
    name: 'Ragi (Finger Millet)',
    image: IMAGES.ragi,
    imageAlt: 'Close-up of ragi finger millet grains',
    origin: 'Karnataka',
    uses: 'Flour, health food, baby food',
    benefit: 'Highest calcium content among cereals',
  },
  {
    name: 'Bajra (Pearl Millet)',
    image: IMAGES.bajra,
    imageAlt: 'Close-up of bajra pearl millet grains',
    origin: 'Rajasthan',
    uses: 'Flour, animal feed, brewing',
    benefit: 'Rich in iron and protein',
  },
  {
    name: 'Jowar (Sorghum)',
    image: IMAGES.jowar,
    imageAlt: 'Close-up of jowar sorghum grains',
    origin: 'Maharashtra',
    uses: 'Flour, syrup, animal feed',
    benefit: 'Gluten free, high fibre',
  },
  {
    name: 'Foxtail Millet',
    image: IMAGES.foxtailMillet,
    imageAlt: 'Close-up of foxtail millet grains',
    origin: 'Karnataka, Andhra Pradesh',
    uses: 'Rice substitute, porridge, flour',
    benefit: 'Low glycemic index',
  },
  {
    name: 'Little Millet',
    image: IMAGES.littleMillet,
    imageAlt: 'Close-up of little millet grains',
    origin: 'Madhya Pradesh',
    uses: 'Rice substitute, health snacks',
    benefit: 'High in B vitamins',
  },
  {
    name: 'Kodo Millet',
    image: IMAGES.kodoMillet,
    imageAlt: 'Close-up of kodo millet grains',
    origin: 'Madhya Pradesh',
    uses: 'Porridge, flour, fermented foods',
    benefit: 'High antioxidant content',
  },
];

/** Quality assurance pillars for the Millets page. */
export const MILLET_QUALITY_STANDARDS: Feature[] = [
  {
    icon: FlaskConical,
    title: 'Lab Tested',
    description:
      'Every batch tested for moisture, purity, and foreign matter at FSSAI approved labs.',
  },
  {
    icon: Leaf,
    title: 'Organic Certified',
    description:
      'Sourced from certified organic farms, traceable from field to shipment.',
  },
  {
    icon: PackageCheck,
    title: 'Export Grade Packaging',
    description:
      'PP bags, vacuum sealed, and custom labelled as per buyer requirement.',
  },
  {
    icon: ClipboardCheck,
    title: 'Pre Shipment Inspection',
    description:
      'Third party inspection available via SGS or Bureau Veritas before every shipment.',
  },
];

/** Regions plotted on the millets sourcing map. */
export const SOURCING_REGIONS: SourcingRegion[] = [
  { name: 'Karnataka', belt: 'Ragi belt', top: '62%', left: '38%' },
  { name: 'Rajasthan', belt: 'Bajra belt', top: '30%', left: '28%' },
  { name: 'Madhya Pradesh', belt: 'Little Millet, Kodo', top: '46%', left: '46%' },
];

/** Stat counters shown beneath the sourcing map. */
export const SOURCING_STATS: Stat[] = [
];

/** Export specification lines for the Millets page. */
export const MILLET_EXPORT_SPECS: SpecLine[] = [
  { label: 'Minimum Order', value: 'As per buyer requirement.' },
  { label: 'Packaging', value: 'As per buyer requirement.' },
  { label: 'Shipping Terms', value: 'FOB / CIF' },
  { label: 'Payment Terms', value: 'LC or TT' },
  {
    label: 'Certifications',
    value: 'APEDA, FSSAI, Organic Certificate, Phytosanitary',
  },
  { label: 'Ports', value: 'JNPT Mumbai / Chennai / Mundra' },
];

/** The six sanitary ware categories shown on the Sanitary Ware page. */
export const SANITARY_PRODUCTS: SanitaryProduct[] = [
  {
    name: 'Bathroom Fittings',
    image: IMAGES.bathroomFittings,
    imageAlt: 'Premium chrome bathroom tap and faucet',
    description:
      'Basin mixers, shower systems, bath taps, sourced from leading Indian manufacturers.',
  },
  {
    name: 'Sanitaryware Fixtures',
    image: IMAGES.sanitaryFixtures,
    imageAlt: 'Premium wall hung WC and wash basin',
    description:
      'Wall hung WCs, wash basins, bidets, European design standards.',
  },
  {
    name: 'Shower Systems',
    image: IMAGES.showerSystems,
    imageAlt: 'Premium rain shower system in a modern bathroom',
    description:
      'Rain showers, overhead showers, thermostatic systems.',
  },
  {
    name: 'Bathroom Tiles',
    image: IMAGES.bathroomTiles,
    imageAlt: 'Premium porcelain bathroom floor and wall tiles',
    description:
      'Ceramic, vitrified, porcelain tiles, floor and wall applications.',
  },
  {
    name: 'Bathroom Accessories',
    image: IMAGES.bathroomAccessories,
    imageAlt: 'Premium bathroom accessories including towel rails and mirrors',
    description:
      'Towel rails, soap dispensers, mirrors, complete bathroom solutions.',
  },
  {
    name: 'Wellness Products',
    image: IMAGES.wellnessBathroom,
    imageAlt: 'Premium spa-style wellness bathroom',
    description:
      'Steam units, whirlpool baths, wellness fixtures for premium projects.',
  },
];

/** "The Ananta Advantage" pillars for the Sanitary Ware page. */
export const SANITARY_ADVANTAGES: Feature[] = [
  {
    icon: HeartHandshake,
    title: 'Direct Manufacturer Access',
    description:
      "We source directly from India's leading sanitary ware manufacturers, no middlemen, better pricing.",
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Every product verified before dispatch. No compromises.',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Competitive Pricing',
    description:
      'Direct manufacturer relationships mean better pricing for you.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'On time, every time, backed by over 15 years of trade reputation.',
  },
];

/** Supply specification lines for the Sanitary Ware page. */
export const SANITARY_SUPPLY_SPECS: SpecLine[] = [
  { label: 'Coverage', value: 'Supply across Pan India' },
  { label: 'Minimum Order', value: 'Project based, no minimum for bulk' },
  { label: 'Lead Time', value: '7–14 days depending on quantity' },
  {
    label: 'Packaging',
    value: 'Manufacturer standard + additional protection',
  },
  { label: 'Payment Terms', value: 'Advance or credit based on relationship' },
  { label: 'Delivery', value: 'Doorstep delivery available across major cities' },
];

/** Dropdown options for the contact form's enquiry type field. */
export const ENQUIRY_TYPES: EnquiryType[] = [
  'Millets',
  'Sanitary Ware',
  'General Partnership',
  'Other',
];

/** Category cards on the contact page that deep-link to the form. */
export const ENQUIRY_CARDS: EnquiryCard[] = [
  {
    icon: Wheat,
    title: 'Millet Export Enquiries',
    description:
      'For export pricing, samples, and shipping, our millet team responds within 24 hours.',
    ctaLabel: 'Enquire Now',
  },
  {
    icon: Bath,
    title: 'Sanitary Ware Supply',
    description:
      'For project requirements, pricing, and delivery, tell us your needs.',
    ctaLabel: 'Enquire Now',
  },
  {
    icon: HeartHandshake,
    title: 'General Partnership',
    description:
      'Looking to collaborate or partner with Ananta Meridian? We are always open to new relationships.',
    ctaLabel: 'Get In Touch',
  },
];

/** Trust badges shown in the contact page's trust strip. */
export const TRUST_BADGES: Feature[] = [
  {
    icon: Award,
    title: '25 Years in Business',
    description: '',
  },
  {
    icon: HeartHandshake,
    title: 'Family Owned & Operated',
    description: '',
  },
  {
    icon: ShieldCheck,
    title: 'APEDA Registered Exporter',
    description: '',
  },
  {
    icon: Leaf,
    title: 'Organic Certified Supply',
    description: '',
  },
];

/** Social platform links shown on the contact page. */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ananta-meridian',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: `https://wa.me/${SITE.phone1.replace(/\D/g, '')}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: `https://wa.me/${SITE.phone2.replace(/\D/g, '')}`,
  },
];
