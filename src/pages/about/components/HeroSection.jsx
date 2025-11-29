import React from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 overflow-hidden">
      <div className="absolute inset-0 neural-pattern opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Icon name="Sparkles" size={18} />
            <span className="text-sm font-medium">Where Ancient Wisdom Meets Modern Innovation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground mb-6 animate-slide-in">
            Enlightened Technology,
            <span className="text-gradient block mt-2">Transformative Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            KritiBodh Solutions bridges the gap between what's possible and what's practical. We're not just technology implementers—we're your trusted guides illuminating the path from today's challenges to tomorrow's intelligent solutions.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;