'use client';
import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from './Motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
    layer: 'INTELLIGENCE LAYER',
    title: 'Data & Signals',
    items: [
      'ICP modelling & TAM mapping',
      'Intent signals & buying triggers',
      'Contact enrichment & verification',
      'Account scoring & segmentation',
    ],
    featured: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    layer: 'ORCHESTRATION LAYER',
    title: 'AI Systems',
    items: [
      'Clay as the orchestration engine',
      'AI agents built around your workflow',
      'Multi-channel outreach sequences',
      'LLM-powered personalisation at scale',
    ],
    featured: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    layer: 'ACTIVATION LAYER',
    title: 'Revenue & Growth',
    items: [
      'CRM pipeline automation',
      'LinkedIn & email activation',
      'Qualified meeting generation',
      'Attribution & performance loops',
    ],
    featured: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    layer: 'ENGAGEMENT LAYER',
    title: 'AI Chatbots',
    items: [
      'Website lead capture & qualification',
      'RAG-powered knowledge assistants',
      'Booking & scheduling automation',
      'CRM sync on every conversation',
    ],
    featured: false,
  },
];

export default function WhySection() {
  return (
    <section className="why-section">
      <FadeUp><div className="why-badge">WHY ZUTOMATE</div></FadeUp>
      <FadeUp delay={0.08}>
        <h2 className="why-heading">
          Why Zutomate? We build <span className="why-highlight">full-stack AI Growth Systems</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.16}>
        <p className="why-sub">Most agencies set up tools. We engineer end-to-end systems that think, adapt, and scale.</p>
      </FadeUp>

      <StaggerContainer className="why-grid" delay={0.1}>
        {cards.map((card) => (
          <StaggerItem key={card.title}>
            <motion.div
              className={`why-card${card.featured ? ' why-card-featured' : ''}`}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            >
              <div className={`why-icon${card.featured ? ' why-icon-featured' : ''}`}>
                {card.icon}
              </div>
              <div className={`why-layer${card.featured ? ' why-layer-featured' : ''}`}>
                {card.layer}
              </div>
              <div className="why-card-title">{card.title}</div>
              <ul className="why-list">
                {card.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
