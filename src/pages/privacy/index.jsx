import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
        <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
                Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
                Your privacy is important to us. Learn how we collect, use, and protect your data.
            </p>
            </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
            <div className="container-custom max-w-3xl">
            <div className="space-y-8">
                <div>
                <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">
                    1. Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">
                    We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, phone number, and any other information you choose to provide.
                </p>
                </div>

                <div>
                <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">
                    2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                    We use the information we collect to provide, maintain, and improve our services, process transactions, send transactional and promotional communications, and comply with legal obligations.
                </p>
                </div>

                <div>
                <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">
                    3. Data Security
                </h2>
                <p className="text-muted-foreground mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                </div>

                <div>
                <h2 className="text-2xl font-headline font-semibold text-foreground mb-4">
                    4. Contact Us
                </h2>
                <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at privacy@kritibodh.com
                </p>
                </div>
            </div>
            </div>
        </section>
        </div>
        <Footer />
    </div>
  );
};

export default Privacy;