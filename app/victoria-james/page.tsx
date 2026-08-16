import type { Metadata } from 'next';
import CaseStudy from '../components/casestudy/CaseStudy';

export const metadata: Metadata = {
  title: 'Victoria James Recruitment Case Study | Zutomate',
  description:
    'How Zutomate generated 15 leads in a month for Victoria James Recruitment through outbound — Apollo and Clay sourcing, Clay enrichment, and sequencing across email and LinkedIn.',
  openGraph: {
    type: 'article',
    url: 'https://zutomate.com/victoria-james/',
    title: 'Victoria James Recruitment Case Study | Zutomate',
    description:
      'How Zutomate generated 15 leads in a month for Victoria James Recruitment through outbound.',
    images: [{ url: '/og-image.png' }],
    siteName: 'Zutomate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victoria James Recruitment Case Study | Zutomate',
    description:
      'How Zutomate generated 15 leads in a month for Victoria James Recruitment through outbound.',
    images: ['/og-image.png'],
  },
};

export default function VictoriaJamesPage() {
  return (
    <CaseStudy
      company="Victoria James Recruitment"
      logo="victoria-james.png"
      title={
        <>
          We generated <em>15 leads</em> in a month for Victoria James Recruitment through outbound
        </>
      }
      metrics={[
        { v: '15', k: 'Leads generated in a month' },
        { v: 'Outbound', k: 'Channel driving the pipeline' },
      ]}
      strategy={[
        {
          k: 'Lead Sourcing',
          v: 'The target list was built from Apollo and qualified in Clay, so the accounts entering the sequence were checked against fit before anyone was contacted rather than after.',
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
          k: 'Sequencing',
          v: 'Campaigns ran across email through Smartlead and LinkedIn through HeyReach in parallel, so the same account was touched on two channels without either being over-used.',
        },
      ]}
      stack={[
        {
          k: 'Lead Sourcing',
          tools: [
            { k: 'Apollo', logo: 'apollo.png' },
            { k: 'Clay', logo: 'clay.png' },
          ],
        },
        { k: 'Data Enrichment', tools: [{ k: 'Clay', logo: 'clay.png' }] },
        {
          k: 'Sequencer',
          tools: [
            { k: 'HeyReach', logo: 'heyreach.png' },
            { k: 'Smartlead', logo: 'smartlead.png' },
          ],
        },
      ]}
      campaigns={{
        src: '/assets/case-studies/victoria-james-campaigns.png',
        alt: 'Campaign dashboard for Victoria James Recruitment showing sends, replies and positive replies',
        width: 1689,
        height: 931,
      }}
    />
  );
}
