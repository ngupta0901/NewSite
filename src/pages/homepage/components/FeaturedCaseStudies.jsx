import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedCaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
  {
    id: 1,
    company: "TechManufacture Inc",
    industry: "Manufacturing",
    image: "https://images.unsplash.com/photo-1681981689421-214f9da55267",
    imageAlt: "Modern manufacturing facility with robotic arms and automated assembly lines under bright industrial lighting",
    challenge: "Manual quality control causing 15% defect rate and production delays",
    solution: "AI-powered computer vision system with IoT sensor integration",
    results: [
    { metric: "98%", label: "Defect Detection Accuracy" },
    { metric: "40%", label: "Cost Reduction" },
    { metric: "3 months", label: "ROI Achievement" }],

    testimonial: "KritiBodh transformed our quality control process. The AI system catches defects we couldn\'t see before.",
    author: "Sarah Chen",
    authorRole: "VP of Operations",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1a951bde7-1763293325685.png",
    authorImageAlt: "Professional Asian woman with shoulder-length black hair wearing navy blazer and white blouse smiling confidently",
    tags: ["AI Vision", "IoT Sensors", "Quality Control"]
  },
  {
    id: 2,
    company: "RetailChain Global",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1714661151007-03365c1f7c6f",
    imageAlt: "Modern retail store interior with organized clothing displays, bright lighting, and contemporary minimalist design",
    challenge: "Inventory management inefficiencies leading to stockouts and overstock",
    solution: "Predictive analytics platform with real-time IoT inventory tracking",
    results: [
    { metric: "85%", label: "Stockout Reduction" },
    { metric: "$2.4M", label: "Annual Savings" },
    { metric: "99.5%", label: "Inventory Accuracy" }],

    testimonial: "The predictive analytics have revolutionized how we manage inventory across 200+ stores.",
    author: "Michael Rodriguez",
    authorRole: "Chief Technology Officer",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_13e314ecd-1763294694902.png",
    authorImageAlt: "Hispanic male executive with short dark hair wearing charcoal suit and burgundy tie with warm professional smile",
    tags: ["Predictive Analytics", "IoT Tracking", "Inventory Management"]
  },
  {
    id: 3,
    company: "HealthCare Systems",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1541007314914-18922cc43163",
    imageAlt: "Modern hospital corridor with medical staff in white coats walking past advanced medical equipment and clean white walls",
    challenge: "Patient monitoring gaps and delayed emergency response times",
    solution: "IoT-enabled patient monitoring with AI-driven alert system",
    results: [
    { metric: "60%", label: "Faster Response Time" },
    { metric: "95%", label: "Early Detection Rate" },
    { metric: "500+", label: "Lives Impacted Daily" }],

    testimonial: "This system has fundamentally changed how we care for patients. Early detection saves lives.",
    author: "Dr. Emily Watson",
    authorRole: "Chief Medical Officer",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_19d543082-1763294235942.png",
    authorImageAlt: "Caucasian female doctor with blonde hair in professional medical attire with stethoscope and compassionate expression",
    tags: ["IoT Monitoring", "AI Alerts", "Healthcare"]
  }];


  const handlePrevious = () => {
    setActiveCase((prev) => prev === 0 ? caseStudies?.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setActiveCase((prev) => prev === caseStudies?.length - 1 ? 0 : prev + 1);
  };

  const currentCase = caseStudies?.[activeCase];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            Real <span className="text-gradient">Transformation</span> Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped businesses across industries achieve measurable results 
            through intelligent AI-IoT solutions.
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden group">
              <Image
                src={currentCase?.image}
                alt={currentCase?.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentCase?.tags?.map((tag, idx) =>
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs font-medium text-primary border border-primary/30">

                      {tag}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-headline font-bold text-white mb-2">
                  {currentCase?.company}
                </h3>
                <p className="text-sm text-white/80">{currentCase?.industry}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="AlertCircle" size={20} color="var(--color-brand-cta)" />
                  <h4 className="text-sm font-semibold text-brand-cta uppercase tracking-wide">
                    Challenge
                  </h4>
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  {currentCase?.challenge}
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="Lightbulb" size={20} color="var(--color-accent)" />
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">
                    Solution
                  </h4>
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  {currentCase?.solution}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {currentCase?.results?.map((result, idx) =>
                <div key={idx} className="text-center p-4 bg-card rounded-xl border border-border">
                    <div className="text-3xl font-headline font-bold text-gradient mb-2">
                      {result?.metric}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {result?.label}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <Image
                    src={currentCase?.authorImage}
                    alt={currentCase?.authorImageAlt}
                    className="w-16 h-16 rounded-full object-cover" />

                  <div className="flex-1">
                    <p className="text-foreground italic mb-4 leading-relaxed">
                      "{currentCase?.testimonial}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{currentCase?.author}</p>
                      <p className="text-sm text-muted-foreground">{currentCase?.authorRole}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {caseStudies?.map((_, idx) =>
                  <button
                    key={idx}
                    onClick={() => setActiveCase(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeCase ? 'w-8 bg-primary' : 'bg-muted'}`
                    }
                    aria-label={`Go to case study ${idx + 1}`} />

                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrevious}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                    aria-label="Previous case study">

                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                    aria-label="Next case study">

                    <Icon name="ChevronRight" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/about">
            <Button variant="outline" size="lg" iconName="BookOpen" iconPosition="left">
              View All Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedCaseStudies;