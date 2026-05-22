'use client';
import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const reveals = document.querySelectorAll<Element>('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 50);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
