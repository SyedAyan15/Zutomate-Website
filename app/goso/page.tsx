import type { Metadata } from 'next';
import CaseStudy from '../components/casestudy/CaseStudy';

export const metadata: Metadata = {
  title: 'GOSO Case Study | Zutomate',
  description:
    'How Zutomate generated $265K in revenue in 6 months for GOSO through outbound and RevOps — lead sourcing, Clay enrichment, AI copywriting and a CRM that manages the pipeline.',
  openGraph: {
    type: 'article',
    url: 'https://zutomate.com/goso/',
    title: 'GOSO Case Study | Zutomate',
    description:
      'How Zutomate generated $265K in revenue in 6 months for GOSO through outbound and RevOps.',
    images: [{ url: '/og-image.png' }],
    siteName: 'Zutomate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GOSO Case Study | Zutomate',
    description:
      'How Zutomate generated $265K in revenue in 6 months for GOSO through outbound and RevOps.',
    images: ['/og-image.png'],
  },
};

export default function GosoPage() {
  return (
    <CaseStudy
      company="GOSO"
      logo="goso.jpg"
      title={
        <>
          How we generated <em>$265K</em> in revenue in 6 months for GOSO through outbound and
          RevOps
        </>
      }
      metrics={[
        { v: '25–30', k: 'Leads generated per month' },
        { v: '$265K', k: 'Revenue generated in 6 months' },
      ]}
      quote={{
        text: 'Would definitely recommend Zutomate to any business looking to improve lead generation and sales operations through automation',
        name: 'Chris Rowan',
        role: 'CEO, GOSO',
        avatar: '/assets/avatars/chris.jpg',
      }}
      strategy={[
        {
          k: 'Lead Sourcing',
          v: 'We pulled the target list from Apify, Apollo and Ocean.io, so coverage came from three sources rather than one provider’s blind spots.',
        },
        {
          k: 'Data Enrichment',
          v: 'Everything landed in Clay, where we enriched each record with the data points that mattered for that specific person rather than a generic firmographic set.',
        },
        {
          k: 'Copywriting',
          v: 'We used Claude to generate hyper-personalised email and LinkedIn messages, written against those enriched data points so every message referenced something true about the person receiving it.',
        },
        {
          k: 'Offer',
          v: 'A 7 day free trial — a low-friction ask that gave prospects a reason to reply without committing to a sales process first.',
        },
        {
          k: 'RevOps',
          v: 'We built the system underneath it all. Replies and bookings sync straight into the CRM, leads are routed and scored automatically, and every stage reports into one dashboard — so the pipeline is managed rather than remembered, and no positive reply sits unworked.',
        },
      ]}
      stack={[
        {
          k: 'Lead Source',
          tools: [
            { k: 'Apollo', logo: 'apollo.png' },
            { k: 'Apify', logo: 'apify.png' },
            { k: 'Ocean.io', logo: 'oceanio.jpg' },
          ],
        },
        { k: 'Enrichment', tools: [{ k: 'Clay', logo: 'clay.png' }] },
        {
          k: 'Sequencer',
          tools: [
            { k: 'Smartlead', logo: 'smartlead.png' },
            { k: 'HeyReach', logo: 'heyreach.png' },
          ],
        },
        {
          k: 'Infrastructure',
          tools: [
            { k: 'Zapmail', logo: 'zapmail.jpg' },
            { k: 'Premium Inboxes', logo: 'premium-inboxes.jpg' },
            { k: 'Maildoso', logo: 'maildoso.jpg' },
          ],
        },
      ]}
      campaigns={{
        src: '/assets/case-studies/goso-campaigns.png',
        alt: 'Smartlead campaign dashboard for GOSO showing sends, replies and positive replies across five campaigns',
        width: 1866,
        height: 843,
      }}
    />
  );
}
