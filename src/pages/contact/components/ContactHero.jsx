import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 overflow-hidden">
      <div className="absolute inset-0 neural-pattern opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 animate-fade-in">
            <Icon name="MessageSquare" size={32} color="var(--color-primary)" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground mb-6 animate-fade-in">
            Let's Build Your <span className="text-gradient">Intelligent Future</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Whether you're exploring AI possibilities or ready to transform your operations—we're here to guide your journey from curiosity to capability.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                <Icon name="Clock" size={20} color="var(--color-success)" />
              </div>
              <span className="text-sm text-foreground">Response within 24 hours</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;