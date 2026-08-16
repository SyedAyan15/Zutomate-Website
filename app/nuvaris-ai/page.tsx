import type { Metadata } from 'next';
import CaseStudy from '../components/casestudy/CaseStudy';

export const metadata: Metadata = {
  title: 'Nuvaris AI Case Study | Zutomate',
  description:
    'How Zutomate generated $62K in revenue for Nuvaris AI in 3 months through LinkedIn content and outbound — AI Ark sourcing, Clay enrichment, and a productised offer.',
  openGraph: {
    type: 'article',
    url: 'https://zutomate.com/nuvaris-ai/',
    title: 'Nuvaris AI Case Study | Zutomate',
    description:
      'How Zutomate generated $62K in revenue for Nuvaris AI in 3 months through content and outbound.',
    images: [{ url: '/og-image.png' }],
    siteName: 'Zutomate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuvaris AI Case Study | Zutomate',
    description:
      'How Zutomate generated $62K in revenue for Nuvaris AI in 3 months through content and outbound.',
    images: ['/og-image.png'],
  },
};

export default function NuvarisAiPage() {
  return (
    <CaseStudy
      company="Nuvaris AI"
      logo="nuvarisai.png"
      title={
        <>
          We generated <em>$62K</em> in revenue for Nuvaris AI through content and outbound in 3
          months
        </>
      }
      metrics={[
        { v: '10–15', k: 'Leads generated per month' },
        { v: '$62K', k: 'Revenue generated in 3 months' },
      ]}
      quote={{
        text: 'From GTM strategy and LinkedIn content to optimization, they’ve handled everything exceptionally well',
        name: 'Maya Magno',
        role: 'Founder, Nuvaris AI',
        avatar: '/assets/avatars/maya.jpg',
      }}
      strategy={[
        {
          k: 'Lead Sourcing',
          v: 'We built the target list through AI Ark, keeping the audience tight rather than broad — with a three month window, reach mattered less than talking to the right accounts.',
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
          v: 'We productised the offer as a revenue recovery system rather than selling hours, and led with a free trial — so prospects bought a named outcome they could picture, and could try it before committing.',
        },
        {
          k: 'Content',
          v: 'Three posts a week on LinkedIn, running alongside the outbound so cold accounts arrived at a profile that already had proof on it. Content warmed the list; outbound worked it.',
        },
      ]}
      stack={[
        { k: 'Lead Source', tools: [{ k: 'AI Ark', logo: 'aiark.png' }] },
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
        { k: 'Content', tools: [{ k: 'Figma', logo: 'figma.png' }] },
      ]}
      campaigns={{
        src: '/assets/case-studies/nuvarisai-campaigns.png',
        alt: 'Campaign dashboard for Nuvaris AI showing sends, replies and positive replies',
        width: 1839,
        height: 855,
      }}
    />
  );
}
