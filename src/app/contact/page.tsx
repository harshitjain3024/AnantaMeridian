import type { Metadata } from 'next';

import { PageHero } from '@/components/shared/PageHero';
import { ContactSection } from '@/components/contact/ContactSection';
import { InfoCardsSection } from '@/components/contact/InfoCardsSection';
import { TrustStrip } from '@/components/contact/TrustStrip';

export const metadata: Metadata = {
  title: { absolute: 'Contact Ananta Meridian | Get a Quote' },
  description:
    'Get a quote from Ananta Meridian for organic millet exports, sanitary ware supply, or partnerships. We respond to every enquiry within 24 hours.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="We respond to every enquiry within 24 hours"
      />
      <ContactSection />
      <InfoCardsSection />
      <TrustStrip />
    </>
  );
}
