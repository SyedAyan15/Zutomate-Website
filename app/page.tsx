import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import GlobeSection from './components/GlobeSection';
import Testimonials from './components/Testimonials';
import ServicesIntro from './components/ServicesIntro';
import Pillars from './components/Pillars';
import WhyUs from './components/WhyUs';
import ActionPlan from './components/ActionPlan';
import CaseStudiesPreview from './components/CaseStudiesPreview';
import Faq from './components/Faq';
import Footer from './components/Footer';
import JsonLd from './components/JsonLd';
import { FAQS } from './components/faq-data';
import { graph, website, service, faqPage } from './seo/schema';

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph(website(), service('outbound'), service('inbound'), service('revops'), faqPage(FAQS))}
      />
      <Navbar />
      <Hero />
      <Partners />
      <GlobeSection />
      <Testimonials />
      <ServicesIntro />
      <Pillars />
      <WhyUs />
      <ActionPlan />
      <CaseStudiesPreview />
      <Faq />
      <Footer />
    </>
  );
}
