'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Step } from './types';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Steps({ steps }: { steps: Step[] }) {
  /* every row starts closed: arriving mid-explanation reads as a stray open
     panel rather than an invitation */
  const [open, setOpen] = useState(-1);

  return (
    <ol className="gf-steps">
      {steps.map((s, i) => {
        const isOpen = open === i;
        return (
          <li className={`gf-step-row${isOpen ? ' is-open' : ''}`} key={s.k}>
            <button
              type="button"
              className="gf-step-head"
              aria-expanded={isOpen}
              aria-controls={`step-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="gf-step-k">
                Step {i + 1}: {s.k}
              </span>
              <span className="gf-step-plus" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`step-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="gf-step-v">{s.v}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
}
