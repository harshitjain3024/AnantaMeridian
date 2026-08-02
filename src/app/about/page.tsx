import type { Metadata } from 'next';

import { PageHero } from '@/components/shared/PageHero';
import { StorySection } from '@/components/about/StorySection';
import { ValuesSection } from '@/components/about/ValuesSection';
import { LeadershipSection } from '@/components/about/LeadershipSection';
import { AboutCTAStrip } from '@/components/about/AboutCTAStrip';

export const metadata: Metadata = {
  title: { absolute: 'About Us | 25 Years of Legacy | Ananta Meridian' },
  description:
    '25 years of family legacy in premium organic millets and sanitary ware. Discover the story, values, and vision behind Ananta Meridian LLP.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="25 Years of Trust, Quality & Family Values"
      />
      <StorySection />
      <ValuesSection />
      <LeadershipSection />
      <AboutCTAStrip />
    </>
  );
}
