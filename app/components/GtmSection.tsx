import fs from 'fs';
import path from 'path';
import FlowCol from './FlowCol';
import AnimatedSectionHeader from './AnimatedSectionHeader';

function readSvg(slug: string): string {
  return fs.readFileSync(
    path.join(process.cwd(), 'app', 'data', 'svgs', `svg_${slug}.html`),
    'utf8'
  );
}

export default function GtmSection() {
  const cols = [
    { slug: 'ai-outbound', title: 'AI Outbound Engine', viewBox: '0 0 320 640' },
    { slug: 'linkedin-growth', title: 'LinkedIn Growth', viewBox: '0 0 320 720' },
    { slug: 'abm-signal', title: 'ABM Signal Engine', viewBox: '0 0 320 680' },
  ];

  return (
    <section className="gtm-section">
      <AnimatedSectionHeader
        heading="GTM Systems"
        sub="Pipeline generation infrastructure — from ICP to booked meetings."
      />
      <div className="gtm-grid">
        {cols.map(c => (
          <FlowCol key={c.slug} title={c.title} viewBox={c.viewBox} svgHtml={readSvg(c.slug)} />
        ))}
      </div>
    </section>
  );
}
