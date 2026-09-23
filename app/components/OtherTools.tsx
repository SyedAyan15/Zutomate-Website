import Image from 'next/image';

/* The wider stack, minus the three platforms featured above. Same logo files
   the case study tech stacks use. */
const OTHER: [string, string, string, string?][] = [
  ['Instantly', 'instantly.png', 'Outbound', 'https://instantly.ai/?via=automation'],
  ['Smartlead', 'smartlead.png', 'Outbound', 'https://smartlead.ai/?via=zain'],
  ['Lemlist', 'lemlist.png', 'Outbound', 'https://get.lemlist.com/vv99g9fqmneu'],
  ['Salesforge', 'salesforge.png', 'Outbound', 'https://salesforge.ai/?via=LIautomation'],
  ['InboxKit', 'inboxkit.jpg', 'Deliverability', 'https://www.inboxkit.com/?aff=Mug7K6nf5WEp'],
  ['HeyReach', 'heyreach.png', 'LinkedIn', 'https://heyreach.io/?via=automations'],
  ['Apollo', 'apollo.png', 'Prospecting', 'https://www.apollo.io/'],
  ['AI Ark', 'aiark.png', 'Sourcing', 'https://www.ai-ark.com/?ref=automation'],
  ['Prospeo', 'prospeo.png', 'Contact data', 'https://prospeo.io/?via=automations'],
  ['LinkedIn', 'linkedin.png', 'Sales Navigator', 'https://www.linkedin.com/sales-solutions/'],
  ['Trigify', 'trigify.png', 'Intent signals', 'https://trigify.io/'],
  ['Jungler', 'jungler.webp', 'Engagement signals', 'https://www.jungler.ai/'],
  ['RB2B', 'rb2b.png', 'Visitor ID', 'https://www.rb2b.com/'],
  ['Common Room', 'commonroom.png', 'Signals', 'https://www.commonroom.io/'],
  ['Salesforce', 'salesforce.png', 'CRM', 'https://www.salesforce.com/'],
  ['Attio', 'attio.png', 'CRM', 'https://attio.com/'],
  ['Nooks', 'nooks.png', 'Dialler', 'https://www.nooks.ai/'],
  ['n8n', 'n8n.png', 'Automation', 'https://n8n.io/'],
  ['Make', 'make.png', 'Automation', 'https://www.make.com/en'],
  ['Zapier', 'zapier.png', 'Automation', 'https://zapier.com/'],
  ['ChatGPT', 'chatgpt.png', 'AI', 'https://chatgpt.com/'],
  ['Gemini', 'gemini.png', 'AI', 'https://gemini.google.com/'],
  ['Grok', 'grok.png', 'AI', 'https://grok.com/'],
  ['Perplexity', 'perplexity.png', 'AI', 'https://www.perplexity.ai/'],
  ['Pinecone', 'pinecone.png', 'Vector search', 'https://www.pinecone.io/'],
  ['Supabase', 'supabase.png', 'Database', 'https://supabase.com/'],
  ['Notion', 'notion.png', 'Docs', 'https://www.notion.com/'],
  ['Figma', 'figma.png', 'Design', 'https://www.figma.com/'],
  ['Miro', 'miro.png', 'Planning', 'https://miro.com/'],
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
        {OTHER.map(([name, file, kind, href]) => {
          const Tile = href ? 'a' : 'div';
          return (
          <Tile
            className={href ? 'otool otool--link' : 'otool'}
            key={name}
            {...(href ? { href, target: '_blank', rel: href.includes('via=') || href.includes('aff=') || href.includes('ref=') || href.includes('get.lemlist.com') ? 'noopener noreferrer sponsored' : 'noopener noreferrer' } : {})}
          >
            <span className="otool-chip">
              <Image src={`/assets/tools/${file}`} alt={name} width={32} height={32} />
            </span>
            <span className="otool-text">
              <span className="otool-name">{name}</span>
              <span className="otool-kind">{kind}</span>
            </span>
          </Tile>
          );
        })}
      </div>
    </section>
  );
}
