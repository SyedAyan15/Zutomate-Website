'use client';
import { useEffect, useRef, useState } from 'react';

const FORM_ID = '262263887011053';

/* JotForm's `/jsform/` script builds the embed with document.write, which only
   works while the HTML document is still parsing. Injected into a React tree it
   throws away the page. The iframe below is what that script would have written
   anyway, plus JotForm's own postMessage handler so the frame grows with the
   form instead of scrolling inside a fixed box. */
export default function JotForm() {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(760);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (typeof e.data !== 'string' || !e.origin.includes('jotform')) return;

      // "setHeight:<px>:<formID>"
      const [action, value, id] = e.data.split(':');
      if (action !== 'setHeight' || id !== FORM_ID) return;

      const next = Number(value);
      if (Number.isFinite(next) && next > 0) setHeight(next);
    }

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <iframe
      ref={ref}
      id={`JotFormIFrame-${FORM_ID}`}
      title="Free outbound trial form"
      src={`https://form.jotform.com/${FORM_ID}`}
      allow="geolocation; microphone; camera; fullscreen; payment"
      style={{ height }}
      scrolling="no"
    />
  );
}
