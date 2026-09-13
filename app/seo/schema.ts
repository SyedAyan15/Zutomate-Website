/* Structured data (JSON-LD) for search and answer engines.
 *
 * Everything here is rendered on the server into the page HTML. AI crawlers
 * mostly do not run JavaScript, so schema injected client-side would never be
 * seen by the systems it is written for.
 *
 * Fields the business has not supplied are left out rather than guessed. An
 * invented phone number, address, founding date or star rating is worse than a
 * missing one: it misleads the engines and breaks schema.org guidelines.
 *
 * NEEDS DATA before these can be added:
 *   foundingDate, telephone, address, areaServed, priceRange
 *   ProfessionalService type: Google treats it as a LocalBusiness and reports a
 *     missing `address` as an error, so it waits for a real address
 *   Review / AggregateRating: needs ratings clients actually gave. The stars on
 *     the testimonial cards are decorative and are not a rating source. */

import { BASE_URL } from '../site';
import { STUDIES } from '../case-studies/studies';
import type { FaqItem, Inline } from '../components/faq-data';

type Node = Record<string, unknown>;

export const ORG_ID = `${BASE_URL}/#organization`;
export const SITE_ID = `${BASE_URL}/#website`;

const url = (path: string) => `${BASE_URL}${path}`;
const ref = (id: string) => ({ '@id': id });

export function graph(...nodes: (Node | null)[]) {
  return { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) };
}

export const ORG_DESCRIPTION =
  'Zutomate is a B2B go-to-market agency that builds AI-powered outbound systems, Clay automations and AI agents for B2B teams selling high-ticket services and software. It combines outbound, inbound and revenue operations into one growth system.';

/* ── Organization: on every page, via the root layout ── */
export function organization(): Node {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Zutomate',
    url: url('/'),
    /* square raster mark: Google wants at least 112px and handles PNG best */
    logo: { '@type': 'ImageObject', url: url('/apple-icon.png'), width: 180, height: 180 },
    image: url('/og-image.png'),
    description: ORG_DESCRIPTION,
    email: 'hello@zutomate.com',
    sameAs: [
      'https://www.linkedin.com/company/zutomate',
      'https://www.youtube.com/@gtmsync',
      'https://www.facebook.com/profile.php?id=61583443971831',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'hello@zutomate.com',
      url: 'https://calendly.com/zutomate/30min',
      availableLanguage: 'English',
    },
    employee: [
      {
        '@type': 'Person',
        name: 'Zain Tanveer',
        jobTitle: 'GTM Engineer',
        sameAs: 'https://www.linkedin.com/in/zainva/',
      },
      {
        '@type': 'Person',
        name: 'Syed Ayan Hassan',
        jobTitle: 'GTM Engineer',
        sameAs: 'https://www.linkedin.com/in/syed-ayan-hassan/',
      },
    ],
    knowsAbout: [
      'Go-to-market strategy',
      'Outbound lead generation',
      'Cold email outreach',
      'LinkedIn outreach',
      'LinkedIn content',
      'Paid advertising',
      'Account-based marketing',
      'Clay',
      'Revenue operations',
      'HubSpot',
      'CRM automation',
      'AI agents',
    ],
  };
}

/* ── WebSite: homepage. No SearchAction: the site has no search endpoint, and
   declaring one that does not exist is worse than declaring none. ── */
export function website(): Node {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: url('/'),
    name: 'Zutomate',
    description: ORG_DESCRIPTION,
    publisher: ref(ORG_ID),
    inLanguage: 'en',
  };
}

/* ── Services: one per pillar, each anchored to its playbook page ── */
export const SERVICES = {
  outbound: {
    path: '/outbound-playbook/',
    name: 'Automated Outbound Engine',
    serviceType: 'Outbound lead generation',
    description:
      'A done-for-you outbound system that books qualified meetings. Zutomate models the ideal customer profile, scores and tiers target accounts, and sources them from Apollo, AI Ark, Prospeo, Ocean.io, Discolike and Apify. Every record is enriched in Clay, copy is written and A/B tested per segment, and campaigns run on dedicated email infrastructure through Smartlead alongside LinkedIn outreach through HeyReach. Positive replies route to HubSpot and Slack, and every stage reports into a single dashboard.',
  },
  inbound: {
    path: '/inbound-playbook/',
    name: 'Inbound Growth Engine',
    serviceType: 'Inbound marketing',
    description:
      'Two engines that feed each other: organic LinkedIn content and paid ads. The LinkedIn engine optimises the profile, sets positioning and content pillars, designs posts for every funnel stage in Figma, and publishes on a fixed cadence from founder and employee accounts, with Trigify capturing engaged prospects for outbound follow-up. The paid ads engine models new ads on patterns in competitor ads, generates and A/B tests copy and creative, and launches winners on LinkedIn and Meta, feeding results back into the next round.',
  },
  revops: {
    path: '/revops-playbook/',
    name: 'RevOps Engine',
    serviceType: 'Revenue operations',
    description:
      'The revenue operations layer underneath inbound and outbound, usually built on HubSpot. It covers RevOps strategy and KPIs, CRM architecture with lifecycle stages from lead to won, data migration, cleanup and deduplication, and workflow automation including lead routing and scoring. It also covers sales and marketing operations, integrations through n8n, Zapier and Make, and reporting on revenue, attribution and forecasting.',
  },
} as const;

export type ServiceKey = keyof typeof SERVICES;

export function service(key: ServiceKey): Node {
  const s = SERVICES[key];
  return {
    '@type': 'Service',
    '@id': `${url(s.path)}#service`,
    name: s.name,
    serviceType: s.serviceType,
    description: s.description,
    url: url(s.path),
    provider: ref(ORG_ID),
  };
}

/* ── Articles: playbooks and case studies ──
   Dates come from git history: the commit that first added each page, and the
   last commit that touched it. Update `modified` when a page's content changes. */
const DATES: Record<string, { published: string; modified: string }> = {
  '/outbound-playbook/': { published: '2026-08-17T03:40:31+05:00', modified: '2026-09-03T15:34:42+05:00' },
  '/inbound-playbook/': { published: '2026-08-17T03:40:31+05:00', modified: '2026-09-03T15:34:42+05:00' },
  '/revops-playbook/': { published: '2026-08-17T03:40:31+05:00', modified: '2026-09-03T15:34:42+05:00' },
  '/goso/': { published: '2026-05-22T20:32:02+05:00', modified: '2026-09-03T15:34:42+05:00' },
  '/shopwave/': { published: '2026-05-22T20:32:02+05:00', modified: '2026-09-03T15:34:42+05:00' },
  '/nuvaris-ai/': { published: '2026-08-17T03:53:58+05:00', modified: '2026-09-03T15:34:42+05:00' },
  '/victoria-james/': { published: '2026-08-17T04:15:04+05:00', modified: '2026-09-03T15:34:42+05:00' },
};

export function article(path: string, headline: string, description: string): Node {
  const d = DATES[path];
  return {
    '@type': 'Article',
    '@id': `${url(path)}#article`,
    headline,
    description,
    url: url(path),
    mainEntityOfPage: url(path),
    image: url('/og-image.png'),
    author: ref(ORG_ID),
    publisher: ref(ORG_ID),
    ...(d ? { datePublished: d.published, dateModified: d.modified } : {}),
    inLanguage: 'en',
  };
}

/* ── Breadcrumbs ── */
export type Crumb = { name: string; path: string };
export const HOME: Crumb = { name: 'Home', path: '/' };
export const CASE_STUDIES: Crumb = { name: 'Case Studies', path: '/case-studies/' };

export function breadcrumb(trail: Crumb[]): Node {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: url(c.path),
    })),
  };
}

/* ── FAQ: built from the same data the FAQ section renders, so the markup can
   never drift from what visitors actually read. ── */
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function listItem(li: Inline): string {
  return typeof li === 'string' ? esc(li) : `<strong>${esc(li.b)}</strong> ${esc(li.t)}`;
}

function answerHtml(item: FaqItem): string {
  const body = item.a
    .map((b) => ('p' in b ? `<p>${esc(b.p)}</p>` : `<ul>${b.ul.map((li) => `<li>${listItem(li)}</li>`).join('')}</ul>`))
    .join('');
  return item.cta
    ? `${body}<p><a href="https://calendly.com/zutomate/30min">Book a discovery call</a></p>`
    : body;
}

export function faqPage(items: FaqItem[]): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${url('/')}#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: answerHtml(item) },
    })),
  };
}

/* ── Page-level bundles ── */
export function playbookSchema(key: ServiceKey, description: string) {
  const s = SERVICES[key];
  return graph(
    service(key),
    article(s.path, s.name, description),
    breadcrumb([HOME, { name: s.name, path: s.path }]),
  );
}

/* headline and company come from the case-study index, so a study's title is
   written once and read everywhere */
export function caseStudySchema(path: string, description: string) {
  const s = STUDIES.find((x) => `${x.slug}/` === path);
  if (!s) return graph(breadcrumb([HOME, CASE_STUDIES]));
  return graph(
    article(path, s.title, description),
    breadcrumb([HOME, CASE_STUDIES, { name: s.company, path }]),
  );
}

export function pageSchema(name: string, path: string) {
  return graph(breadcrumb([HOME, { name, path }]));
}
