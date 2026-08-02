import { Suspense } from 'react';
import type { Metadata } from 'next';

import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { SectorsSection } from '@/components/home/SectorsSection';
import { WhyUsSection } from '@/components/home/WhyUsSection';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  // `absolute` bypasses the `%s · Ananta Meridian` template from the root layout.
  title: { absolute: 'Ananta Meridian | Organic Millets & Sanitary Ware Exporter' },
  description:
    'APEDA certified exporter of organic millets and premium sanitary ware from India. 25 years of legacy, trusted by 100+ clients worldwide since 1999.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={null}>
        <StatsSection />
        <SectorsSection />
      </Suspense>
      <Suspense fallback={null}>
        <WhyUsSection />
        <CTASection />
      </Suspense>
    </>
  );
}
