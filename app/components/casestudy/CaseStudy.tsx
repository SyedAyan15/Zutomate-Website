import type { ReactNode } from 'react';
import Image from 'next/image';
import './casestudy.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import JsonLd from '../JsonLd';

export type Metric = { v: string; k: string };
export type Step = { k: string; v: string };
export type StackRow = { k: string; tools: { k: string; logo: string }[] };
export type Quote = { text: string; name: string; role: string; avatar: string };

export default function CaseStudy({
  title,
  company,
  logo,
  metrics,
  quote,
  strategy,
  stack,
  campaigns,
  schema,
}: {
  title: ReactNode;
  company: string;
  logo: string;
  metrics: Metric[];
  /* optional: not every client has given us one, and inventing praise is worse
     than showing none */
  quote?: Quote;
  strategy: Step[];
  stack?: StackRow[];
  campaigns?: { src: string; alt: string; width: number; height: number };
  /* JSON-LD for this page, rendered into the server HTML */
  schema?: object;
}) {
  return (
    <>
      {schema && <JsonLd data={schema} />}
      <Navbar />

      <header className="cs-detail-hero">
        <h1>{title}</h1>

        <div className="cs-headline-stats">
          {metrics.map((m) => (
            <div className="cs-headline-stat" key={m.k}>
              <span className="cs-headline-val">{m.v}</span>
              <span className="cs-headline-lbl">{m.k}</span>
            </div>
          ))}
        </div>

        <div className="cs-client-logo">
          <Image src={`/assets/case-studies/${logo}`} alt={company} width={190} height={56} priority />
        </div>

        {quote && (
          <>
            <blockquote className="cs-hero-quote">&ldquo;{quote.text}&rdquo;</blockquote>
            <div className="cs-hero-attr">
              <Image
                src={quote.avatar}
                alt={quote.name}
                width={46}
                height={46}
                className="cs-hero-avatar"
              />
              <span className="cs-hero-attr-text">
                <strong>{quote.name}</strong>
                {quote.role}
              </span>
            </div>
          </>
        )}
      </header>

      <section className="cs-strategy">
        <h2>The Strategy</h2>
        <ul className="cs-strategy-list">
          {strategy.map((s) => (
            <li key={s.k}>
              <strong>{s.k}:</strong>{' '}
              {s.v}
            </li>
          ))}
        </ul>
      </section>

      {stack && (
        <section className="cs-stack">
          <div className="cs-stack-panel">
            <h2>Tech Stack</h2>
            <div className="cs-stack-rows">
              {stack.map((row) => (
                <div className="cs-stack-row" key={row.k}>
                  <span className="cs-stack-label">{row.k}</span>
                  <div className="cs-stack-tools">
                    {row.tools.map((t) => (
                      <span className="cs-stack-tool" key={t.k}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/assets/tools/${t.logo}`} alt="" />
                        {t.k}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {campaigns && (
        <section className="cs-campaigns">
          <h2>Campaign Stats</h2>
          <div className="cs-campaign-shot">
            <Image
              src={campaigns.src}
              alt={campaigns.alt}
              width={campaigns.width}
              height={campaigns.height}
              sizes="(max-width: 940px) 100vw, 900px"
            />
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
