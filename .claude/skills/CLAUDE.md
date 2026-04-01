# Zutomate Website — Claude Code Project

## Project Overview
Zutomate is a B2B GTM automation and AI agency. The website is built in **Next.js 14 (App Router) + Tailwind CSS**, deployed on Hostinger via GitHub.

The site positions Zutomate as a full-stack AI Growth Systems agency — not just a Clay agency or automation tool. It builds outbound systems, AI agent workflows, RAG chatbots, and CRM automation for B2B businesses.

---

## Tech Stack
- **Framework:** Next.js 14 App Router
- **Styling:** Tailwind CSS (utility-first, no separate CSS files unless necessary)
- **Fonts:** Bricolage Grotesque (headings, weight 500) + DM Sans (body)
- **Deployment:** Hostinger via GitHub SSH
- **Icons:** Inline SVG only (no icon libraries)

---

## Brand System

### Colours
```
--navy:   #0d1b2e   (page background — always)
--orange: #F26522   (primary accent, CTAs, highlights)
--white:  #ffffff
```
Never use black backgrounds. The page background is always `#0d1b2e`.

### Typography
- **Headlines:** Bricolage Grotesque, weight 500, letter-spacing -1px to -1.5px
- **Body / UI:** DM Sans, weight 400-600
- **Font sizes:** Use `clamp()` for responsive headings

### Spacing
- Section padding: `96px 52px` (desktop), `64px 24px` (mobile)
- Component gaps: 20px between cards, 32px inside cards

---

## Site Sections (in order)
1. Navbar (fixed, morphs to pill on scroll)
2. Hero (canvas dot-grid background, email form)
3. Partner Logos Strip (dual-row infinite scroll)
4. Why Zutomate (4-col grid: Intelligence / AI Systems / Revenue / Chatbots)
5. Testimonials (infinite circular slider, 10 reviews)
6. Services - GTM Systems (3-col SVG flow charts)
7. Services - AI Agent Systems (2-col)
8. Services - Automated CRM Systems (2-col)
9. CTA ("Ready to build your system?")
10. 90-Day Action Plan (Gantt-style timeline)

---

## Component Rules
See `skills/components.md` for detailed component patterns.

## Copy & Tone Rules
See `skills/copy.md`

## SVG Flow Chart Rules
See `skills/flowcharts.md`

## Do Not Rules
See `rules.md`

---

## Case Study Pages

### File naming
Each case study is a standalone HTML file named after the client: `shopwave.html`, `clientname.html`, etc.

### Structure (always follow this order)
1. Zutomate nav (logo.svg, same links as site nav)
2. Hero: client logo badge → h1 → stats bar
3. Main 2-col layout: content (left) + sticky sidebar (right)
4. Content sections: Client Overview → Context → The Challenge → Our Approach → Tech Stack → Results → In Summary
5. Zutomate footer (identical to site footer)

### Hero
- **No breadcrumb text** ("Case Studies" label). The client logo badge opens the page directly.
- Client logo badge: inline SVG icon + company name, inside a subtle dark card (`rgba(255,255,255,0.04)` bg, `rgba(255,255,255,0.08)` border, 10px radius).
- The client logo SVG should match the logo used in the Partners section of index.html.
- h1 uses Bricolage Grotesque, `font-weight: 500`, `letter-spacing: -1.5px`, with the key phrase wrapped in `<em>` styled orange.
- Stats bar: 4 cells, key metrics, orange value + muted uppercase label.

### Tech Stack section
- **Only show tools that have a real recognisable logo.**
- Render logos as inline SVG icons inside card boxes — **no text pill labels**.
- Do not list every tool used. Only show the primary 2–4 platforms.

### Writing rules
- **No em dashes** (`—` or `&mdash;`). Rewrite the sentence using a comma, full stop, or natural phrasing.
- No AI-sounding filler: avoid "No bloat", "each layer does one thing well", "pipeline engine", "repeatable", "not a one-off spike". Write like a human agency, not a copywriting AI.
- Keep paragraphs short (2–3 sentences max).
- Problem cards, steps, and result cards should be direct and specific, not generic.

### CSS
- All case study styles go in a `<style>` block inside the HTML file — do **not** add case study styles to `styles.css`.
- Use CSS variable names prefixed `--cs-` to avoid clashing with the main site variables.
- The page inherits `styles.css` for nav and footer only.

### Before pushing
- **Never push a case study page to GitHub without explicit user approval after preview.**
- Always open the file locally in the browser first and wait for the user to confirm.
