'use client';
import { useEffect, useRef } from 'react';

export default function WhySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>('.why-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        cards.forEach(c => c.classList.remove('why-active'));
        card.classList.add('why-active');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('why-active');
      });
    });
  }, []);

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="why-badge">WHY ZUTOMATE</div>
      <h2 className="why-heading">Why Zutomate? We build <span className="why-highlight">full-stack AI Growth Systems</span></h2>
      <p className="why-sub">Most agencies set up tools. We engineer end-to-end systems that think, adapt, and scale.</p>

      <div className="why-grid">
        <div className="why-card">
          <div className="why-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
              <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
            </svg>
          </div>
          <div className="why-layer">INTELLIGENCE LAYER</div>
          <div className="why-card-title">Data &amp; Signals</div>
          <ul className="why-list">
            <li>ICP modelling &amp; TAM mapping</li>
            <li>Intent signals &amp; buying triggers</li>
            <li>Contact enrichment &amp; verification</li>
            <li>Account scoring &amp; segmentation</li>
          </ul>
        </div>

        <div className="why-card why-card-featured">
          <div className="why-icon why-icon-featured">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </div>
          <div className="why-layer why-layer-featured">ORCHESTRATION LAYER</div>
          <div className="why-card-title">AI Systems</div>
          <ul className="why-list">
            <li>Clay as the orchestration engine</li>
            <li>AI agents built around your workflow</li>
            <li>Multi-channel outreach sequences</li>
            <li>LLM-powered personalisation at scale</li>
          </ul>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          </div>
          <div className="why-layer">ACTIVATION LAYER</div>
          <div className="why-card-title">Revenue &amp; Growth</div>
          <ul className="why-list">
            <li>CRM pipeline automation</li>
            <li>LinkedIn &amp; email activation</li>
            <li>Qualified meeting generation</li>
            <li>Attribution &amp; performance loops</li>
          </ul>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
              <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none" />
              <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div className="why-layer">ENGAGEMENT LAYER</div>
          <div className="why-card-title">AI Chatbots</div>
          <ul className="why-list">
            <li>Website lead capture &amp; qualification</li>
            <li>RAG-powered knowledge assistants</li>
            <li>Booking &amp; scheduling automation</li>
            <li>CRM sync on every conversation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
