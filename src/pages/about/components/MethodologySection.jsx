import React from 'react';
import Icon from '../../../components/AppIcon';

const MethodologySection = () => {
  const methodologySteps = [
    {
      phase: "01",
      title: "Discovery & Assessment",
      description: "Deep dive into your business challenges, existing infrastructure, and transformation goals through collaborative workshops and technical audits.",
      icon: "Search",
      activities: [
        "Business process mapping",
        "Technical infrastructure audit",
        "Stakeholder interviews",
        "Gap analysis & opportunity identification"
      ],
      deliverables: ["Assessment Report", "Opportunity Matrix", "Roadmap Draft"]
    },
    {
      phase: "02",
      title: "Strategy & Design",
      description: "Craft tailored AI solutions aligned with your business objectives, ensuring scalability, security, and seamless integration.",
      icon: "Lightbulb",
      activities: [
        "Solution architecture design",
        "Technology stack selection",
        "Integration planning",
        "ROI modeling & business case"
      ],
      deliverables: ["Solution Blueprint", "Technical Specifications", "Implementation Plan"]
    },
    {
      phase: "03",
      title: "Development & Integration",
      description: "Build and deploy intelligent solutions using agile methodologies, ensuring continuous feedback and iterative improvements.",
      icon: "Code",
      activities: [
        "Agile development sprints",
        "Continuous integration/deployment",
        "Quality assurance testing",
        "System integration & data migration"
      ],
      deliverables: ["Working Solution", "Test Reports", "Integration Documentation"]
    },
    {
      phase: "04",
      title: "Deployment & Training",
      description: "Smooth rollout with comprehensive training programs ensuring your team can effectively leverage the new intelligent capabilities.",
      icon: "Rocket",
      activities: [
        "Phased deployment strategy",
        "User training programs",
        "Change management support",
        "Performance monitoring setup"
      ],
      deliverables: ["Deployed System", "Training Materials", "Support Documentation"]
    },
    {
      phase: "05",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and support to ensure sustained value delivery and adaptation to evolving business needs.",
      icon: "TrendingUp",
      activities: [
        "Performance monitoring & analytics",
        "Continuous optimization",
        "Proactive maintenance",
        "Feature enhancements"
      ],
      deliverables: ["Performance Reports", "Optimization Recommendations", "Support SLA"]
    }
  ];

  const principles = [
    {
      icon: "Users",
      title: "Human-Centered Design",
      description: "Technology serves people, not the other way around. We design solutions that enhance human capabilities."
    },
    {
      icon: "Shield",
      title: "Security First",
      description: "Enterprise-grade security and compliance built into every solution from day one."
    },
    {
      icon: "Zap",
      title: "Agile & Adaptive",
      description: "Flexible methodologies that adapt to your pace and evolving requirements."
    },
    {
      icon: "Target",
      title: "Results-Driven",
      description: "Every solution is measured against clear business outcomes and ROI metrics."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            The KritiBodh <span className="text-gradient">Methodology</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven approach to delivering transformative AI solutions that drive measurable business impact
          </p>
        </div>

        <div className="mb-20">
          <div className="space-y-8">
            {methodologySteps?.map((step, index) => (
              <div key={step?.phase} className="card-elevated p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
                      <Icon name={step?.icon} size={32} color="white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-4xl font-bold text-primary/20">{step?.phase}</span>
                      <h3 className="text-2xl font-headline font-bold text-foreground">{step?.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">{step?.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center space-x-2">
                          <Icon name="CheckSquare" size={16} color="var(--color-primary)" />
                          <span>Key Activities</span>
                        </h4>
                        <ul className="space-y-2">
                          {step?.activities?.map((activity, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Icon name="ChevronRight" size={16} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center space-x-2">
                          <Icon name="FileText" size={16} color="var(--color-primary)" />
                          <span>Deliverables</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {step?.deliverables?.map((deliverable, idx) => (
                            <span key={idx} className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full font-medium">
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {index < methodologySteps?.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <Icon name="ArrowDown" size={24} color="var(--color-primary)" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-headline font-bold text-foreground text-center mb-12">
            Our Guiding Principles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles?.map((principle) => (
              <div key={principle?.title} className="card-elevated p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={principle?.icon} size={28} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-headline font-semibold text-foreground mb-2">{principle?.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{principle?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;