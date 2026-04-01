# Skill: SVG Flow Charts

All service flow charts use raw SVG with a consistent coordinate system.

## ViewBox Standard
- **3-col GTM grid:** `viewBox="0 0 320 [height]"` — narrow charts
- **2-col AI Agent / CRM grid:** `viewBox="0 0 480 [height]"` — wider charts
- Width is always `100%`, height determined by content
- Always `style="display:block"` on the SVG

## Node Types & Styles

### Root (section title bar)
```js
fill="rgba(249,115,22,0.07)" stroke="rgba(249,115,22,0.5)" stroke-width="1"
// Font weight: 700, font-size: 11
```

### Default node
```js
fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.13)" stroke-width="1"
// Font weight: 600
```

### Tool node (has logos)
```js
fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" stroke-width="1"
// Font weight: 600
```

### Dashed node (branching paths)
```js
fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.2)" stroke-width="1" stroke-dasharray="4 3"
// Font weight: 500
```

### Terminal node (end state)
```js
fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.45)" stroke-width="1"
// Font weight: 600
```

## Connector Lines
```js
stroke="rgba(255,255,255,0.18)" stroke-width="1"
```
Always draw lines BEFORE nodes so nodes render on top.

## Spacing Rules
- Gap between consecutive nodes: **28px minimum**
- Node heights: standard = 38px, dashed branch = 60px, terminal = 56px, tool = 64-68px
- Node border-radius: `rx="6"` (standard), `rx="7"` (root/terminal)

## Text Rendering
```js
font-family="'Bricolage Grotesque', sans-serif"
font-size="11"
text-anchor="middle"
dominant-baseline="central"
fill="rgba(255,255,255,0.88)"
```
Sub-labels (below main text): `font-size="10"`, `fill="rgba(255,255,255,0.55)"`, `font-weight="500"`

## Logo Images in Nodes
- Always white background behind logo: `<rect ... fill="white" rx="4"/>`
- Logo image: `width="20" height="20"`, `preserveAspectRatio="xMidYMid meet"`
- Embed as base64 href on `<image>` tag
- Multiple logos side by side: iconW=20, iconGap=5, calculate center position

## Fan/Branch Pattern (3 dashed nodes)
```
Parent node bottom — vertical line down — horizontal bar — 3 vertical drops — 3 dashed nodes
After nodes — 3 verticals up — horizontal bar — vertical drop — next node
```

## Python Helper Function Pattern
```python
def N(x, y, w, h, label, label2=None, tools=[], variant="default"):
    # variant: root | default | tool | dashed | terminal
    # Returns rect + text (+ optional logo images) as SVG string

def L(x1, y1, x2, y2):
    # Returns connector line SVG string
```

## Column Width Scaling
When expanding a chart from 320-480 viewBox width, multiply all x values by 1.5:
- x=40, w=240 => x=60, w=360
- x=70, w=180 => x=105, w=270
- x=14, w=132 => x=21, w=198
