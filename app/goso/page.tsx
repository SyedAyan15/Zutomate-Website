import type { Metadata } from 'next';
import './styles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RevealObserver from '../components/RevealObserver';

export const metadata: Metadata = {
  title: 'Goso Case Study | Zutomate',
  description: 'How Zutomate helped Goso scale B2B pipeline with a Clay-powered GTM system, AI-personalised outreach, and automated lead qualification.',
  openGraph: {
    type: 'article',
    url: 'https://zutomate.com/goso',
    title: 'Goso Case Study | Zutomate',
    description: 'How Zutomate helped Goso scale B2B pipeline with a Clay-powered GTM system, AI-personalised outreach, and automated lead qualification.',
    images: [{ url: '/og-image.png' }],
    siteName: 'Zutomate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goso Case Study | Zutomate',
    description: 'How Zutomate helped Goso scale B2B pipeline with a Clay-powered GTM system, AI-personalised outreach, and automated lead qualification.',
    images: ['/og-image.png'],
  },
};

export default function GosoPage() {
  return (
    <>
      <Navbar />

      <header className="cs-detail-hero">
        <div className="cs-client-logo">
          <span className="cs-client-logo-name">GOSO</span>
        </div>

        <h1>From <em>$20K</em> to <em>$100K ARR</em> with a full revenue engine built from scratch</h1>

        <div className="cs-mrr-banner">
          <div className="cs-mrr-from">
            <div className="cs-mrr-label">Starting ARR</div>
            <div className="cs-mrr-val">$20K</div>
          </div>
          <div className="cs-mrr-to">
            <div className="cs-mrr-label">Achieved ARR</div>
            <div className="cs-mrr-val">$100K</div>
          </div>
        </div>

        <div className="cs-stats-bar">
          <div className="cs-stat">
            <span className="cs-stat-val">5x</span>
            <span className="cs-stat-lbl">ARR Growth</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-val">7+</span>
            <span className="cs-stat-lbl">Lead Sources</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-val">n8n</span>
            <span className="cs-stat-lbl">Automation Core</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-val">GHL</span>
            <span className="cs-stat-lbl">CRM + Nurture</span>
          </div>
        </div>
      </header>

      <div className="cs-layout">
        <main className="cs-content">

          <section className="reveal">
            <div className="cs-section-tag">Client Overview</div>
            <h2>Who is Goso?</h2>
            <p>Goso is a B2B marketing platform built to help brands grow their presence across social media channels. Their product helps businesses build consistent, high-impact social strategies that turn social platforms into measurable revenue channels.</p>
            <p>With a strong product and a clear market, Goso had the foundations for serious growth. What they lacked was the infrastructure to find, reach, and convert the right clients at scale.</p>
            <p>They brought Zutomate in to craft a strategy and build a complete revenue engine designed to scale their business from the ground up.</p>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Context</div>
            <h2>The Situation</h2>
            <p>At $20K ARR, Goso had product-market fit but growth was stalling. Their outreach was ad hoc, lead data was fragmented across platforms, and there was no structured system to consistently convert prospects into paying clients.</p>
            <p>Scaling required more than hustle. They needed a <span className="cs-hl">complete revenue infrastructure</span>: a lead engine sourcing and enriching prospects from multiple channels, an AI-powered personalization layer, and a CRM that could turn pipeline into closed revenue automatically.</p>
            <p>The goal was to eliminate the dependency on manual effort and build something that compounds over time.</p>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">The Challenge</div>
            <h2>What was holding Goso back?</h2>
            <div className="cs-problem-grid">
              <div className="cs-problem-card">
                <div className="cs-problem-num">01</div>
                <h3>Fragmented Lead Sources</h3>
                <p>Leads were scattered across LinkedIn, Instagram, events, and various tools, with no unified system to aggregate, clean, and activate them.</p>
              </div>
              <div className="cs-problem-card">
                <div className="cs-problem-num">02</div>
                <h3>No Personalization at Scale</h3>
                <p>Outreach was generic and manual. No mechanism existed to tailor messaging to each prospect&apos;s context, platform presence, or specific pain point.</p>
              </div>
              <div className="cs-problem-card">
                <div className="cs-problem-num">03</div>
                <h3>Missing CRM and Nurture Infrastructure</h3>
                <p>No CRM was in place to manage the pipeline. Leads fell through the cracks with no follow-up sequences or structured nurture flows.</p>
              </div>
              <div className="cs-problem-card">
                <div className="cs-problem-num">04</div>
                <h3>No Repeatable Revenue System</h3>
                <p>Growth depended on individual effort rather than a system. There was no engine that could generate pipeline consistently without manual input.</p>
              </div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Data Engine</div>
            <h2>Building the Lead Pipeline</h2>
            <p>The foundation of the system was a <span className="cs-hl">multi-source lead pipeline</span>, scraping, sourcing, and enriching prospects from across the web into a single, constantly-running engine built on n8n.</p>

            <div className="cs-sources-grid">
              <div className="cs-source-card">
                <div className="cs-source-name">LinkedIn</div>
                <div className="cs-source-desc">Profile scraping, decision-maker targeting, company signals</div>
              </div>
              <div className="cs-source-card">
                <div className="cs-source-name">Instagram</div>
                <div className="cs-source-desc">Brand presence data, follower signals, engagement metrics</div>
              </div>
              <div className="cs-source-card">
                <div className="cs-source-name">Event Sources</div>
                <div className="cs-source-desc">Industry events, conferences, speaker lists, attendee data</div>
              </div>
              <div className="cs-source-card">
                <div className="cs-source-name">Apollo.io</div>
                <div className="cs-source-desc">B2B contact database, firmographic enrichment</div>
              </div>
              <div className="cs-source-card">
                <div className="cs-source-name">Apify</div>
                <div className="cs-source-desc">Custom web scraping for platform-specific data</div>
              </div>
              <div className="cs-source-card">
                <div className="cs-source-name">PhantomBuster</div>
                <div className="cs-source-desc">Automated LinkedIn and social data extraction at scale</div>
              </div>
            </div>

            <p style={{marginTop:'1.5rem'}}>All sources were aggregated, deduplicated, cleaned, and enriched in real time through n8n automation workflows, feeding a constantly-updated, high-quality prospect database that required zero manual upkeep.</p>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Our Approach</div>
            <h2>How Zutomate Built the Revenue Engine</h2>

            <div className="cs-steps">
              <div className="cs-step">
                <div className="cs-step-num">1</div>
                <div className="cs-step-body">
                  <h3>Strategy and ICP Definition</h3>
                  <p>Before touching any tool, we built the strategy. We defined Goso&apos;s ICP, mapped the addressable market, and designed the targeting framework that all downstream systems would execute against.</p>
                  <ul>
                    <li>Ideal Customer Profile defined by company type, size, and social presence</li>
                    <li>Segment prioritisation, highest-value verticals targeted first</li>
                    <li>Messaging strategy aligned to each segment&apos;s social pain points</li>
                    <li>Channel strategy mapped to where Goso&apos;s buyers spend time</li>
                  </ul>
                </div>
              </div>

              <div className="cs-step">
                <div className="cs-step-num">2</div>
                <div className="cs-step-body">
                  <h3>Multi-Source Lead Pipeline via n8n</h3>
                  <p>Built a fully automated, always-on lead pipeline using n8n as the orchestration core, pulling from 7+ sources, enriching every record, and delivering clean, qualified leads continuously.</p>
                  <ul>
                    <li>LinkedIn, Instagram, Events, Apollo, Apify, PhantomBuster integrated</li>
                    <li>Automated deduplication, validation, and enrichment workflows</li>
                    <li>ICP scoring applied at ingestion, only qualified leads enter the pipeline</li>
                    <li>Zero manual data work required after setup</li>
                  </ul>
                </div>
              </div>

              <div className="cs-step">
                <div className="cs-step-num">3</div>
                <div className="cs-step-body">
                  <h3>AI Personalization with Claude</h3>
                  <p>Deployed Claude as the personalization engine, analyzing each prospect&apos;s social presence, content, and brand profile to generate tailored outreach that felt hand-written.</p>
                  <ul>
                    <li>Prospect&apos;s social activity, tone, and positioning analyzed per contact</li>
                    <li>Custom opening lines and value propositions generated at scale</li>
                    <li>Messaging dynamically adapted per segment and pain tier</li>
                  </ul>
                </div>
              </div>

              <div className="cs-step">
                <div className="cs-step-num">4</div>
                <div className="cs-step-body">
                  <h3>Email Automation via Smartlead</h3>
                  <p>Deployed Smartlead as the email outreach engine, running personalized sequences at volume with full deliverability infrastructure to ensure inbox placement.</p>
                  <ul>
                    <li>Multi-step sequences with AI-personalized first lines per contact</li>
                    <li>Inbox warm-up and rotation for sustained deliverability</li>
                    <li>A/B testing across subject lines, CTAs, and value propositions</li>
                    <li>Real-time performance monitoring and sequence optimization</li>
                  </ul>
                </div>
              </div>

              <div className="cs-step">
                <div className="cs-step-num">5</div>
                <div className="cs-step-body">
                  <h3>GoHighLevel CRM and Lead Nurture Setup</h3>
                  <p>Built Goso&apos;s entire CRM infrastructure from scratch inside GoHighLevel, with automated pipelines, nurture sequences, and SDR workflows to convert pipeline into closed revenue.</p>
                  <ul>
                    <li>Full CRM setup with pipelines, stages, and deal tracking</li>
                    <li>Automated lead nurture sequences triggered by behaviour</li>
                    <li>SMS and email follow-up flows for hot and warm prospects</li>
                    <li>SDR task creation and notification workflows</li>
                    <li>Pipeline reporting and conversion tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Tech Stack</div>
            <h2>Tools That Powered It</h2>
            <p>Four core platforms formed the automation, personalization, outreach, and CRM layers of this system.</p>
            <div className="cs-logo-stack">
              <div className="cs-logo-item">
                <svg viewBox="0 0 56 56" fill="none">
                  <rect width="56" height="56" rx="12" fill="#EA4B71"/>
                  <circle cx="17" cy="28" r="7" fill="white" opacity="0.95"/>
                  <line x1="24" y1="28" x2="32" y2="28" stroke="white" strokeWidth="2.5"/>
                  <circle cx="39" cy="28" r="7" fill="white" opacity="0.95"/>
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
                  <rect width="56" height="56" rx="12" fill="#18181B"/>
                  <path d="M30 10L18 30H26L22 46L38 24H30L30 10Z" fill="#3B82F6"/>
                </svg>
              </div>
              <div className="cs-logo-item">
                <svg viewBox="0 0 56 56" fill="none">
                  <rect width="56" height="56" rx="12" fill="#0D9488"/>
                  <path d="M28 12C19.2 12 12 19.2 12 28C12 36.8 19.2 44 28 44C36.8 44 44 36.8 44 28H36C36 32.4 32.4 36 28 36C23.6 36 20 32.4 20 28C20 23.6 23.6 20 28 20V12Z" fill="white" opacity="0.9"/>
                </svg>
              </div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Results</div>
            <h2>What Goso Achieved</h2>
            <p>The system delivered a scalable, compounding revenue engine that grew Goso&apos;s ARR 5x and keeps running without manual effort.</p>

            <div className="cs-results-hero">
              <div className="cs-results-hero-top">
                <div>
                  <div className="cs-results-big-val">5x</div>
                  <div className="cs-results-big-lbl">ARR growth from $20K to $100K per month</div>
                </div>
                <div style={{borderLeft:'1px solid rgba(255,255,255,0.25)',paddingLeft:'2.5rem'}}>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontWeight:600,fontSize:'0.68rem',letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.6)',marginBottom:'8px'}}>Built and Delivered</div>
                  <div style={{fontSize:'0.92rem',color:'rgba(255,255,255,0.85)',lineHeight:1.6,fontFamily:"'DM Sans',sans-serif",fontWeight:300}}>
                    Strategy &middot; Lead Engine &middot; AI Personalization<br />
                    Email Infrastructure &middot; CRM &middot; Nurture Flows
                  </div>
                </div>
              </div>
              <div className="cs-results-hero-bottom">
                <div className="cs-result-cell">
                  <div className="cs-result-val">$20K&rarr;$100K</div>
                  <div className="cs-result-lbl">ARR in months</div>
                </div>
                <div className="cs-result-cell">
                  <div className="cs-result-val">7+</div>
                  <div className="cs-result-lbl">Live lead sources</div>
                </div>
                <div className="cs-result-cell">
                  <div className="cs-result-val">Always-On</div>
                  <div className="cs-result-lbl">Pipeline running 24/7</div>
                </div>
                <div className="cs-result-cell">
                  <div className="cs-result-val">Full-Stack</div>
                  <div className="cs-result-lbl">CRM + outreach + nurture</div>
                </div>
              </div>
            </div>

            <div className="cs-quote-block">
              <span className="cs-quote-mark">&ldquo;</span>
              <p className="cs-quote-text">Zutomate didn&apos;t just build us a lead gen system. They built us a revenue engine. From the strategy to the automation to the CRM, every piece was designed to work together. We went from chasing leads manually to having a system that fills our pipeline while we focus on closing deals.</p>
              <div className="cs-quote-attr">Goso Team</div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">In Summary</div>
            <h2>What Zutomate built for Goso</h2>
            <ul className="cs-summary-list">
              <li>Full GTM strategy with ICP definition, segments, messaging framework, and channel prioritisation</li>
              <li>Multi-source lead pipeline aggregating 7+ channels via n8n automation</li>
              <li>AI-powered outreach personalization at scale using Claude</li>
              <li>Smartlead email infrastructure with warm-up, rotation, and A/B testing</li>
              <li>Full GoHighLevel CRM setup with pipelines, deal tracking, and reporting</li>
              <li>Automated lead nurture sequences and SDR task workflows in GHL</li>
              <li>Always-on pipeline engine that runs without manual intervention</li>
              <li>5x ARR growth from $20K to $100K per month</li>
            </ul>
          </section>

        </main>

        <aside className="cs-sidebar">

          <div className="cs-mrr-mini">
            <div className="cs-mrr-mini-label">ARR Growth</div>
            <div className="cs-mrr-mini-row">
              <span className="cs-mrr-mini-from">$20K</span>
              <span className="cs-mrr-mini-arrow">&#8594;</span>
              <span className="cs-mrr-mini-to">$100K</span>
            </div>
          </div>

          <div className="cs-sidebar-card">
            <div className="cs-sidebar-head">Client Details</div>
            <div className="cs-sidebar-body">
              <div className="cs-meta-row">
                <span className="cs-meta-key">Client</span>
                <span className="cs-meta-val">Goso</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Industry</span>
                <span className="cs-meta-val">B2B Social Marketing</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Channels</span>
                <span className="cs-meta-val">Email + LinkedIn + Instagram</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Automation</span>
                <span className="cs-meta-val">n8n</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Email</span>
                <span className="cs-meta-val">Smartlead</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">CRM</span>
                <span className="cs-meta-val">GoHighLevel</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">AI</span>
                <span className="cs-meta-val">Claude</span>
              </div>
            </div>
          </div>

          <div className="cs-sidebar-card">
            <div className="cs-sidebar-head">Key Results</div>
            <div className="cs-sidebar-body">
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">5x</div>
                <div className="cs-mini-stat-lbl">ARR Growth ($20K to $100K)</div>
              </div>
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">7+</div>
                <div className="cs-mini-stat-lbl">Integrated Lead Sources</div>
              </div>
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">24/7</div>
                <div className="cs-mini-stat-lbl">Automated Pipeline Engine</div>
              </div>
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">Full-Stack</div>
                <div className="cs-mini-stat-lbl">Strategy + Build + CRM</div>
              </div>
            </div>
          </div>

          <div className="cs-cta-card">
            <h3>Ready to scale your ARR?</h3>
            <p>We build complete revenue engines covering strategy, data, outreach, and CRM, tailored to your business.</p>
            <a href="/contact" className="cs-cta-btn">Book a Strategy Call</a>
          </div>

        </aside>
      </div>

      <RevealObserver />
      <Footer />
    </>
  );
}
