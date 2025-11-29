import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import SolutionPathwaySelector from './components/SolutionPathwaySelector';
import InteractiveSolutionShowcase from './components/InteractiveSolutionShowcase';
import CTASection from './components/CTASection';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <SolutionPathwaySelector />
        <InteractiveSolutionShowcase />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;