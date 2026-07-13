'use client';
import dynamic from 'next/dynamic';
import { FadeUp } from './Motion';

const GlobeCanvas = dynamic(() => import('./GlobeCanvas'), {
  ssr: false,
  loading: () => <div style={{ height: '620px' }} />,
});

export default function GlobeSection() {
  return (
    <section className="globe-section">
      <FadeUp>
        <div className="globe-label">TECH ECOSYSTEM</div>
      </FadeUp>
      <FadeUp delay={0.08}>
        <h2 className="globe-heading">
          Powered by tools <span className="accent">built for scale</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.14}>
        <p className="globe-sub">
          We orchestrate your entire GTM stack into one unified growth system.
        </p>
      </FadeUp>
      <GlobeCanvas />
    </section>
  );
}
