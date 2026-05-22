import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import ServicesIntro from './components/ServicesIntro';
import GtmSection from './components/GtmSection';
import AiSection from './components/AiSection';
import CrmSection from './components/CrmSection';
import FlowAnimations from './components/FlowAnimations';
import WhySection from './components/WhySection';
import ActionPlan from './components/ActionPlan';
import CaseStudiesPreview from './components/CaseStudiesPreview';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Testimonials />
      <ServicesIntro />
      <GtmSection />
      <AiSection />
      <CrmSection />
      <FlowAnimations />
      <WhySection />
      <ActionPlan />
      <CaseStudiesPreview />
      <Faq />
      <Footer />
    </>
  );
}
