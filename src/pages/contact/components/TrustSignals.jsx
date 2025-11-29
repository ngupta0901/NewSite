import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const certifications = [
    {
      id: 1,
      icon: "Shield",
      title: "SOC 2 Type II",
      description: "Certified for security, availability, and confidentiality"
    },
    {
      id: 2,
      icon: "Lock",
      title: "ISO 27001",
      description: "Information security management certified"
    },
    {
      id: 3,
      icon: "CheckCircle",
      title: "GDPR Compliant",
      description: "Full compliance with EU data protection regulations"
    },
    {
      id: 4,
      icon: "Award",
      title: "AWS Partner",
      description: "Advanced tier cloud technology partner"
    }
  ];

  const stats = [
    { value: "500+", label: "Successful Projects" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "45+", label: "Countries Served" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to security, compliance, and excellence has earned us the trust of organizations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications?.map((cert) => (
            <div
              key={cert?.id}
              className="card-elevated p-6 text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                <Icon name={cert?.icon} size={32} color="var(--color-primary)" />
              </div>
              <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                {cert?.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {cert?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-lg border border-border"
            >
              <div className="text-3xl md:text-4xl font-headline font-bold text-gradient mb-2">
                {stat?.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-success/10 rounded-lg">
            <Icon name="CheckCircle" size={20} color="var(--color-success)" />
            <span className="text-sm font-medium text-foreground">
              Trusted by Fortune 500 companies and innovative startups alike
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;