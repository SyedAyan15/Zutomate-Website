# Skill: Case Study Pages

Each case study is its own route directory holding a `page.tsx` and a co-located `styles.css`: `app/shopwave/`, `app/goso/`, `app/truclean/`, `app/discover-assessments/`. The listing page is `app/case-studies/`.

## Structure (always follow this order)

1. `<Navbar />`
2. Hero: client logo badge → h1 → stats bar
3. Two-column layout: content (left) + sticky sidebar (right)
4. Content sections: Client Overview → Context → The Challenge → Our Approach → Tech Stack → Results → In Summary
5. `<Footer />`

`RevealObserver` is imported to drive the scroll reveals.

## Styling

- Styles live in the route's own `styles.css`, imported at the top of `page.tsx` with `import './styles.css'`. **Do not put case study styles in `app/globals.css`.**
- Prefix every class and variable `cs-` (`--cs-muted`, `.cs-detail-hero`, `.cs-stats-bar`) so nothing collides with the site-wide sheet.
- The page still inherits `globals.css` for nav and footer.

## Hero

- **No breadcrumb text.** The client logo badge opens the page directly.
- Client logo badge: inline SVG icon + company name in a subtle dark card — `rgba(255,255,255,0.04)` background, `rgba(255,255,255,0.08)` border, 10px radius.
- The client logo SVG should match the one used in the Partners section.
- `h1` uses Bricolage Grotesque, `font-weight: 500`, `letter-spacing: -1.5px`, with the key phrase wrapped in `<em>` styled orange.
- Stats bar: 4 cells, orange value + muted uppercase label.

## Tech Stack section

- **Only show tools that have a real recognisable logo.**
- Render logos as inline SVG or images inside card boxes — no text pill labels.
- Do not list every tool used. Show the primary 2–4 platforms only.

## Writing rules

- **No em dashes** (`—`). Rewrite with a comma, a full stop, or natural phrasing.
- No AI-sounding filler: avoid "No bloat", "each layer does one thing well", "pipeline engine", "repeatable", "not a one-off spike".
- Keep paragraphs to 2–3 sentences.
- Problem cards, steps, and result cards should be direct and specific, not generic.

## Before shipping

Preview the page locally and get explicit sign-off before pushing a new case study.
