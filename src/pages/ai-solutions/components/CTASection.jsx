import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const benefits = [
    {
      icon: "Headphones",
      title: "Expert Consultation",
      description: "Free 30-minute strategy session with our AI specialists"
    },
    {
      icon: "FileCheck",
      title: "Custom Proposal",
      description: "Tailored solution design based on your requirements"
    },
    {
      icon: "Rocket",
      title: "Rapid Deployment",
      description: "Get started in weeks, not months"
    },
    {
      icon: "Shield",
      title: "Risk-Free Trial",
      description: "Pilot program with no long-term commitment"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-brand-trust relative overflow-hidden">
      <div className="absolute inset-0 neural-pattern opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            Join hundreds of companies leveraging intelligent solutions to drive growth, reduce costs, and stay ahead of the competition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="default" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              iconName="Calendar"
              iconPosition="right"
            >
              Schedule Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              iconName="Download"
              iconPosition="left"
            >
              Download AI Guide
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits?.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit?.icon} size={24} color="white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit?.title}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {benefit?.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/90">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle2" size={20} />
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle2" size={20} />
                <span className="text-sm">Free pilot program</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle2" size={20} />
                <span className="text-sm">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;