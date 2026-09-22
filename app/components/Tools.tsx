import Image from 'next/image';

/* The platforms our systems are actually built on. Logos live in
   /public/assets/tools, the same files the case study stacks use. */
type Tool = { name: string; file: string; label: string; body: string };

const TOOLS: Tool[] = [
  {
    name: 'Clay',
    file: 'clay.png',
    label: 'Clay engineering',
    body: 'Waterfall enrichment, scoring and the tables that feed every campaign, built and maintained inside your workspace.',
  },
  {
    name: 'Claude',
    file: 'claude.png',
    label: 'Claude for GTM',
    body: 'Research, qualification and messaging written against enriched data, so personalisation holds up at volume.',
  },
  {
    name: 'HubSpot',
    file: 'hubspot.png',
    label: 'HubSpot RevOps',
    body: 'Lifecycle stages, pipeline structure, routing and scoring, with reporting that reflects what is actually in play.',
  },
];

export default function Tools() {
  return (
    <section className="tools-section" id="tools">
      <div className="tools-head">
        <p className="tools-label">The tools we go deep on</p>
        <h2 className="tools-heading">Three platforms we have built deep expertise around</h2>
        <p className="tools-sub">
          These are not the only tools we work in. They are the ones our systems are built on.
        </p>
      </div>

      <div className="tools-grid">
        {TOOLS.map((t) => (
          <article className="tool-card" key={t.name}>
            <span className="tool-chip">
              <Image src={`/assets/tools/${t.file}`} alt={t.name} width={40} height={40} />
            </span>
            <p className="tool-kicker">{t.label}</p>
            <h3 className="tool-name">{t.name}</h3>
            <p className="tool-body">{t.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
