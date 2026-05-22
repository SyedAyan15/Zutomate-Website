import fs from 'fs';
import path from 'path';
import FlowCol from './FlowCol';

function readSvg(slug: string): string {
  return fs.readFileSync(
    path.join(process.cwd(), 'app', 'data', 'svgs', `svg_${slug}.html`),
    'utf8'
  );
}

export default function AiSection() {
  const cols = [
    { slug: 'ai-rag', title: 'AI RAG Agent', viewBox: '0 0 480 790', svgStyle: { maxWidth: '460px', margin: '0 auto' } },
    { slug: 'lead-qualification', title: 'Lead Qualification Agent', viewBox: '0 0 480 700', svgStyle: { maxWidth: '440px', margin: '0 auto' } },
  ];

  return (
    <section className="gtm-section" id="ai-systems">
      <h2 className="gtm-heading">AI Agent Systems</h2>
      <p className="gtm-sub">Autonomous agents that research, qualify, and engage accounts — without human input.</p>
      <div className="gtm-grid gtm-grid-2">
        {cols.map(c => (
          <FlowCol key={c.slug} title={c.title} viewBox={c.viewBox} svgHtml={readSvg(c.slug)} svgStyle={c.svgStyle} />
        ))}
      </div>
    </section>
  );
}
