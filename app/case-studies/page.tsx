import type { Metadata } from 'next';
import './styles.css';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { STUDIES } from './studies';
import JsonLd from '../components/JsonLd';
import { graph, breadcrumb, HOME, CASE_STUDIES } from '../seo/schema';

export const metadata: Metadata = {
  alternates: { canonical: '/case-studies/' },
  title: 'Case Studies | Zutomate',
  description: 'Real results from Zutomate\'s AI-powered GTM systems. See how B2B teams built predictable pipeline with outbound automation and AI agents.',
  openGraph: {
    type: 'website',
    url: 'https://zutomate.com/case-studies/',
    title: 'Case Studies | Zutomate',
    description: 'Real results from Zutomate\'s AI-powered GTM systems. See how B2B teams built predictable pipeline with outbound automation and AI agents.',
    images: [{ url: '/og-image.png' }],
    siteName: 'Zutomate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Zutomate',
    description: 'Real results from Zutomate\'s AI-powered GTM systems. See how B2B teams built predictable pipeline with outbound automation and AI agents.',
    images: ['/og-image.png'],
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumb([HOME, CASE_STUDIES]))} />
      <Navbar />

      <div className="cs-hero">
        <div className="badge"><span className="badge-text">Case Studies</span></div>
        <h1>
          See how we helped these <span className="accent">B2B businesses grow</span>
        </h1>
        <p>Real outcomes for B2B teams using Zutomate AI outbound and GTM systems.</p>
      </div>

      <div className="cs-grid">
        {STUDIES.map((s) => (
          <Link href={s.slug} className="cs-card" key={s.slug}>
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
                /* no logo file yet — the name carries it rather than a gap */
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
        ))}
      </div>

      <Footer />
    </>
  );
}
