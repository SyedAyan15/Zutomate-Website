/* FAQ content, kept as plain data so the same source renders the section and
   builds the FAQPage schema. A list item can lead with a bold label. */

export type Inline = string | { b: string; t: string };
export type Block = { p: string } | { ul: Inline[] };
export type FaqItem = { q: string; a: Block[]; cta?: boolean };

export const FAQS: FaqItem[] = [
  {
    q: 'What types of companies does Zutomate work with?',
    a: [
      { p: 'We partner with B2B companies selling high-ticket services or software who are ready to build a predictable, scalable pipeline.' },
      {
        ul: [
          'Founders looking to turn outbound into a consistent growth engine',
          'Sales teams that need a reliable flow of qualified opportunities',
          'Companies tired of one-off campaigns and ready for a system-first approach',
        ],
      },
      { p: "If you're serious about building infrastructure (not just running campaigns), we're a great fit." },
    ],
  },
  {
    q: 'What services does Zutomate offer?',
    a: [
      { p: 'We deliver an all-in-one go-to-market engine. No need to hire multiple agencies or freelancers:' },
      {
        ul: [
          'Outbound systems: cold email + LinkedIn outreach at scale',
          'AI-powered chatbots for lead capture and qualification',
          'CRM setup, automation, and pipeline management',
          'LinkedIn content strategy and managed posting',
          'Lead sourcing, enrichment, and hyper-personalisation',
        ],
      },
      { p: 'Marketing, sales, and automation unified into one system, working seamlessly to generate consistent, qualified opportunities.' },
    ],
  },
  {
    q: 'How flexible is your engagement model?',
    a: [
      { p: 'We keep things structured but flexible. Our engagements start with a 3-month minimum, with each month focused on specific outcomes:' },
      {
        ul: [
          { b: 'Month 1:', t: 'Foundation: infrastructure, ICP, tech stack, and first campaigns live' },
          { b: 'Month 2:', t: 'Activation: optimise sequences, launch AI systems, and qualify early signals' },
          { b: 'Month 3:', t: "Scale: expand what's working, compound results across channels" },
        ],
      },
      { p: 'Meaningful impact without long-term lock-in.' },
    ],
  },
  {
    q: "What if we don't get results?",
    a: [
      { p: "We stand behind the work. If the system doesn't perform to agreed benchmarks, we keep working with you at no additional cost until it does." },
      { p: 'Our incentive is your pipeline. We only win when you win.' },
    ],
  },
  {
    q: 'How is Zutomate different from other GTM agencies?',
    a: [
      { p: 'Most GTM agencies focus on a single channel, which caps your results. We take a system-first approach:' },
      {
        ul: [
          "We're not locked to one tool. We use a flexible, high-performance tech stack built for your context",
          'We combine outbound, AI, automation, and content into one unified growth system',
          'We go beyond GTM, supporting CRM, development, and growth infrastructure when needed',
        ],
      },
      { p: 'One partner. One system. Your entire growth engine, built and managed end to end.' },
    ],
  },
  {
    q: 'How can we get started?',
    a: [
      { p: "Getting started is simple. Book a free discovery call, and we'll take the time to understand your goals and your current setup. From there, we'll map out a solution that actually works for your business." },
    ],
    cta: true,
  },
];
