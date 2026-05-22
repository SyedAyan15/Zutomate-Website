'use client';
import { useState } from 'react';

const items = [
  {
    q: 'What types of companies does Zutomate work with?',
    a: (
      <>
        <p>We partner with B2B companies selling high-ticket services or software who are ready to build a predictable, scalable pipeline.</p>
        <ul>
          <li>Founders looking to turn outbound into a consistent growth engine</li>
          <li>Sales teams that need a reliable flow of qualified opportunities</li>
          <li>Companies tired of one-off campaigns and ready for a system-first approach</li>
        </ul>
        <p>If you&apos;re serious about building infrastructure (not just running campaigns), we&apos;re a great fit.</p>
      </>
    ),
  },
  {
    q: 'What services does Zutomate offer?',
    a: (
      <>
        <p>We deliver an all-in-one go-to-market engine. No need to hire multiple agencies or freelancers:</p>
        <ul>
          <li>Outbound systems: cold email + LinkedIn outreach at scale</li>
          <li>AI-powered chatbots for lead capture and qualification</li>
          <li>CRM setup, automation, and pipeline management</li>
          <li>LinkedIn content strategy and managed posting</li>
          <li>Lead sourcing, enrichment, and hyper-personalisation</li>
        </ul>
        <p>Marketing, sales, and automation unified into one system, working seamlessly to generate consistent, qualified opportunities.</p>
      </>
    ),
  },
  {
    q: 'How flexible is your engagement model?',
    a: (
      <>
        <p>We keep things structured but flexible. Our engagements start with a 3-month minimum, with each month focused on specific outcomes:</p>
        <ul>
          <li><strong>Month 1:</strong> Foundation: infrastructure, ICP, tech stack, and first campaigns live</li>
          <li><strong>Month 2:</strong> Activation: optimise sequences, launch AI systems, and qualify early signals</li>
          <li><strong>Month 3:</strong> Scale: expand what&apos;s working, compound results across channels</li>
        </ul>
        <p>Meaningful impact without long-term lock-in.</p>
      </>
    ),
  },
  {
    q: 'What if we don\'t get results?',
    a: (
      <>
        <p>We stand behind the work. If the system doesn&apos;t perform to agreed benchmarks, we keep working with you at no additional cost until it does.</p>
        <p>Our incentive is your pipeline. We only win when you win.</p>
      </>
    ),
  },
  {
    q: 'How is Zutomate different from other GTM agencies?',
    a: (
      <>
        <p>Most GTM agencies focus on a single channel, which caps your results. We take a system-first approach:</p>
        <ul>
          <li>We&apos;re not locked to one tool. We use a flexible, high-performance tech stack built for your context</li>
          <li>We combine outbound, AI, automation, and content into one unified growth system</li>
          <li>We go beyond GTM, supporting CRM, development, and growth infrastructure when needed</li>
        </ul>
        <p>One partner. One system. Your entire growth engine, built and managed end to end.</p>
      </>
    ),
  },
  {
    q: 'How can we get started?',
    a: (
      <>
        <p>Getting started is simple. Book a free discovery call, and we&apos;ll take the time to understand your goals and your current setup. From there, we&apos;ll map out a solution that actually works for your business.</p>
        <a href="https://calendly.com/zutomate/30min?" target="_blank" rel="noopener noreferrer" className="faq-cta-btn">↗ Book a Discovery Call</a>
      </>
    ),
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        <div className="faq-header">
          <div className="faq-badge">FAQ</div>
          <h2 className="faq-heading">Frequently asked <span className="faq-accent">questions</span></h2>
          <p className="faq-sub">Everything you need to know about how Zutomate builds and manages your growth engine.</p>
        </div>

        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button
                className="faq-q"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq-icon">{open === i ? '×' : '+'}</span>
              </button>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
