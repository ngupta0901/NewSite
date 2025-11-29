import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Chief Executive Officer & Co-Founder",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a341e72a-1763295403609.png",
    imageAlt: "Professional headshot of Indian male executive with warm smile wearing navy blue suit and red tie in corporate setting",
    expertise: ["AI Strategy", "Business Transformation", "Enterprise Architecture"],
    bio: "20+ years leading digital transformation initiatives for Fortune 500 companies. PhD in Computer Science from MIT with focus on machine learning applications.",
    achievements: [
    "Led $500M+ in AI transformation projects",
    "Published 15+ research papers on AI ethics",
    "Keynote speaker at 30+ international conferences"],

    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18ffa9a16-1763296756965.png",
    imageAlt: "Professional portrait of Asian female technology executive with confident expression wearing black blazer in modern office environment",
    expertise: ["IoT Architecture", "Cloud Computing", "Edge AI"],
    bio: "Former Principal Engineer at Google Cloud. Specialized in building scalable IoT platforms serving millions of connected devices globally.",
    achievements: [
    "Architected IoT solutions for 50M+ devices",
    "Holds 8 patents in edge computing",
    "AWS & Azure certified solutions architect"],

    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Head of AI Research",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c36e05e8-1763296212708.png",
    imageAlt: "Professional headshot of Hispanic male researcher with glasses wearing casual button-down shirt in technology laboratory setting",
    expertise: ["Deep Learning", "Computer Vision", "NLP"],
    bio: "PhD in Artificial Intelligence from Stanford. Previously led AI research teams at Microsoft and IBM, focusing on practical AI applications.",
    achievements: [
    "Developed 12+ production AI models",
    "Published in top-tier AI conferences",
    "Mentored 50+ AI engineers"],

    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "VP of Client Success",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c12f10a0-1763293995821.png",
    imageAlt: "Professional portrait of Indian female executive with warm smile wearing teal business suit in bright corporate office",
    expertise: ["Client Relations", "Project Management", "Change Management"],
    bio: "15+ years in technology consulting with expertise in driving successful digital transformation programs across diverse industries.",
    achievements: [
    "98% client satisfaction rate",
    "Managed 200+ successful implementations",
    "PMP & Agile certified professional"],

    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  {
    id: 5,
    name: "David Thompson",
    role: "Head of IoT Solutions",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18fb89790-1763293810194.png",
    imageAlt: "Professional headshot of Caucasian male engineer with friendly expression wearing gray suit in technology workspace",
    expertise: ["Industrial IoT", "Sensor Networks", "Data Analytics"],
    bio: "Former IoT Solutions Architect at Siemens. Expert in industrial automation and smart manufacturing implementations.",
    achievements: [
    "Deployed IoT in 100+ factories",
    "Reduced downtime by average 40%",
    "Certified IoT solutions architect"],

    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  {
    id: 6,
    name: "Lisa Wang",
    role: "Director of Data Science",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16bb9b939-1763296840706.png",
    imageAlt: "Professional portrait of Asian female data scientist with confident smile wearing white blouse in modern analytics center",
    expertise: ["Predictive Analytics", "Machine Learning", "Big Data"],
    bio: "PhD in Statistics from UC Berkeley. Previously led data science teams at Amazon, specializing in predictive modeling and business intelligence.",
    achievements: [
    "Built models processing 10TB+ daily",
    "Improved prediction accuracy by 45%",
    "Kaggle Grandmaster status"],

    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }];


  return (
    <section className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            World-class professionals combining deep technical expertise with practical business acumen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers?.map((member) =>
          <div
            key={member?.id}
            className="card-elevated p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onClick={() => setSelectedMember(member)}>

              <div className="relative mb-4 overflow-hidden rounded-lg h-64">
                <Image
                src={member?.image}
                alt={member?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-medium">View Profile</span>
                </div>
              </div>
              
              <h3 className="text-xl font-headline font-semibold text-foreground mb-1">{member?.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{member?.role}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {member?.expertise?.slice(0, 2)?.map((skill, index) =>
              <span key={index} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {skill}
                  </span>
              )}
                {member?.expertise?.length > 2 &&
              <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                    +{member?.expertise?.length - 2} more
                  </span>
              }
              </div>

              <div className="flex items-center space-x-3">
                <a href={member?.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted hover:bg-primary hover:text-primary-foreground rounded-md flex items-center justify-center transition-colors duration-300">
                  <Icon name="Linkedin" size={16} />
                </a>
                <a href={member?.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted hover:bg-primary hover:text-primary-foreground rounded-md flex items-center justify-center transition-colors duration-300">
                  <Icon name="Twitter" size={16} />
                </a>
              </div>
            </div>
          )}
        </div>

        {selectedMember &&
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedMember(null)}>
            <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e?.stopPropagation()}>
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                src={selectedMember?.image}
                alt={selectedMember?.imageAlt}
                className="w-full h-full object-cover" />

                <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-background/90 hover:bg-background rounded-full flex items-center justify-center transition-colors duration-300">

                  <Icon name="X" size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-headline font-bold text-foreground mb-1">{selectedMember?.name}</h3>
                <p className="text-primary font-medium mb-4">{selectedMember?.role}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember?.expertise?.map((skill, index) =>
                  <span key={index} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {skill}
                      </span>
                  )}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">About</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedMember?.bio}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {selectedMember?.achievements?.map((achievement, index) =>
                  <li key={index} className="flex items-start space-x-2">
                        <Icon name="CheckCircle2" size={18} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{achievement}</span>
                      </li>
                  )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>);

};

export default TeamSection;