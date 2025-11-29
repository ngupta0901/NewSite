import React from 'react';
import Icon from '../../../components/AppIcon';

const RecognitionSection = () => {
  const awards = [
    {
      year: "2024",
      title: "Top 10 AI-IoT Solutions Provider",
      organization: "TechVision Research",
      icon: "Award",
      description: "Recognized for innovative AI-IoT convergence solutions and exceptional client outcomes"
    },
    {
      year: "2023",
      title: "Excellence in Digital Transformation",
      organization: "Global Tech Awards",
      icon: "Trophy",
      description: "Honored for delivering transformative solutions across multiple industries"
    },
    {
      year: "2023",
      title: "Best Workplace in Technology",
      organization: "Great Place to Work",
      icon: "Star",
      description: "Certified for outstanding employee satisfaction and workplace culture"
    },
    {
      year: "2022",
      title: "Innovation Leader Award",
      organization: "AI & IoT Summit",
      icon: "Zap",
      description: "Acknowledged for pioneering approaches to enterprise AI implementation"
    }
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management", icon: "Shield" },
    { name: "SOC 2 Type II", description: "Security & Compliance", icon: "Lock" },
    { name: "AWS Partner", description: "Advanced Tier Partner", icon: "Cloud" },
    { name: "Azure Certified", description: "Gold Partner Status", icon: "Award" },
    { name: "Google Cloud", description: "Premier Partner", icon: "Star" },
    { name: "GDPR Compliant", description: "Data Protection", icon: "FileCheck" }
  ];

  const mediaFeatures = [
    {
      publication: "TechCrunch",
      title: "How KritiBodh is Making AI Accessible to Mid-Market Companies",
      date: "November 2024",
      icon: "Newspaper"
    },
    {
      publication: "Forbes Technology",
      title: "The Future of IoT: Insights from Industry Leaders",
      date: "October 2024",
      icon: "Newspaper"
    },
    {
      publication: "MIT Technology Review",
      title: "Ethical AI Implementation: A Case Study Approach",
      date: "September 2024",
      icon: "Newspaper"
    },
    {
      publication: "VentureBeat",
      title: "Bridging the AI-IoT Gap in Enterprise Solutions",
      date: "August 2024",
      icon: "Newspaper"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Recognition & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry recognition that validates our commitment to excellence and innovation
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-headline font-bold text-foreground mb-8">Awards & Honors</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {awards?.map((award) => (
              <div key={award?.title} className="card-elevated p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={award?.icon} size={28} color="var(--color-accent)" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-bold text-accent">{award?.year}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{award?.organization}</span>
                    </div>
                    <h4 className="text-lg font-headline font-semibold text-foreground mb-2">{award?.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{award?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-headline font-bold text-foreground mb-8">Certifications & Compliance</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications?.map((cert) => (
              <div key={cert?.name} className="card-elevated p-4 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={cert?.icon} size={24} color="var(--color-primary)" />
                </div>
                <h4 className="text-sm font-headline font-semibold text-foreground mb-1">{cert?.name}</h4>
                <p className="text-xs text-muted-foreground">{cert?.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-headline font-bold text-foreground mb-8">Media Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaFeatures?.map((feature) => (
              <div key={feature?.title} className="card-elevated p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors duration-300">
                    <Icon name={feature?.icon} size={24} color="var(--color-secondary)" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-secondary">{feature?.publication}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{feature?.date}</span>
                    </div>
                    <h4 className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">{feature?.title}</h4>
                  </div>
                  <Icon name="ExternalLink" size={18} color="var(--color-muted-foreground)" className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;