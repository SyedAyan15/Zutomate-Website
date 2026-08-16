'use client';
import { FadeUp } from './Motion';

/* A cell is either a verdict or a qualifier. Strings carry more weight than a
   cross here — "3 months to ramp" argues the case in a way an X cannot. */
type Cell = true | false | string;

const COLS = ['Zutomate', 'Full-time Hire', 'Traditional Agency', 'Consultant'];

const ROWS: { k: string; sub: string; cells: Cell[] }[] = [
  {
    k: 'Accessibility',
    sub: 'A dedicated project manager, reachable the same day',
    cells: [true, 'One calendar', 'Shared account manager', 'Booked by the hour'],
  },
  {
    k: 'Proven Systems',
    sub: 'Playbooks already running inside other businesses',
    cells: [true, 'Built from scratch', 'Templated', false],
  },
  {
    k: 'Tooling Experience',
    sub: 'Clay, HubSpot, n8n and the rest, in production',
    cells: [true, 'Not always', 'Limited', false],
  },
  {
    k: 'Implementation',
    sub: 'Someone actually builds it, not just scopes it',
    cells: [true, true, 'Partial', false],
  },
  {
    k: 'Full GTM Coverage',
    sub: 'Inbound, outbound and RevOps as one system',
    cells: [true, false, 'Single channel', false],
  },
];

const Yes = (
  <span className="wu-mark is-yes" role="img" aria-label="Yes">
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path d="M6 10.3l2.6 2.6L14 7.5" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const No = (
  <span className="wu-mark is-no" role="img" aria-label="No">
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  </span>
);

function Verdict({ v }: { v: Cell }) {
  if (v === true) return Yes;
  if (v === false) return No;
  return <span className="wu-note">{v}</span>;
}

export default function WhyUs() {
  return (
    <section className="whyus-section" id="why-us">
      <FadeUp>
        <div className="whyus-head">
          <div className="whyus-badge">Why us</div>
          <h2 className="whyus-heading">
            The same problem, <span>four ways to solve it</span>
          </h2>
          <p className="whyus-sub">
            Every option below fixes part of the picture. Only one of them builds the system and then
            runs it.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.08}>
        {/* the table scrolls inside its own frame rather than the page */}
        <div className="whyus-card">
          <div className="whyus-scroll">
            <table className="whyus-table">
            <thead>
              <tr>
                <th scope="col">
                  <span className="wu-sr">Capability</span>
                </th>
                {COLS.map((c, i) => (
                  <th scope="col" key={c} className={i === 0 ? 'is-us' : undefined}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {ROWS.map((r) => (
                <tr key={r.k}>
                  <th scope="row">
                    <span className="wu-k">{r.k}</span>
                    <span className="wu-sub">{r.sub}</span>
                  </th>
                  {r.cells.map((v, i) => (
                    <td key={COLS[i]} data-col={COLS[i]} className={i === 0 ? 'is-us' : undefined}>
                      <Verdict v={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
