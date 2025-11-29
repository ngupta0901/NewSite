import React from 'react';

import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background neural-pattern">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-wisdom/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-trust/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Icon name="Sparkles" size={16} color="var(--color-primary)" />
              <span className="text-sm font-medium text-primary">AI-Powered IoT Solutions</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-headline font-bold leading-tight">
              <span className="text-gradient">Intelligence</span> isn't just about{' '}
              <span className="text-foreground">technology</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We architect intelligent ecosystems that transform your business operations. 
              Your bridge from today's challenges to tomorrow's possibilities through AI and IoT convergence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="btn-gradient"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Start Your Transformation
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

          </div>

          <div className="relative animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-card/50 backdrop-blur-custom rounded-2xl p-8 border border-border shadow-lg">
                <div className="grid grid-cols-1 gap-1">
                  <div className="space-y-4">
                    <div className="bg-background rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 cursor-pointer group">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon name="Brain" size={24} color="var(--color-primary)" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">AI Solutions</h3>
                      <p className="text-sm text-muted-foreground">Custom ML models & intelligent automation</p>
                    </div>

                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-background rounded-xl p-6 border border-border hover:border-accent transition-all duration-300 cursor-pointer group">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                        <Icon name="BarChart3" size={24} color="var(--color-accent)" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Data Analytics</h3>
                      <p className="text-sm text-muted-foreground">Actionable insights & predictive models</p>
                    </div>
                    <div className="bg-background rounded-xl p-6 border border-border hover:border-brand-wisdom transition-all duration-300 cursor-pointer group">
                      <div className="w-12 h-12 bg-brand-wisdom/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-wisdom/20 transition-colors duration-300">
                        <Icon name="Zap" size={24} color="var(--color-brand-wisdom)" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Integration</h3>
                      <p className="text-sm text-muted-foreground">Seamless system connectivity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} color="var(--color-muted-foreground)" />
      </div>
    </section>
  );
};

export default HeroSection;