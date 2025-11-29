import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "What is the typical timeline for an AI/IoT implementation project?",
      answer: "Project timelines vary based on scope and complexity. A typical pilot project takes 8-12 weeks, while full-scale implementations range from 3-9 months. We follow an agile methodology with regular milestones, allowing you to see value incrementally. During our initial consultation, we'll provide a detailed timeline specific to your requirements."
    },
    {
      id: 2,
      question: "Do you offer pilot projects before full implementation?",
      answer: "Absolutely! We strongly recommend starting with a pilot project to validate the solution and demonstrate ROI before scaling. Our pilot programs typically run 8-12 weeks and include proof of concept development, limited deployment, performance measurement, and a comprehensive scaling roadmap. This approach minimizes risk and ensures alignment with your business objectives."
    },
    {
      id: 3,
      question: "What industries do you specialize in?",
      answer: "We have deep expertise across manufacturing, healthcare, retail & e-commerce, financial services, logistics & supply chain, and energy & utilities. Our solutions are customized to address industry-specific challenges, regulatory requirements, and operational workflows. We've successfully delivered 200+ projects across these sectors with proven methodologies for each."
    },
    {
      id: 4,
      question: "How do you ensure data security and compliance?",
      answer: "Security is foundational to everything we build. We maintain SOC 2 Type II certification, implement end-to-end encryption for all data transmission and storage, conduct regular security audits and penetration testing, ensure compliance with GDPR, HIPAA, and industry-specific regulations, and provide detailed security documentation and audit trails. Your data security is our top priority."
    },
    {
      id: 5,
      question: "What kind of support do you provide post-implementation?",
      answer: "We offer comprehensive post-implementation support including 24/7 technical support with guaranteed response times, regular system health monitoring and optimization, quarterly business reviews and performance analysis, ongoing training for your team, and continuous updates to keep your solution current with latest technologies. We're committed to your long-term success."
    },
    {
      id: 6,
      question: "Can you integrate with our existing systems?",
      answer: "Yes, integration is a core part of our approach. We have extensive experience integrating with ERP systems (SAP, Oracle, Microsoft Dynamics), CRM platforms (Salesforce, HubSpot), legacy databases and applications, cloud platforms (AWS, Azure, Google Cloud), and custom internal systems. We conduct thorough integration assessments and create detailed integration architectures before implementation."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common questions about our services, processes, and partnerships.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={faq?.id}
              className="card-elevated overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors duration-300"
              >
                <span className="text-lg font-headline font-semibold text-foreground pr-4">
                  {faq?.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <Icon 
                    name="ChevronDown" 
                    size={20} 
                    color="var(--color-primary)" 
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq?.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center space-y-4 p-6 bg-card rounded-xl border border-border">
            <Icon name="HelpCircle" size={32} color="var(--color-primary)" />
            <div>
              <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                Still have questions?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our team is here to help. Schedule a call or send us a message.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant="default"
                iconName="Phone"
                iconPosition="left"
                className="btn-gradient"
              >
                Schedule Call
              </Button>
              <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;