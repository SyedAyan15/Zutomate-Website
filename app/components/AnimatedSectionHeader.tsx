'use client';
import { FadeUp } from './Motion';

interface Props {
  badge?: string;
  heading: string;
  sub: string;
}

export default function AnimatedSectionHeader({ badge, heading, sub }: Props) {
  return (
    <>
      {badge && <FadeUp><div className="gtm-badge">{badge}</div></FadeUp>}
      <FadeUp delay={0.08}>
        <h2 className="gtm-heading" dangerouslySetInnerHTML={{ __html: heading }} />
      </FadeUp>
      <FadeUp delay={0.16}>
        <p className="gtm-sub">{sub}</p>
      </FadeUp>
    </>
  );
}
