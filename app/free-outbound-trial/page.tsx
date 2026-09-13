import type { Metadata } from 'next';
import './styles.css';
import Navbar from '../components/Navbar';
import JsonLd from '../components/JsonLd';
import { pageSchema } from '../seo/schema';
import Footer from '../components/Footer';
import JotForm from './JotForm';

export const metadata: Metadata = {
  alternates: { canonical: '/free-outbound-trial/' },
  title: 'Free Outbound Trial | Zutomate',
  description:
    'Start a free outbound trial with Zutomate — tell us about your business and we will build and run the first campaigns for you.',
  openGraph: {
    type: 'website',
    url: 'https://zutomate.com/free-outbound-trial/',
    title: 'Free Outbound Trial | Zutomate',
    description:
      'Start a free outbound trial with Zutomate — tell us about your business and we will build and run the first campaigns for you.',
    images: [{ url: '/og-image.png' }],
    siteName: 'Zutomate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Outbound Trial | Zutomate',
    description: 'Start a free outbound trial with Zutomate.',
    images: ['/og-image.png'],
  },
};

export default function FreeOutboundTrialPage() {
  return (
    <>
      <JsonLd data={pageSchema('Free Outbound Trial', '/free-outbound-trial/')} />
      <Navbar />

      <main className="ft-page">
        <header className="ft-head">
          <div className="ft-badge">Free trial</div>
          <h1>
            Start your <span>free outbound trial</span>
          </h1>
          <p>
            Tell us about your business and who you sell to. We&apos;ll build the list, write the
            sequences and run the first campaigns — so you can judge the system on results rather
            than a pitch.
          </p>
        </header>

        <div className="ft-form">
          <JotForm />
        </div>
      </main>

      <Footer />
    </>
  );
}
