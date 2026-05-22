'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const cards = [
  {
    featured: true,
    quote: 'Zutomate worked with Calculated Solutions for a short period but was immensely helpful, helping us create a great list of sourced candidates and building automations in our systems when required.',
    name: 'David Romic',
    title: 'Director @ Calculated Solutions',
    company: 'Calculated Solutions',
    avatar: '/assets/avatars/david.jpg',
  },
  {
    featured: false,
    quote: "I would 100% recommend Zutomate for any recruitment administration support. They have helped my business on a number of occasions — from sourcing and shortlisting to CRM organisation, data enrichment, and operational improvements. They have been a huge asset to Circular Resourcing and I wouldn't hesitate to work with them again.",
    name: 'Sam Elliott',
    title: 'CEO @ Circular Resourcing',
    company: 'Circular Resourcing',
    avatar: '/assets/avatars/sam.png',
  },
  {
    featured: false,
    quote: "Zutomate worked with me for approx 4 years. They quickly fell in step with me and my process — improving everything from my website to automation and grabbed thousands of leads. They have a great grasp of the English language, know our business well, and are experienced in most major ATS systems including APIs and AI integration. If you are looking for help you would be missing a valuable resource.",
    name: 'Nick Mancino',
    title: 'Matching Talent with Opportunity | Staffing Solutions since 2006',
    company: '',
    avatar: '/assets/avatars/nick.jpg',
  },
  {
    featured: true,
    quote: "Over the past two years, Zutomate has provided guidance and expertise as our company navigated the complexities of the recruitment space. Their deep understanding of both the US and UK markets, combined with their positive attitude, has been a driving force in helping us establish a solid foundation and achieve significant growth.",
    name: 'Catrice L.',
    title: 'Sr Talent Acquisition Partner | HR Business Partner | P&C Insurance',
    company: 'P&C Insurance',
    avatar: '/assets/avatars/catrice.jpg',
  },
  {
    featured: false,
    quote: "I found Zutomate to be one of the most trustworthy and reliable partners I've ever worked with. I can bounce ideas off of the team and they typically have the answer. I would recommend Zutomate for any engagement — even if they were ears deep, they would figure it out and master it in no time.",
    name: 'Cass Murray',
    title: 'CEO @ CLM Careers',
    company: 'CLM Careers',
    avatar: '/assets/avatars/cass.jpg',
  },
  {
    featured: false,
    quote: "Zutomate worked with us for nearly 5 years and was a pivotal part of the growth of our business. They are always available, timely in their responses and absolute systems wizards. Whenever we had any systems integration issue, I knew they would be able to quickly figure it out. Highly recommend working with them.",
    name: 'James Adams',
    title: 'CEO @ Adams Limitless',
    company: 'Adams Limitless',
    avatar: '/assets/avatars/james.jpg',
  },
  {
    featured: true,
    quote: "Zutomate is highly skilled in end-to-end lead generation and outbound/inbound automations. Their know-how and patience make them a powerful resource to any team looking to streamline and automate their sales process. I highly recommend working with Zutomate!",
    name: 'Ofek Mussafi',
    title: 'Strategic Account Manager @ DNAnexus',
    company: 'DNAnexus',
    avatar: '/assets/avatars/ofek.jpg',
  },
  {
    featured: false,
    quote: "Zutomate has amazing technical, process and business knowledge that can move mountains — or in this case people, clients and candidates! Great communicator and an expert in a lot of technical aspects of recruiting and marketing that few even scrape the surface with. Zutomate has helped our team with multiple projects.",
    name: 'Kael Campbell',
    title: 'General Manager @ Red Seal Recruiting',
    company: 'Red Seal Recruiting',
    avatar: '/assets/avatars/kael.jpg',
  },
  {
    featured: false,
    quote: "I've enjoyed working with Zutomate since 2020, and I highly recommend them for their professional skills and the quality of work delivered. Their dedication, attention to detail, and passion for delivering results have significantly impacted every project we collaborated on. Whether it's recruiting, branding, or managing digital presence, Zutomate consistently brings value and expertise.",
    name: 'Jim Newcomb',
    title: 'Digital Communications & HOA Compliance Specialist | Author',
    company: '',
    avatar: '/assets/avatars/jim.jpg',
  },
  {
    featured: true,
    quote: "Zutomate played a crucial role in streamlining my business operations, particularly with sourcing, recruiting and process automation. They are exceptionally tech-savvy, always staying ahead of the curve and offering valuable insights that significantly improved our talent acquisition strategy. Their professionalism, expertise, and proactive approach have had a lasting impact on our business.",
    name: 'Dennis Young',
    title: 'TEL/COM Recruiters | Contact Center Solutions & AI Services',
    company: 'TEL/COM Recruiters',
    avatar: '/assets/avatars/dennis.jpg',
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ cur: 0, pos: 0, isTransitioning: false });

  useEffect(() => {
    const track = trackRef.current;
    const dotsEl = dotsRef.current;
    if (!track || !dotsEl) return;

    const origCards = Array.from(track.querySelectorAll<HTMLElement>('.tcard'));
    const total = origCards.length;
    const perView = 2;
    const state = stateRef.current;

    // Clone first/last 2 cards
    origCards.slice(-perView).forEach(c => track.insertBefore(c.cloneNode(true), track.firstChild));
    origCards.slice(0, perView).forEach(c => track.appendChild(c.cloneNode(true)));

    const allCards = Array.from(track.querySelectorAll<HTMLElement>('.tcard'));
    state.pos = perView;
    state.cur = 0;

    function getCardW() {
      return allCards[0].getBoundingClientRect().width + 20;
    }

    function setPos(p: number, animate: boolean) {
      track!.style.transition = animate ? 'transform 0.5s cubic-bezier(0.16,1,0.3,1)' : 'none';
      track!.style.transform = `translateX(${-(p * getCardW())}px)`;
    }

    setPos(state.pos, false);

    // Build dots
    for (let i = 0; i < total; i++) {
      const d = document.createElement('div');
      d.className = 'tslider-dot' + (i === 0 ? ' active' : '');
      d.onclick = () => goTo(i);
      dotsEl.appendChild(d);
    }

    function updateDots() {
      dotsEl!.querySelectorAll('.tslider-dot').forEach((d, i) =>
        d.classList.toggle('active', i === state.cur)
      );
    }

    function goTo(idx: number) {
      state.cur = ((idx % total) + total) % total;
      state.pos = state.cur + perView;
      setPos(state.pos, true);
      updateDots();
    }

    track.addEventListener('transitionend', () => {
      if (state.pos >= total + perView) { state.pos = perView; setPos(state.pos, false); }
      else if (state.pos < perView) { state.pos = total + perView - 1; setPos(state.pos, false); }
      state.isTransitioning = false;
    });

    function next() {
      if (state.isTransitioning) return;
      state.isTransitioning = true;
      state.cur = (state.cur + 1) % total;
      state.pos++;
      setPos(state.pos, true);
      updateDots();
    }

    function prev() {
      if (state.isTransitioning) return;
      state.isTransitioning = true;
      state.cur = (state.cur - 1 + total) % total;
      state.pos--;
      setPos(state.pos, true);
      updateDots();
    }

    const prevBtn = document.getElementById('tprev');
    const nextBtn = document.getElementById('tnext');
    if (prevBtn) prevBtn.onclick = prev;
    if (nextBtn) nextBtn.onclick = next;

    allCards.forEach(card => { card.style.cursor = 'pointer'; card.onclick = () => next(); });

    const onResize = () => setPos(state.pos, false);
    window.addEventListener('resize', onResize);

    // Touch support
    const wrapper = track.parentElement!;
    let touchStartX = 0, touchStartY = 0, touchStartPos = 0, isDragging = false;

    wrapper.addEventListener('touchstart', (e) => {
      if (state.isTransitioning) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchStartPos = state.pos;
      isDragging = true;
      track.style.transition = 'none';
    }, { passive: true });

    wrapper.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const deltaX = e.touches[0].clientX - touchStartX;
      const deltaY = e.touches[0].clientY - touchStartY;
      if (Math.abs(deltaX) < Math.abs(deltaY)) return;
      e.preventDefault();
      track.style.transform = `translateX(${-(touchStartPos * getCardW()) + deltaX}px)`;
    }, { passive: false });

    wrapper.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) > 50) { deltaX < 0 ? next() : prev(); }
      else setPos(state.pos, true);
    });

    return () => {
      window.removeEventListener('resize', onResize);
      dotsEl.innerHTML = '';
    };
  }, []);

  return (
    <section className="testimonials-section" id="testimonials">
      <div style={{ textAlign: 'center', marginBottom: '48px', padding: '0 52px' }}>
        <div className="badge"><span className="badge-text">Testimonials</span></div>
        <h2>What our clients say</h2>
      </div>

      <div className="testimonials-slider-wrap">
        <div className="tslider-side-arrow left" id="tprev">&#8592;</div>
        <div className="testimonials-track" id="ttrack" ref={trackRef}>
          {cards.map((card, i) => (
            <div key={i} className={`tcard${card.featured ? ' featured' : ''}`}>
              <div className="tcard-quote">
                <span className="tcard-quote-mark">&ldquo;</span>
                {card.quote}
              </div>
              <div className="tcard-footer">
                <div className="tcard-person">
                  <Image
                    className="tcard-avatar"
                    src={card.avatar}
                    alt={card.name}
                    width={40}
                    height={40}
                    style={{ borderRadius: '50%', flexShrink: 0 }}
                  />
                  <div>
                    <span className="tcard-name">{card.name}</span>
                    <span className="tcard-title">{card.title}</span>
                  </div>
                </div>
                {card.company && <span className="tcard-company">{card.company}</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="tslider-side-arrow right" id="tnext">&#8594;</div>
      </div>

      <div className="tslider-nav">
        <div className="tslider-dots" id="tdots" ref={dotsRef}></div>
      </div>
    </section>
  );
}
