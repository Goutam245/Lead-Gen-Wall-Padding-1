import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import Gallery from '@/components/Gallery';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Specifications from '@/components/Specifications';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Gallery />
        <Features />
        <Testimonials />
        <Specifications />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
