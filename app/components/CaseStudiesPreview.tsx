'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FadeUp, StaggerContainer, StaggerItem } from './Motion';
import { STUDIES } from '../case-studies/studies';

/* The home page shows a couple of studies and links out to the rest. Reading
   from the same source as the index means the two can never tell different
   stories about the same client. */
const PREVIEW = ['/goso', '/shopwave'];

export default function CaseStudiesPreview() {
  const studies = PREVIEW.map((slug) => STUDIES.find((s) => s.slug === slug)).filter(
    (s): s is (typeof STUDIES)[number] => Boolean(s),
  );

  return (
    <section id="case-studies">
      <div className="cases-preview-section">
        <FadeUp>
          <div className="badge">
            <span className="badge-text">Case Studies</span>
          </div>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2>Results we&apos;ve driven</h2>
        </FadeUp>
        <FadeUp delay={0.14}>
          <p className="cases-sub">
            Real outcomes for B2B teams using Zutomate&apos;s AI outbound systems.
          </p>
        </FadeUp>

        <StaggerContainer className="cs-grid is-preview" delay={0.1}>
          {studies.map((s) => (
            <StaggerItem key={s.slug}>
              <Link href={s.slug} className="cs-card">
                <span className="cs-card-tag">{s.industry}</span>

                <span className="cs-card-logo">
                  {s.logo ? (
                    <Image
                      src={`/assets/case-studies/${s.logo}`}
                      alt={s.company}
                      width={150}
                      height={44}
                    />
                  ) : (
                    <span className="cs-card-wordmark">{s.company}</span>
                  )}
                </span>

                <span className="cs-card-title">{s.title}</span>

                <span className="cs-card-cta">
                  Read case study
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.2}>
          <div className="cases-more">
            <Link href="/case-studies" className="cases-more-btn">
              See all case studies
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
