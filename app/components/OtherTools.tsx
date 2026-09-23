import Image from 'next/image';

/* The wider stack, minus the three platforms featured above. Same logo files
   the case study tech stacks use. */
const OTHER: [string, string, string][] = [
  ['Instantly', 'instantly.png', 'Outbound'],
  ['Smartlead', 'smartlead.png', 'Outbound'],
  ['Lemlist', 'lemlist.png', 'Outbound'],
  ['Salesforge', 'salesforge.png', 'Outbound'],
  ['HeyReach', 'heyreach.png', 'LinkedIn'],
  ['Apollo', 'apollo.png', 'Prospecting'],
  ['AI Ark', 'aiark.png', 'Sourcing'],
  ['Prospeo', 'prospeo.png', 'Contact data'],
  ['LinkedIn', 'linkedin.png', 'Sales Navigator'],
  ['Trigify', 'trigify.png', 'Intent signals'],
  ['Jungler', 'jungler.webp', 'Engagement signals'],
  ['RB2B', 'rb2b.png', 'Visitor ID'],
  ['Common Room', 'commonroom.png', 'Signals'],
  ['Salesforce', 'salesforce.png', 'CRM'],
  ['Attio', 'attio.png', 'CRM'],
  ['Nooks', 'nooks.png', 'Dialler'],
  ['n8n', 'n8n.png', 'Automation'],
  ['Make', 'make.png', 'Automation'],
  ['Zapier', 'zapier.png', 'Automation'],
  ['ChatGPT', 'chatgpt.png', 'AI'],
  ['Gemini', 'gemini.png', 'AI'],
  ['Grok', 'grok.png', 'AI'],
  ['Perplexity', 'perplexity.png', 'AI'],
  ['Pinecone', 'pinecone.png', 'Vector search'],
  ['Supabase', 'supabase.png', 'Database'],
  ['Notion', 'notion.png', 'Docs'],
  ['Figma', 'figma.png', 'Design'],
  ['Miro', 'miro.png', 'Planning'],
];

export default function OtherTools() {
  return (
    <section className="otools-section">
      <div className="otools-head">
        <h2 className="otools-heading">The other tools we know and use</h2>
        <p className="otools-sub">
          We work across the wider GTM stack and pick the tool that fits the job, rather than
          forcing every problem through the same one.
        </p>
      </div>

      <div className="otools-grid">
        {OTHER.map(([name, file, kind]) => (
          <div className="otool" key={name}>
            <span className="otool-chip">
              <Image src={`/assets/tools/${file}`} alt={name} width={32} height={32} />
            </span>
            <span className="otool-text">
              <span className="otool-name">{name}</span>
              <span className="otool-kind">{kind}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
