import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import SolutionsGrid from './components/SolutionsGrid';
import InteractivePlayground from './components/InteractivePlayground';
import ROICalculator from './components/ROICalculator';
import CTASection from './components/CTASection';

const AISolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        <HeroSection />
        <SolutionsGrid />
        <InteractivePlayground />
        <ROICalculator />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AISolutions;