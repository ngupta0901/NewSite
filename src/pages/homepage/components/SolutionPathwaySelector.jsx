import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SolutionPathwaySelector = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const pathways = [
    {
      id: 'explorer',
      role: 'Curious Explorer',
      icon: 'Compass',
      color: 'brand-wisdom',
      description: 'Discover AI-IoT possibilities through interactive demos and thought leadership',
      features: ['Interactive Demos', 'Implementation Guides', 'Technology Trends'],
      cta: 'Start Exploring',
      route: '/ai-solutions'
    },
    {
      id: 'seeker',
      role: 'Solution Seeker',
      icon: 'Target',
      color: 'primary',
      description: 'Find the perfect AI-IoT solution for your specific business challenges',
      features: ['Case Studies', 'ROI Calculator', 'Solution Comparison'],
      cta: 'Find Solutions',
      route: '/io-t-solutions'
    },
    {
      id: 'evaluator',
      role: 'Technical Evaluator',
      icon: 'Code2',
      color: 'secondary',
      description: 'Deep dive into technical specifications, integrations, and security',
      features: ['Technical Docs', 'API Reference', 'Security Details'],
      cta: 'View Documentation',
      route: '/about'
    },
    {
      id: 'executive',
      role: 'Executive Decision-Maker',
      icon: 'TrendingUp',
      color: 'brand-conversion',
      description: 'Review business impact metrics and transformation success stories',
      features: ['Business Metrics', 'Executive Briefings', 'Partnership Models'],
      cta: 'Schedule Briefing',
      route: '/contact'
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            Choose Your <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every transformation begins with understanding your unique needs. 
            Select your role to discover personalized pathways to AI-IoT success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways?.map((pathway, index) => (
            <div
              key={pathway?.id}
              className={`card-elevated p-6 cursor-pointer transition-all duration-300 animate-fade-in ${
                selectedRole === pathway?.id ? 'ring-2 ring-primary scale-105' : 'hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedRole(pathway?.id)}
            >
              <div className={`w-16 h-16 bg-${pathway?.color}/10 rounded-xl flex items-center justify-center mb-6`}>
                <Icon name={pathway?.icon} size={32} color={`var(--color-${pathway?.color})`} />
              </div>

              <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                {pathway?.role}
              </h3>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {pathway?.description}
              </p>

              <div className="space-y-3 mb-6">
                {pathway?.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Icon name="CheckCircle2" size={16} color="var(--color-brand-conversion)" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to={pathway?.route}>
                <Button 
                  variant={selectedRole === pathway?.id ? 'default' : 'outline'}
                  size="sm"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className={selectedRole === pathway?.id ? 'btn-gradient' : ''}
                >
                  {pathway?.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Not sure which path is right for you?
          </p>
          <Link to="/contact">
            <Button variant="ghost" iconName="MessageCircle" iconPosition="left">
              Talk to Our Experts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionPathwaySelector;