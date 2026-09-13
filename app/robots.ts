import type { MetadataRoute } from 'next';

import { BASE_URL } from './site';

/* Answer engines and the crawlers that feed them, named explicitly so the
   policy is unambiguous rather than inferred from the wildcard. A named group
   replaces the `*` group for that crawler, so each one carries its own allow. */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'meta-externalagent',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_CRAWLERS, allow: '/' },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
