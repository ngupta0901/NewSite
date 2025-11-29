import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const OfficeLocations = () => {
  const offices = [
  {
    id: 1,
    name: "North America Headquarters",
    address: "1234 Innovation Drive, Suite 500",
    city: "San Francisco, CA 94105",
    country: "United States",
    phone: "+1 (555) 123-4567",
    email: "americas@kritibodh.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
    lat: "37.7749",
    lng: "-122.4194",
    image: "https://images.unsplash.com/photo-1721240608299-cdf5ee26c235",
    imageAlt: "Modern glass office building in downtown San Francisco with blue sky and urban skyline in background"
  },
  {
    id: 2,
    name: "European Operations",
    address: "456 Tech Boulevard, Floor 12",
    city: "London EC2A 4BX",
    country: "United Kingdom",
    phone: "+44 20 7123 4567",
    email: "europe@kritibodh.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM GMT",
    lat: "51.5074",
    lng: "-0.1278",
    image: "https://images.unsplash.com/photo-1557877840-1f7bb29892cd",
    imageAlt: "Contemporary office building in London financial district with glass facade reflecting cloudy sky"
  },
  {
    id: 3,
    name: "Asia Pacific Hub",
    address: "789 Marina Bay Avenue, Tower B",
    city: "Singapore 018956",
    country: "Singapore",
    phone: "+65 6789 0123",
    email: "apac@kritibodh.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT",
    lat: "1.2800",
    lng: "103.8500",
    image: "https://images.unsplash.com/photo-1518063712951-2d07b8cad9bd",
    imageAlt: "Futuristic skyscraper in Singapore Marina Bay area with modern architecture and waterfront view"
  }];


  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Our Global <span className="text-gradient">Presence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With offices across three continents, we provide local expertise with global capabilities to support your AI and IoT transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offices?.map((office) =>
          <div
            key={office?.id}
            className="card-elevated overflow-hidden group hover:shadow-xl transition-all duration-300">

              <div className="relative h-48 overflow-hidden">
                <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title={office?.name}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${office?.lat},${office?.lng}&z=14&output=embed`}
                className="transition-transform duration-300 group-hover:scale-105" />

              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                    {office?.name}
                  </h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{office?.address}</p>
                    <p>{office?.city}</p>
                    <p className="font-medium text-foreground">{office?.country}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={16} color="var(--color-primary)" />
                    </div>
                    <a
                    href={`tel:${office?.phone}`}
                    className="text-sm text-foreground hover:text-primary transition-colors duration-300">

                      {office?.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={16} color="var(--color-secondary)" />
                    </div>
                    <a
                    href={`mailto:${office?.email}`}
                    className="text-sm text-foreground hover:text-primary transition-colors duration-300">

                      {office?.email}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={16} color="var(--color-accent)" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {office?.hours}
                    </span>
                  </div>
                </div>

                <Button
                variant="outline"
                fullWidth
                iconName="MapPin"
                iconPosition="left"
                className="mt-4">

                  Get Directions
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-card rounded-lg">
            <Icon name="Globe" size={20} color="var(--color-primary)" />
            <span className="text-sm text-foreground">
              Serving clients in <span className="font-semibold">45+ countries</span> worldwide
            </span>
          </div>
        </div>
      </div>
    </section>);

};

export default OfficeLocations;