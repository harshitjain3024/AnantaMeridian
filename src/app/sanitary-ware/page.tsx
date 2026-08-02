import type { Metadata } from 'next';

import { PageHero } from '@/components/shared/PageHero';
import { SanitaryIntro } from '@/components/sanitary/SanitaryIntro';
import { ProductRangeSection } from '@/components/sanitary/ProductRangeSection';
import { AdvantageSection } from '@/components/sanitary/AdvantageSection';
import { SupplyInfoSection } from '@/components/sanitary/SupplyInfoSection';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: { absolute: 'Premium Sanitary Ware Supplier India | Ananta Meridian' },
  description:
    'Premium sanitary ware supplier in India — bathroom fittings, fixtures, tiles, and wellness products with direct manufacturer access and pan-India delivery.',
  alternates: { canonical: '/sanitary-ware' },
};

export default function SanitaryWarePage() {
  return (
    <>
      <PageHero
        eyebrow="Sector 02"
        title="Premium Sanitary Ware"
        subtitle="Crafted for Excellence. Built to Last."
      />
      <SanitaryIntro />
      <ProductRangeSection />
      <AdvantageSection />
      <SupplyInfoSection />
      <CTASection />
    </>
  );
}
