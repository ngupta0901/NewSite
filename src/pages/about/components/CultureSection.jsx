import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CultureSection = () => {
  const coreValues = [
  {
    icon: "Lightbulb",
    title: "Innovation with Purpose",
    description: "We don't innovate for innovation's sake. Every solution we create serves a genuine business need and delivers measurable value.",
    color: "var(--color-brand-wisdom)"
  },
  {
    icon: "Users",
    title: "Collaborative Excellence",
    description: "Great solutions emerge from great partnerships. We work alongside our clients as trusted advisors, not just vendors.",
    color: "var(--color-brand-trust)"
  },
  {
    icon: "Heart",
    title: "Empathy-Driven Technology",
    description: "Understanding human needs drives our technical decisions. We build technology that empowers people, not replaces them.",
    color: "var(--color-accent)"
  },
  {
    icon: "TrendingUp",
    title: "Continuous Learning",
    description: "In the rapidly evolving world of AI and IoT, we invest heavily in our team's growth and staying ahead of technology curves.",
    color: "var(--color-brand-conversion)"
  },
  {
    icon: "Shield",
    title: "Ethical AI Practices",
    description: "We're committed to responsible AI development, ensuring fairness, transparency, and accountability in every solution.",
    color: "var(--color-primary)"
  },
  {
    icon: "Award",
    title: "Excellence as Standard",
    description: "Quality isn't negotiable. From code to client communication, we maintain the highest standards in everything we do.",
    color: "var(--color-secondary)"
  }];


  const testimonials = [
  {
    name: "Amit Patel",
    role: "Senior AI Engineer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f2277bfd-1763295470977.png",
    imageAlt: "Professional headshot of Indian male engineer with friendly smile wearing casual blue shirt in modern tech office",
    quote: "KritiBodh isn\'t just a workplace—it\'s a learning ecosystem. I\'ve grown more in 2 years here than in my previous 5 years combined. The culture of knowledge sharing and innovation is truly exceptional."
  },
  {
    name: "Emily Johnson",
    role: "IoT Solutions Architect",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1047a36a6-1763301859175.png",
    imageAlt: "Professional portrait of Caucasian female architect with confident expression wearing black blazer in technology workspace",
    quote: "What sets KritiBodh apart is the genuine care for both clients and team members. We're encouraged to think creatively, challenge assumptions, and always put the client's success first."
  },
  {
    name: "Carlos Martinez",
    role: "Data Science Lead",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13e314ecd-1763294694902.png",
    imageAlt: "Professional headshot of Hispanic male data scientist with warm smile wearing gray suit in analytics center",
    quote: "The work-life balance here is real, not just a buzzword. Leadership understands that well-rested, happy engineers produce better solutions. Plus, the projects are genuinely exciting and impactful."
  }];


  const perks = [
  { icon: "GraduationCap", text: "Continuous Learning Budget" },
  { icon: "Briefcase", text: "Flexible Work Arrangements" },
  { icon: "Heart", text: "Comprehensive Health Benefits" },
  { icon: "Plane", text: "Annual Team Retreats" },
  { icon: "Coffee", text: "Innovation Time (20% Projects)" },
  { icon: "Users", text: "Mentorship Programs" }];


  return (
    <section className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Our Culture & <span className="text-gradient">Values</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Building a workplace where innovation thrives, people grow, and meaningful work happens every day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreValues?.map((value) =>
          <div key={value?.title} className="card-elevated p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300" style={{ backgroundColor: `${value?.color}15` }}>
                <Icon name={value?.icon} size={28} color={value?.color} />
              </div>
              <h3 className="text-xl font-headline font-semibold text-foreground mb-3">{value?.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value?.description}</p>
            </div>
          )}
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-headline font-bold text-foreground text-center mb-12">
            Hear from Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) =>
            <div key={testimonial?.name} className="card-elevated p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                    src={testimonial?.image}
                    alt={testimonial?.imageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-foreground">{testimonial?.name}</h4>
                    <p className="text-sm text-primary">{testimonial?.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <Icon name="Quote" size={24} color="var(--color-accent)" />
                </div>
                <p className="text-muted-foreground leading-relaxed italic">{testimonial?.quote}</p>
              </div>
            )}
          </div>
        </div>

        <div className="card-elevated p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Why Join KritiBodh?
            </h3>
            <p className="text-muted-foreground">
              We invest in our people because we know that exceptional teams build exceptional solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {perks?.map((perk) =>
            <div key={perk?.text} className="flex items-center space-x-3 bg-background p-4 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={perk?.icon} size={20} color="var(--color-primary)" />
                </div>
                <span className="text-foreground font-medium">{perk?.text}</span>
              </div>
            )}
          </div>

          <div className="text-center">
            <a href="/careers" className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              <span>Explore Career Opportunities</span>
              <Icon name="ArrowRight" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default CultureSection;