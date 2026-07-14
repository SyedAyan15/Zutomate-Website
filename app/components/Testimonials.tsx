'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type Card = {
  quote: string;
  name: string;
  title: string;
  company: string;
  logo: string;
  avatar: string;
  /* logo needs a dark chip (light/white artwork) */
  dark?: boolean;
  /* logo already contains the company name — hide the text beside it */
  wordmark?: boolean;
};

const cards: Card[] = [
  {
    quote: 'Zutomate is highly skilled in end-to-end lead generation and outbound/inbound automations. Their know-how and patience make them a powerful resource to any team looking to streamline and automate their sales process. I highly recommend working with Zutomate!',
    name: 'Ofek Mussafi',
    title: 'Strategic Account Manager',
    company: 'DNAnexus',
    logo: '/assets/logos/dnanexus.png',
    dark: true,
    avatar: '/assets/avatars/ofek.jpg',
  },
  {
    quote: "Zutomate has been an incredible growth partner for my business. From GTM strategy and LinkedIn content to optimization, they've handled everything exceptionally well. Zain and Ayan have always ensure everything runs smoothly.",
    name: 'Maya Magno',
    title: 'Founder',
    company: 'Nuvaris AI',
    logo: '/assets/logos/nuvarisai.png',
    wordmark: true,
    avatar: '/assets/avatars/maya.jpg',
  },
  {
    quote: "I found Zutomate to be one of the most trustworthy and reliable partners I've ever worked with. I can bounce ideas off of the team and they typically have the answer. I would recommend Zutomate for any engagement. Even if they were ears deep, they would figure it out and master it in no time.",
    name: 'Cass Murray',
    title: 'CEO',
    company: 'CLM Careers',
    logo: '/assets/logos/clmcareers.png',
    dark: true,
    wordmark: true,
    avatar: '/assets/avatars/cass.jpg',
  },
  {
    quote: 'Zutomate has amazing technical, process and business knowledge that can move mountains, or in this case people, clients and candidates! Great communicator and an expert in a lot of technical aspects of recruiting and marketing that few even scrape the surface with. Zutomate has helped our team with multiple projects.',
    name: 'Kael Campbell',
    title: 'President',
    company: 'Red Seal Recruiting',
    logo: '/assets/logos/redseal.png',
    wordmark: true,
    avatar: '/assets/avatars/kael.jpg',
  },
  {
    quote: 'Zutomate worked with us for nearly 5 years and was a pivotal part of the growth of our business. They are always available, timely in their responses and absolute systems wizards. Whenever we had any systems integration issue, I knew they would be able to quickly figure it out. Highly recommend working with them.',
    name: 'James Adams',
    title: 'CEO',
    company: 'Adams Limitless',
    logo: '/assets/logos/adamslimitless.png',
    wordmark: true,
    avatar: '/assets/avatars/james.jpg',
  },
  {
    quote: "I would 100% recommend Zutomate for any recruitment administration support. They have helped my business on a number of occasions, from sourcing and shortlisting to CRM organisation, data enrichment, and operational improvements. They have been a huge asset to Circular Resourcing and I wouldn't hesitate to work with them again.",
    name: 'Sam Elliott',
    title: 'CEO',
    company: 'Circular Resourcing',
    logo: '/assets/logos/circularresourcing.png',
    avatar: '/assets/avatars/sam.png',
  },
  {
    quote: 'Zutomate worked with Calculated Solutions for a short period but was immensely helpful, helping us create a great list of sourced candidates and building automations in our systems when required.',
    name: 'David Romic',
    title: 'Director',
    company: 'Calculated Solutions',
    logo: '/assets/logos/calculatedsolutions.png',
    wordmark: true,
    avatar: '/assets/avatars/david.jpg',
  },
  {
    quote: 'Over the past two years, Zutomate has provided guidance and expertise as our company navigated the complexities of the recruitment space. Their deep understanding of both the US and UK markets, combined with their positive attitude, has been a driving force in helping us establish a solid foundation and achieve significant growth.',
    name: 'Catrice L.',
    title: 'CEO',
    company: 'Scale Hiring',
    logo: '/assets/logos/scalehiring.png',
    avatar: '/assets/avatars/catrice.jpg',
  },
  {
    quote: 'Zutomate worked with me for approx 4 years. They quickly fell in step with me and my process, improving everything from my website to automation and grabbed thousands of leads. They have a great grasp of the English language, know our business well, and are experienced in most major ATS systems including APIs and AI integration.',
    name: 'Nick Mancino',
    title: 'CEO',
    company: 'Velocity Staffing',
    logo: '/assets/logos/velocitystaffing.png',
    wordmark: true,
    avatar: '/assets/avatars/nick.jpg',
  },
  {
    quote: 'Zutomate played a crucial role in streamlining my business operations, particularly with sourcing, recruiting and process automation. They are exceptionally tech-savvy, always staying ahead of the curve and offering valuable insights that significantly improved our talent acquisition strategy.',
    name: 'Dennis Young',
    title: 'Contact Center Solutions & AI Services',
    company: 'TEL/COM Recruiters',
    logo: '',
    avatar: '/assets/avatars/dennis.jpg',
  },
  {
    quote: "I've enjoyed working with Zutomate since 2020, and I highly recommend them for their professional skills and the quality of work delivered. Their dedication, attention to detail, and passion for delivering results have significantly impacted every project we collaborated on.",
    name: 'Jim Newcomb',
    title: 'Digital Communications Specialist | Author',
    company: '',
    logo: '',
    avatar: '/assets/avatars/jim.jpg',
  },
];

function Stars() {
  return (
    <div className="tspot-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.94 6.32 6.91.8-5.12 4.7 1.37 6.83L12 17.25l-6.1 3.4 1.37-6.83-5.12-4.7 6.91-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const touchRef = useRef({ x: 0, y: 0 });

  function go(next: number, direction: number) {
    setDir(direction);
    setIdx(((next % cards.length) + cards.length) % cards.length);
  }

  /* only auto-slide while the section is on screen, so visitors
     always arrive at the first testimonial */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setDir(1);
      setIdx((i) => (i + 1) % cards.length);
    }, 9000);
    return () => clearInterval(id);
  }, [inView, idx]);

  const card = cards[idx];

  return (
    <section className="testimonials-section" id="testimonials" ref={sectionRef}>
      <div style={{ textAlign: 'center', marginBottom: '48px', padding: '0 52px' }}>
        <div className="badge"><span className="badge-text">Testimonials</span></div>
        <h2>What our clients say</h2>
      </div>

      {/* preload every card's photo and logo up front so slides never wait on images */}
      <div aria-hidden style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}>
        {cards.map((c) => (
          <span key={c.name}>
            <Image src={c.avatar} alt="" width={320} height={400} sizes="320px" loading="eager" />
            {c.logo && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={c.logo} alt="" />
            )}
          </span>
        ))}
      </div>

      <div className="tspot-wrap">
        <button className="tspot-arrow" onClick={() => go(idx - 1, -1)} aria-label="Previous testimonial">&#8592;</button>

        <div
          className="tspot-viewport"
          onTouchStart={(e) => { touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchRef.current.x;
            const dy = e.changedTouches[0].clientY - touchRef.current.y;
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
              if (dx < 0) go(idx + 1, 1);
              else go(idx - 1, -1);
            }
          }}
        >
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              className="tspot-card"
              initial={{ opacity: 0, x: 44 * dir }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -44 * dir }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="tspot-content">
                <Stars />
                <p className="tspot-quote">{card.quote}</p>
                <div className="tspot-footer">
                  <div className="tspot-person">
                    <span className="tspot-name">{card.name}</span>
                    <span className="tspot-title">
                      {card.title}{card.company ? ` @ ${card.company}` : ''}
                    </span>
                  </div>
                  {card.company && (
                    <div className={`tspot-wordmark${card.dark ? ' dark' : ''}`}>
                      {card.logo && (
                        <span className="tspot-logochip">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={card.logo} alt={`${card.company} logo`} />
                        </span>
                      )}
                      {!(card.logo && card.wordmark) && <span className="tspot-wordmark-text">{card.company}</span>}
                    </div>
                  )}
                </div>
              </div>
              <div className="tspot-photo">
                <Image src={card.avatar} alt={card.name} fill sizes="320px" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="tspot-arrow" onClick={() => go(idx + 1, 1)} aria-label="Next testimonial">&#8594;</button>
      </div>

      <div className="tslider-nav">
        <div className="tslider-dots">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`tslider-dot${i === idx ? ' active' : ''}`}
              onClick={() => go(i, i > idx ? 1 : -1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
