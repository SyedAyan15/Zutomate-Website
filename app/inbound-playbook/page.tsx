import type { Metadata } from 'next';
import Playbook from '../components/playbook/Playbook';
import { FLOW, STEPS } from './flow';

export const metadata: Metadata = {
  title: 'Inbound Growth Engine | Zutomate',
  description:
    'The inbound engine Zutomate builds — a LinkedIn content system that turns distribution into warm leads, and a paid ads system modelled on what already works in your market.',
  openGraph: {
    type: 'website',
    url: 'https://zutomate.com/inbound-playbook/',
    title: 'Inbound Growth Engine | Zutomate',
    description:
      'The inbound engine Zutomate builds — LinkedIn content and paid ads, stage by stage.',
    images: [{ url: '/og-image.png' }],
    siteName: 'Zutomate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inbound Growth Engine | Zutomate',
    description:
      'The inbound engine Zutomate builds — LinkedIn content and paid ads, stage by stage.',
    images: ['/og-image.png'],
  },
};

export default function InboundPage() {
  return (
    <Playbook
      title="Inbound Growth Engine"
      lede="Two engines that feed each other: organic LinkedIn content, and paid ads modelled on what already works."
      steps={STEPS}
      flow={FLOW}
    />
  );
}
