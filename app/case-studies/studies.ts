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
    slug: '/shopwave',
    industry: 'B2B Retail Tech',
    company: 'Shopwave',
    logo: 'shopwave.png',
    title:
      'How we made $325K in revenue for Shopwave through outbound and RevOps implementation.',
  },
  {
    slug: '/discover-assessments',
    industry: 'HR Tech',
    company: 'Discover Assessments',
    title:
      'How we unstuck a stalled sales engine and delivered 10+ enterprise leads in month one for Discover Assessments.',
  },
  {
    slug: '/truclean',
    industry: 'Commercial Cleaning',
    company: 'TruClean',
    title:
      'How we took TruClean from zero outbound to a consistent acquisition engine delivering qualified leads every month.',
  },
];
