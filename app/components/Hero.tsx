'use client';
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const WEBHOOK_URL = 'https://ayan15.app.n8n.cloud/webhook/e2fd5927-7bd8-42a9-905d-ab3199544058';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  // Spring-smoothed glow position
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(40);
  const springX = useSpring(glowX, { damping: 30, stiffness: 120 });
  const springY = useSpring(glowY, { damping: 30, stiffness: 120 });

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d')!;
    const GAP = 40;
    let W = 0, H = 0;
    let animId: number;

    function resize() {
      W = c!.width = c!.offsetWidth;
      H = c!.height = c!.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function onMouseMove(e: MouseEvent) {
      const rect = c!.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      // Update spring glow position as percentage
      glowX.set((e.clientX / window.innerWidth) * 100);
      glowY.set((e.clientY / window.innerHeight) * 100);
    }
    window.addEventListener('mousemove', onMouseMove);

    function frame() {
      ctx.clearRect(0, 0, W, H);

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const INFLUENCE = 180; // px radius where dots react

      const cols = Math.ceil(W / GAP) + 2;
      const rows = Math.ceil(H / GAP) + 2;

      for (let r = 0; r < rows; r++) {
        for (let col = 0; col < cols; col++) {
          const x = col * GAP;
          const y = r * GAP;

          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - dist / INFLUENCE);

          // Base: tiny dim dot, edges fade out
          const edgeFadeX = Math.max(0, Math.min(1, Math.min(x / 80, (W - x) / 80)));
          const edgeFadeY = Math.max(0, Math.min(1, Math.min(y / 80, (H - y) / 80)));
          const edgeFade = edgeFadeX * edgeFadeY;

          const baseAlpha = 0.055 * edgeFade;
          const dotSize   = 1 + proximity * 3.5;
          const alpha     = baseAlpha + proximity * 0.55 * edgeFade;

          // Blend white → orange based on proximity
          const r_c = Math.round(255 + (242 - 255) * proximity);
          const g_c = Math.round(255 + (101 - 255) * proximity);
          const b_c = Math.round(255 + (34  - 255) * proximity);

          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r_c},${g_c},${b_c},${alpha})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email   = (form.querySelector('#hero-email')   as HTMLInputElement).value;
    const company = (form.querySelector('#hero-company') as HTMLInputElement).value;

    const params = `?email=${encodeURIComponent(email)}&company_name=${encodeURIComponent(company)}&source=Hero+CTA`;
    fetch(WEBHOOK_URL + params, { method: 'GET', keepalive: true }).catch(() => {});

    const calendlyUrl = `https://calendly.com/zutomate/30min?email=${encodeURIComponent(email)}&a1=${encodeURIComponent(company)}`;
    window.location.href = calendlyUrl;
  }

  return (
    <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      <canvas id="dot-canvas" ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />

      {/* Cursor-following radial glow */}
      <motion.div
        className="hero-cursor-glow"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(600px circle at var(--gx) var(--gy), rgba(242,101,34,0.10) 0%, transparent 70%)',
          // Use a CSS trick: update custom properties via inline style driven by spring
        }}
        animate={{}}
      />
      {/* Spring glow overlay — updates CSS vars */}
      <SpringGlow springX={springX} springY={springY} />

      <div className="hero-glow" />

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
          We Build <span className="accent">Predictable</span><br />
          <span className="muted">Growth Systems</span>
        </motion.h1>

        <motion.p className="hero-sub" variants={item}>
          Embedding intelligent AI workflows into businesses<br />
          to engineer end-to-end growth systems.
        </motion.p>

        <motion.form
          id="hero-cta-form"
          className="hero-form"
          onSubmit={handleSubmit}
          variants={item}
        >
          <input type="email" id="hero-email" placeholder="Work email" required />
          <div className="vdivider"></div>
          <input type="text" id="hero-company" placeholder="Company name" required />
          <button type="submit">Book a Call →</button>
        </motion.form>

        <motion.div className="service-tags" variants={item}>
          <span className="tag">Go-To-Market</span>
          <span className="tag">ABM</span>
          <span className="tag">RevOps</span>
          <span className="tag">AI Agents</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Separate client component so spring values can drive DOM directly
function SpringGlow({ springX, springY }: { springX: ReturnType<typeof useSpring>; springY: ReturnType<typeof useSpring> }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubX = springX.on('change', () => update());
    const unsubY = springY.on('change', () => update());

    function update() {
      if (!ref.current) return;
      ref.current.style.background = `radial-gradient(700px circle at ${springX.get()}% ${springY.get()}%, rgba(242,101,34,0.11) 0%, transparent 65%)`;
    }

    return () => { unsubX(); unsubY(); };
  }, [springX, springY]);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        transition: 'background 0.05s',
      }}
    />
  );
}
