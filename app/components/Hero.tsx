'use client';
import { useEffect, useRef } from 'react';

const WEBHOOK_URL = 'https://ayan15.app.n8n.cloud/webhook/e2fd5927-7bd8-42a9-905d-ab3199544058';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d')!;
    const GAP = 48;
    let W = 0, H = 0, ox = 0, oy = 0;
    let animId: number;

    function resize() {
      W = c!.width = c!.offsetWidth;
      H = c!.height = c!.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function frame() {
      ctx.clearRect(0, 0, W, H);
      ox = (ox + 0.10) % GAP;
      oy = (oy + 0.10) % GAP;

      for (let row = -GAP; row < H + GAP; row += GAP) {
        const py = row + oy;
        const dy = (py - H / 2) / (H / 2);
        const alpha = Math.max(0, Math.min(0.10, (Math.abs(dy) - 0.15) * 0.18));
        ctx.beginPath();
        ctx.moveTo(0, py);
        ctx.lineTo(W, py);
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      for (let col = -GAP; col < W + GAP; col += GAP) {
        const px = col + ox;
        const dx = (px - W / 2) / (W / 2);
        const alpha = Math.max(0, Math.min(0.10, (Math.abs(dx) - 0.15) * 0.18));
        ctx.beginPath();
        ctx.moveTo(px, 0);
        ctx.lineTo(px, H);
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      animId = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.querySelector('#hero-email') as HTMLInputElement).value;
    const company = (form.querySelector('#hero-company') as HTMLInputElement).value;

    const params = `?email=${encodeURIComponent(email)}&company_name=${encodeURIComponent(company)}&source=Hero+CTA`;
    fetch(WEBHOOK_URL + params, { method: 'GET', keepalive: true }).catch(() => {});

    const calendlyUrl = `https://calendly.com/zutomate/30min?email=${encodeURIComponent(email)}&a1=${encodeURIComponent(company)}`;
    window.location.href = calendlyUrl;
  }

  return (
    <section className="hero" id="home">
      <canvas id="dot-canvas" ref={canvasRef}></canvas>
      <div className="hero-glow"></div>

      <div className="hero-content">
        <div className="badge">
          <span className="badge-text">For B2B Businesses</span>
        </div>

        <h1>
          We Build <span className="accent">Predictable</span><br />
          <span className="muted">Growth Systems</span>
        </h1>

        <p className="hero-sub">
          Embedding intelligent AI workflows into businesses<br />
          to engineer end-to-end growth systems.
        </p>

        <form id="hero-cta-form" className="hero-form" onSubmit={handleSubmit}>
          <input type="email" id="hero-email" placeholder="Work email" required />
          <div className="vdivider"></div>
          <input type="text" id="hero-company" placeholder="Company name" required />
          <button type="submit">Book a Call →</button>
        </form>

        <div className="service-tags">
          <span className="tag">Outbound</span>
          <span className="tag">AI Automation</span>
          <span className="tag">RevOps</span>
          <span className="tag">Cold Email</span>
          <span className="tag">Lead Generation</span>
        </div>
      </div>
    </section>
  );
}
