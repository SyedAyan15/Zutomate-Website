'use client';
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * An interval that only runs while the element is on screen, so a page
 * carrying several looping visuals costs nothing once they scroll past. Under
 * prefers-reduced-motion it never starts at all.
 *
 * `onTick` fires from the timer, which is the point: advancing state from a
 * timer callback keeps it out of an effect body, where it would cascade
 * renders on every frame of the loop.
 */
export function useTicker(intervalMs: number, onTick: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  const cb = useRef(onTick);
  const reduced = useReducedMotion();

  useEffect(() => {
    cb.current = onTick;
  }, [onTick]);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    let id: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      if (!id) id = setInterval(() => cb.current(), intervalMs);
    };
    const stop = () => {
      if (id) clearInterval(id);
      id = null;
    };

    const obs = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), {
      threshold: 0.2,
    });
    obs.observe(el);

    return () => {
      obs.disconnect();
      stop();
    };
  }, [intervalMs, reduced]);

  return { ref, reduced };
}

/**
 * Drives a looping visual from a step counter.
 *
 * The counter always starts at 0 and only advances once the element scrolls
 * into view, so a visitor watches the sequence begin rather than arriving
 * halfway through one already in progress.
 *
 * `steps: 0` gives an unbounded counter for visuals that advance a queue
 * rather than cycle a fixed sequence. `hold` is the frame the visual rests on
 * under reduced motion, where nothing ever advances — each caller picks one
 * that reads well as a still.
 */
export function useLoop(intervalMs: number, steps = 0, hold = 0) {
  const [step, setStep] = useState(0);
  const { ref, reduced } = useTicker(intervalMs, () =>
    setStep((s) => (steps ? (s + 1) % steps : s + 1)),
  );
  return { ref, step: reduced ? hold : step, reduced };
}
