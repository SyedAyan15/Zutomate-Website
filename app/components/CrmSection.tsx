import fs from 'fs';
import path from 'path';
import FlowCol from './FlowCol';

function readSvg(slug: string): string {
  return fs.readFileSync(
    path.join(process.cwd(), 'app', 'data', 'svgs', `svg_${slug}.html`),
    'utf8'
  );
}

export default function CrmSection() {
  const cols = [
    { slug: 'crm-lifecycle', title: 'CRM Lifecycle Engine', viewBox: '0 0 480 768' },
    { slug: 'crm-pipeline', title: 'CRM Pipeline Engine', viewBox: '0 0 480 700' },
  ];

  return (
    <section className="gtm-section">
      <h2 className="gtm-heading">Automated CRM Systems</h2>
      <p className="gtm-sub">CRM hygiene, enrichment pipelines, and lifecycle automation that keep your data clean and reps focused.</p>
      <div className="gtm-grid gtm-grid-2">
        {cols.map(c => (
          <FlowCol key={c.slug} title={c.title} viewBox={c.viewBox} svgHtml={readSvg(c.slug)} />
        ))}
      </div>
    </section>
  );
}
