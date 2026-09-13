import Link from 'next/link';
import './playbook.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Steps from './Steps';
import JsonLd from '../JsonLd';
import type { ReactNode } from 'react';
import type { Block, Item, Step } from './types';

const SlackMark = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 14a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 0 1 4 0v5a2 2 0 1 1-4 0v-5z" fill="#E01E5A" />
    <path d="M10 6a2 2 0 1 1 2-2v2h-2zm0 1a2 2 0 0 1 0 4H5a2 2 0 1 1 0-4h5z" fill="#36C5F0" />
    <path d="M18 10a2 2 0 1 1 2 2h-2v-2zm-1 0a2 2 0 0 1-4 0V5a2 2 0 1 1 4 0v5z" fill="#2EB67D" />
    <path d="M14 18a2 2 0 1 1-2 2v-2h2zm0-1a2 2 0 0 1 0-4h5a2 2 0 1 1 0 4h-5z" fill="#ECB22E" />
  </svg>
);

function Mark({ logo, alt }: { logo: string; alt: string }) {
  if (logo === 'slack') return SlackMark;
  /* eslint-disable-next-line @next/next/no-img-element */
  return <img src={`/assets/tools/${logo}`} alt={alt} />;
}

/* One tile per tool inside a single group card. Tiles are logo-first so every
   group is exactly one row tall, which keeps sibling columns level. Tools
   without a logo fall back to their name rather than a broken image. */
function Tile({ item }: { item: Item }) {
  return (
    <span className={`gf-tile${item.logo ? '' : ' is-text'}`} title={item.k}>
      {item.logo ? (
        <Mark logo={item.logo} alt={item.k} />
      ) : (
        <span className="gf-tile-fallback">{item.k}</span>
      )}
    </span>
  );
}

function Chip({ item }: { item: Item }) {
  return (
    <span className="gf-card gf-chip">
      {item.logo && (
        <span className="gf-chip-icon">
          <Mark logo={item.logo} alt="" />
        </span>
      )}
      {item.k}
    </span>
  );
}

export default function Playbook({
  title,
  lede,
  steps,
  flow,
  quote,
  cta = 'Book a call',
  schema,
}: {
  title: string;
  /* optional: a page may open on the quote instead */
  lede?: string;
  steps: Step[];
  flow: Block[];
  /* an optional closing argument, set immediately before the ask */
  quote?: ReactNode;
  cta?: string;
  /* JSON-LD for this page, rendered into the server HTML */
  schema?: object;
}) {
  return (
    <>
      {schema && <JsonLd data={schema} />}
      <Navbar />

      <main className="gf-page">
        {/* ── the explanation, held in place while the flow scrolls past ── */}
        <aside className="gf-side">
          <div className="gf-side-inner">
            <Link href="/#pillars" className="gf-back">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M10 3L5 8l5 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to services
            </Link>

            <span className="gf-label">How it works</span>
            <h1 className="gf-title">{title}</h1>
            {lede && <p className="gf-lede">{lede}</p>}

            {quote && <blockquote className="gf-quote">{quote}</blockquote>}

            <Steps steps={steps} />

            {/* straight to Calendly rather than the contact form: the arrow
                already reads as off-site, and it matches the FAQ's CTA */}
            <span className="gf-cta-wrap">
              <a
                href="https://calendly.com/zutomate/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="gf-cta"
              >
                {cta}
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M4 12L12 4M12 4H6M12 4v6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </span>
          </div>
        </aside>

        {/* ── the flow ── */}
        <div className="gf-flow">
          {flow.map((b, i) => {
            /* the merge bar closes a fan back into the stage below it — so no
               bar on the final block, nor where a section heading breaks the
               chain and there is nothing below to merge into */
            const next = flow[i + 1];
            const merge = next && next.t !== 'section' && (
              <span className="gf-merge" aria-hidden="true" />
            );

            if (b.t === 'section') {
              return (
                <h2 className="gf-node gf-section" key={`sec-${i}`}>
                  {b.k}
                </h2>
              );
            }

            if (b.t === 'step') {
              return (
                <div className="gf-node gf-card gf-step" key={`${b.k}-${i}`}>
                  {b.k}
                </div>
              );
            }

            if (b.t === 'stack') {
              return (
                <div className="gf-node gf-stack" key={`stack-${i}`}>
                  {b.items.map((it) => (
                    <Chip item={it} key={it.k} />
                  ))}
                </div>
              );
            }

            if (b.t === 'row') {
              return (
                <div className={`gf-node gf-row gf-n${b.items.length}`} key={`row-${i}`}>
                  {b.items.map((it) => (
                    <Chip item={it} key={it.k} />
                  ))}
                  {merge}
                </div>
              );
            }

            return (
              <div className={`gf-node gf-cols gf-n${b.groups.length}`} key={`cols-${i}`}>
                {b.groups.map((g) => (
                  <div className="gf-group" key={g.k}>
                    <span className="gf-group-k">{g.k}</span>
                    <div className="gf-card gf-tiles">
                      {g.items.map((it) => (
                        <Tile item={it} key={it.k} />
                      ))}
                    </div>
                    {g.out && (
                      <div className="gf-group-out">
                        <Chip item={g.out} />
                      </div>
                    )}
                  </div>
                ))}
                {merge}
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
