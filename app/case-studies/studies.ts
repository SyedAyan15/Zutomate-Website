/* The case study index. One entry per study — adding a study is a matter of
 * adding an object here and dropping its logo in /public/assets/case-studies.
 *
 * `logo` is an image path; `wordmark` is the fallback for studies that have no
 * logo file yet, set in type rather than shipping a broken image. */

export type Study = {
  slug: string;
  industry: string;
  company: string;
  logo?: string;
  title: string;
};

export const STUDIES: Study[] = [
  {
    slug: '/goso',
    industry: 'Marketing Agency',
    company: 'GOSO',
    logo: 'goso.jpg',
    title:
      'How we generated $265K in revenue in 6 months for GOSO through outbound and RevOps.',
  },
  {
    slug: '/nuvaris-ai',
    industry: 'AI',
    company: 'Nuvaris AI',
    logo: 'nuvarisai.png',
    title:
      'We generated $62K in revenue for Nuvaris AI through content and outbound in 3 months.',
  },
  {
    slug: '/shopwave',
    industry: 'B2B Retail Tech',
    company: 'Shopwave',
    logo: 'shopwave.png',
    title:
      'How we made $325K in revenue for Shopwave through outbound and RevOps implementation.',
  },
];
