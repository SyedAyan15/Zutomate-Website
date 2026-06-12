'use client';
import { FadeUp } from './Motion';

export default function ServicesIntro() {
  return (
    <section id="services" className="services-section">
      <FadeUp><div className="services-label">Services</div></FadeUp>
      <FadeUp delay={0.08}><h2 className="services-heading">What Zutomate Builds</h2></FadeUp>
      <FadeUp delay={0.16}><p className="services-sub">We embed AI systems directly into your operations, so your team owns and scales them.</p></FadeUp>
    </section>
  );
}
