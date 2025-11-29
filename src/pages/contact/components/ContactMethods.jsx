import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      icon: "Mail",
      title: "Email Support",
      description: "Send detailed inquiries and receive comprehensive responses from our technical team.",
      action: "Send Email",
      detail: "contact-us@kritibodhsolutions.com",
      availability: "24/7 Response",
      color: "var(--color-secondary)"
    },
    {
      id: 2,
      icon: "Video",
      title: "Video Meeting",
      description: "Schedule a personalized demo and strategy session with our innovation specialists.",
      action: "Book Meeting",
      detail: "30-60 minute sessions",
      availability: "Flexible scheduling",
      color: "var(--color-accent)"
    },
    {
      id: 3,
      icon: "MessageCircle",
      title: "Live Chat",
      description: "Get instant answers to quick questions through our AI-powered chat assistance.",
      action: "Start Chat",
      detail: "Average response: 2 minutes",
      availability: "24/7 Available",
      color: "var(--color-brand-wisdom)"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Choose Your Preferred <span className="text-gradient">Contact Method</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple ways to connect with our team—select the approach that best fits your timeline and communication style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className="card-elevated p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${method?.color}15` }}
              >
                <Icon name={method?.icon} size={28} color={method?.color} />
              </div>
              
              <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                {method?.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 min-h-[60px]">
                {method?.description}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Info" size={16} color="var(--color-muted-foreground)" />
                  <span className="text-sm text-foreground font-medium">{method?.detail}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} color="var(--color-muted-foreground)" />
                  <span className="text-xs text-muted-foreground">{method?.availability}</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
              >
                {method?.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;