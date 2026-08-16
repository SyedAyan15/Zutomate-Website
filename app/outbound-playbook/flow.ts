/* The outbound engine, top to bottom. Shapes live in
 * components/playbook/types.ts and are shared with the inbound playbook. */

import type { Block, Step } from '../components/playbook/types';

export const FLOW: Block[] = [
  { t: 'step', k: 'ICP Model' },
  { t: 'step', k: 'Finalize Signals' },
  {
    t: 'row',
    items: [{ k: 'Firmographic' }, { k: 'Technographic' }, { k: 'Account Fit Signals' }],
  },

  { t: 'step', k: 'Account Scoring' },
  { t: 'row', items: [{ k: 'Tier 1' }, { k: 'Tier 2' }, { k: 'Tier 3' }] },

  { t: 'step', k: 'Account Sourcing' },
  {
    t: 'cols',
    groups: [
      {
        k: 'Databases',
        items: [
          { k: 'Apollo', logo: 'apollo.png' },
          { k: 'AI Ark', logo: 'aiark.png' },
          { k: 'Prospeo', logo: 'prospeo.png' },
          { k: 'Ocean.io', logo: 'oceanio.jpg' },
          { k: 'Discolike', logo: 'discolike.jpg' },
        ],
      },
      {
        k: 'Scraping',
        items: [{ k: 'Apify', logo: 'apify.png' }, { k: 'Serper dev', logo: 'serper.png' }, { k: 'Python', logo: 'python.png' }],
      },
      {
        k: 'Signals',
        items: [
          { k: 'Clay', logo: 'clay.png' },
          { k: 'RB2B', logo: 'rb2b.png' },
          { k: 'Trigify', logo: 'trigify.png' },
        ],
      },
    ],
  },

  { t: 'step', k: 'Data Enrichment' },
  { t: 'row', items: [{ k: 'Clay', logo: 'clay.png' }] },

  { t: 'step', k: 'Copywriting' },
  { t: 'row', items: [{ k: 'Positioning' }, { k: 'Offer' }, { k: 'Personalization' }] },

  { t: 'step', k: 'A/B Testing' },
  {
    t: 'cols',
    groups: [
      {
        k: 'Email Infrastructure',
        items: [{ k: 'Zapmail', logo: 'zapmail.jpg' }, { k: 'Premium Inboxes', logo: 'premium-inboxes.jpg' }, { k: 'Inboxkit', logo: 'inboxkit.jpg' }],
        out: { k: 'Smartlead', logo: 'smartlead.png' },
      },
      {
        k: 'LinkedIn Configuration',
        items: [{ k: 'Automated outreach' }],
        out: { k: 'HeyReach', logo: 'heyreach.png' },
      },
    ],
  },

  { t: 'step', k: 'Positive Replies' },
  {
    t: 'row',
    items: [{ k: 'HubSpot', logo: 'hubspot.png' }, { k: 'Slack', logo: 'slack' }],
  },

  { t: 'step', k: 'Reporting' },
  { t: 'row', items: [{ k: 'Zutomate Dashboard' }] },
];

/* the accordion beside the flow — one row per stage of the engine */
export const STEPS: Step[] = [
  {
    k: 'Create ICP Model',
    v: 'The ICP model comes first: the firmographic, technographic and fit signals that separate a real buyer from a plausible one. Everything downstream inherits this definition, so getting it wrong is expensive.',
  },
  {
    k: 'Score and Tier Accounts',
    v: 'Accounts are scored against the model and split into tiers, so effort follows the ranking rather than the alphabet. Tier 1 earns research and personalization; Tier 3 earns volume.',
  },
  {
    k: 'Source and Enrich Accounts',
    v: 'Databases give coverage, scraping reaches what the databases missed, and intent signals surface who is in market right now. Everything lands in Clay, where waterfall enrichment fills the gaps one provider at a time and verification strips out what would have bounced.',
  },
  {
    k: 'Build Copy and Personalization',
    v: 'Positioning, offer and personalization are built as separate variables so each can be tested on its own. A/B testing then settles which combination earns the reply, rather than anyone guessing.',
  },
  {
    k: 'Configure Sending Infrastructure',
    v: 'Email runs on dedicated infrastructure with rotated inboxes and warmed domains, driven through Smartlead. LinkedIn runs in parallel through HeyReach, so the same account is touched on two channels without either being over-used.',
  },
  {
    k: 'Launch Outreach',
    v: 'Sequences run across both channels against the tiered list, with sending volume and cadence set per tier. Deliverability is monitored continuously rather than reviewed after the damage is done.',
  },
  {
    k: 'Route Replies and Report',
    v: 'A positive reply writes to the CRM and pings the channel your team already watches, with the context attached. Every stage writes back to one dashboard, so the number that matters is never reconstructed from four tools at month end.',
  },
];
