'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

type NavSection = 'home' | 'services' | 'process' | 'case-studies' | 'resources';

const NAV_ITEMS: { label: string; section: NavSection; scrollId?: string; href: string }[] = [
  { label: 'Home',         section: 'home',          scrollId: undefined,    href: '/' },
  { label: 'Services',     section: 'services',      scrollId: 'services',   href: '/services' },
  { label: 'Process',      section: 'process',       scrollId: 'how-we-work',href: '/process' },
  { label: 'Case Studies', section: 'case-studies',  scrollId: undefined,    href: '/case-studies' },
  { label: 'Resources',    section: 'resources',     scrollId: undefined,    href: '/resources' },
];

export default function Navbar() {
  const rawPathname = usePathname();
  // Strip trailing slash so comparisons work with trailingSlash: true config
  const pathname = rawPathname.length > 1 && rawPathname.endsWith('/') ? rawPathname.slice(0, -1) : rawPathname;

  const navRef  = useRef<HTMLElement>(null);
  const ulRef   = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([null, null, null, null, null]);
  // Prevents scroll listener from overriding a manual nav click during smooth scroll
  const scrollLockUntil = useRef<number>(0);

  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [scrollSection, setScrollSection] = useState<NavSection>('home');
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });
  // Always holds the latest updatePill so the morph handler can call it without stale closures
  const updatePillRef = useRef<() => void>(() => {});

  const isHomePage        = pathname === '/';
  const isCaseStudiesPage = pathname === '/case-studies' ||
    ['/shopwave', '/goso', '/discover-assessments', '/truclean'].includes(pathname);
  const isResourcesPage   = pathname === '/resources';

  const currentSection: NavSection = isCaseStudiesPage ? 'case-studies'
    : isResourcesPage  ? 'resources'
    : isHomePage       ? scrollSection
    : 'home';

  // ── Scroll-based active section (home only) ──────────────────────────────
  useEffect(() => {
    if (!isHomePage) return;

    function update() {
      // Don't override a manual click while smooth scroll is still animating
      if (Date.now() < scrollLockUntil.current) return;

      const y           = window.scrollY + 130;
      const servicesEl  = document.getElementById('services');
      const processEl   = document.getElementById('how-we-work');
      const servicesTop = servicesEl ? servicesEl.offsetTop : Infinity;
      const processTop  = processEl  ? processEl.offsetTop  : Infinity;

      if (y >= processTop)       setScrollSection('process');
      else if (y >= servicesTop) setScrollSection('services');
      else                       setScrollSection('home');
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [isHomePage]);

  // ── Scroll to hash on home page load (cross-page nav) ────────────────────
  useEffect(() => {
    if (!isHomePage) return;
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    // Immediately activate the target section so the pill jumps there at once
    const hashToSection: Record<string, NavSection> = {
      'services':    'services',
      'how-we-work': 'process',
    };
    const target = hashToSection[hash];
    if (target) {
      setScrollSection(target);
      // Keep scroll listener locked for the full duration of the scroll animation
      scrollLockUntil.current = Date.now() + 1500;
    }

    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  }, [isHomePage]);

  // ── Sliding pill ─────────────────────────────────────────────────────────
  // Use offsetLeft/offsetWidth (relative to the ul itself, not the viewport)
  // so the pill stays accurate regardless of nav scroll/morph state.
  const updatePill = useCallback(() => {
    const ul = ulRef.current;
    if (!ul) return;
    const idx = NAV_ITEMS.findIndex(item => item.section === currentSection);
    const li  = itemRefs.current[idx];
    if (!li) return;
    setPill({ left: li.offsetLeft, width: li.offsetWidth, opacity: 1 });
  }, [currentSection]);

  // Keep ref current so the morph handler always calls the latest version
  updatePillRef.current = updatePill;

  // Re-run whenever the active section changes
  useEffect(() => {
    const id = requestAnimationFrame(updatePill);
    return () => cancelAnimationFrame(id);
  }, [updatePill]);

  useEffect(() => {
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [updatePill]);

  // ── Navbar scroll morph ───────────────────────────────────────────────────
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    nav.classList.add('nav-top');

    function onScroll() {
      const scrolled = window.scrollY > 60;
      if (scrolled) {
        if (!nav!.classList.contains('nav-scrolled')) {
          nav!.classList.replace('nav-top', 'nav-scrolled');
          requestAnimationFrame(() => updatePillRef.current());
        }
      } else {
        if (nav!.classList.contains('nav-scrolled')) {
          nav!.classList.replace('nav-scrolled', 'nav-top');
          requestAnimationFrame(() => updatePillRef.current());
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Click handlers ────────────────────────────────────────────────────────
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, item: typeof NAV_ITEMS[0]) {
    // Case studies / resources: let Next.js Link handle it normally
    if (item.section === 'case-studies' || item.section === 'resources') {
      setMobileOpen(false);
      return;
    }

    e.preventDefault();
    setMobileOpen(false);

    if (isHomePage) {
      // Lock scroll detector for 900 ms so the smooth scroll animation
      // doesn't immediately reset the active section back to 'home'
      scrollLockUntil.current = Date.now() + 900;

      if (!item.scrollId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(item.scrollId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      setScrollSection(item.section);
    } else {
      // Full navigation to home — browser handles hash scroll natively
      window.location.href = item.scrollId ? `/#${item.scrollId}` : '/';
    }
  }

  function handleGetInTouch(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setMobileOpen(false);
    if (isHomePage) {
      const el = document.getElementById('footer-cta-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = document.getElementById('cta-email') as HTMLInputElement | null;
        if (input) input.focus();
      }, 500);
    } else {
      window.location.href = '/#footer-cta-form';
    }
  }

  return (
    <nav ref={navRef}>
      <button
        className={`mobile-menu-btn${mobileOpen ? ' active' : ''}`}
        aria-label="Toggle Menu"
        onClick={() => setMobileOpen(v => !v)}
      >
        <span></span><span></span><span></span>
      </button>

      <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Image src="/assets/logo.svg" alt="Zutomate" width={90} height={23} style={{ height: '23px', width: 'auto' }} />
      </Link>

      <ul className={`nav-links${mobileOpen ? ' active' : ''}`} ref={ulRef}>
        {/* Sliding pill indicator */}
        <span
          className="nav-pill"
          aria-hidden="true"
          style={{ left: pill.left, width: pill.width, opacity: pill.opacity }}
        />

        {NAV_ITEMS.map((item, idx) => {
          const isActive = currentSection === item.section;
          const isLink   = item.section === 'case-studies' || item.section === 'resources';

          return (
            <li key={item.section} ref={el => { itemRefs.current[idx] = el; }}>
              {isLink ? (
                <Link
                  href={item.href}
                  className={isActive ? 'active' : ''}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={isActive ? 'active' : ''}
                  onClick={e => handleClick(e, item)}
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>

      <a href="#footer-cta-form" className="nav-cta" id="nav-cta-link" onClick={handleGetInTouch}>
        <span className="arrow">↗</span> Get in touch
      </a>
    </nav>
  );
}
