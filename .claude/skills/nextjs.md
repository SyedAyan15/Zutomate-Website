# Skill: Next.js Implementation Guide

## Project Structure
```
/app
  layout.tsx        — fonts, metadata, global styles
  page.tsx          — homepage (imports all sections)
  globals.css       — CSS variables, base reset
/components
  Navbar.tsx
  Hero.tsx
  PartnerLogos.tsx
  WhyZutomate.tsx
  Testimonials.tsx
  ServicesSection.tsx
    GTMSystems.tsx
    AIAgentSystems.tsx
    CRMSystems.tsx
  CTASection.tsx
  ActionPlan.tsx    — 90-day gantt
/public
  /tools            — logo files (hubspot.webp, slack.png, etc.)
```

## Font Setup (layout.tsx)
```tsx
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-bricolage',
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
})
```

## CSS Variables (globals.css)
```css
:root {
  --navy: #0d1b2e;
  --orange: #F26522;
  --white: #ffffff;
  --font-bricolage: 'Bricolage Grotesque', sans-serif;
  --font-dm: 'DM Sans', sans-serif;
}

body {
  background: var(--navy);
  color: #fff;
  font-family: var(--font-dm);
}
```

## Tailwind Config
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: '#0d1b2e',
        orange: '#F26522',
      },
      fontFamily: {
        heading: ['Bricolage Grotesque', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
}
```

## SVG Flow Charts in JSX
Use the `L` and `N` helper components:

```tsx
// In a flow chart component:
const FF = "'Bricolage Grotesque', sans-serif"

const Line = ({ x1, y1, x2, y2 }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2}
    stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
)

const Node = ({ x, y, w, h, label, variant = 'default' }) => {
  const styles = {
    root:    { fill: 'rgba(249,115,22,0.07)', stroke: 'rgba(249,115,22,0.5)' },
    default: { fill: 'rgba(255,255,255,0.04)', stroke: 'rgba(255,255,255,0.13)' },
    dashed:  { fill: 'rgba(255,255,255,0.02)', stroke: 'rgba(255,255,255,0.2)', strokeDasharray: '4 3' },
    terminal:{ fill: 'rgba(249,115,22,0.06)', stroke: 'rgba(249,115,22,0.45)' },
  }
  const s = styles[variant]
  return (
    <>
      <rect x={x} y={y} width={w} height={h} rx={6} {...s} strokeWidth="1" />
      <text x={x + w/2} y={y + h/2} textAnchor="middle" dominantBaseline="central"
        fontFamily={FF} fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.88)">
        {label}
      </text>
    </>
  )
}
```

## Logo Images in SVG (Next.js)
In Next.js, use `/public/tools/` path (not base64):
```tsx
<image href="/tools/hubspot.webp" x={ix} y={iy} width="20" height="20"
  preserveAspectRatio="xMidYMid meet" />
```

## Intersection Observer (Client Components)
```tsx
'use client'
import { useEffect, useRef } from 'react'

export function AnimatedSection({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref} className="opacity-0 translate-y-4 transition-all duration-400 [&.visible]:opacity-100 [&.visible]:translate-y-0">{children}</div>
}
```

## Canvas Hero (Client Component)
```tsx
'use client'
import { useEffect, useRef } from 'react'

export function HeroCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const c = canvasRef.current
    // ... dot grid animation
  }, [])
  return <canvas ref={canvasRef} id="dot-canvas" className="absolute inset-0 w-full h-full" />
}
```

## Navbar Scroll Morph
```tsx
'use client'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={scrolled
      ? 'fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%-80px)] max-w-[820px] px-5 py-2.5 rounded-full border border-white/[0.13] bg-[#0a1628]/90 backdrop-blur-xl transition-all'
      : 'fixed w-full px-[52px] py-5 border-b border-white/10 bg-[#0d1b2e]/95 transition-all'
    }>
      {/* nav content */}
    </nav>
  )
}
```

## Testimonials Infinite Slider
Key logic for infinite loop:
```tsx
// Clone first/last perView cards
// Start at pos = perView (skip clones)
// On transitionend: if pos >= total+perView — jump to perView (no animation)
// If pos < perView — jump to total+perView-1 (no animation)
```

## Image Handling
- Client photos: store in `/public/testimonials/` as WebP
- Tool logos: store in `/public/tools/` as their original format
- Use Next.js `<Image>` component with `width`, `height` props
