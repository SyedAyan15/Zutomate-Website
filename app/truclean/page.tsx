import type { Metadata } from 'next';
import './styles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RevealObserver from '../components/RevealObserver';

export const metadata: Metadata = {
  title: 'TruClean Case Study | Zutomate',
  description: 'How Zutomate helped TruClean generate consistent B2B leads with AI-powered prospecting, automated email sequences, and CRM workflows.',
  openGraph: {
    type: 'article',
    url: 'https://zutomate.com/truclean',
    title: 'TruClean Case Study | Zutomate',
    description: 'How Zutomate helped TruClean generate consistent B2B leads with AI-powered prospecting, automated email sequences, and CRM workflows.',
    images: [{ url: '/og-image.png' }],
    siteName: 'Zutomate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TruClean Case Study | Zutomate',
    description: 'How Zutomate helped TruClean generate consistent B2B leads with AI-powered prospecting, automated email sequences, and CRM workflows.',
    images: ['/og-image.png'],
  },
};

export default function TruCleanPage() {
  return (
    <>
      <Navbar />

      <header className="cs-detail-hero">
        <div className="cs-client-logo">
          <div style={{display:'flex',flexDirection:'column',lineHeight:1}}>
            <span className="cs-client-logo-name">TRU CLEAN</span>
            <span className="cs-client-logo-sub">Janitorial Services</span>
          </div>
        </div>

        <h1>Took a janitorial business from zero to <em>10+ qualified leads</em> per month, built from scratch</h1>

        <div className="cs-stats-bar">
          <div className="cs-stat">
            <span className="cs-stat-val">10+</span>
            <span className="cs-stat-lbl">New Leads Per Month</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-val">5+</span>
            <span className="cs-stat-lbl">Data Sources</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-val">AI</span>
            <span className="cs-stat-lbl">Personalised Emails</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-val">Always-On</span>
            <span className="cs-stat-lbl">Running Pipeline</span>
          </div>
        </div>
      </header>

      <div className="cs-layout">
        <main className="cs-content">

          <section className="reveal">
            <div className="cs-section-tag">Client Overview</div>
            <h2>Who is TruClean?</h2>
            <p>TruClean is a professional janitorial services company operating in the United States, providing commercial cleaning solutions to businesses across offices, facilities, and commercial properties.</p>
            <p>Like many service businesses, TruClean&apos;s core strength was in operations. What they lacked was a <span className="cs-hl">structured, scalable system</span> to bring in new clients consistently. Their growth depended on referrals and word of mouth, producing unpredictable revenue with no way to plan or scale.</p>
            <p>They came to Zutomate to solve one problem: build a client acquisition engine that actually works and keeps running.</p>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Context</div>
            <h2>The starting point</h2>
            <p>TruClean was a business with real potential but no outbound motion. No lead generation process, no data infrastructure, no email outreach system, and no way to predictably put new prospects into the pipeline.</p>
            <p>In commercial janitorial services, the buying decision is often made by office managers, facility directors, and operations leads at mid-size companies. These are people who are reachable via cold email when the targeting is right and the message is relevant.</p>
            <p>The opportunity was clear. The system just needed to be built.</p>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">The Challenge</div>
            <h2>What was standing in the way?</h2>
            <div className="cs-problem-grid">
              <div className="cs-problem-card">
                <div className="cs-problem-num">01</div>
                <h3>No Outbound System</h3>
                <p style={{color:'var(--cs-muted)',fontSize:'0.88rem',fontFamily:"'DM Sans',sans-serif",margin:0,lineHeight:1.65}}>All new business came through passive referrals, with no engine driving consistent growth.</p>
              </div>
              <div className="cs-problem-card">
                <div className="cs-problem-num">02</div>
                <h3>No Qualified Lead Data</h3>
                <p style={{color:'var(--cs-muted)',fontSize:'0.88rem',fontFamily:"'DM Sans',sans-serif",margin:0,lineHeight:1.65}}>No prospect list and no reliable source of verified contact data for the right decision-makers.</p>
              </div>
              <div className="cs-problem-card">
                <div className="cs-problem-num">03</div>
                <h3>Generic Outreach Won&apos;t Work</h3>
                <p style={{color:'var(--cs-muted)',fontSize:'0.88rem',fontFamily:"'DM Sans',sans-serif",margin:0,lineHeight:1.65}}>Janitorial is a competitive category. Reaching a busy office manager with a templated email guarantees being ignored.</p>
              </div>
              <div className="cs-problem-card">
                <div className="cs-problem-num">04</div>
                <h3>No Email Infrastructure</h3>
                <p style={{color:'var(--cs-muted)',fontSize:'0.88rem',fontFamily:"'DM Sans',sans-serif",margin:0,lineHeight:1.65}}>No sending domains, no inbox warm-up, no deliverability setup. Sending cold email without infrastructure lands in spam.</p>
              </div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Data Engine</div>
            <h2>Building from multiple credible sources</h2>
            <p>The first step was building a <span className="cs-hl">clean, reliable prospect database</span> by sourcing decision-makers from multiple credible data channels, then running every record through a structured cleanup and enrichment pipeline before it touched any outreach sequence.</p>
            <div className="cs-sources-grid">
              <div className="cs-source-card">
                <div className="cs-source-name">Apollo.io</div>
                <div className="cs-source-desc">B2B contact database with firmographic filters for target industries</div>
              </div>
              <div className="cs-source-card">
                <div className="cs-source-name">LinkedIn</div>
                <div className="cs-source-desc">Decision-maker targeting across office managers, facility directors, and operations leads</div>
              </div>
              <div className="cs-source-card">
                <div className="cs-source-name">Google Maps</div>
                <div className="cs-source-desc">Local business data covering commercial properties and facilities in target areas</div>
              </div>
              <div className="cs-source-card">
                <div className="cs-source-name">Business Directories</div>
                <div className="cs-source-desc">Industry-specific directories and verified company listings</div>
              </div>
              <div className="cs-source-card">
                <div className="cs-source-name">Web Scraping</div>
                <div className="cs-source-desc">Custom scrapers for commercial property listings and facility management companies</div>
              </div>
              <div className="cs-source-card">
                <div className="cs-source-name">Clay Enrichment</div>
                <div className="cs-source-desc">Waterfall enrichment for verified emails, phone numbers, and company context</div>
              </div>
            </div>
            <p style={{marginTop:'1.5rem'}}>Every record from every source passed through a structured <span className="cs-hl">lead cleanup and enrichment pipeline</span>: deduplication, email verification, contact validation, and firmographic enrichment. No raw data ever touched the sending system.</p>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">The Build</div>
            <h2>How the revenue engine was assembled</h2>
            <div className="cs-steps">
              <div className="cs-step">
                <div className="cs-step-num">1</div>
                <div className="cs-step-body">
                  <h3>ICP Definition and Target Segmentation</h3>
                  <p>Before sourcing a single lead, we mapped TruClean&apos;s ideal client profile precisely: which types of businesses, industries, sizes, and locations produce the highest-value contracts.</p>
                  <ul>
                    <li>Commercial property types with the highest cleaning contract value (offices, medical, retail)</li>
                    <li>Company size bands most likely to outsource janitorial services</li>
                    <li>Decision-maker roles: Facility Manager, Office Manager, Operations Director, Property Manager</li>
                    <li>US geographic targeting based on TruClean&apos;s service area</li>
                  </ul>
                </div>
              </div>
              <div className="cs-step">
                <div className="cs-step-num">2</div>
                <div className="cs-step-body">
                  <h3>Multi-Source Data Aggregation and Cleanup</h3>
                  <p>Pulled prospect data from multiple credible sources simultaneously, then processed every record through a rigorous cleanup and enrichment pipeline to ensure only verified, qualified contacts reached the outreach stage.</p>
                  <ul>
                    <li>Sources: Apollo, LinkedIn, Google Maps, business directories, web scraping</li>
                    <li>Deduplication across all sources to eliminate overlap</li>
                    <li>Email verification with invalid and risky addresses removed</li>
                    <li>Clay waterfall enrichment for missing fields: verified emails, job titles, company data</li>
                    <li>ICP qualification scoring applied to each enriched record</li>
                  </ul>
                </div>
              </div>
              <div className="cs-step">
                <div className="cs-step-num">3</div>
                <div className="cs-step-body">
                  <h3>AI-Powered Email Personalisation via Claude</h3>
                  <p>Generic cleaning service emails get deleted instantly. We used Claude to generate unique, context-aware email copy for every prospect, connecting TruClean&apos;s offering to each company&apos;s specific situation.</p>
                  <ul>
                    <li>Claude API integrated into the enrichment workflow in Clay</li>
                    <li>Company context, industry, and location analysed per prospect</li>
                    <li>Unique opening lines written per contact, no templates and no merge tags</li>
                    <li>Value propositions framed around the specific operational pain of each business type</li>
                    <li>Follow-up sequences personalised to match the opener&apos;s context</li>
                  </ul>
                </div>
              </div>
              <div className="cs-step">
                <div className="cs-step-num">4</div>
                <div className="cs-step-body">
                  <h3>Email Infrastructure and Deliverability Setup</h3>
                  <p>Built a purpose-built sending infrastructure to ensure TruClean&apos;s emails reached inboxes at consistent volume without risking their primary domain.</p>
                  <ul>
                    <li>Dedicated sending domains and inboxes configured separately from the primary domain</li>
                    <li>Structured warm-up protocol with progressive send volume ramp-up over time</li>
                    <li>Inbox rotation to maintain sender reputation across high-volume sending</li>
                    <li>SPF, DKIM, and DMARC records properly configured for each domain</li>
                    <li>Deliverability monitoring with real-time adjustments to sending cadence</li>
                  </ul>
                </div>
              </div>
              <div className="cs-step">
                <div className="cs-step-num">5</div>
                <div className="cs-step-body">
                  <h3>Cold Email Sequences and Ongoing Optimisation</h3>
                  <p>Launched fully personalised multi-step cold email sequences targeting TruClean&apos;s ICP, with continuous monitoring, testing, and optimisation to improve reply rates and lead quality over time.</p>
                  <ul>
                    <li>Multi-step sequences: opener, value follow-up, and breakup email</li>
                    <li>A/B testing across subject lines, CTAs, and email angles per segment</li>
                    <li>Reply classification and routing with interested prospects flagged for immediate follow-up</li>
                    <li>Sequence optimisation based on open rates, reply rates, and positive signal patterns</li>
                    <li>Constant data pipeline feeding fresh, verified prospects into active sequences</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">How It Works</div>
            <h2>The Acquisition Pipeline, End to End</h2>
            <p>From raw data across multiple sources to a qualified lead in TruClean&apos;s inbox. Every stage is automated, enriched, and personalised.</p>
            <div className="cs-pipeline">
              <div className="cs-pipe-stage">
                <div className="cs-pipe-label">Source</div>
                <div className="cs-pipe-body">
                  <h3>Multi-Source Data Aggregation</h3>
                  <p>Apollo, LinkedIn, Google Maps, directories, and web scraping feeding a unified prospect pool</p>
                </div>
              </div>
              <div className="cs-pipe-connector"><div className="cs-pipe-connector-line"></div></div>
              <div className="cs-pipe-stage">
                <div className="cs-pipe-label">Clean</div>
                <div className="cs-pipe-body">
                  <h3>Lead Cleanup and Deduplication</h3>
                  <p>Every record deduplicated, email-verified, and validated before entering the pipeline</p>
                </div>
              </div>
              <div className="cs-pipe-connector"><div className="cs-pipe-connector-line"></div></div>
              <div className="cs-pipe-stage">
                <div className="cs-pipe-label">Enrich</div>
                <div className="cs-pipe-body">
                  <h3>Clay Waterfall Enrichment</h3>
                  <p>Firmographics, job titles, verified emails, and company context enriched per contact</p>
                </div>
              </div>
              <div className="cs-pipe-connector"><div className="cs-pipe-connector-line"></div></div>
              <div className="cs-pipe-stage">
                <div className="cs-pipe-label">Personalise</div>
                <div className="cs-pipe-body">
                  <h3>Claude API — Email Copy Generation</h3>
                  <p>Unique, context-aware email openers and value propositions generated per prospect</p>
                </div>
              </div>
              <div className="cs-pipe-connector"><div className="cs-pipe-connector-line"></div></div>
              <div className="cs-pipe-stage">
                <div className="cs-pipe-label">Send</div>
                <div className="cs-pipe-body">
                  <h3>Cold Email Sequences</h3>
                  <p>Multi-step, personalised sequences deployed via dedicated inbox infrastructure</p>
                </div>
              </div>
              <div className="cs-pipe-connector"><div className="cs-pipe-connector-line"></div></div>
              <div className="cs-pipe-stage">
                <div className="cs-pipe-label">Convert</div>
                <div className="cs-pipe-body">
                  <h3>Qualified Lead Delivered</h3>
                  <p>Positive replies identified, classified, and routed to TruClean for follow-up and close</p>
                </div>
              </div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Tech Stack</div>
            <h2>Tools Powering the Engine</h2>
            <div className="cs-logo-stack">
              <div className="cs-logo-item">
                <svg viewBox="0 0 56 56" fill="none">
                  <path d="M8 50 Q8 8 28 6 Q48 8 48 50 Z" fill="#38C0FB" opacity="0.9"/>
                  <path d="M8 50 Q8 22 28 18 Q48 22 48 50 Z" fill="#1A9ED4" opacity="0.7"/>
                  <circle cx="28" cy="32" r="8" fill="white" opacity="0.25"/>
                </svg>
              </div>
              <div className="cs-logo-item">
                <svg viewBox="0 0 56 56" fill="none">
                  <rect width="56" height="56" rx="12" fill="#CC785C"/>
                  <g stroke="rgba(255,230,210,0.92)" strokeWidth="3" strokeLinecap="round">
                    <line x1="28" y1="12" x2="28" y2="44"/>
                    <line x1="12" y1="28" x2="44" y2="28"/>
                    <line x1="16.7" y1="16.7" x2="39.3" y2="39.3"/>
                    <line x1="39.3" y1="16.7" x2="16.7" y2="39.3"/>
                  </g>
                </svg>
              </div>
              <div className="cs-logo-item">
                <svg viewBox="0 0 56 56" fill="none">
                  <rect width="56" height="56" rx="12" fill="#1a1a2e"/>
                  <circle cx="28" cy="28" r="7" fill="#6366f1"/>
                  <ellipse cx="28" cy="28" rx="19" ry="8" stroke="#6366f1" strokeWidth="2" opacity="0.7"/>
                  <ellipse cx="28" cy="28" rx="19" ry="8" stroke="#6366f1" strokeWidth="2" opacity="0.5" transform="rotate(60 28 28)"/>
                  <ellipse cx="28" cy="28" rx="19" ry="8" stroke="#6366f1" strokeWidth="2" opacity="0.5" transform="rotate(120 28 28)"/>
                </svg>
              </div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Results</div>
            <h2>What happened when the engine launched</h2>
            <p>TruClean went from zero outbound to a consistent, running acquisition engine. Qualified leads arriving every month gave the business the predictable growth foundation it had never had before.</p>
            <div className="cs-results-grid">
              <div className="cs-result-card full">
                <div className="cs-result-val">10+</div>
                <div>
                  <div style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontWeight:500,fontSize:'1.05rem',color:'#fff',marginBottom:'4px'}}>New qualified leads delivered monthly</div>
                  <div className="cs-result-lbl">A constant supply of inbound interest, enough to take the business off the ground and keep it growing consistently.</div>
                </div>
              </div>
              <div className="cs-result-card">
                <div className="cs-result-val">5+</div>
                <div className="cs-result-lbl">Credible data channels feeding the prospect pool</div>
              </div>
              <div className="cs-result-card">
                <div className="cs-result-val">100%</div>
                <div className="cs-result-lbl">AI-personalised email copy, zero templates</div>
              </div>
              <div className="cs-result-card">
                <div className="cs-result-val">Always-On</div>
                <div className="cs-result-lbl">Pipeline runs continuously, new prospects entering every week</div>
              </div>
              <div className="cs-result-card">
                <div className="cs-result-val">0</div>
                <div className="cs-result-lbl">Referrals needed. Growth is now systematic and owned.</div>
              </div>
            </div>

            <div className="cs-quote-block">
              <span className="cs-quote-mark">&ldquo;</span>
              <p className="cs-quote-text">Before Zutomate we were depending entirely on referrals, which meant our growth was random. They built us a proper acquisition engine that finds the right prospects, sends them something that actually resonates, and keeps filling our pipeline every single month. It is the foundation our business was missing.</p>
              <div className="cs-quote-attr">TruClean Team</div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">In Summary</div>
            <h2>What Zutomate built for TruClean</h2>
            <ul className="cs-summary-list">
              <li>ICP defined and segmented across industries, company sizes, roles, and geographies</li>
              <li>Multi-source prospect data aggregated from Apollo, LinkedIn, Google Maps, directories, and custom scraping</li>
              <li>Full lead cleanup pipeline with deduplication, email verification, and data validation at scale</li>
              <li>Clay waterfall enrichment for verified emails, job titles, and firmographics per contact</li>
              <li>Claude API integrated for AI-powered email personalisation, unique copy per prospect</li>
              <li>Purpose-built email infrastructure with dedicated domains, inbox warm-up, and rotation</li>
              <li>Multi-step cold email sequences with A/B testing and continuous optimisation</li>
              <li>Always-on pipeline with fresh, verified prospects entering sequences every week</li>
              <li>10+ qualified leads per month, consistent, scalable, and growing</li>
            </ul>
          </section>

        </main>

        <aside className="cs-sidebar">

          <div className="cs-sidebar-card">
            <div className="cs-sidebar-head">Client Details</div>
            <div className="cs-sidebar-body">
              <div className="cs-meta-row">
                <span className="cs-meta-key">Client</span>
                <span className="cs-meta-val">TruClean</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Industry</span>
                <span className="cs-meta-val">Janitorial Services</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Market</span>
                <span className="cs-meta-val">United States</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Channel</span>
                <span className="cs-meta-val">Cold Email</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Data</span>
                <span className="cs-meta-val">Multi-Source + Clay</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">AI</span>
                <span className="cs-meta-val">Claude API</span>
              </div>
            </div>
          </div>

          <div className="cs-sidebar-card">
            <div className="cs-sidebar-head">Key Results</div>
            <div className="cs-sidebar-body">
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">10+</div>
                <div className="cs-mini-stat-lbl">Qualified Leads Per Month</div>
              </div>
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">5+</div>
                <div className="cs-mini-stat-lbl">Credible Data Sources</div>
              </div>
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">Always-On</div>
                <div className="cs-mini-stat-lbl">Pipeline running 24/7</div>
              </div>
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">100% AI</div>
                <div className="cs-mini-stat-lbl">Personalised Email Copy</div>
              </div>
            </div>
          </div>

          <div className="cs-cta-card">
            <h3>Need a client acquisition engine?</h3>
            <p>We build the full system: data, enrichment, AI personalisation, and email infrastructure so leads come to you.</p>
            <a href="/contact" className="cs-cta-btn">Book a Strategy Call</a>
          </div>

        </aside>
      </div>

      <RevealObserver />
      <Footer />
    </>
  );
}
