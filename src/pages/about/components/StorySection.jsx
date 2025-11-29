import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const StorySection = () => {
  const milestones = [
  {
    year: "2025",
    title: "The Beginning",
    description: "Founded with a vision to make AI accessible to businesses of all sizes",
    icon: "Lightbulb",
    image: "https://images.unsplash.com/photo-1719978184147-c5bf6b82c6e1",
    imageAlt: "Diverse team of professionals collaborating around modern conference table with laptops and documents in bright office space"
  }];


  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Our Journey of <span className="text-gradient">Enlightenment</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From a vision to bridge ancient wisdom with modern technology, to becoming a trusted partner for businesses worldwide
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block"></div>
          
          <div className="space-y-12">
            {milestones?.map((milestone, index) =>
            <div key={milestone?.year} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="flex-1 w-full">
                  <div className="card-elevated p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={milestone?.icon} size={24} color="var(--color-primary)" />
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-primary">{milestone?.year}</span>
                        <h3 className="text-xl font-headline font-semibold text-foreground">{milestone?.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{milestone?.description}</p>
                  </div>
                </div>

                <div className="hidden lg:flex w-16 h-16 bg-primary rounded-full items-center justify-center shadow-lg z-10 flex-shrink-0">
                  <Icon name="Zap" size={28} color="white" />
                </div>

                <div className="flex-1 w-full">
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-64">
                    <Image
                    src={milestone?.image}
                    alt={milestone?.imageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default StorySection;