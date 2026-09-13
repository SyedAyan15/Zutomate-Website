'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from './Motion';
import { FAQS, type FaqItem } from './faq-data';

/* Content lives in faq-data.ts so the FAQPage schema is built from exactly what
   renders here, rather than from a second copy that can drift. */
function Answer({ item }: { item: FaqItem }) {
  return (
    <>
      {item.a.map((b, i) =>
        'p' in b ? (
          <p key={i}>{b.p}</p>
        ) : (
          <ul key={i}>
            {b.ul.map((li, j) =>
              typeof li === 'string' ? (
                <li key={j}>{li}</li>
              ) : (
                <li key={j}>
                  <strong>{li.b}</strong> {li.t}
                </li>
              ),
            )}
          </ul>
        ),
      )}
      {item.cta && (
        <a
          href="https://calendly.com/zutomate/30min?"
          target="_blank"
          rel="noopener noreferrer"
          className="faq-cta-btn"
        >
          ↗ Book a Discovery Call
        </a>
      )}
    </>
  );
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        <div className="faq-header">
          <FadeUp><div className="faq-badge">FAQ</div></FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="faq-heading">Frequently asked <span className="faq-accent">questions</span></h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="faq-sub">Everything you need to know about how Zutomate builds and manages your growth engine.</p>
          </FadeUp>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => (
            <motion.div
              key={i}
              className={`faq-item${open === i ? ' open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <button
                className="faq-q"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq-icon">{open === i ? '×' : '+'}</span>
              </button>
              <div className="faq-a">
                <Answer item={item} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
