import Image from 'next/image';

/* The logo files come from different sources: some are square images with a
   background baked in, others are transparent wordmarks. `boxed` marks the
   first kind, which fill a rounded tile instead of sitting loose in the cell. */
type Partner = { name: string; file: string; boxed?: boolean };

const PARTNERS: Partner[] = [
  { name: 'Office Principles', file: 'office-principles.png', boxed: true },
  { name: 'ianai ERP', file: 'ianai.jpg', boxed: true },
  { name: 'GOSO', file: 'goso.jpg' },
  { name: 'Speexx', file: 'speexx.png', boxed: true },
  { name: 'Shopwave', file: 'shopwave.png', boxed: true },
  { name: 'Bell Recruitment', file: 'bell-recruitment.png' },
  { name: 'Nuvaris AI', file: 'nuvarisai.png' },
  { name: 'The Agency', file: 'theagency.png' },
  { name: 'Scale Hiring', file: 'scalehiring.png' },
  { name: 'Victoria James', file: 'victoria-james.png' },
  { name: 'Adams Limitless', file: 'adamslimitless.png' },
  { name: 'BizBee Funding', file: 'bizbee.jpg' },
  { name: 'Velocity Staffing', file: 'velocity-staffing.png' },
  { name: 'Circular Resourcing', file: 'circular-resourcing.png' },
  { name: 'Insight Cyber Solutions', file: 'insight-cyber.png' },
  { name: 'MIS Support', file: 'mis-support.jpg' },
];

export default function Partners() {
  return (
    <section className="partners-section">
      <p className="partners-label">Companies that partnered with Zutomate</p>

      <div className="partners-grid">
        {PARTNERS.map((p) => (
          <div className="partner-cell" key={p.name}>
            <span className={p.boxed ? 'partner-logo is-boxed' : 'partner-logo'}>
              <Image src={`/assets/logos/${p.file}`} alt={p.name} width={160} height={64} />
            </span>
            <span className="partner-name">{p.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
