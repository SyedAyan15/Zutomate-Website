import type { Metadata } from 'next';
import './styles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RevealObserver from '../components/RevealObserver';

export const metadata: Metadata = {
  title: 'Discover Assessments Case Study | Zutomate',
  description: "How Zutomate built Discover Assessments' outbound infrastructure with automated prospecting, CRM integrations, and personalised email sequences.",
  openGraph: {
    type: 'article',
    url: 'https://zutomate.com/discover-assessments',
    title: 'Discover Assessments Case Study | Zutomate',
    description: "How Zutomate built Discover Assessments' outbound infrastructure with automated prospecting, CRM integrations, and personalised email sequences.",
    images: [{ url: '/og-image.png' }],
    siteName: 'Zutomate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Assessments Case Study | Zutomate',
    description: "How Zutomate built Discover Assessments' outbound infrastructure with automated prospecting, CRM integrations, and personalised email sequences.",
    images: ['/og-image.png'],
  },
};

export default function DiscoverAssessmentsPage() {
  return (
    <>
      <Navbar />

      <header className="cs-detail-hero">
        <div className="cs-client-logo">
          <span className="cs-client-logo-name">Discover Assessments</span>
        </div>

        <h1>Unstuck a stalled sales engine and delivered <em>10+ qualified enterprise leads</em> in month one</h1>

        <div className="cs-headline-metric">
          <div className="cs-hm-accent"></div>
          <div className="cs-hm-body">
            <div className="cs-hm-val">10+ Leads</div>
            <div className="cs-hm-lbl">Mid-Market and Enterprise qualified leads added within the first 30 days of launch</div>
          </div>
        </div>

        <div className="cs-stats-bar">
          <div className="cs-stat">
            <span className="cs-stat-val">10+</span>
            <span className="cs-stat-lbl">Enterprise Leads / Month 1</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-val">2-Ch</span>
            <span className="cs-stat-lbl">Email + LinkedIn</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-val">AI</span>
            <span className="cs-stat-lbl">Personalization + Qualification</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-val">RevOps</span>
            <span className="cs-stat-lbl">Full-Stack Engagement</span>
          </div>
        </div>
      </header>

      <div className="cs-layout">
        <main className="cs-content">

          <section className="reveal">
            <div className="cs-section-tag">Client Overview</div>
            <h2>Who is Discover Assessments?</h2>
            <p>Discover Assessments is a B2B HR Technology platform and the <span className="cs-hl">world&apos;s only Astro-themed evaluation platform</span>, offering game-themed, game-based, and gamified assessments for workforce profiling and pre-employment screening.</p>
            <p>Their platform empowers companies to grow their businesses using innovative profiling techniques, detailed behavioural analysis, and best-in-class support. Rather than static evaluation forms, Discover Assessments transforms the screening experience into something engaging, data-rich, and genuinely insightful for HR teams.</p>
            <div className="cs-about-card">
              <p>Pre-employment screening is how most employers conduct employee evaluations. Discover Assessments&apos; profiling techniques not only streamline the recruitment process but also dramatically increase its effectiveness, giving HR leaders and talent acquisition teams a competitive edge in identifying the right candidates, faster.</p>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">The Situation</div>
            <h2>What brought them to Zutomate?</h2>
            <p>Discover Assessments came to Zutomate with a clear and urgent problem: <span className="cs-hl">sales were stuck</span>. Despite a differentiated product and real demand in the market, they were unable to scale their pipeline and were falling short of year-end revenue targets.</p>
            <p>The team had no structured outreach system in place. No email infrastructure. No data enrichment process. No LinkedIn automation. No CRM workflow to capture and nurture replies. Without a foundation, growth was impossible to engineer regardless of how strong the product was.</p>
            <p>They needed a partner who could step in as a full RevOps function: design the strategy, build the infrastructure, run the execution, and deliver results fast enough to matter for their year-end goals.</p>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">The Challenge</div>
            <h2>What was blocking their growth?</h2>
            <div className="cs-problem-grid">
              <div className="cs-problem-card">
                <div className="cs-problem-num">01</div>
                <h3>Sales Completely Stalled</h3>
                <p>No active outbound motion. The pipeline had stopped growing and year-end targets were increasingly out of reach with each passing month.</p>
              </div>
              <div className="cs-problem-card">
                <div className="cs-problem-num">02</div>
                <h3>No Email Infrastructure</h3>
                <p>No sending domains or inboxes set up. No warm-up process. No ability to reach prospects at scale without risking deliverability damage.</p>
              </div>
              <div className="cs-problem-card">
                <div className="cs-problem-num">03</div>
                <h3>No ICP Segmentation</h3>
                <p>Prospects were not tiered by value or fit. High-worth enterprise targets were treated the same as lower-tier contacts, wasting the highest-leverage opportunities.</p>
              </div>
              <div className="cs-problem-card">
                <div className="cs-problem-num">04</div>
                <h3>No CRM or Pipeline Visibility</h3>
                <p>Positive replies and interested prospects had no structured home. HubSpot was not set up to capture, qualify, or nurture inbound interest automatically.</p>
              </div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Our Approach</div>
            <h2>How Zutomate acted as their RevOps function</h2>

            <div className="cs-steps">
              <div className="cs-step">
                <div className="cs-step-num">1</div>
                <div className="cs-step-body">
                  <h3>ICP Tiering, High-Worth Prospects First</h3>
                  <p>Before touching any tool, we segmented Discover Assessments&apos; total addressable market and tiered prospects by deal value, company size, and strategic fit.</p>
                  <ul>
                    <li>Mid-Market and Enterprise companies identified as Tier 1 targets for LinkedIn (highest-touch channel)</li>
                    <li>Remaining ICP segments routed to email outreach with structured sequencing</li>
                    <li>Apollo used for base data sourcing across both tiers</li>
                    <li>Clay used for enrichment covering firmographics, technographics, and hiring signals</li>
                    <li>ChatGPT deployed for AI-powered lead qualification scoring at ingestion</li>
                  </ul>
                </div>
              </div>

              <div className="cs-step">
                <div className="cs-step-num">2</div>
                <div className="cs-step-body">
                  <h3>Email Infrastructure Built from Zero</h3>
                  <p>We designed and deployed a purpose-built email sending infrastructure capable of reaching large audiences reliably, without landing in spam or damaging their primary domain.</p>
                  <ul>
                    <li>Sending domains and inboxes set up via Zapmail</li>
                    <li>Proper warm-up protocols executed with inbox rotation</li>
                    <li>Deliverability maintained through a structured warm-up cadence before launch</li>
                    <li>Emailbison deployed as the email automation and sequencing engine</li>
                    <li>Sequences built with multi-step follow-up logic per ICP tier</li>
                  </ul>
                </div>
              </div>

              <div className="cs-step">
                <div className="cs-step-num">3</div>
                <div className="cs-step-body">
                  <h3>AI-Powered Email Personalization</h3>
                  <p>Generic outreach doesn&apos;t work in HR Tech. We used Claude API to generate bespoke, context-aware personalization for every prospect.</p>
                  <ul>
                    <li>Claude API integrated directly into the Clay enrichment workflow</li>
                    <li>Each prospect&apos;s company context, hiring activity, and HR signals analyzed</li>
                    <li>Unique opening lines and value propositions written per contact</li>
                    <li>Messaging framed around the specific hiring challenges of each company</li>
                  </ul>
                </div>
              </div>

              <div className="cs-step">
                <div className="cs-step-num">4</div>
                <div className="cs-step-body">
                  <h3>LinkedIn Automation for High-Worth Targets</h3>
                  <p>Mid-Market and Enterprise decision-makers require a more personal touch. We ran a dedicated LinkedIn outreach motion in parallel with email for Tier 1 accounts.</p>
                  <ul>
                    <li>Heyreach deployed for LinkedIn connection requests and message sequences</li>
                    <li>Personalised connection messages aligned to each prospect&apos;s role and company context</li>
                    <li>Follow-up sequences triggered based on connection acceptance and profile views</li>
                    <li>LinkedIn activity coordinated with email sequencing for multi-touch coverage</li>
                  </ul>
                </div>
              </div>

              <div className="cs-step">
                <div className="cs-step-num">5</div>
                <div className="cs-step-body">
                  <h3>Sentiment Analysis and HubSpot CRM Integration</h3>
                  <p>Replies mean nothing if they&apos;re not captured and acted on. We built an automated pipeline from reply to CRM, with AI sentiment analysis filtering the signal from the noise.</p>
                  <ul>
                    <li>Sentiment analysis workflow built inside Clay, classifying replies as positive, neutral, negative, or out-of-office</li>
                    <li>Positive replies automatically pushed into HubSpot as new leads</li>
                    <li>HubSpot pipeline stages configured for structured follow-up</li>
                    <li>SDR task creation triggered on positive reply detection</li>
                    <li>Full attribution from outreach campaign to CRM contact maintained</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Infrastructure</div>
            <h2>The Engine Under the Hood</h2>
            <p>Every layer of the outreach system was purpose-built and connected. Data flows from enrichment through personalization to outreach and back into CRM, automatically.</p>

            <div className="cs-infra-row">
              <div className="cs-infra-card">
                <div className="cs-infra-head">Data Layer</div>
                <ul>
                  <li>Apollo for B2B contact sourcing</li>
                  <li>Clay for enrichment and ICP scoring</li>
                  <li>ChatGPT for lead qualification</li>
                  <li>Tier routing at ingestion</li>
                </ul>
              </div>
              <div className="cs-infra-card">
                <div className="cs-infra-head">Email Infrastructure</div>
                <ul>
                  <li>Zapmail for domains and inboxes</li>
                  <li>Warm-up and rotation protocol</li>
                  <li>Emailbison for automation</li>
                  <li>Multi-step sequences per tier</li>
                </ul>
              </div>
              <div className="cs-infra-card">
                <div className="cs-infra-head">AI Personalization</div>
                <ul>
                  <li>Claude API for email copy</li>
                  <li>Prospect-level context analysis</li>
                  <li>Unique lines per contact</li>
                  <li>Hiring and HR signal framing</li>
                </ul>
              </div>
              <div className="cs-infra-card">
                <div className="cs-infra-head">LinkedIn and CRM</div>
                <ul>
                  <li>Heyreach for LinkedIn automation</li>
                  <li>Clay sentiment analysis on replies</li>
                  <li>Positive replies pushed to HubSpot</li>
                  <li>SDR task creation on detection</li>
                </ul>
              </div>
            </div>

            <h3 style={{marginTop:'2rem',marginBottom:'0.25rem',color:'#ffffff'}}>Outreach Flow</h3>
            <p style={{marginBottom:0}}>How a prospect moves from data source to qualified CRM lead.</p>
            <div className="cs-flow">
              <div className="cs-flow-step">
                <span className="cs-flow-badge">Source</span>
                <div>
                  <h3>Apollo and Clay Enrichment</h3>
                  <p>Prospect sourced from Apollo, enriched with firmographics, technographics, and hiring signals in Clay. ChatGPT qualifies and scores for ICP fit.</p>
                </div>
              </div>
              <div className="cs-flow-step">
                <span className="cs-flow-badge">Tier</span>
                <div>
                  <h3>ICP Tiering and Channel Routing</h3>
                  <p>Tier 1 (Mid-Market / Enterprise) routed to LinkedIn via Heyreach. Remaining ICP routed to email sequences in Emailbison.</p>
                </div>
              </div>
              <div className="cs-flow-step">
                <span className="cs-flow-badge">Personalize</span>
                <div>
                  <h3>Claude API Personalization</h3>
                  <p>Claude API generates unique, context-aware email copy per prospect. No templates, no generic openers.</p>
                </div>
              </div>
              <div className="cs-flow-step">
                <span className="cs-flow-badge">Send</span>
                <div>
                  <h3>Multi-Channel Outreach</h3>
                  <p>Email sequences deploy via Emailbison. LinkedIn sequences run simultaneously via Heyreach for Tier 1 targets.</p>
                </div>
              </div>
              <div className="cs-flow-step">
                <span className="cs-flow-badge">Qualify</span>
                <div>
                  <h3>Sentiment Analysis on Replies</h3>
                  <p>Clay classifies every reply as positive, neutral, negative, or out-of-office. Positive replies are automatically pushed to HubSpot with SDR task creation.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Tech Stack</div>
            <h2>Tools That Powered the System</h2>
            <p>Each tool served a specific function across data enrichment, personalization, outreach, and CRM.</p>
            <div className="cs-logo-stack">
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
                  <rect width="56" height="56" rx="12" fill="#FF7A59"/>
                  <circle cx="28" cy="22" r="6" fill="white" opacity="0.95"/>
                  <circle cx="28" cy="38" r="3.5" fill="white" opacity="0.7"/>
                  <circle cx="14" cy="30" r="3.5" fill="white" opacity="0.7"/>
                  <circle cx="42" cy="30" r="3.5" fill="white" opacity="0.7"/>
                  <line x1="28" y1="28" x2="28" y2="34.5" stroke="white" strokeWidth="2" opacity="0.7"/>
                  <line x1="28" y1="28" x2="14" y2="30" stroke="white" strokeWidth="2" opacity="0.7"/>
                  <line x1="28" y1="28" x2="42" y2="30" stroke="white" strokeWidth="2" opacity="0.7"/>
                </svg>
              </div>
              <div className="cs-logo-item">
                <svg viewBox="0 0 56 56" fill="none">
                  <rect width="56" height="56" rx="12" fill="#0A66C2"/>
                  <rect x="12" y="12" width="10" height="10" rx="2" fill="white" opacity="0.9"/>
                  <rect x="12" y="26" width="10" height="18" rx="2" fill="white" opacity="0.9"/>
                  <rect x="26" y="20" width="18" height="24" rx="2" fill="white" opacity="0.9"/>
                </svg>
              </div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">Results</div>
            <h2>What Discover Assessments Achieved</h2>
            <p>From zero outbound infrastructure to a live, running pipeline engine, delivering qualified enterprise leads within the first 30 days and continuing to build from there.</p>

            <div className="cs-results-banner">
              <div>
                <div className="cs-rb-val">10+</div>
                <div className="cs-rb-lbl">Mid-Market and Enterprise qualified leads added in month one, and continuing to grow</div>
              </div>
              <div className="cs-rb-divider"></div>
              <div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontWeight:600,fontSize:'0.68rem',letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.6)',marginBottom:'8px'}}>Delivered in Month 1</div>
                <div style={{fontSize:'0.92rem',color:'rgba(255,255,255,0.85)',lineHeight:1.65,fontFamily:"'DM Sans',sans-serif",fontWeight:300}}>
                  Email Infra &middot; ICP Tiering &middot; AI Personalization<br />
                  LinkedIn Automation &middot; CRM Pipeline &middot; Sentiment Analysis
                </div>
              </div>
            </div>

            <div className="cs-results-grid">
              <div className="cs-result-card">
                <div className="cs-result-val">Month 1</div>
                <div className="cs-result-lbl">First qualified leads delivered within 30 days of launch</div>
              </div>
              <div className="cs-result-card">
                <div className="cs-result-val">2 Channels</div>
                <div className="cs-result-lbl">Email and LinkedIn running in parallel, coordinated by ICP tier</div>
              </div>
              <div className="cs-result-card">
                <div className="cs-result-val">Auto-CRM</div>
                <div className="cs-result-lbl">Positive replies pushed to HubSpot automatically via sentiment analysis</div>
              </div>
              <div className="cs-result-card">
                <div className="cs-result-val">Enterprise</div>
                <div className="cs-result-lbl">Mid-Market and Enterprise targets prioritised on LinkedIn for highest ROI</div>
              </div>
            </div>

            <div className="cs-quote-block">
              <span className="cs-quote-mark">&ldquo;</span>
              <p className="cs-quote-text">We came to Zutomate with our sales completely stalled. No infrastructure, no pipeline, no clear path to our year-end targets. Within the first month they had built us an entire outbound engine from scratch and delivered over 10 qualified enterprise leads. The system runs automatically, replies flow into our CRM, and our SDRs know exactly who to call next.</p>
              <div className="cs-quote-attr">Discover Assessments Team</div>
            </div>
          </section>

          <section className="reveal">
            <div className="cs-section-tag">In Summary</div>
            <h2>What Zutomate built for Discover Assessments</h2>
            <ul className="cs-summary-list">
              <li>Acted as full RevOps function covering strategy, infrastructure, execution, and pipeline management</li>
              <li>ICP tiered by deal value with Mid-Market and Enterprise routed to LinkedIn, remainder to email</li>
              <li>Email infrastructure built from zero with Zapmail domains, inboxes, and proper warm-up rotation</li>
              <li>Emailbison deployed for multi-step email automation and sequencing</li>
              <li>Claude API integrated for AI-powered personalization with unique copy per prospect</li>
              <li>ChatGPT deployed for lead qualification scoring at data ingestion</li>
              <li>Heyreach powering LinkedIn automation for high-worth Tier 1 targets</li>
              <li>Clay sentiment analysis classifying every reply automatically</li>
              <li>Positive replies pushed to HubSpot with SDR task creation, zero manual work</li>
              <li>10+ qualified Mid-Market and Enterprise leads in month one, and growing</li>
            </ul>
          </section>

        </main>

        <aside className="cs-sidebar">

          <div className="cs-highlight-card">
            <div className="cs-highlight-label">Month 1 Result</div>
            <div className="cs-highlight-val">10+ Enterprise Leads</div>
            <div className="cs-highlight-sub">Mid-Market and Enterprise qualified pipeline added within 30 days of launch</div>
          </div>

          <div className="cs-sidebar-card">
            <div className="cs-sidebar-head">Client Details</div>
            <div className="cs-sidebar-body">
              <div className="cs-meta-row">
                <span className="cs-meta-key">Client</span>
                <span className="cs-meta-val">Discover Assessments</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Industry</span>
                <span className="cs-meta-val">B2B HR Tech</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Engagement</span>
                <span className="cs-meta-val">RevOps (Full-Stack)</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Channels</span>
                <span className="cs-meta-val">Email + LinkedIn</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">Email</span>
                <span className="cs-meta-val">Zapmail + Emailbison</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">LinkedIn</span>
                <span className="cs-meta-val">Heyreach</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">AI</span>
                <span className="cs-meta-val">Claude API + ChatGPT</span>
              </div>
              <div className="cs-meta-row">
                <span className="cs-meta-key">CRM</span>
                <span className="cs-meta-val">HubSpot</span>
              </div>
            </div>
          </div>

          <div className="cs-sidebar-card">
            <div className="cs-sidebar-head">Key Results</div>
            <div className="cs-sidebar-body">
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">10+</div>
                <div className="cs-mini-stat-lbl">Enterprise Leads in Month 1</div>
              </div>
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">2-Channel</div>
                <div className="cs-mini-stat-lbl">Email + LinkedIn Coordinated</div>
              </div>
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">Auto</div>
                <div className="cs-mini-stat-lbl">Replies to HubSpot CRM, zero manual</div>
              </div>
              <div className="cs-mini-stat">
                <div className="cs-mini-stat-val">Full-Stack</div>
                <div className="cs-mini-stat-lbl">Strategy + Build + Execution</div>
              </div>
            </div>
          </div>

          <div className="cs-cta-card">
            <h3>Stuck sales? Let&apos;s fix it.</h3>
            <p>We build the outreach infrastructure, run the execution, and deliver qualified pipeline fast.</p>
            <a href="/contact" className="cs-cta-btn">Book a Strategy Call</a>
          </div>

        </aside>
      </div>

      <RevealObserver />
      <Footer />
    </>
  );
}
