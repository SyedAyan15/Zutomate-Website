# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

The Zutomate marketing site — `zutomate.com`. Zutomate is a B2B GTM automation and AI agency; the site positions it as a full-stack AI Growth Systems agency, not a Clay-only shop.

**This repo is the live site.** There is an older static-HTML version of the same site at `d:\Zuromate` — it is an archive, nothing serves it, and it should not be edited. Both folders confusingly share the same GitHub remote.

## Commands

```powershell
npm run dev      # http://localhost:3000
npm run build    # run before pushing; catches TS errors the dev server tolerates
npm run lint     # eslint
```

There is no test suite. `playwright` is in `devDependencies` but has no config and no specs.

## Deploying

Vercel builds from GitHub `SyedAyan15/Zutomate-Website`, branch **`main`**.

The local branch here is **`master`**, with no upstream configured, so a bare `git push` will not work:

```powershell
git push origin master:main
```

## Architecture

**Everything is CSS-in-one-file.** `app/globals.css` is ~2,900 lines of vanilla CSS driven by CSS variables. Tailwind v4 is in `package.json`, but it is **not wired up and not used** — `postcss.config.mjs` is empty, `globals.css` has no `@import "tailwindcss"`, and components use semantic class names (`hero-trust-card`, `gtm-col`). Do not start writing utility classes; they will not compile.

**Fonts come from a `<link>` tag**, not `next/font`. Bricolage Grotesque and DM Sans are loaded via Google Fonts in the `<head>` of `app/layout.tsx`.

**The homepage is a flat composition.** `app/page.tsx` renders 16 components in document order; that file is the fastest way to understand the page. Most components are `'use client'` — the exceptions are `GtmSection`, `AiSection`, `CrmSection`, and `Partners`.

**SVG flow charts live outside the TSX.** This is the least obvious thing in the codebase:

- `GtmSection` / `AiSection` / `CrmSection` are server components that read raw markup at build time with `fs.readFileSync(path.join(process.cwd(), 'app', 'data', 'svgs', 'svg_<slug>.html'))`.
- That string is handed to `FlowCol`, a client component, which injects it via `dangerouslySetInnerHTML` into an `<svg>` carrying the `viewBox`.
- **To change a flow chart, edit the `.html` file in `app/data/svgs/`, not the component.** The `viewBox` for each chart is declared in the section component's `cols` array, so height changes need editing in both places.

**Animation is framer-motion**, not the CSS/IntersectionObserver approach used by the old static site. `FlowCol` uses `whileInView` with `viewport={{ once: true }}`.

**The globe is real 3D.** `GlobeSection` / `GlobeCanvas` use `three` + `@react-three/fiber` + `@react-three/drei`, textured with `/assets/earth-land.jpg`. It is the heaviest thing on the page.

**Navbar** (`app/components/Navbar.tsx`) morphs between `nav-top` and `nav-scrolled` on scroll. The sliding pill indicator is measured from `offsetLeft`/`offsetWidth`, and a `scrollLockUntil` ref suppresses the scroll listener for 1.5s after a nav click so the pill does not jump mid-scroll.

**Testimonial copy is inline** in `Testimonials.tsx` as a `cards` array; avatars are in `public/assets/avatars/`.

## Icons

`app/favicon.ico` and `app/apple-icon.png` are Next file conventions and emit their own link tags. `public/favicon.svg` is declared through `metadata.icons` in `layout.tsx`.

Gotcha: setting `metadata.icons` **suppresses the file convention's apple-touch tag**, which is why `apple` is named explicitly there. If you touch that block, rebuild and check the emitted `<link rel=...icon>` tags in `.next/server/app/index.html`.

Google Search reads `/favicon.ico`, so that file must always carry the brand mark — a wrong `.ico` shows up in search results even when the browser tab looks correct.

## Brand system

```
--navy:   #0d1b2e   page background, always
--orange: #F26522   accents, CTAs
--pearl:  #EDECEA   contrast sections
```

Opacity variants `--w80` / `--w55` / `--w40` / `--w12` / `--w06` are defined in `globals.css`. Never use a black background. Headings are Bricolage Grotesque 500 with tight letter-spacing; body is DM Sans. Size headings with `clamp()`.

Detailed rules live in `.claude/skills/`: `rules.md` (hard constraints), `components.md`, `copy.md`, `flowcharts.md` (viewBox standards), `case-studies.md`, `tools-logos.md`.

## SEO routes

`app/robots.ts` and `app/sitemap.ts` generate `/robots.txt` and `/sitemap.xml`. Both share `BASE_URL` from `app/site.ts`.

**Adding a page means adding it to the `routes` array in `app/sitemap.ts`** — nothing discovers routes automatically. Paths must keep their trailing slash to match `trailingSlash: true`, or the sitemap will point at URLs that redirect.

## Known gaps

- `/recruiterassistant` and `/recruiterassistant/contact` existed on the old static site and 404 in production — they were never migrated. Deliberately left out of the sitemap.
- `tailwindcss`, `@tailwindcss/postcss`, and `playwright` are unused dependencies.
- `out/` is a stale artifact from an earlier static export; `next.config.ts` no longer sets `output: 'export'`.
