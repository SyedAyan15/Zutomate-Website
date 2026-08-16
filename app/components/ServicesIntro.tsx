'use client';
import { FadeUp } from './Motion';

export default function ServicesIntro() {
  return (
    <section id="services" className="services-section">
      <FadeUp><div className="services-label">Services</div></FadeUp>
      <FadeUp delay={0.08}>
        <p className="services-sub">
          We engineer growth across three core GTM pillars:{' '}
          <span className="services-sub-em">Inbound, Outbound &amp; RevOps</span>
        </p>
      </FadeUp>
    </section>
  );
}
