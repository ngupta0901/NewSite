import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-brand-wisdom to-secondary relative overflow-hidden">
      <div className="absolute inset-0 neural-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Icon name="Rocket" size={20} color="white" />
            <span className="text-sm font-medium text-white">Start Your Transformation Today</span>
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-headline font-bold text-white mb-6 leading-tight">
            Ready to Bridge Today's Challenges with Tomorrow's Possibilities?
          </h2>

          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their operations with KritiBodh's intelligent AI solutions. Let's architect your success story together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button 
                variant="default" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
                iconName="BookOpen"
                iconPosition="left"
              >
                View Case Studies
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={28} color="white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-sm text-white/80">
                Get started in as little as 2 weeks with our rapid deployment process
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={28} color="white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Risk-Free</h3>
              <p className="text-sm text-white/80">
                30-day money-back guarantee if you're not satisfied with results
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTASection;