'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

// Fade up on scroll enter — use this for section headings, paragraphs, single blocks
export function FadeUp({ children, delay = 0, className }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-72px' }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Fade in without vertical movement — use for images, backgrounds, subtle reveals
export function FadeIn({ children, delay = 0, className }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Wrap a grid/list — children must be <StaggerItem>
export function StaggerContainer({
  children,
  className,
  delay = 0.05,
}: MotionProps & { delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.11, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual item inside a StaggerContainer
export function StaggerItem({ children, className }: MotionProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.58, ease } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Lift card — wrap any card element for spring hover
export function HoverCard({
  children,
  className,
  lift = 6,
  ...rest
}: MotionProps & { lift?: number } & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      whileHover={{ y: -lift, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
