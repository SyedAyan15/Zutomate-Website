import type { Metadata } from 'next';
import CaseStudy from '../components/casestudy/CaseStudy';
import { caseStudySchema } from '../seo/schema';

export const metadata: Metadata = {
  alternates: { canonical: '/shopwave/' },
  title: 'Shopwave Case Study | Zutomate',
  description:
    'How Zutomate made $325K in revenue for Shopwave through outbound and a HubSpot RevOps implementation, with Clay enrichment and a pipeline built to convert.',
  openGraph: {
    type: 'article',
    url: 'https://zutomate.com/shopwave/',
    title: 'Shopwave Case Study | Zutomate',
    description:
      'How Zutomate made $325K in revenue for Shopwave through outbound and RevOps implementation.',
    images: [{ url: '/og-image.png' }],
    siteName: 'Zutomate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopwave Case Study | Zutomate',
    description:
      'How Zutomate made $325K in revenue for Shopwave through outbound and RevOps implementation.',
    images: ['/og-image.png'],
  },
};

export default function ShopwavePage() {
  return (
    <CaseStudy
      schema={caseStudySchema('/shopwave/', metadata.description ?? '')}
      company="Shopwave"
      logo="shopwave.png"
      title={
        <>
          How we made <em>$325K</em> in revenue for Shopwave through outbound and RevOps
          implementation
        </>
      }
      metrics={[
        { v: '20–30', k: 'Leads generated per month' },
        { v: '$325K', k: 'Revenue generated' },
      ]}
      strategy={[
        {
          k: 'Lead Sourcing',
          v: 'We built the target list from Apollo, AI Ark and Discolike, so the market was covered from three angles rather than whatever a single database happened to hold.',
        },
        {
          k: 'Data Enrichment',
          v: 'Everything ran through Clay, where each record was enriched with the data points that mattered for that specific account rather than a generic firmographic set.',
        },
        {
          k: 'Copywriting',
          v: 'Messaging was written against those enriched data points, so every email and LinkedIn message opened on something specific to the business receiving it rather than a template with a name merged into it.',
        },
        {
          k: 'Offer',
          v: 'Rather than asking for a call up front, we led with something useful: a Loom walkthrough, a free audit, a demo, or a PDF. That way a prospect could see the value before committing any time.',
        },
        {
          k: 'RevOps',
          v: 'We implemented HubSpot as the system of record: lifecycle stages, pipeline structure and deal workflows defined, with replies and bookings syncing in automatically. Deals move on criteria rather than memory, so the forecast reflects what is actually in play.',
        },
      ]}
      stack={[
        {
          k: 'Lead Source',
          tools: [
            { k: 'AI Ark', logo: 'aiark.png' },
            { k: 'Apollo', logo: 'apollo.png' },
            { k: 'Discolike', logo: 'discolike.jpg' },
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
        { k: 'RevOps', tools: [{ k: 'HubSpot', logo: 'hubspot.png' }] },
      ]}
      campaigns={{
        src: '/assets/case-studies/shopwave-campaigns.png',
        alt: 'Campaign dashboard for Shopwave showing sends, replies and positive replies',
        width: 1729,
        height: 910,
      }}
    />
  );
}
