'use client';
import { useEffect } from 'react';

const BAND = 38;
const LEVEL_DELAY = 180;
const LEVEL_DUR = 400;

function getEffectiveY(el: Element): number {
  const tag = el.tagName.toLowerCase();
  let y = parseFloat(el.getAttribute('y') || el.getAttribute('y1') || '0');
  if (isNaN(y) || y === 0) {
    try { y = (el as SVGGraphicsElement).getBBox().y; } catch { y = 0; }
  }
  return y;
}

function setupCol(col: Element) {
  const svg = col.querySelector('svg');
  if (!svg || (col as HTMLElement).dataset.flowReady) return;
  (col as HTMLElement).dataset.flowReady = '1';

  const children = Array.from(svg.childNodes).filter(n => n.nodeType === 1) as Element[];
  if (!children.length) return;

  children.sort((a, b) => getEffectiveY(a) - getEffectiveY(b));

  const levels: { baseY: number; els: Element[] }[] = [];
  children.forEach(el => {
    const y = getEffectiveY(el);
    let placed = false;
    for (const lvl of levels) {
      if (Math.abs(y - lvl.baseY) <= BAND) { lvl.els.push(el); placed = true; break; }
    }
    if (!placed) levels.push({ baseY: y, els: [el] });
  });

  levels.forEach((lvl) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.style.opacity = '0';
    g.style.transform = 'translateY(-20px)';
    g.style.transition = `opacity ${LEVEL_DUR}ms ease, transform ${LEVEL_DUR}ms ease`;
    g.dataset.levelIdx = String(levels.indexOf(lvl));
    lvl.els.forEach(el => { svg.removeChild(el); g.appendChild(el); });
    svg.appendChild(g);
  });
}

function revealCol(col: Element) {
  const groups = col.querySelectorAll<HTMLElement>('g[data-level-idx]');
  groups.forEach((g, i) => {
    setTimeout(() => {
      g.style.opacity = '1';
      g.style.transform = 'translateY(0)';
    }, i * LEVEL_DELAY);
  });
}

export default function FlowAnimations() {
  useEffect(() => {
    const cols = document.querySelectorAll('.gtm-col');
    cols.forEach(setupCol);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealCol(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    cols.forEach(col => observer.observe(col));
    return () => observer.disconnect();
  }, []);

  return null;
}
