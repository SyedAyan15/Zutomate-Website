'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import StartConversation from './StartConversation';


const ease = [0.25, 0.46, 0.45, 0.94] as const;
const premiumEase = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const TRUST_AVATARS = [
  { src: '/assets/avatars/david.jpg', alt: 'David Romic, Director at Calculated Solutions' },
  { src: '/assets/avatars/catrice.jpg', alt: 'Catrice L., Sr Talent Acquisition Partner' },
  { src: '/assets/avatars/ofek.jpg', alt: 'Ofek Mussafi, Strategic Account Manager at DNAnexus' },
  { src: '/assets/avatars/sam.png', alt: 'Sam Elliott, CEO at Circular Resourcing' },
];

const TRUST_COUNT = 50;

function TrustedByCard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let n = 0;
      const id = setInterval(() => {
        n = Math.min(n + 2, TRUST_COUNT);
        setCount(n);
        if (n >= TRUST_COUNT) clearInterval(id);
      }, 30);
    }, 900);
    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <motion.div
      className="hero-trust-card"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.9, ease: premiumEase }}
    >
      <div className="hero-trust-inner">
        <div className="trust-avatars">
          {TRUST_AVATARS.map((a) => (
            <span className="trust-avatar" key={a.src}>
              <Image src={a.src} alt={a.alt} fill sizes="32px" />
            </span>
          ))}
        </div>
        <div className="trust-copy">
          <span className="trust-count">{count}+</span>
          <span className="trust-label">B2B founders trust us</span>
        </div>
      </div>
    </motion.div>
  );
}

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

    // Cursor spotlight. `target` is where the pointer actually is; `glow` eases
    // toward it so the light trails rather than snapping, and `a` fades the
    // whole effect in and out as the pointer enters and leaves the hero.
    const RADIUS = 260;
    const target = { x: 0, y: 0, on: false };
    const glow = { x: 0, y: 0, a: 0 };
    const host = c.parentElement;

    function onMove(e: PointerEvent) {
      const r = c!.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
      if (!target.on) {
        // First entry: place the glow under the cursor so it fades in on the
        // spot instead of sliding in from a stale position.
        glow.x = target.x;
        glow.y = target.y;
      }
      target.on = true;
    }
    function onLeave() {
      target.on = false;
    }

    host?.addEventListener('pointermove', onMove);
    host?.addEventListener('pointerleave', onLeave);

    function frame() {
      ctx.clearRect(0, 0, W, H);
      ox = (ox + 0.10) % GAP;
      oy = (oy + 0.10) % GAP;

      for (let row = -GAP; row < H + GAP; row += GAP) {
        const py = row + oy;
        const dy = (py - H / 2) / (H / 2);
        const alpha = Math.max(0, Math.min(0.16, (Math.abs(dy) - 0.12) * 0.26));
        ctx.beginPath();
        ctx.moveTo(0, py);
        ctx.lineTo(W, py);
        ctx.strokeStyle = `rgba(13,27,46,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      for (let col = -GAP; col < W + GAP; col += GAP) {
        const px = col + ox;
        const dx = (px - W / 2) / (W / 2);
        const alpha = Math.max(0, Math.min(0.16, (Math.abs(dx) - 0.12) * 0.26));
        ctx.beginPath();
        ctx.moveTo(px, 0);
        ctx.lineTo(px, H);
        ctx.strokeStyle = `rgba(13,27,46,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      glow.x += (target.x - glow.x) * 0.08;
      glow.y += (target.y - glow.y) * 0.08;
      glow.a += ((target.on ? 1 : 0) - glow.a) * 0.07;

      // Redraw only the lines near the cursor, stroked with a radial gradient.
      // The gradient supplies the falloff, so no clipping or masking is needed
      // and there is no hard edge where the spotlight ends.
      if (glow.a > 0.004) {
        const g = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, RADIUS);
        g.addColorStop(0, `rgba(242,101,34,${0.60 * glow.a})`);
        g.addColorStop(0.5, `rgba(242,101,34,${0.20 * glow.a})`);
        g.addColorStop(1, 'rgba(242,101,34,0)');
        ctx.strokeStyle = g;
        ctx.lineWidth = 1;

        for (let row = -GAP; row < H + GAP; row += GAP) {
          const py = row + oy;
          if (Math.abs(py - glow.y) > RADIUS) continue;
          ctx.beginPath();
          ctx.moveTo(glow.x - RADIUS, py);
          ctx.lineTo(glow.x + RADIUS, py);
          ctx.stroke();
        }
        for (let col = -GAP; col < W + GAP; col += GAP) {
          const px = col + ox;
          if (Math.abs(px - glow.x) > RADIUS) continue;
          ctx.beginPath();
          ctx.moveTo(px, glow.y - RADIUS);
          ctx.lineTo(px, glow.y + RADIUS);
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      window.removeEventListener('resize', resize);
      host?.removeEventListener('pointermove', onMove);
      host?.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(animId);
    };
  }, []);


  return (
    <section className="hero" id="home">
      <canvas id="dot-canvas" ref={canvasRef}></canvas>
      <div className="hero-glow"></div>

      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="badge" variants={item}>
          <span className="badge-text">For B2B Businesses</span>
        </motion.div>

        <motion.h1 variants={item}>
          <span className="hl-bold">RevOps and GTM Engineering</span>{' '}
          <span className="hl-light">for B2B companies running on</span>{' '}
          <span className="hl-bold">HubSpot and Clay</span>
        </motion.h1>

        <motion.p className="hero-sub" variants={item}>
          Zutomate is a RevOps and GTM engineering agency for B2B companies. We design, build, and manage the systems behind modern GTM teams, from CRM architecture and data infrastructure to outbound systems, integrations, and workflow automation.
        </motion.p>

        <motion.div className="sc-wrap" id="hero-cta-form" variants={item}>
          <StartConversation />
        </motion.div>

        <motion.div className="service-tags" variants={item}>
          <span className="tag">Go-To-Market</span>
          <span className="tag">ABM</span>
          <span className="tag">RevOps</span>
          <span className="tag">AI Agents</span>
          <TrustedByCard />
        </motion.div>
      </motion.div>
    </section>
  );
}
