import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

const Terms = () => {
  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom max-w-3xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">
                  2. Use License
                </h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on KritiBodh's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">
                  3. Disclaimer
                </h2>
                <p className="text-muted-foreground mb-4">
                  The materials on KritiBodh's website are provided on an 'as is' basis. KritiBodh makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">
                  4. Limitations
                </h2>
                <p className="text-muted-foreground">
                  In no event shall KritiBodh or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on KritiBodh's website.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Terms;