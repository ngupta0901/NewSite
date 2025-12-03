import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import PredictiveEngine from './components/PredictiveEngine';


const PredictiveEnginePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        <PredictiveEngine />
      </main>
      <Footer />
    </div>
  );
};

export default PredictiveEnginePage;