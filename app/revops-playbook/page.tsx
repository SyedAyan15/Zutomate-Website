import type { Metadata } from 'next';
import Playbook from '../components/playbook/Playbook';
import { playbookSchema } from '../seo/schema';
import { FLOW, STEPS } from './flow';

export const metadata: Metadata = {
  alternates: { canonical: '/revops-playbook/' },
  title: 'RevOps Engine | Zutomate',
  description:
    'The revenue operations layer Zutomate builds — strategy, data hygiene, CRM sync, lead routing and reporting, plus the HubSpot implementation that runs it.',
  openGraph: {
    type: 'website',
    url: 'https://zutomate.com/revops-playbook/',
    title: 'RevOps Engine | Zutomate',
    description:
      'The revenue operations layer Zutomate builds — from strategy to HubSpot implementation, stage by stage.',
    images: [{ url: '/og-image.png' }],
    siteName: 'Zutomate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RevOps Engine | Zutomate',
    description:
      'The revenue operations layer Zutomate builds — from strategy to HubSpot implementation, stage by stage.',
    images: ['/og-image.png'],
  },
};

export default function RevOpsPage() {
  return (
    <Playbook
      schema={playbookSchema('revops', metadata.description ?? '')}
      title="RevOps Engine"
      steps={STEPS}
      flow={FLOW}
      cta="Book a Revenue Diagnosis"
      quote={
        <>
          <p>
            If your business can&rsquo;t run without you, you don&rsquo;t have a people problem, you
            have a system problem.
          </p>
          <p>
            Hiring SDRs into a broken process doesn&rsquo;t fix revenue. Ads don&rsquo;t fix revenue.
            More tools don&rsquo;t fix revenue.
          </p>
          <p>We fix the system first, then install the talent to execute inside it.</p>
        </>
      }
    />
  );
}
