import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import CaseStudyShowcase from './components/CaseStudyShowcase';
import InteractiveEstimator from './components/InteractiveEstimator';
import WhyUs from './components/WhyUs';
import ContactSection from './components/ContactSection';
import WhatsAppFloating from './components/WhatsAppFloating';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-main">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <CaseStudyShowcase />
      <InteractiveEstimator />
      <WhyUs />
      <ContactSection />
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
