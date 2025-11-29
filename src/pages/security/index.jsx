import React from 'react';
import Icon from '../../components/AppIcon';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

const Security = () => {
  const securityFeatures = [
    {
      icon: 'Lock',
      title: 'End-to-End Encryption',
      description: 'All data transmitted through our systems is encrypted using industry-standard protocols.'
    },
    {
      icon: 'Shield',
      title: 'Regular Security Audits',
      description: 'We conduct comprehensive security audits and penetration testing regularly.'
    },
    {
      icon: 'AlertCircle',
      title: 'Threat Monitoring',
      description: '24/7 monitoring for suspicious activities and potential security threats.'
    },
    {
      icon: 'CheckCircle',
      title: 'Compliance Standards',
      description: 'Compliant with GDPR, ISO 27001, and other international security standards.'
    }
  ];

  return (
    <div>
        <Header />
        <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
                Security
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
                Your data security is our top priority. Learn about our security measures and commitments.
            </p>
            </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24">
            <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {securityFeatures?.map((feature) => (
                <div key={feature?.title} className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature?.icon} size={24} color="var(--color-primary)" />
                    </div>
                    <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                    {feature?.title}
                    </h3>
                    <p className="text-muted-foreground">
                    {feature?.description}
                    </p>
                </div>
                ))}
            </div>

            {/* Details */}
            <div className="max-w-3xl">
                <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">
                Our Security Commitments
                </h2>
                <p className="text-muted-foreground mb-4">
                We are committed to protecting your information through a comprehensive security program that includes technical safeguards, administrative controls, and employee training.
                </p>
                <p className="text-muted-foreground">
                For security concerns or to report vulnerabilities, please contact us at security@kritibodh.com
                </p>
            </div>
            </div>
        </section>
        </div>
                  <Footer />
    </div>
  );
};

export default Security;