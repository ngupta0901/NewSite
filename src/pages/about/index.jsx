import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import MethodologySection from './components/MethodologySection';
import CTASection from './components/CTASection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <StorySection />
        <MethodologySection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default About;