import type { Metadata } from 'next';
import Playbook from '../components/playbook/Playbook';
import { playbookSchema } from '../seo/schema';
import { FLOW, STEPS } from './flow';

export const metadata: Metadata = {
  alternates: { canonical: '/outbound-playbook/' },
  title: 'Automated Outbound Engine | Zutomate',
  description:
    'The full outbound engine Zutomate builds — ICP modelling, account sourcing, Clay enrichment, copy testing, email and LinkedIn infrastructure, and reporting in one flow.',
  openGraph: {
    type: 'website',
    url: 'https://zutomate.com/outbound-playbook/',
    title: 'Automated Outbound Engine | Zutomate',
    description:
      'The full outbound engine Zutomate builds — from ICP model to booked meeting, stage by stage.',
    images: [{ url: '/og-image.png' }],
    siteName: 'Zutomate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automated Outbound Engine | Zutomate',
    description:
      'The full outbound engine Zutomate builds — from ICP model to booked meeting, stage by stage.',
    images: ['/og-image.png'],
  },
};

export default function OutboundPage() {
  return (
    <Playbook
      schema={playbookSchema('outbound', metadata.description ?? '')}
      title="Automated Outbound Engine"
      lede="Every stage between an empty list and a booked meeting, and the tooling that runs each one."
      steps={STEPS}
      flow={FLOW}
    />
  );
}
