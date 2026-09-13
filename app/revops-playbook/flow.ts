/* RevOps, top to bottom — two engines on one page: the revenue operating model,
 * then the HubSpot build that runs it. Stage names follow the nine offerings in
 * the RevOps gig doc. Shapes live in components/playbook/types.ts. */

import type { Block, Step } from '../components/playbook/types';

export const FLOW: Block[] = [
  { t: 'section', k: 'RevOps Engine' },

  { t: 'step', k: 'RevOps Strategy' },
  { t: 'row', items: [{ k: 'Funnel Design' }, { k: 'GTM Workflows' }, { k: 'KPIs' }] },

  { t: 'step', k: 'Data Sources' },
  { t: 'row', items: [{ k: 'TAM Sourcing' }, { k: 'Inbound Data' }, { k: 'Positive Replies' }] },

  { t: 'step', k: 'Enrichment & Hygiene' },
  { t: 'row', items: [{ k: 'Clay', logo: 'clay.png' }] },
  {
    t: 'row',
    items: [{ k: 'Enrichment' }, { k: 'Cleanup' }, { k: 'Deduplication' }, { k: 'Segmentation' }],
  },

  { t: 'step', k: 'CRM Sync' },
  {
    t: 'row',
    items: [
      { k: 'HubSpot', logo: 'hubspot.png' },
      { k: 'Salesforce', logo: 'salesforce.png' },
    ],
  },

  { t: 'step', k: 'Revenue Workflows' },
  {
    t: 'row',
    items: [{ k: 'Lead Routing' }, { k: 'Lead Scoring' }, { k: 'Deal Workflows' }, { k: 'Alerts' }],
  },

  { t: 'step', k: 'Reporting & Analytics' },
  { t: 'row', items: [{ k: 'Dashboards' }, { k: 'Funnel Reporting' }, { k: 'Forecasting' }] },

  { t: 'step', k: 'Optimization' },

  { t: 'section', k: 'HubSpot Implementation' },

  { t: 'step', k: 'CRM Architecture' },
  { t: 'row', items: [{ k: 'Pipelines' }, { k: 'Properties' }, { k: 'Users' }] },

  { t: 'step', k: 'Lifecycle Stages' },
  {
    t: 'stack',
    items: [{ k: 'Lead' }, { k: 'MQL' }, { k: 'SQL' }, { k: 'Opportunity' }, { k: 'Won' }],
  },

  { t: 'step', k: 'Data & Migration' },
  { t: 'row', items: [{ k: 'Migration' }, { k: 'Cleanup' }, { k: 'Deduplication' }] },

  { t: 'step', k: 'Automation Build' },
  {
    t: 'row',
    items: [{ k: 'Workflows' }, { k: 'Lead Routing' }, { k: 'Lead Scoring' }, { k: 'Integrations' }],
  },

  { t: 'step', k: 'Sales & Marketing Ops' },
  {
    t: 'row',
    items: [
      { k: 'Pipeline Management' },
      { k: 'Deal Workflows' },
      { k: 'Nurturing' },
      { k: 'Campaigns' },
    ],
  },

  { t: 'step', k: 'AI & Integrations' },
  {
    t: 'row',
    items: [
      { k: 'n8n', logo: 'n8n.png' },
      { k: 'Zapier', logo: 'zapier.png' },
      { k: 'Make', logo: 'make.png' },
    ],
  },

  { t: 'step', k: 'Reporting Layer' },
  { t: 'row', items: [{ k: 'Revenue Analytics' }, { k: 'Attribution' }, { k: 'Performance' }] },

  { t: 'step', k: 'Ongoing Optimization' },
];

/* the nine offerings from the gig doc, in the same order */
export const STEPS: Step[] = [
  {
    k: 'RevOps Strategy',
    v: 'Revenue processes, funnel design, GTM workflows and the KPIs that judge them are planned before anything is built. Systems built without that definition end up encoding whatever the last person assumed.',
  },
  {
    k: 'HubSpot CRM',
    v: 'CRM setup and architecture: pipelines, lifecycle stages, properties, users and the data structure underneath. This is the layer everything else depends on, so it is settled first rather than patched later.',
  },
  {
    k: 'Data & Migration',
    v: 'Migration, cleanup, enrichment, segmentation and deduplication. A CRM is only as trustworthy as the records inside it. Reporting built on duplicated or stale data produces confident answers that are wrong.',
  },
  {
    k: 'Automation',
    v: 'Workflows, lead routing, lead scoring, and sales and marketing automation, wired together with the integrations they depend on. The work that reps currently do by hand and forget under pressure moves into the system.',
  },
  {
    k: 'Sales Operations',
    v: 'Pipeline management, deal workflows, sales process and forecasting. Deals move on defined criteria rather than on a rep’s optimism, which is what makes a forecast worth reading.',
  },
  {
    k: 'Marketing Operations',
    v: 'Lead management, nurturing, campaigns and attribution, plus the marketing-to-sales handoff that decides whether generated demand is ever worked. Most leaks live in that gap rather than in either team.',
  },
  {
    k: 'AI & Integrations',
    v: 'AI-powered workflows and intelligent automation, plus third-party and custom integrations, so the stack behaves as one system. The tools you already pay for stop being islands.',
  },
  {
    k: 'Reporting & Analytics',
    v: 'Dashboards, funnel reporting, revenue analytics, forecasting and performance tracking. One place to see the numbers, so the month-end figure is never reconstructed by hand from four tools.',
  },
  {
    k: 'Optimization',
    v: 'Ongoing HubSpot optimization, process improvement and automation refinement. A revenue system drifts as the business changes, so it is maintained rather than delivered once and abandoned.',
  },
];
