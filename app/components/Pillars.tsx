'use client';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FadeUp } from './Motion';
import { useLoop } from './useLoop';

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

/* ════════ OUTBOUND — the lock screen ════════
   A dark phone on a pearl ground, ringed by the tools that actually feed it.
   Alerts arrive as a continuous stream rather than a set piece: one enters
   every tick, each lives a few ticks, so something is always moving. */

const SLACK = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 14a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 0 1 4 0v5a2 2 0 1 1-4 0v-5z" fill="#E01E5A" />
    <path d="M10 6a2 2 0 1 1 2-2v2h-2zm0 1a2 2 0 0 1 0 4H5a2 2 0 1 1 0-4h5z" fill="#36C5F0" />
    <path d="M18 10a2 2 0 1 1 2 2h-2v-2zm-1 0a2 2 0 0 1-4 0V5a2 2 0 1 1 4 0v5z" fill="#2EB67D" />
    <path d="M14 18a2 2 0 1 1-2 2v-2h2zm0-1a2 2 0 0 1 0-4h5a2 2 0 1 1 0 4h-5z" fill="#ECB22E" />
  </svg>
);

const CALENDLY = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9.4" fill="#006BFF" />
    <path d="M15.6 9.3a4.4 4.4 0 1 0 0 5.4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

/* the feed alternates, so the stack never shows two of the same app in a row */
const FEED = [
  { app: 'Slack', title: 'New Message in #Outbound', body: 'Positive reply received', tone: 'slack', icon: SLACK },
  { app: 'Calendly', title: 'New meeting booked', body: '', tone: 'cal', icon: CALENDLY },
];

/* Alerts pile up one at a time until the screen is full, hold, then clear and
   start over. CAP is what actually fits between the date and the bottom
   controls — a fourth would run under the flashlight. */
const CAP = 4;
const PH_CYCLE = 7;

/* the outbound stack, floating around the frame */
const ORBIT = [
  { f: 'clay.png', n: 'Clay', x: 3, y: 8, s: 1 },
  { f: 'apollo.png', n: 'Apollo', x: 10, y: 34, s: 0.88 },
  { f: 'instantly.png', n: 'Instantly', x: 1, y: 58, s: 0.94 },
  { f: 'smartlead.png', n: 'Smartlead', x: 12, y: 82, s: 0.84 },
  { f: 'heyreach.png', n: 'HeyReach', x: 85, y: 10, s: 0.9 },
  { f: 'hubspot.png', n: 'HubSpot', x: 78, y: 33, s: 1 },
  { f: 'linkedin.png', n: 'LinkedIn', x: 87, y: 59, s: 0.86 },
  { f: 'n8n.png', n: 'n8n', x: 76, y: 82, s: 0.92 },
];

function OutboundPhone() {
  /* reduced motion holds on a full screen */
  const { ref, step } = useLoop(880, 0, 3);

  const phase = step % PH_CYCLE;
  const round = Math.floor(step / PH_CYCLE);
  const count = phase === 0 ? 0 : Math.min(phase, CAP);

  /* keying by round as well as position retires the whole stack each cycle, so
     the refill animates in rather than the old cards being reused in place */
  const alerts = Array.from({ length: count }, (_, i) => ({
    ...FEED[i % FEED.length],
    seq: `${round}-${i}`,
  }));

  return (
    <div className="mock mock-out" ref={ref} aria-hidden="true">
      <span className="orb-glow" />

      {ORBIT.map((t, i) => (
        <span
          className="orb"
          key={t.f}
          style={
            {
              left: `${t.x}%`,
              top: `${t.y}%`,
              '--s': t.s,
              animationDelay: `${(i % 4) * -1.6}s`,
            } as CSSProperties
          }
          title={t.n}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/assets/tools/${t.f}`} alt="" />
        </span>
      ))}

      <div className="ph">
        <div className="ph-screen">
          {/* wallpaper — a CSS marble, not Apple's asset */}
          <span className="ph-wall" />

          <span className="ph-island" />

          <div className="ph-status">
            <span className="ph-status-icons">
              <svg viewBox="0 0 18 12" fill="currentColor">
                <rect x="0" y="8" width="3" height="4" rx="1" />
                <rect x="4.5" y="6" width="3" height="6" rx="1" />
                <rect x="9" y="3" width="3" height="9" rx="1" />
                <rect x="13.5" y="0" width="3" height="12" rx="1" />
              </svg>
              <svg viewBox="0 0 16 12" fill="none">
                <path d="M1 4.2a10 10 0 0 1 14 0M3.6 7a6.4 6.4 0 0 1 8.8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="8" cy="10" r="1.3" fill="currentColor" />
              </svg>
              <svg viewBox="0 0 26 12" fill="none">
                <rect x="0.6" y="0.6" width="21" height="10.8" rx="3" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
                <rect x="2.2" y="2.2" width="17.8" height="7.6" rx="1.8" fill="currentColor" />
                <path d="M23.4 4.2v3.6a2 2 0 0 0 0-3.6z" fill="currentColor" opacity="0.6" />
              </svg>
            </span>
          </div>

          <div className="ph-lock">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="4.5" y="10.5" width="15" height="11" rx="3" fill="currentColor" />
              <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="ph-clock">9:41</div>
          <div className="ph-day">Thursday, 14 August</div>

          <div className="ph-notifs">
            <AnimatePresence initial={false}>
              {alerts.map((n) => (
                <motion.div
                  className={`ph-notif is-${n.tone}`}
                  key={n.seq}
                  layout
                  initial={{ opacity: 0, y: -34, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  /* the whole stack clears together, so they lift away as one */
                  exit={{ opacity: 0, y: -16, scale: 0.94, transition: { duration: 0.32, ease: 'easeIn' } }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >
                  <span className="ph-notif-icon">{n.icon}</span>
                  <span className="ph-notif-body">
                    <span className="ph-notif-top">
                      <span className="ph-notif-app">{n.app}</span>
                      <span className="ph-notif-now">now</span>
                    </span>
                    <span className="ph-notif-title">{n.title}</span>
                    {n.body && <span className="ph-notif-text">{n.body}</span>}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="ph-actions">
            <span className="ph-action">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 3h6l-.6 4.2a2 2 0 0 1-.6 1.2l-.6.6v11a1.2 1.2 0 0 1-2.4 0V9l-.6-.6a2 2 0 0 1-.6-1.2L9 3z" fill="currentColor" />
              </svg>
            </span>
            <span className="ph-action">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 8.5h3.2l1.4-2.2h6.8l1.4 2.2H20a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 20 18.5H4A1.5 1.5 0 0 1 2.5 17v-7A1.5 1.5 0 0 1 4 8.5z" fill="currentColor" />
                <circle cx="12" cy="13.4" r="3.1" fill="#000" opacity="0.55" />
              </svg>
            </span>
          </div>

          <span className="ph-home" />
        </div>
      </div>
    </div>
  );
}


/* ════════ INBOUND — the post that keeps working ════════
   One artifact covers both channels: the content is the post, the paid spend
   is what pushed its reach. The outcome is the number underneath it, so the
   counters are the point. The post sits whole in one view — the GIF supplies
   the motion, so scrolling the card only ever cut it in half. */

const IMPRESSIONS = 12019;
const REACTIONS_N = 257;
const COUNT_TICKS = 44;

function PostCard({ impressions, likes }: { impressions: number; likes: number }) {
  return (
    <article className="lp-card">
      <p className="lp-caption">The MCP stack we build for modern GTM teams 👇</p>

      <div className="lp-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/inbound/mcp-stack.gif" alt="The MCP stack powering modern GTM" />
      </div>

      <div className="lp-stats">
        <span className="lp-reacts">
          <span className="lp-emoji lp-e1">👍</span>
          <span className="lp-emoji lp-e2">❤️</span>
          <span className="lp-emoji lp-e3">👏</span>
          <span className="lp-count">{likes.toLocaleString()}</span>
        </span>
        <span className="lp-impressions">
          <b>{impressions.toLocaleString()}</b> impressions
        </span>
      </div>

      <div className="lp-actions">
        <span>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M7 10v10H4V10h3zm3 10V10l4-6a2 2 0 0 1 3 2l-1 4h4a2 2 0 0 1 2 2.4l-1.6 6A2 2 0 0 1 18.5 20H10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          Like
        </span>
        <span>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M20 12a8 8 0 1 1-3.2-6.4M20 12c0 4.4-3.6 8-8 8H4l2.2-2.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Comment
        </span>
        <span>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 3v12M12 3L8 7M12 3l4 4M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Repost
        </span>
      </div>
    </article>
  );
}

function InboundPost() {
  /* unbounded, clamped — the counters climb once on arrival and then hold,
     rather than resetting every loop */
  const { ref, step } = useLoop(55, 0, COUNT_TICKS);
  const p = clamp(step / COUNT_TICKS, 0, 1);
  const eased = 1 - Math.pow(1 - p, 3);

  const impressions = Math.round(IMPRESSIONS * eased);
  const likes = Math.round(REACTIONS_N * eased);

  return (
    <div className="mock mock-post" ref={ref}>
      <PostCard impressions={impressions} likes={likes} />
    </div>
  );
}


/* ════════ REVOPS — the flow ════════
   Four stages: signals converge into the enrichment engine, the engine writes
   to the CRMs, and the CRMs trigger the internal workflows. The dashes travel
   left to right so the direction of the pipeline is never ambiguous. */

const SOURCES = [
  {
    k: 'TAM Sourcing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    k: 'Inbound Data',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3v11m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    k: 'Positive Replies',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M20 12a8 8 0 1 1-8-8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M4 20l1.6-3.4M15 10l3 3 4.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const ENGINE = [{ k: 'Clay', logo: 'clay.png' }];

const CRMS = [
  { k: 'HubSpot', logo: 'hubspot.png' },
  { k: 'Salesforce', logo: 'salesforce.png' },
];

/* one SVG per gap, stretched to fill it — the curve endpoints stay pinned to
   the node rows whatever width the column ends up */
function Wires({ from, to }: { from: number[]; to: number[] }) {
  const paths: string[] = [];
  from.forEach((a) => to.forEach((b) => paths.push(`M0 ${a} C38 ${a} 62 ${b} 100 ${b}`)));

  return (
    <svg className="rev-wires" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

function RevOpsFlow() {
  return (
    <div className="rev-flow" aria-hidden="true">
      <div className="rev-col">
        {SOURCES.map((s) => (
          <span className="rev-node" key={s.k}>
            <span className="rev-node-icon">{s.icon}</span>
            <span className="rev-node-k">{s.k}</span>
          </span>
        ))}
      </div>

      <Wires from={[16, 50, 84]} to={[50]} />

      <div className="rev-core">
        {ENGINE.map((e) => (
          <span className="rev-core-row" key={e.k}>
            <span className="rev-core-icon">
              {e.logo ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={`/assets/tools/${e.logo}`} alt="" />
              ) : (
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3.4" fill="currentColor" />
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />
                </svg>
              )}
            </span>
            <span className="rev-core-k">{e.k}</span>
            <span className="rev-check">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M8 12.4l2.6 2.6L16 9.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </span>
        ))}
      </div>

      <Wires from={[50]} to={[30, 70]} />

      <div className="rev-col is-pair">
        {CRMS.map((c) => (
          <span className="rev-node" key={c.k}>
            <span className="rev-node-icon is-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/assets/tools/${c.logo}`} alt="" />
            </span>
            <span className="rev-node-k">{c.k}</span>
          </span>
        ))}
      </div>

      <Wires from={[30, 70]} to={[50]} />

      <div className="rev-col is-one">
        <span className="rev-node is-end">
          <span className="rev-node-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="5.5" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="5.5" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="18.5" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
              <path d="M8 6.6c5 .6 3.4 5 8 5.2M8 17.4c5-.6 3.4-5 8-5.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <span className="rev-node-k">Internal Workflows</span>
        </span>
      </div>
    </div>
  );
}

export default function Pillars() {
  return (
    <section className="pillars-section" id="pillars">
      <div className="svc-grid">
        {/* ── OUTBOUND — hero column ── */}
        <FadeUp className="svc-fade">
          <article className={'svc-card svc-hero'}>
            <header className="svc-head">
              <span className="svc-label">Outbound</span>
              <h3 className="svc-title">Meetings booked on demand</h3>
              <p className="svc-desc">
                Targeted campaigns that reach the right accounts without burning your domain.
              </p>

              {/* sits with the copy it belongs to. The inbound card keeps its
                  link at the foot because that one toggles the panel below it. */}
              <Link href="/outbound-playbook" className="svc-more svc-more-lead">
                <span>Learn more</span>
                <span className="svc-more-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 12L12 4M12 4H6M12 4v6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </header>

            <OutboundPhone />
          </article>
        </FadeUp>

        {/* ── INBOUND — one artifact, both channels ── */}
        <FadeUp delay={0.08} className="svc-fade">
          <article className="svc-card svc-hero">
            <header className="svc-head">
              <span className="svc-label">Inbound</span>
              <h3 className="svc-title">Demand that comes to you</h3>
              <p className="svc-desc">
                Content that earns attention, paid spend that pushes it further, and buyers who
                arrive already convinced.
              </p>

              {/* mirrors the outbound card: the deep-dive sits with the copy,
                  while the channels toggle stays at the foot with its panel */}
              <Link href="/inbound-playbook" className="svc-more svc-more-lead">
                <span>Learn more</span>
                <span className="svc-more-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 12L12 4M12 4H6M12 4v6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </header>

            <InboundPost />

          </article>
        </FadeUp>
      </div>

      {/* ── REVOPS — full-width band beneath both ── */}
      <FadeUp delay={0.1}>
        <article className="svc-card svc-band">
          <div className="svc-band-head">
            <span className="svc-label">RevOps</span>
            <h3 className="svc-title svc-title-sm">The layer underneath both</h3>
            <p className="svc-desc">
              Inbound and outbound only compound when the pipeline behind them is trustworthy.
            </p>

            <Link href="/revops-playbook" className="svc-more svc-more-lead">
              <span>Learn more</span>
              <span className="svc-more-arrow" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 12L12 4M12 4H6M12 4v6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <RevOpsFlow />
        </article>
      </FadeUp>
    </section>
  );
}
