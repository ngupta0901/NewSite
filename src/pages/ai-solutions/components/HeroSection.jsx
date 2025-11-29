import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-brand-wisdom/5 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 neural-pattern opacity-30"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Icon name="Sparkles" size={18} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Enterprise AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground mb-6 animate-fade-in">
            Transform Your Business with
            <span className="text-gradient"> Intelligent AI Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Custom AI implementations that drive measurable results. From machine learning models to natural language processing, we architect intelligent ecosystems tailored to your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button 
              variant="default" 
              size="lg" 
              className="btn-gradient"
              iconName="Calendar"
              iconPosition="right"
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="PlayCircle"
              iconPosition="left"
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "98%", label: "Accuracy Rate" },
              { value: "45%", label: "Cost Reduction" },
              { value: "3x", label: "Faster Processing" },
              { value: "24/7", label: "Automation" }
            ]?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat?.value}</div>
                <div className="text-sm text-muted-foreground">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;