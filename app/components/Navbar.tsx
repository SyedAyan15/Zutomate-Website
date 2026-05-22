'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === '/';
  const isCaseStudies = pathname === '/case-studies' ||
    ['/shopwave', '/goso', '/discover-assessments', '/truclean'].includes(pathname);
  const isResources = pathname === '/resources';

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    nav.classList.add('nav-top');

    function onScroll() {
      if (window.scrollY > 60) {
        nav!.classList.remove('nav-top');
        nav!.classList.add('nav-scrolled');
      } else {
        nav!.classList.remove('nav-scrolled');
        nav!.classList.add('nav-top');
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleDataScroll(e: React.MouseEvent<HTMLAnchorElement>, id: string, href: string) {
    e.preventDefault();
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', href);
      if (id === 'footer-cta-form') {
        setTimeout(() => {
          const emailInput = document.getElementById('cta-email');
          if (emailInput) (emailInput as HTMLInputElement).focus();
        }, 500);
      }
    } else {
      router.push('/');
    }
    setMobileOpen(false);
  }

  return (
    <nav ref={navRef}>
      <button
        className={`mobile-menu-btn${mobileOpen ? ' active' : ''}`}
        aria-label="Toggle Menu"
        onClick={() => setMobileOpen(v => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Image src="/assets/logo.svg" alt="Zutomate" width={90} height={23} style={{ height: '23px', width: 'auto' }} />
      </Link>

      <ul className={`nav-links${mobileOpen ? ' active' : ''}`}>
        <li><a href="/" data-scroll="home" className={isHome ? 'active' : ''} onClick={(e) => handleDataScroll(e, 'home', '/')}>Home</a></li>
        <li><a href="/services" data-scroll="services" onClick={(e) => handleDataScroll(e, 'services', '/services')}>Services</a></li>
        <li><a href="/process" data-scroll="how-we-work" onClick={(e) => handleDataScroll(e, 'how-we-work', '/process')}>Process</a></li>
        <li><Link href="/case-studies" className={isCaseStudies ? 'active' : ''} onClick={() => setMobileOpen(false)}>Case Studies</Link></li>
        <li><Link href="/resources" className={isResources ? 'active' : ''} onClick={() => setMobileOpen(false)}>Resources</Link></li>
      </ul>

      <a
        href="/contact"
        data-scroll="footer-cta-form"
        className="nav-cta"
        id="nav-cta-link"
        onClick={(e) => handleDataScroll(e, 'footer-cta-form', '/contact')}
      >
        <span className="arrow">↗</span> Get in touch
      </a>
    </nav>
  );
}
