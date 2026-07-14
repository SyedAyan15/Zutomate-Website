'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from './Motion';

export default function CaseStudiesPreview() {
  return (
    <section id="case-studies">
      <div className="cases-preview-section">
        <FadeUp><div className="badge"><span className="badge-text">Case Studies</span></div></FadeUp>
        <FadeUp delay={0.08}><h2>Results we&apos;ve driven</h2></FadeUp>
        <FadeUp delay={0.14}><p className="cases-sub">Real outcomes for B2B teams using Zutomate&apos;s AI outbound systems.</p></FadeUp>

        <StaggerContainer className="cases-grid" delay={0.1}>
          <StaggerItem>
            <motion.div
              className="case-card"
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            >
              <div className="case-card-top">
                <span className="case-tag">Cold Email + LinkedIn</span>
                <div className="case-client-logo">
                  <svg viewBox="0 0 28 28" fill="none" style={{ width: '16px', height: '16px', flexShrink: 0 }}>
                    <path d="M3 17 C7 9,11 9,14 14 C17 19,21 19,25 11" stroke="rgba(255,255,255,0.85)" strokeWidth="2.8" strokeLinecap="round" fill="none" />
                    <path d="M3 21 C7 13,11 13,14 18 C17 23,21 23,25 15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                  </svg>
                  <span className="case-company">shopwave</span>
                </div>
              </div>
              <div className="case-headline">Automated Omnichannel B2B Outreach System</div>
              <div className="case-metrics">
                <div className="case-metric">
                  <span className="case-metric-value">+20%</span>
                  <span className="case-metric-label">Deals closed</span>
                </div>
                <div className="case-metric">
                  <span className="case-metric-value">1k+</span>
                  <span className="case-metric-label">Emails / day</span>
                </div>
                <div className="case-metric">
                  <span className="case-metric-value">3-Tier</span>
                  <span className="case-metric-label">Prospect system</span>
                </div>
              </div>
              <p className="case-desc">Built a fully automated omnichannel outreach system for a B2B retail tech company. 1,000+ emails per day, LinkedIn in parallel, 3-tier AI personalization by signal strength.</p>
              <Link href="/shopwave" className="case-card-cta">Read case study →</Link>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="case-card"
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            >
              <div className="case-card-top">
                <span className="case-tag">Full Revenue Engine</span>
                <span className="case-company" style={{ fontFamily: "'Black Han Sans',sans-serif", fontSize: '0.95rem', letterSpacing: '0.5px' }}>GOSO</span>
              </div>
              <div className="case-headline">From $20K to $100K MRR with a revenue engine built from scratch</div>
              <div className="case-metrics">
                <div className="case-metric">
                  <span className="case-metric-value">5x</span>
                  <span className="case-metric-label">MRR growth</span>
                </div>
                <div className="case-metric">
                  <span className="case-metric-value">7+</span>
                  <span className="case-metric-label">Lead sources</span>
                </div>
                <div className="case-metric">
                  <span className="case-metric-value">24/7</span>
                  <span className="case-metric-label">Automated pipeline</span>
                </div>
              </div>
              <p className="case-desc">Built the complete GTM infrastructure for a B2B social marketing platform. Multi-source lead pipeline via n8n, Claude AI personalization, Smartlead email, and full GoHighLevel CRM setup.</p>
              <Link href="/goso" className="case-card-cta">Read case study →</Link>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        <FadeUp delay={0.2}>
          <Link href="/case-studies" className="btn-see-all">See all case studies →</Link>
        </FadeUp>
      </div>
    </section>
  );
}
