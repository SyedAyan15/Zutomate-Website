'use client';
import { motion } from 'framer-motion';

interface FlowColProps {
  title: string;
  viewBox: string;
  svgHtml: string;
  svgStyle?: React.CSSProperties;
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function FlowCol({ title, viewBox, svgHtml, svgStyle }: FlowColProps) {
  return (
    <motion.div
      className="gtm-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease }}
    >
      <p className="gtm-col-title">{title}</p>
      <svg
        viewBox={viewBox}
        width="100%"
        style={{ display: 'block', ...svgStyle }}
        dangerouslySetInnerHTML={{ __html: svgHtml }}
      />
    </motion.div>
  );
}
