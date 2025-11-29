import React from 'react';
import Icon from '../../components/AppIcon';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';



const Industries = () => {
  const industries = [
    {
      icon: 'ShoppingCart',
      title: 'Retail',
      description: 'Personalized recommendations, inventory optimization, and customer behavior analysis.'
    },
    {
      icon: 'Factory',
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and production optimization with AI.'
    },
    {
      icon: 'Truck',
      title: 'Logistics',
      description: 'Route optimization, demand forecasting, and supply chain intelligence solutions.'
    },
    {
      icon: 'Home',
      title: 'Real Estate',
      description: 'Property valuation, market analysis, and buyer-seller matching powered by AI.'
    },
    {
      icon: 'BookOpen',
      title: 'Education',
      description: 'Adaptive learning, student performance prediction, and personalized education platforms.'
    },
    {
      icon: 'Zap',
      title: 'Energy',
      description: 'Smart grid optimization, demand forecasting, and renewable energy management.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
        <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="container-custom">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
                Industries Supported by Our AI Solutions
                </h1>
                <p className="text-lg text-muted-foreground">
                Transforming diverse industries with intelligent, scalable AI solutions tailored to specific business needs.
                </p>
            </div>
            </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 md:py-24">
            <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries?.map((industry) => (
                <div
                    key={industry?.title}
                    className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon name={industry?.icon} size={24} color="var(--color-primary)" />
                    </div>
                    <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                    {industry?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                    {industry?.description}
                    </p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6">
                Ready to Transform Your Industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can drive growth and efficiency in your business.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
                Get Started
            </button>
            </div>
        </section>
        </div>
              <Footer />
    </div>
  );
};

export default Industries;