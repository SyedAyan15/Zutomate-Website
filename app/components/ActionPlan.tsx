'use client';
import { useEffect, useRef } from 'react';

/* The engagement as a calendar: what actually happens, month by month. Each
   month carries a phase so the arc — build, launch, scale — is readable without
   reading every line. */
const MONTHS: { k: string; phase: string; cls: string; items: string[] }[] = [
  {
    k: 'Month 1',
    phase: 'Build',
    cls: 'is-build',
    items: [
      'Onboarding and discovery',
      'Positioning and offer',
      'Email infrastructure',
      'LinkedIn profile optimization',
      'Content strategy and pillars',
      'Copywriting and sequences',
      'Clay workspace build',
    ],
  },
  {
    k: 'Month 2',
    phase: 'Launch',
    cls: 'is-launch',
    items: [
      'Campaigns go live',
      'Deliverability and reply-rate tuning',
      'Founder-led content',
      'Employee-led content',
      'Paid ads strategy',
    ],
  },
  {
    k: 'Month 3',
    phase: 'Launch',
    cls: 'is-launch',
    items: [
      'RevOps and CRM setup',
      'Paid ads go live',
      'Reporting and attribution',
    ],
  },
  {
    k: 'Month 4 – 6',
    phase: 'Scale',
    cls: 'is-scale',
    items: [
      'Map the channels that convert',
      'Cut what is not earning its place',
      'Expand the target list',
      'Scale spend behind proven plays',
      'Quarterly review and roadmap',
    ],
  },
];

export default function ActionPlan() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>('[data-cal-card]');
    if (!cards) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(cards).indexOf(entry.target as HTMLElement);
            setTimeout(() => entry.target.classList.add('visible'), idx * 110);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="plan-section" id="how-we-work">
      <div style={{ textAlign: 'center' }}>
        <div className="plan-badge">HOW WE WORK</div>
        <h2 className="plan-heading">
          Your first <span>six months</span>, month by month
        </h2>
        <p className="plan-sub">Each phase compounds the last, from system build to pipeline results.</p>
      </div>

      <div className="cal-grid" ref={gridRef}>
        {MONTHS.map((m) => (
          <article className={`cal-card ${m.cls}`} key={m.k} data-cal-card>
            <header className="cal-head">
              <span className="cal-month">{m.k}</span>
              <span className="cal-phase">{m.phase}</span>
            </header>

            <ul className="cal-list">
              {m.items.map((it) => (
                <li key={it}>
                  <span className="cal-tick" aria-hidden="true">
                    <svg viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 7.2l2.6 2.6L11 4.4"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
