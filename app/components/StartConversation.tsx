'use client';
import { useState } from 'react';

const CALENDLY = 'https://calendly.com/zutomate/30min';

/* The email goes straight into the Calendly booking, pre-filled, so there is
   no webhook or form store to keep alive. */
export default function StartConversation({ id }: { id?: string }) {
  const [email, setEmail] = useState('');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = CALENDLY + '?email=' + encodeURIComponent(email);
  }

  return (
    <form className="sc-form" id={id} onSubmit={onSubmit}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email*"
        aria-label="Your email"
        autoComplete="email"
      />
      <button type="submit">
        Start a conversation
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
