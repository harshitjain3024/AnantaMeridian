import type { Metadata } from 'next';

import { PageHero } from '@/components/shared/PageHero';
import { MilletsIntro } from '@/components/millets/MilletsIntro';
import { ProductRangeSection } from '@/components/millets/ProductRangeSection';
import { QualityStandardsSection } from '@/components/millets/QualityStandardsSection';
import { SourcingMapSection } from '@/components/millets/SourcingMapSection';
import { ExportInfoSection } from '@/components/millets/ExportInfoSection';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: { absolute: 'Organic Millets Export | Ragi Bajra Jowar | Ananta Meridian' },
  description:
    'APEDA certified organic millets exporter from India. Ragi, bajra (pearl millet), jowar, foxtail and more — lab tested, export-grade, shipped worldwide.',
  alternates: { canonical: '/millets' },
};

export default function MilletsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sector 01"
        title="Organic Millets"
        subtitle="Farm Fresh. Certified Organic. Delivered Globally."
      />
      <MilletsIntro />
      <ProductRangeSection />
      <QualityStandardsSection />
      <SourcingMapSection />
      <ExportInfoSection />
      <CTASection />
    </>
  );
}
