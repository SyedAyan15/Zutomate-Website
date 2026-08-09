# Skill: Component Patterns

## Badge / Section Label
```html
<div class="section-badge">LABEL TEXT</div>
```
```css
.section-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 18px 8px;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 100px;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.70);
  position: relative;
}
/* Orange underline accent */
.section-badge::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: #F26522;
  border-radius: 2px;
}
```

---

## Section Heading
```css
.section-heading {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: clamp(28px, 3.6vw, 48px);
  font-weight: 500;
  color: rgba(255,255,255,0.92);
  letter-spacing: -1px;
  line-height: 1.15;
  margin: 0 auto 16px;
  max-width: 680px;
  text-align: center;
}
```

---

## Testimonial Card
```html
<div class="tcard [featured]">
  <div class="tcard-quote">
    <span class="tcard-quote-mark">&ldquo;</span>
    Quote text here...
  </div>
  <div class="tcard-footer">
    <div class="tcard-person">
      <img class="tcard-avatar" src="[base64]" alt="Name" />
      <div>
        <span class="tcard-name">Full Name</span>
        <span class="tcard-title">Title @ Company</span>
      </div>
    </div>
    <span class="tcard-company">Company Name</span>
  </div>
</div>
```
- Add class `featured` for brighter background: `rgba(255,255,255,0.07)`
- Default background: `rgba(255,255,255,0.03)`
- Card width in slider: `calc(50% - 62px)` (2 visible at a time)

---

## Why Zutomate Card (4-col grid)
```html
<div class="why-card [why-card-featured]">
  <div class="why-icon [why-icon-featured]"><!-- SVG --></div>
  <div class="why-layer [why-layer-featured]">LAYER LABEL</div>
  <div class="why-card-title">Card Title</div>
  <ul class="why-list">
    <li>Bullet point</li>
  </ul>
</div>
```
- Featured card (middle): orange tint `rgba(242,101,34,0.06)`, border `rgba(242,101,34,0.15)`
- Grid: `grid-template-columns: 1fr 1fr 1fr 1fr`

---

## GTM Flow Chart Column
```html
<div class="gtm-col">
  <p class="gtm-col-title">Chart Title</p>
  <svg viewBox="0 0 480 [height]" width="100%" style="display:block">
    <!-- Lines first, then Nodes -->
  </svg>
</div>
```
**Column CSS:**
```css
.gtm-col {
  background: #0f1829;
  padding: 32px 20px 32px;
  border-right: 1px solid rgba(255,255,255,0.07);
}
.gtm-col-title {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
  margin-bottom: 24px;
}
```

---

## CTA Section
```html
<section class="services-cta">
  <h2>Ready to build your system?</h2>
  <p>Click below to get your system built</p>
  <a href="#">Book a Call</a>
</section>
```
```css
.services-cta {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 88px 52px 100px;
  text-align: center;
  background: var(--navy);
}
.services-cta a {
  display: inline-block;
  padding: 14px 36px;
  background: #F26522;
  color: #fff;
  border-radius: 100px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
}
```

---

## Navbar Pill Morph (JS pattern)
```js
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled'); // applies pill styles
  } else {
    nav.classList.remove('scrolled');
  }
});
```
- Full-width state: `w-full px-[52px] py-5 border-b border-white/10`
- Pill state: `fixed top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/[0.13] backdrop-blur-xl`

---

## Slider (Testimonials)
- **Infinite loop pattern:** clone first 2 and last 2 cards
- Start position: `perView` (index of first real card after clones)
- On `transitionend`: silently jump to real card if on clone
- Dot indicator: orange pill `width: 20px; border-radius: 3px` for active
- Cards clickable: clicking advances slider
- Side arrows: `position: absolute`, frosted glass `backdrop-filter: blur(8px)`
