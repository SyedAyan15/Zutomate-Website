import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles.css";

export const metadata: Metadata = {
  title: "Resources | Zutomate",
  description:
    "Free GTM tools and templates from Zutomate — AI chatbot for go-to-market strategy, outbound playbooks, and ICP frameworks for B2B teams.",
  alternates: { canonical: "https://zutomate.com/resources" },
  openGraph: {
    type: "website",
    url: "https://zutomate.com/resources",
    title: "Resources | Zutomate",
    description:
      "Free GTM tools and templates from Zutomate — AI chatbot for go-to-market strategy, outbound playbooks, and ICP frameworks for B2B teams.",
    images: [{ url: "https://zutomate.com/og-image.png" }],
    siteName: "Zutomate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Zutomate",
    description:
      "Free GTM tools and templates from Zutomate — AI chatbot for go-to-market strategy, outbound playbooks, and ICP frameworks for B2B teams.",
    images: ["https://zutomate.com/og-image.png"],
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="rs-hero">
        <div className="badge"><span className="badge-text">Resources</span></div>
        <h1>Tools to <span className="accent">build</span> your GTM</h1>
        <p>Free access to the AI assistant and playbooks Zutomate uses to build outbound systems for B2B teams.</p>
      </div>

      {/* CHATBOT SECTION */}
      <div className="rs-chatbot-section">
        <div className="rs-chatbot-inner">

          {/* Left */}
          <div className="rs-chatbot-left">
            <div className="rs-chatbot-badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5.5" stroke="#F26522" strokeOpacity="0.6"/>
                <circle cx="6" cy="6" r="2.5" fill="#F26522"/>
              </svg>
              AI Tool
            </div>
            <h2>Meet <span className="zugo-name"><svg xmlns="http://www.w3.org/2000/svg" className="zugo-z-mark" viewBox="13 16 67 59" aria-hidden="true"><rect x="13" y="23" width="60" height="7" fill="#ffffff"/><rect x="13" y="68" width="60" height="7" fill="#ffffff"/><polygon points="13,68 73,23 73,30 13,75" fill="#F26522"/><polygon points="63,16 80,16 80,33 73,33 73,23 63,23" fill="#F26522"/></svg>ugo</span>, your<br/><span className="accent">GTM AI assistant.</span></h2>
            <p>Ask the same AI that powers Zutomate client builds. Get direct answers on cold email, ICP, outbound sequencing, LinkedIn, CRM setup, and more.</p>
            <ul className="rs-feature-list">
              <li>Ask any GTM or outbound question</li>
              <li>Build your cold email strategy from scratch</li>
              <li>ICP definition, positioning, and messaging</li>
              <li>LinkedIn and multi-channel sequence planning</li>
              <li>Trained on Zutomate&apos;s proven GTM frameworks</li>
            </ul>
            <a href="https://gtmagent.zutomate.com/signup" target="_blank" rel="noopener" className="rs-chatbot-cta">
              Try Zugo Free
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right: static chat preview */}
          <div className="rs-chat-preview">
            <div className="rs-chat-topbar">
              <div className="rs-chat-topbar-icon">
                <svg viewBox="13 16 67 59" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'18px',height:'18px'}} aria-hidden="true">
                  <rect x="13" y="23" width="60" height="7" fill="#ffffff"/>
                  <rect x="13" y="68" width="60" height="7" fill="#ffffff"/>
                  <polygon points="13,68 73,23 73,30 13,75" fill="#F26522"/>
                  <polygon points="63,16 80,16 80,33 73,33 73,23 63,23" fill="#F26522"/>
                </svg>
              </div>
              <div>
                <div className="rs-chat-topbar-title" style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontWeight:500,letterSpacing:'-0.5px'}}>Zugo</div>
                <div className="rs-chat-topbar-sub">by Zutomate</div>
              </div>
              <div className="rs-chat-topbar-dot"></div>
            </div>

            <div className="rs-chat-body">
              <div className="rs-chat-msg user">
                <div className="rs-chat-avatar">You</div>
                <div className="rs-chat-bubble">How do I build a cold email sequence for enterprise SaaS?</div>
              </div>
              <div className="rs-chat-msg">
                <div className="rs-chat-avatar">AI</div>
                <div className="rs-chat-bubble">Start with a trigger-based opener tied to a signal — a funding round, a new hire, or a tech change. Email 1 is short: one line of personalisation, one pain point, one CTA. Follow up on day 3 with a different angle, not a &quot;just checking in&quot;.</div>
              </div>
              <div className="rs-chat-msg user">
                <div className="rs-chat-avatar">You</div>
                <div className="rs-chat-bubble">What signals should I be tracking?</div>
              </div>
              <div className="rs-chat-msg">
                <div className="rs-chat-avatar">AI</div>
                <div className="rs-chat-bubble rs-chat-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>

            <div className="rs-chat-footer">
              <div className="rs-chat-input-bar">
                <span className="rs-chat-input-placeholder">Ask Zugo anything...</span>
                <div className="rs-chat-input-send">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1.5 6h9M6.5 2l4 4-4 4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="rs-divider"></div>

      {/* TEMPLATES SECTION */}
      <div className="rs-templates-section">
        <div className="rs-templates-header">
          <div className="badge"><span className="badge-text">Templates</span></div>
          <h2>Playbooks &amp; frameworks</h2>
          <p>The exact documents Zutomate uses to build outbound systems. Download and adapt them to your business.</p>
        </div>

        <div className="rs-template-grid">

          <div className="rs-template-card">
            <div className="rs-template-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="3" width="14" height="14" rx="3" stroke="#F26522" strokeWidth="1.5" fill="none"/>
                <path d="M7 8h6M7 11h4" stroke="#F26522" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="rs-template-name">GTM Strategy Framework</div>
              <div className="rs-template-desc">The exact framework Zutomate uses to scope and build GTM systems from scratch for B2B clients.</div>
            </div>
            <a href="#" className="rs-template-dl">
              Download
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2v6M3 6l3 3 3-3M2 10h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="rs-template-card">
            <div className="rs-template-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 7h14M3 7c0-2.2 1.8-4 4-4h6c2.2 0 4 1.8 4 4v6c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V7Z" stroke="#F26522" strokeWidth="1.5" fill="none"/>
                <path d="M8 11l1.5 1.5L12 9" stroke="#F26522" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="rs-template-name">Cold Email Playbook</div>
              <div className="rs-template-desc">Sequences, subject lines, and follow-up cadences across B2B verticals. Includes 3-tier personalisation logic.</div>
            </div>
            <a href="#" className="rs-template-dl">
              Download
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2v6M3 6l3 3 3-3M2 10h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="rs-template-card">
            <div className="rs-template-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="8" r="3.5" stroke="#F26522" strokeWidth="1.5" fill="none"/>
                <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#F26522" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <div>
              <div className="rs-template-name">ICP Mapping Template</div>
              <div className="rs-template-desc">Define your ideal customer profile in under 30 minutes. Covers firmographics, triggers, and buying signals.</div>
            </div>
            <a href="#" className="rs-template-dl">
              Download
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2v6M3 6l3 3 3-3M2 10h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
