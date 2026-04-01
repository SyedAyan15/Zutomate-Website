# Rules — Hard Constraints for Zutomate Website

## NEVER DO
- Never use a black (`#000` or `#111`) background anywhere
- Never use `em dash (—)` in any copy — use a comma or rewrite the sentence
- Never use `en dash (–)` either
- Never add external CSS frameworks (Bootstrap, Bulma, etc.)
- Never use icon libraries (Heroicons npm, FontAwesome, etc.) — inline SVG only
- Never use `<form>` tags in React/JSX components — use `onClick` handlers instead
- Never use `localStorage` or `sessionStorage`
- Never add animations that loop infinitely without a user trigger (except the hero canvas and logo strip)
- Never change the page background colour from `#0d1b2e`
- Never use font weights above 600 for body text
- Never use Tailwind's `text-black` or `bg-black`
- Never remove the navbar pill-morph scroll behaviour
- Never hardcode pixel widths on SVG flow chart boxes — use the viewBox coordinate system

## ALWAYS DO
- Always use `font-family: 'Bricolage Grotesque', sans-serif` for all headings
- Always use `font-family: 'DM Sans', sans-serif` for body, labels, lists
- Always use `var(--orange)` (#F26522) for primary accents and CTA buttons
- Always use `var(--navy)` (#0d1b2e) for all section backgrounds
- Always include `align-items: start` on 2-col and 4-col grids so columns don't stretch
- Always embed logos and photos as base64 in the HTML (no `/public/` path dependencies for preview)
- Always add `position: relative; z-index: 10` on every section to sit above the hero canvas
- Always keep section border-top as `1px solid rgba(255,255,255,0.07)`
- Always use `border-radius: 16px` for large cards, `8px` for small pills/tags
- Always test that SVG flow chart viewBoxes match: AI Agent and CRM sections both use `viewBox="0 0 480 ..."`

## COPY RULES
- Tone: direct, confident, no fluff
- No exclamation marks in headings
- No phrases like "cutting-edge", "innovative", "game-changing", "revolutionise"
- Keep testimonial quotes trimmed to 2-3 sentences max
- Badge labels: ALL CAPS, letter-spacing 1.8px
- CTA button text: short, action-first ("Book a Call", "Get Started", not "Click here to book a call")

## CODE QUALITY
- No inline styles unless absolutely necessary — use CSS classes
- Group all section CSS under a clear comment: `/* —— SECTION NAME —— */`
- All JavaScript must be wrapped in an IIFE: `(function() { ... })();`
- IntersectionObserver thresholds: 0.08-0.15
- Animation durations: entrance = 400ms, hover = 200ms
