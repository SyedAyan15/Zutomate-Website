import type { Metadata } from 'next';
import './styles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RevealObserver from '../components/RevealObserver';

export const metadata: Metadata = {
  title: 'Shopwave Case Study | Zutomate',
  description: "How Zutomate built Shopwave's outbound engine — Clay-powered prospecting, AI sequences, and automated workflows that booked qualified meetings.",
  openGraph: {
    type: 'article',
    url: 'https://zutomate.com/shopwave',
    title: 'Shopwave Case Study | Zutomate',
    description: "How Zutomate built Shopwave's outbound engine — Clay-powered prospecting, AI sequences, and automated workflows that booked qualified meetings.",
    images: [{ url: '/og-image.png' }],
    siteName: 'Zutomate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopwave Case Study | Zutomate',
    description: "How Zutomate built Shopwave's outbound engine — Clay-powered prospecting, AI sequences, and automated workflows that booked qualified meetings.",
    images: ['/og-image.png'],
  },
};

export default function ShopwavePage() {
  return (
    <>
      <Navbar />

      <header className="cs-detail-hero">
        <div className="cs-client-logo">
          <svg viewBox="0 0 28 28" fill="none">
            <path d="M3 17 C7 9,11 9,14 14 C17 19,21 19,25 11" stroke="rgba(255,255,255,0.85)" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            <path d="M3 21 C7 13,11 13,14 18 C17 23,21 23,25 15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          </svg>
          <span className="cs-client-logo-name">shopwave</span>
        </div>

        <h1><em>Automated Omnichannel</em> B2B Outreach System</h1>

        <div className="cs-stats-bar">
          <div className="cs-stat">
            <span className="cs-stat-val">+20%</span>
            <span className="cs-stat-lbl">More Deals Closed</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-val">1,000+</span>
            <span className="cs-stat-lbl">Emails Sent Per Day</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-val">3</span>
            <span className="cs-stat-lbl">Prospect Tiers Built</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-val">Clay</span>
            <span className="cs-stat-lbl">Primary Data Platform</span>
          </div>
        </div>
      </header>

      <div className="cs-layout">
        <main className="cs-content">

          <section className="reveal">
            <div className="cs-section-tag">Client Overview</div>
            <h2>Who is Shopwave?</h2>
            <p>Shopwave is a B2B retail technology company providing omnichannel software to retailers, brands, and distributors. Their platform unifies in-store, ecommerce, and wholesale operations, giving retail businesses a single source of truth for inventory, orders, and customer data.</p>
            <p>Despite having a strong product, Shopwave struggled to reach highly specific business targets at scale. The right prospects were not being found, the right message was not being delivered, and outreach was happening without the right timing or context.</p>
            <p>They brought in Zutomate to build the infrastructure, intelligence, and automation needed to fix this.</p>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Context</div>
            <h2>The Situation</h2>
            <p>Shopwave was investing in growth but lacked the systems to execute at the level their market opportunity demanded. Sales conversations were happening, but not at the volume or quality needed to build a predictable pipeline.</p>
            <p>The core challenge: they needed to reach a <span className="cs-hl">large, highly segmented audience</span> of retail businesses, with messages tailored to each segment&apos;s specific pain, at a scale no manual team could sustain.</p>
            <p>They needed a system that could identify the right accounts, understand what each prospect cared about, and deliver relevant outreach automatically across both email and LinkedIn.</p>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">The Challenge</div>
            <h2>What was blocking growth?</h2>
            <div className="cs-problem-grid">
              <div className="cs-problem-card">
                <div className="cs-problem-num">01</div>
                <h3>No Targeted Prospecting System</h3>
                <p>Shopwave lacked infrastructure to identify and source highly specific prospect businesses at scale. Outreach was broad, unfocused, and reliant on generic lists.</p>
              </div>
              <div className="cs-problem-card">
                <div className="cs-problem-num">02</div>
                <h3>Missing Trigger Intelligence</h3>
                <p>No mechanism existed to detect buying signals or business trigger events, so the team was constantly missing the ideal window to reach prospects with timely, relevant messaging.</p>
              </div>
              <div className="cs-problem-card">
                <div className="cs-problem-num">03</div>
                <h3>One-Size-Fits-All Messaging</h3>
                <p>Without tiered segmentation or personalization, outreach failed to address the unique pain points of different prospect categories, leading to low conversion.</p>
              </div>
              <div className="cs-problem-card">
                <div className="cs-problem-num">04</div>
                <h3>No Scalable Outreach Infrastructure</h3>
                <p>No email deliverability infrastructure or multi-channel automation to support high-volume, consistent outreach without creating human bottlenecks.</p>
              </div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Our Approach</div>
            <h2>The Zutomate 5-Step GTM System</h2>
            <div className="cs-steps">

              <div className="cs-step">
                <div className="cs-step-num">1</div>
                <div className="cs-step-body">
                  <h3>TAM Analysis &amp; ICP Definition</h3>
                  <p>Before building anything, we mapped Shopwave&apos;s total addressable market and defined their Ideal Customer Profile with precision.</p>
                  <ul>
                    <li>Defined addressable market across retail verticals</li>
                    <li>Mapped company size bands, revenue tiers, and target geographies</li>
                    <li>Built detailed ICP from Shopwave&apos;s best existing accounts</li>
                    <li>Identified firmographic and technographic signals for targeting</li>
                    <li>Determined best outreach channels per segment</li>
                  </ul>
                </div>
              </div>

              <div className="cs-step">
                <div className="cs-step-num">2</div>
                <div className="cs-step-body">
                  <h3>Data Sourcing &amp; Precision Database Construction</h3>
                  <p>Built hyper-targeted prospect databases using Clay, Apollo, LinkedIn Sales Navigator, and Apify, filtered to Shopwave&apos;s exact ICP across all retail verticals.</p>
                  <ul>
                    <li>Multi-source data aggregation for maximum coverage</li>
                    <li>Sector-specific databases with advanced enrichment</li>
                    <li>Negative filters to remove unqualified accounts</li>
                    <li>Email verification and data deduplication</li>
                  </ul>
                </div>
              </div>

              <div className="cs-step">
                <div className="cs-step-num">3</div>
                <div className="cs-step-body">
                  <h3>AI Agent: Trigger Event Collection</h3>
                  <p>Deployed custom AI agents to monitor and collect real-time business trigger events for each prospect, surfacing the exact moment to reach out.</p>
                  <ul>
                    <li>Funding rounds, hiring signals, new store openings</li>
                    <li>Technology stack changes and competitive moves</li>
                    <li>Expansion signals and leadership changes</li>
                  </ul>
                </div>
              </div>

              <div className="cs-step">
                <div className="cs-step-num">4</div>
                <div className="cs-step-body">
                  <h3>Pain Identification &amp; Prospect Tiering</h3>
                  <p>Used AI to map each trigger event to Shopwave-specific pain points, then tiered every prospect by signal strength and ICP fit.</p>
                  <ul>
                    <li><strong style={{color:'rgba(255,255,255,0.88)'}}>Tier 1 (Hot):</strong> Strong signals and perfect ICP fit. High-touch, heavily personalised outreach.</li>
                    <li><strong style={{color:'rgba(255,255,255,0.88)'}}>Tier 2 (Warm):</strong> Partial signals. Personalised but higher-volume sequencing.</li>
                    <li><strong style={{color:'rgba(255,255,255,0.88)'}}>Tier 3 (Cold):</strong> ICP match but no trigger signals. Broad, benefit-led messaging.</li>
                  </ul>
                </div>
              </div>

              <div className="cs-step">
                <div className="cs-step-num">5</div>
                <div className="cs-step-body">
                  <h3>Multi-Channel Outreach Automation</h3>
                  <p>Launched fully automated email and LinkedIn sequences with AI-powered personalization. Built the email infrastructure from scratch to support scale.</p>
                  <ul>
                    <li>1,000+ emails sent per day via purpose-built domain infrastructure</li>
                    <li>Provider split: Google Workspace / Microsoft 365 / SMTP for maximum deliverability</li>
                    <li>LinkedIn connections and InMails running in parallel</li>
                    <li>Bi-weekly inbox rotation and ongoing deliverability monitoring</li>
                    <li>AI-generated personalization at volume, with unique opening lines per prospect</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Tech Stack</div>
            <h2>Tools &amp; Infrastructure Used</h2>
            <p>Three core platforms powered the data, personalization, and delivery layers of this system.</p>
            <div className="cs-logo-stack-icons">
              <div className="cs-logo-item">
                <svg viewBox="0 0 56 56" fill="none">
                  <path d="M6 48 Q6 8 28 8 Q50 8 50 48 Z" fill="#38C0FB"/>
                  <path d="M12 48 Q12 15 28 15 Q44 15 44 48 Z" fill="#F07070"/>
                  <path d="M18 48 Q18 22 28 22 Q38 22 38 48 Z" fill="#F7CC50"/>
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
                  <rect width="56" height="56" rx="10" fill="#1B9BF5"/>
                  <path d="M32 10L20 30H28L24 46L37 25H29L32 10Z" fill="white"/>
                </svg>
              </div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Results</div>
            <h2>What Shopwave Achieved</h2>
            <p>The system went live and delivered consistent, measurable results across their entire outbound motion.</p>

            <div className="cs-results-grid">
              <div className="cs-result-card full">
                <div>
                  <div className="cs-result-val">+20%</div>
                </div>
                <div>
                  <div className="cs-result-lbl" style={{fontSize:'0.95rem',color:'rgba(255,255,255,0.88)',marginBottom:'6px'}}>More deals closed compared to before the system was implemented.</div>
                  <div className="cs-result-lbl">The increase came directly from reaching more of the right prospects, with the right message, at the right time.</div>
                </div>
              </div>
              <div className="cs-result-card">
                <div className="cs-result-val">1,000+</div>
                <div className="cs-result-lbl">Emails sent per day, sustained consistently</div>
              </div>
              <div className="cs-result-card">
                <div className="cs-result-val">2-Ch</div>
                <div className="cs-result-lbl">Email + LinkedIn running simultaneously</div>
              </div>
              <div className="cs-result-card">
                <div className="cs-result-val">3-Tier</div>
                <div className="cs-result-lbl">Segmented prospect system for tailored messaging</div>
              </div>
              <div className="cs-result-card">
                <div className="cs-result-val">Auto</div>
                <div className="cs-result-lbl">Fully automated, no manual outreach required</div>
              </div>
            </div>

            <div className="cs-quote-block">
              <span className="cs-quote-mark">&ldquo;</span>
              <p className="cs-quote-text">They built us a system that could actually find our buyers, understand what they cared about, and reach out with the right message, all on autopilot. We went from scattered outreach to a real pipeline. The results speak for themselves.</p>
              <div className="cs-quote-attr">Shopwave Team</div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">In Summary</div>
            <h2>What Zutomate delivered</h2>
            <ul className="cs-summary-list">
              <li>Full TAM analysis and ICP definition before a single email was sent</li>
              <li>Hyper-targeted prospect databases built in Clay across multiple retail verticals</li>
              <li>AI agent collecting real-time trigger events and identifying prospect pain points</li>
              <li>3-tier prospect segmentation with unique, pain-led messaging per tier</li>
              <li>Purpose-built email infrastructure, 1,000+ emails per day with full deliverability monitoring</li>
              <li>LinkedIn connections and InMails running in parallel with email</li>
              <li>20% more closed deals, delivered through a consistent and fully automated pipeline</li>
            </ul>
          </section>

        </main>

        <aside className="cs-sidebar">

          <div className="cs-sidebar-card">
            <div className="cs-sidebar-head">Client Details</div>
            <div className="cs-sidebar-body">
              <div className="cs-meta-row">
                <span className="cs-meta-key">Client</span>
                <span className="cs-meta-val">Shopwave</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Industry</span>
                <span className="cs-meta-val">B2B Retail Tech / SaaS</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Product</span>
                <span className="cs-meta-val">Omnichannel Retail Software</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Channels</span>
                <span className="cs-meta-val">Email + LinkedIn</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Platform</span>
                <span className="cs-meta-val">Clay + Instantly.ai</span>
              </div>
            </div>
          </div>

          <div className="cs-sidebar-card">
            <div className="cs-sidebar-head">Key Results</div>
            <div className="cs-sidebar-body">
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">+20%</div>
                <div className="cs-mini-stat-lbl">More Deals Closed</div>
              </div>
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">1,000+</div>
                <div className="cs-mini-stat-lbl">Emails Sent Per Day</div>
              </div>
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">3-Tier</div>
                <div className="cs-mini-stat-lbl">Segmented Prospect System</div>
              </div>
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">2-Ch</div>
                <div className="cs-mini-stat-lbl">Email + LinkedIn Outreach</div>
              </div>
            </div>
          </div>

          <div className="cs-cta-card">
            <h3>Want results like Shopwave?</h3>
            <p>We build fully-engineered AI growth systems tailored to your ICP and market.</p>
            <a href="/contact" className="cs-cta-btn">Book a Strategy Call</a>
          </div>

        </aside>
      </div>

      <RevealObserver />
      <Footer />
    </>
  );
}
