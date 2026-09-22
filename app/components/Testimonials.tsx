import Image from 'next/image';

/* Testimonials read as a mosaic: one quote featured in the middle, the rest
   as smaller cards around it, and a CTA tile closing the grid. */
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
    quote: 'Zutomate helped us automate our lead generation funnels and simplify some of our more complex sales processes. Their work made our operations much more streamlined and efficient, while saving the team a lot of manual effort. Would definitely recommend Zutomate to any business looking to improve lead generation and sales operations through automation.',
    name: 'Chris Rowan',
    title: 'CEO',
    company: 'GOSO',
    /* the same file as the GOSO case study, so the two can never show different
       marks. White chip, not dark: the artwork is a JPEG on white. */
    logo: '/assets/case-studies/goso.jpg',
    wordmark: true,
    avatar: '/assets/avatars/chris.jpg',
  },
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

const CALENDLY = 'https://calendly.com/zutomate/30min';

function Card({ c, featured }: { c: Card; featured?: boolean }) {
  return (
    <article className={featured ? 'tcard tcard--feature' : 'tcard'}>
      <header className="tcard-head">
        <Image src={c.avatar} alt={c.name} width={40} height={40} className="tcard-avatar" />
        <span className="tcard-id">
          <span className="tcard-name">{c.name}</span>
          <span className="tcard-role">
            {c.title}
            {c.company ? ' · ' + c.company : ''}
          </span>
        </span>
      </header>
      <p className="tcard-quote">&ldquo;{c.quote}&rdquo;</p>
    </article>
  );
}

export default function Testimonials() {
  const [feature, ...rest] = cards;
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="tgrid-head">
        <div className="badge"><span className="badge-text">Testimonials</span></div>
        <h2>What our clients say</h2>
      </div>

      <div className="tgrid">
        {rest.slice(0, 2).map((c) => (
          <Card key={c.name} c={c} />
        ))}
        <Card c={feature} featured />
        {rest.slice(2).map((c) => (
          <Card key={c.name} c={c} />
        ))}
        <a className="tcard tcard--cta" href={CALENDLY} target="_blank" rel="noopener noreferrer">
          <span className="tcta-text">See how we can build, fix or run your GTM systems.</span>
          <span className="tcta-link">
            Book a call
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
