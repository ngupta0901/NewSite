import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ConsultationForm from './components/ConsultationForm';
import ResourceCenter from './components/ResourceCenter';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <ContactHero />
        <ContactMethods />
        <ConsultationForm />
        <ResourceCenter />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;