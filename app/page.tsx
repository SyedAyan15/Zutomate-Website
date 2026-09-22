import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
/* Globe section is off the live page for now; the component and its styles
   stay in the codebase so it can be switched back on. */
// import GlobeSection from './components/GlobeSection';
import Testimonials from './components/Testimonials';
import Tools from './components/Tools';
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
      {/* <GlobeSection /> */}
      <Testimonials />
      <Tools />
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
