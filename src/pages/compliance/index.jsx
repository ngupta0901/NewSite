import React from 'react';

const Compliance = () => {
  const complianceItems = [
    { standard: 'GDPR', description: 'General Data Protection Regulation compliance for EU data protection' },
    { standard: 'ISO 27001', description: 'Information Security Management System certification' },
    { standard: 'SOC 2', description: 'Service Organization Control compliance' },
    { standard: 'HIPAA', description: 'Healthcare data compliance for healthcare industry' },
    { standard: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { standard: 'CCPA', description: 'California Consumer Privacy Act compliance' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
            Compliance
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We maintain compliance with major international standards and regulations.
          </p>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {complianceItems?.map((item) => (
              <div key={item?.standard} className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-lg font-headline font-semibold text-primary mb-3">
                  {item?.standard}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="max-w-3xl bg-primary/5 p-8 rounded-lg">
            <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">
              Compliance Certifications
            </h2>
            <p className="text-muted-foreground mb-4">
              KritiBodh Solutions maintains active certifications and regularly undergoes audits to ensure compliance with all applicable regulations and standards.
            </p>
            <p className="text-muted-foreground">
              For compliance inquiries or audit requirements, please contact us at compliance@kritibodh.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;