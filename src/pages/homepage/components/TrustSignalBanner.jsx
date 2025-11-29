import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignalBanner = () => {
  const certifications = [
  {
    icon: "Shield",
    label: "SOC 2 Type II",
    description: "Security Certified"
  },
  {
    icon: "Lock",
    label: "ISO 27001",
    description: "Information Security"
  },
  {
    icon: "CheckCircle2",
    label: "GDPR Compliant",
    description: "Data Protection"
  },
  {
    icon: "Award",
    label: "AWS Partner",
    description: "Advanced Tier"
  }];


  const clientLogos = [
  {
    name: "TechCorp",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2193d7f-1764166620119.png",
    imageAlt: "TechCorp company logo featuring modern geometric design with blue and silver color scheme on white background"
  },
  {
    name: "InnovateLabs",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13b704679-1764166619560.png",
    imageAlt: "InnovateLabs brand logo with abstract lightbulb icon and contemporary typography in gradient colors"
  },
  {
    name: "DataSystems",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d62cd35f-1764166621042.png",
    imageAlt: "DataSystems corporate logo displaying interconnected nodes pattern with professional navy blue branding"
  },
  {
    name: "CloudFirst",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12959e5e2-1764166620074.png",
    imageAlt: "CloudFirst company emblem featuring stylized cloud icon with modern sans-serif lettering in teal"
  },
  {
    name: "SmartFactory",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16bcb560d-1764166619430.png",
    imageAlt: "SmartFactory industrial logo with gear and circuit board elements in bold orange and black design"
  },
  {
    name: "RetailPro",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14807ad73-1764166620420.png",
    imageAlt: "RetailPro brand mark showing shopping cart icon integrated with digital elements in vibrant green"
  }];


  const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Industry Awards" }];


  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Join hundreds of companies that trust KritiBodh for their AI-IoT transformation journey.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {clientLogos?.map((client, idx) =>
              <div
                key={idx}
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">

                  <Image
                  src={client?.image}
                  alt={client?.imageAlt}
                  className="w-full h-12 object-contain" />

                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications?.map((cert, idx) =>
          <div
            key={idx}
            className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border hover:border-primary transition-all duration-300">

              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={cert?.icon} size={24} color="var(--color-primary)" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{cert?.label}</p>
                <p className="text-sm text-muted-foreground">{cert?.description}</p>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat, idx) =>
          <div key={idx} className="text-center">
              <div className="text-4xl lg:text-5xl font-headline font-bold text-gradient mb-2">
                {stat?.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TrustSignalBanner;