import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const CTASection = () => {
  const ctaCards = [
    {
      icon: "MessageSquare",
      title: "Start a Conversation",
      description: "Let\'s discuss how we can help transform your business with intelligent AI solutions",
      buttonText: "Contact Us",
      buttonLink: "/contact",
      variant: "primary"
    },
    {
      icon: "Briefcase",
      title: "Join Our Team",
      description: "Be part of a team that\'s shaping the future of AI technology",
      buttonText: "View Careers",
      buttonLink: "/careers",
      variant: "secondary"
    },
    {
      icon: "BookOpen",
      title: "Explore Solutions",
      description: "Discover our comprehensive AI solutions tailored for your industry",
      buttonText: "View Solutions",
      buttonLink: "/ai-solutions",
      variant: "accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's work together to unlock the full potential of AI and IoT for your organization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ctaCards?.map((card) => (
            <div key={card?.title} className="card-elevated p-8 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
                card?.variant === 'primary' ? 'bg-primary/10' :
                card?.variant === 'secondary'? 'bg-secondary/10' : 'bg-accent/10'
              }`}>
                <Icon 
                  name={card?.icon} 
                  size={32} 
                  color={
                    card?.variant === 'primary' ? 'var(--color-primary)' :
                    card?.variant === 'secondary' ? 'var(--color-secondary)' :
                    'var(--color-accent)'
                  }
                />
              </div>
              
              <h3 className="text-xl font-headline font-semibold text-foreground mb-3">{card?.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">{card?.description}</p>
              
              <Link 
                to={card?.buttonLink}
                className={`inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  card?.variant === 'primary' ? 'bg-primary text-primary-foreground hover:shadow-lg' :
                  card?.variant === 'secondary' ? 'bg-secondary text-secondary-foreground hover:shadow-lg' :
                  'bg-accent text-accent-foreground hover:shadow-lg'
                }`}
              >
                <span>{card?.buttonText}</span>
                <Icon name="ArrowRight" size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;