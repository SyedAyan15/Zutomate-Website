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
      'We built an outbound and RevOps system that generated $85K in pipeline for GOSO in 3 months.',
  },
  {
    slug: '/nuvaris-ai',
    industry: 'Software',
    company: 'Nuvaris AI',
    logo: 'nuvarisai.png',
    title:
      'We built a content and outbound system that generated $62K in pipeline for Nuvaris AI in 3 months.',
  },
  {
    slug: '/shopwave',
    industry: 'Software',
    company: 'Shopwave',
    logo: 'shopwave.png',
    title:
      'We built a system that finds e-commerce store owners for Shopwave through Store Leads.',
  },
  {
    slug: '/victoria-james',
    industry: 'Recruitment',
    company: 'Victoria James Recruitment',
    logo: 'victoria-james.png',
    title:
      'We built an outbound system that generated 15 leads in a month for Victoria James Recruitment.',
  },
];
