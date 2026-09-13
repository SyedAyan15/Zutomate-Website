/* /llms.txt: a plain-markdown guide for language models, pointing them at the
   pages that best answer questions about Zutomate. Generated from the same data
   as the case-study index and the service schema, so it cannot go stale. */

import { BASE_URL } from '../site';
import { STUDIES } from '../case-studies/studies';
import { SERVICES, ORG_DESCRIPTION } from '../seo/schema';

export const dynamic = 'force-static';

export function GET() {
  const services = Object.values(SERVICES)
    .map((s) => `- [${s.name}](${BASE_URL}${s.path}): ${s.description}`)
    .join('\n');

  const studies = STUDIES.map(
    (s) => `- [${s.company}](${BASE_URL}${s.slug}/): ${s.title} (${s.industry})`,
  ).join('\n');

  const body = `# Zutomate

> ${ORG_DESCRIPTION}

Zutomate works across three connected areas. Outbound books qualified meetings through signal-based targeting, Clay enrichment and multichannel sequencing. Inbound builds demand through LinkedIn content and paid ads. RevOps is the CRM and data layer underneath both, usually built on HubSpot. Engagements run month by month: build, launch, then scale.

## Services

${services}

## Case studies

${studies}

## Company

- [Home](${BASE_URL}/): Services, process, how Zutomate compares to hiring or agencies, and FAQ
- [All case studies](${BASE_URL}/case-studies/)
- [FAQ](${BASE_URL}/#faq): Who Zutomate works with, services, engagement model, results guarantee, getting started
- [Book a discovery call](https://calendly.com/zutomate/30min)
- Email: hello@zutomate.com

## Optional

- [Privacy Policy](${BASE_URL}/privacy/)
- [Terms of Use](${BASE_URL}/terms/)
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
