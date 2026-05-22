'use client';
import Image from 'next/image';
import Link from 'next/link';

const WEBHOOK_URL = 'https://ayan15.app.n8n.cloud/webhook/e2fd5927-7bd8-42a9-905d-ab3199544058';

export default function Footer() {
  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.querySelector('#cta-email') as HTMLInputElement).value;
    const name = (form.querySelector('#cta-name') as HTMLInputElement).value;

    const params = `?email=${encodeURIComponent(email)}&full_name=${encodeURIComponent(name)}&source=Footer+CTA`;
    fetch(WEBHOOK_URL + params, { method: 'GET', keepalive: true }).catch(() => {});

    const calendlyUrl = `https://calendly.com/zutomate/30min?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
    window.location.href = calendlyUrl;
  }

  return (
    <footer className="site-footer">
      <div className="footer-bg-glow"></div>
      <div className="footer-container">

        <div className="footer-logo-row">
          <Link href="/" className="footer-logo">
            <Image src="/assets/logo.svg" alt="Zutomate" width={90} height={23} style={{ height: '23px', width: 'auto' }} />
          </Link>
        </div>

        <div className="footer-cta-row" id="footer-cta-form">
          <h2 className="cta-heading">Book your strategy call</h2>
          <form className="cta-form" onSubmit={handleSubmit}>
            <div className="cta-input-group">
              <input type="email" id="cta-email" name="email" placeholder="Email" required />
              <div className="input-divider"></div>
              <input type="text" id="cta-name" name="full_name" placeholder="Full name" required />
            </div>
            <button type="submit">Book call</button>
          </form>
        </div>

        <div className="footer-links-row">
          <div className="footer-col">
            <h3>Navigate</h3>
            <ul>
              <li><Link href="/" data-scroll="home">Home</Link></li>
              <li><Link href="/services" data-scroll="services">Services</Link></li>
              <li><Link href="/process" data-scroll="how-we-work">Process</Link></li>
              <li><Link href="/faq" data-scroll="faq">FAQs</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Follow</h3>
            <ul className="social-links">
              <li>
                <a href="https://www.linkedin.com/company/zutomate" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-3.37-4-3.12-4 0v5.6h-3v-11h3v1.76c1.4-2.58 7-2.78 7 2.47v6.77z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@zutomate" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.58 6.01c-.24-.91-.97-1.63-1.88-1.87-1.66-.45-8.31-.45-8.31-.45s-6.66 0-8.32.45c-.9.24-1.63.96-1.87 1.87-.45 1.66-.45 5.12-.45 5.12s0 3.46.45 5.12c.24.91.97 1.63 1.87 1.87 1.66.45 8.32.45 8.32.45s6.65 0 8.31-.45c.91-.24 1.64-.96 1.88-1.87.45-1.66.45-5.12.45-5.12s0-3.46-.45-5.12zm-12.2 8.49v-6l5.5 3-5.5 3z" />
                  </svg>
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Get in touch</h3>
            <div className="footer-people">
              <a href="https://www.linkedin.com/in/zainva/" target="_blank" rel="noopener noreferrer" className="footer-person">
                <Image src="/assets/zain.jpg.png" alt="Zain Tanveer" width={44} height={44} className="footer-person-img" />
                <div className="footer-person-info">
                  <span className="footer-person-name">Zain Tanveer</span>
                  <span className="footer-person-title">GTM Engineer</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/syed-ayan-hassan/" target="_blank" rel="noopener noreferrer" className="footer-person">
                <Image src="/assets/ayan.jpg.png" alt="Syed Ayan Hassan" width={44} height={44} className="footer-person-img" />
                <div className="footer-person-info">
                  <span className="footer-person-name">Syed Ayan Hassan</span>
                  <span className="footer-person-title">GTM Engineer</span>
                </div>
              </a>
            </div>
            <div className="footer-contact-details">
              <a href="mailto:hello@zutomate.com" className="footer-contact-item">
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <path d="M22 6l-10 7L2 6"></path>
                </svg>
                hello@zutomate.com
              </a>
              <a href="tel:+17029641639" className="footer-contact-item">
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>
                +1 702 964 1639
              </a>
            </div>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <span>Zutomate &copy; 2026. All rights reserved. | Built for B2B growth.</span>
      </div>
    </footer>
  );
}
