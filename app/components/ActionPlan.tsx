'use client';
import { useEffect, useRef } from 'react';

const rows = [
  { num: '01', bars: [{ cls: 'orange', tag: 'BUILD', tagCls: 'tag-build', text: 'Kickoff & Discovery', span: 1 }] },
  { num: '02', bars: [{ cls: 'orange', tag: 'BUILD', tagCls: 'tag-build', text: 'ICP Model + System Architecture', span: 2 }] },
  { num: '03', bars: [{ cls: 'orange', tag: 'BUILD', tagCls: 'tag-build', text: 'Design Playbooks & Sequences', span: 1 }] },
  { num: '04', bars: [{ cls: 'launch', tag: 'LAUNCH', tagCls: 'tag-launch', text: 'Ad Campaign Goes Live', span: 1 }] },
  { num: '05', bars: [{ cls: 'orange', tag: 'BUILD', tagCls: 'tag-build', text: 'Campaign & Infrastructure Setup', span: 1 }] },
  { num: '06', dark: 1, bars: [{ cls: 'launch', tag: 'LAUNCH', tagCls: 'tag-launch', text: 'First Outreach Goes Live', span: 1 }] },
  { num: '07', dark: 1, bars: [{ cls: 'orange', tag: 'BUILD', tagCls: 'tag-build', text: 'CRM Integration', span: 1 }] },
  { num: '08', dark: 1, bars: [{ cls: 'launch', tag: 'LAUNCH', tagCls: 'tag-launch', text: 'Dashboards + Reporting Setup', span: 2 }] },
  { num: '09', dark: 2, bars: [{ cls: 'scale', tag: 'SCALE', tagCls: 'tag-scale', text: 'Testing & Iterating Playbooks', span: 1 }] },
  { num: '10', dark: 1, bars: [{ cls: 'scale', tag: 'SCALE', tagCls: 'tag-scale', text: 'Optimisation, Scaling & Documentation', span: 3 }] },
  { num: '11', dark: 3, bars: [{ cls: 'orange', tag: 'QBR', tagCls: 'tag-build', text: 'Quarterly Review & Roadmap', span: 1 }] },
];

function barStyle(cls: string) {
  if (cls === 'launch') return { background: 'rgba(52,211,153,0.08)', borderColor: 'rgba(52,211,153,0.3)' };
  if (cls === 'scale') return { background: 'rgba(99,102,241,0.10)', borderColor: 'rgba(165,180,252,0.3)' };
  return {};
}

export default function ActionPlan() {
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const planRows = rowsRef.current?.querySelectorAll<HTMLElement>('[data-plan-row]');
    if (!planRows) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Array.from(planRows).indexOf(entry.target as HTMLElement);
          setTimeout(() => entry.target.classList.add('visible'), idx * 80);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    planRows.forEach(r => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="plan-section" id="how-we-work">
      <div style={{ textAlign: 'center' }}>
        <div className="plan-badge">HOW WE WORK</div>
        <h2 className="plan-heading">Your first <span>3 months</span> action plan</h2>
        <p className="plan-sub">Each phase compounds the last, from system build to pipeline results.</p>
      </div>

      <div className="plan-timeline">
        <div className="plan-months">
          <div className="plan-month-label"></div>
          <div className="plan-month-label">Month 1</div>
          <div className="plan-month-label">Month 2</div>
          <div className="plan-month-label">Month 3</div>
          <div className="plan-month-label">Review</div>
        </div>

        <div className="plan-rows" id="planRows" ref={rowsRef}>
          <div className="plan-col-dividers">
            <div className="plan-col-div"></div>
            <div className="plan-col-div"></div>
            <div className="plan-col-div"></div>
            <div className="plan-col-div"></div>
            <div className="plan-col-div"></div>
          </div>

          {rows.map((row) => (
            <div key={row.num} className="plan-row" data-plan-row>
              <div className="plan-row-num">{row.num}</div>
              {Array.from({ length: row.dark || 0 }).map((_, i) => (
                <div key={i} className="plan-bar-wrap dark"></div>
              ))}
              {row.bars.map((bar, bi) => (
                <div key={bi} className={`plan-bar-wrap${bar.span > 1 ? ` span${bar.span}` : ''}`}>
                  <div className={`plan-bar${bar.cls === 'orange' ? ' orange' : ''}`} style={barStyle(bar.cls)}>
                    <span className={`plan-phase-tag ${bar.tagCls}`}>{bar.tag}</span>
                    {bar.text}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
