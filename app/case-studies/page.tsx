import type { Metadata } from 'next';
import './styles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Case Studies | Zutomate',
  description: 'Real results from Zutomate\'s AI-powered GTM systems — see how B2B teams built predictable pipeline with outbound automation and AI agents.',
  openGraph: {
    type: 'website',
    url: 'https://zutomate.com/case-studies',
    title: 'Case Studies | Zutomate',
    description: 'Real results from Zutomate\'s AI-powered GTM systems — see how B2B teams built predictable pipeline with outbound automation and AI agents.',
    images: [{ url: '/og-image.png' }],
    siteName: 'Zutomate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Zutomate',
    description: 'Real results from Zutomate\'s AI-powered GTM systems — see how B2B teams built predictable pipeline with outbound automation and AI agents.',
    images: ['/og-image.png'],
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />

      <div className="cs-hero">
        <div className="badge"><span className="badge-text">Case Studies</span></div>
        <h1>Results we have <span className="accent">driven</span></h1>
        <p>Real outcomes for B2B teams using Zutomate AI outbound and GTM systems.</p>
      </div>

      <div className="cs-list">

        <a href="/shopwave" className="cs-hcard">
          <div className="cs-hcard-left">
            <div className="cs-hcard-logo">
              <svg viewBox="0 0 28 28" fill="none" style={{ width: '16px', height: '16px', flexShrink: 0 }}>
                <path d="M3 17 C7 9,11 9,14 14 C17 19,21 19,25 11" stroke="rgba(255,255,255,0.85)" strokeWidth="2.8" strokeLinecap="round" fill="none" />
                <path d="M3 21 C7 13,11 13,14 18 C17 23,21 23,25 15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
              </svg>
              <span className="cs-hcard-company">shopwave</span>
            </div>
            <span className="cs-hcard-tag">Cold Email + LinkedIn</span>
          </div>
          <div className="cs-hcard-mid">
            <div className="cs-hcard-headline">Automated Omnichannel B2B Outreach System</div>
            <div className="cs-hcard-desc">Built a fully automated omnichannel outreach system for a B2B retail tech company. 1,000+ emails per day, LinkedIn in parallel, 3-tier AI personalization by signal strength.</div>
          </div>
          <div className="cs-hcard-right">
            <div className="cs-hcard-metrics">
              <div className="cs-hcard-metric">
                <div className="cs-hcard-metric-val">+20%</div>
                <div className="cs-hcard-metric-lbl">Deals closed</div>
              </div>
              <div className="cs-hcard-metric">
                <div className="cs-hcard-metric-val">1k+</div>
                <div className="cs-hcard-metric-lbl">Emails / day</div>
              </div>
              <div className="cs-hcard-metric">
                <div className="cs-hcard-metric-val">3-Tier</div>
                <div className="cs-hcard-metric-lbl">Prospect system</div>
              </div>
            </div>
            <span className="cs-hcard-cta">Read case study &#8594;</span>
          </div>
        </a>

        <a href="/goso" className="cs-hcard">
          <div className="cs-hcard-left">
            <div className="cs-hcard-logo">
              <span className="cs-hcard-company" style={{ fontFamily: "'Black Han Sans', sans-serif", fontSize: '1.1rem', letterSpacing: '0.5px' }}>GOSO</span>
            </div>
            <span className="cs-hcard-tag">Full Revenue Engine</span>
          </div>
          <div className="cs-hcard-mid">
            <div className="cs-hcard-headline">From $20K to $100K MRR with a revenue engine built from scratch</div>
            <div className="cs-hcard-desc">Built the complete GTM infrastructure for a B2B social marketing platform. Multi-source lead pipeline via n8n, Claude AI personalization, Smartlead email, and full GoHighLevel CRM setup.</div>
          </div>
          <div className="cs-hcard-right">
            <div className="cs-hcard-metrics">
              <div className="cs-hcard-metric">
                <div className="cs-hcard-metric-val">5x</div>
                <div className="cs-hcard-metric-lbl">MRR growth</div>
              </div>
              <div className="cs-hcard-metric">
                <div className="cs-hcard-metric-val">7+</div>
                <div className="cs-hcard-metric-lbl">Lead sources</div>
              </div>
              <div className="cs-hcard-metric">
                <div className="cs-hcard-metric-val">24/7</div>
                <div className="cs-hcard-metric-lbl">Automated pipeline</div>
              </div>
            </div>
            <span className="cs-hcard-cta">Read case study &#8594;</span>
          </div>
        </a>

        <a href="/discover-assessments" className="cs-hcard">
          <div className="cs-hcard-left">
            <div className="cs-hcard-logo">
              <span className="cs-hcard-company">Discover Assessments</span>
            </div>
            <span className="cs-hcard-tag">RevOps</span>
          </div>
          <div className="cs-hcard-mid">
            <div className="cs-hcard-headline">Unstuck a stalled sales engine and delivered 10+ enterprise leads in month one</div>
            <div className="cs-hcard-desc">Acted as full RevOps function for a B2B HR Tech platform. Built email infrastructure from zero, deployed LinkedIn automation for enterprise targets, and wired everything into HubSpot via sentiment analysis.</div>
          </div>
          <div className="cs-hcard-right">
            <div className="cs-hcard-metrics">
              <div className="cs-hcard-metric">
                <div className="cs-hcard-metric-val">10+</div>
                <div className="cs-hcard-metric-lbl">Enterprise leads</div>
              </div>
              <div className="cs-hcard-metric">
                <div className="cs-hcard-metric-val">Month 1</div>
                <div className="cs-hcard-metric-lbl">Time to results</div>
              </div>
              <div className="cs-hcard-metric">
                <div className="cs-hcard-metric-val">Auto</div>
                <div className="cs-hcard-metric-lbl">CRM pipeline</div>
              </div>
            </div>
            <span className="cs-hcard-cta">Read case study &#8594;</span>
          </div>
        </a>

        <a href="/truclean" className="cs-hcard">
          <div className="cs-hcard-left">
            <div className="cs-hcard-logo">
              <span className="cs-hcard-company" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '2px' }}>TRU CLEAN</span>
            </div>
            <span className="cs-hcard-tag">Cold Email Outbound</span>
          </div>
          <div className="cs-hcard-mid">
            <div className="cs-hcard-headline">From zero to 10+ qualified leads per month, built from scratch</div>
            <div className="cs-hcard-desc">Built a full client acquisition engine for a US janitorial services company. Multi-source data, Clay enrichment, Claude AI personalisation, and cold email infrastructure delivering 10+ leads monthly.</div>
          </div>
          <div className="cs-hcard-right">
            <div className="cs-hcard-metrics">
              <div className="cs-hcard-metric">
                <div className="cs-hcard-metric-val">10+</div>
                <div className="cs-hcard-metric-lbl">Leads/month</div>
              </div>
              <div className="cs-hcard-metric">
                <div className="cs-hcard-metric-val">5+</div>
                <div className="cs-hcard-metric-lbl">Data sources</div>
              </div>
              <div className="cs-hcard-metric">
                <div className="cs-hcard-metric-val">AI</div>
                <div className="cs-hcard-metric-lbl">Personalised</div>
              </div>
            </div>
            <span className="cs-hcard-cta">Read case study &#8594;</span>
          </div>
        </a>

      </div>

      <Footer />
    </>
  );
}
