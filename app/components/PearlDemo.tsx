'use client';
import { StaggerContainer, StaggerItem, FadeUp } from './Motion';

const STATS = [
  { value: '3x',    label: 'Average pipeline growth in 90 days' },
  { value: '1k+',   label: 'Outbound touchpoints automated daily' },
  { value: '7+',    label: 'Integrated data sources per system' },
  { value: '100%',  label: 'Systems owned by your team at handoff' },
];

export default function PearlDemo() {
  return (
    <section className="pearl-section">
      <FadeUp>
        <div className="pearl-label">BY THE NUMBERS</div>
        <h2 className="pearl-heading">Systems that <em>compound</em> over time</h2>
        <p className="pearl-sub">
          Every system we build is designed to get smarter and more valuable the longer it runs.
        </p>
      </FadeUp>

      <StaggerContainer className="pearl-grid" delay={0.1}>
        {STATS.map(s => (
          <StaggerItem key={s.value}>
            <div className="pearl-stat">
              <div className="pearl-stat-value">{s.value}</div>
              <div className="pearl-stat-label">{s.label}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
