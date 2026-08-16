/* Inbound, top to bottom — two engines on one page: organic LinkedIn content,
 * then paid ads. Shapes live in components/playbook/types.ts and are shared
 * with the outbound playbook. */

import type { Block, Step } from '../components/playbook/types';

export const FLOW: Block[] = [
  { t: 'section', k: 'LinkedIn Growth Engine' },

  { t: 'step', k: 'Profile Optimization' },
  {
    t: 'row',
    items: [{ k: 'Banner' }, { k: 'Headline' }, { k: 'About' }, { k: 'Featured' }],
  },

  { t: 'step', k: 'Content Strategy' },
  { t: 'row', items: [{ k: 'Positioning' }, { k: 'Content Pillars' }] },

  { t: 'step', k: 'Content Formats' },
  {
    t: 'row',
    items: [{ k: 'Gifs' }, { k: 'Lead Magnet' }, { k: 'Cheatsheets' }, { k: 'Infographics' }],
  },
  { t: 'row', items: [{ k: 'ToF' }, { k: 'MoF' }, { k: 'BoF' }] },

  { t: 'step', k: 'Content Ideation' },
  { t: 'row', items: [{ k: 'Resources' }, { k: 'Viral Posts' }] },

  { t: 'step', k: 'Design Visuals' },
  { t: 'row', items: [{ k: 'Figma', logo: 'figma.png' }] },
  { t: 'row', items: [{ k: 'Founder POV' }, { k: 'Employee Led Growth' }] },

  { t: 'step', k: 'Publish on LinkedIn' },
  { t: 'step', k: 'Capture Interest' },
  { t: 'row', items: [{ k: 'Trigify', logo: 'trigify.png' }] },

  { t: 'step', k: 'Outbound' },

  { t: 'section', k: 'Paid Ads Engine' },

  { t: 'step', k: 'Scrape Competitor Ads' },
  { t: 'step', k: 'Analyze Patterns' },
  { t: 'step', k: 'Generate Ad Copy' },
  { t: 'step', k: 'Generate Visuals' },
  { t: 'step', k: 'A/B Test' },
  { t: 'step', k: 'Launch & Track' },
  { t: 'row', items: [{ k: 'LinkedIn', logo: 'linkedin.png' }, { k: 'Meta', logo: 'meta.jpg' }] },

  { t: 'step', k: 'Feedback Loop' },
];

export const STEPS: Step[] = [
  {
    k: 'Optimise the Profile',
    v: 'The profile is the landing page for everything that follows. Banner, headline, about and featured section are set so a visitor who arrives from a post understands the offer without scrolling twice — distribution is wasted on a profile that cannot convert the attention it earns.',
  },
  {
    k: 'Set the Content Strategy',
    v: 'Positioning decides what you are known for, and content pillars turn that into a repeatable set of subjects. Without both, posting becomes a series of unrelated opinions that never compound into an audience that buys.',
  },
  {
    k: 'Choose the Formats',
    v: 'Gifs, lead magnets, cheatsheets and infographics each earn attention differently, and each is mapped to a funnel stage. Top of funnel builds reach, middle proves competence, bottom asks for the conversation — so the feed is never all one or all the other.',
  },
  {
    k: 'Ideate the Content',
    v: 'Ideas come from two places: the resources and knowledge already inside the business, and posts that have demonstrably travelled in this market. Working from both means the calendar is never blocked on inspiration.',
  },
  {
    k: 'Design the Visuals',
    v: 'Every asset is built in Figma against one template system, so the feed reads as a single brand rather than a scrapbook. Founder POV posts and employee-led posts run in parallel — the same system, published from more than one account.',
  },
  {
    k: 'Publish and Capture Interest',
    v: 'Posts go out on a fixed cadence across the founder and employee accounts. Trigify then watches who engages — the likes, comments and profile views that signal intent — and turns that warm audience into a list the outbound engine can work.',
  },
  {
    k: 'Model the Ads on What Already Works',
    v: 'Competitor ads are scraped and analysed for the patterns that keep reappearing: the hooks, offers and formats a market has already voted for. Paid budget starts from that evidence rather than from a blank page.',
  },
  {
    k: 'Generate Copy and Visuals',
    v: 'Ad copy and creative are generated against those patterns and your positioning, so variants arrive in volume instead of one at a time. Volume is what makes testing meaningful — a single creative cannot tell you what the market responds to.',
  },
  {
    k: 'Test Before Scaling',
    v: 'Variants go head to head before spend goes behind any of them. The point is to lose cheaply and early, so the budget that follows is placed on something that has already proven it works.',
  },
  {
    k: 'Launch, Track and Feed Back',
    v: 'Winners launch across LinkedIn and Meta with performance tracked per variant. Results feed back into the next round of scraping and generation, so each cycle starts better informed than the last rather than resetting.',
  },
];
