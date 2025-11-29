import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudiesSection = () => {
  const [activeStudy, setActiveStudy] = useState(0);

  const caseStudies = [
  {
    id: 1,
    company: "TechRetail Corp",
    industry: "E-commerce",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10b62e699-1764166619859.png",
    logoAlt: "TechRetail Corp logo featuring modern blue and white geometric design with shopping cart icon",
    challenge: "Manual customer service handling 10,000+ daily inquiries, leading to 24-hour response times and 35% customer satisfaction.",
    solution: "Implemented intelligent chatbot with NLP capabilities, integrated with existing CRM, and trained on 50,000+ historical conversations.",
    results: [
    { metric: "Response Time", before: "24 hours", after: "2 minutes", improvement: "99%" },
    { metric: "Customer Satisfaction", before: "35%", after: "89%", improvement: "154%" },
    { metric: "Cost per Inquiry", before: "$12", after: "$0.80", improvement: "93%" },
    { metric: "Resolution Rate", before: "62%", after: "94%", improvement: "52%" }],

    testimonial: "KritiBodh\'s AI solution transformed our customer service. We now handle 10x more inquiries with better satisfaction scores.",
    author: "Sarah Chen",
    authorRole: "CTO, TechRetail Corp",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1839f83d3-1763293825256.png",
    authorImageAlt: "Professional headshot of Asian woman with shoulder-length black hair wearing navy blazer and white blouse",
    timeline: "3 months",
    roi: "340%"
  },
  {
    id: 2,
    company: "ManuTech Industries",
    industry: "Manufacturing",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11ba1abf3-1764166624094.png",
    logoAlt: "ManuTech Industries logo with industrial gear design in metallic silver and orange colors",
    challenge: "Quality inspection bottleneck with 15% defect detection rate and high labor costs for manual visual inspection.",
    solution: "Deployed computer vision system with custom-trained models for defect detection across 12 production lines.",
    results: [
    { metric: "Defect Detection", before: "15%", after: "98%", improvement: "553%" },
    { metric: "Inspection Speed", before: "45 sec/unit", after: "2 sec/unit", improvement: "96%" },
    { metric: "Labor Cost", before: "$450K/year", after: "$80K/year", improvement: "82%" },
    { metric: "Product Quality", before: "82%", after: "99.2%", improvement: "21%" }],

    testimonial: "The computer vision system caught defects we never knew existed. Our quality scores have never been higher.",
    author: "Michael Rodriguez",
    authorRole: "VP Operations, ManuTech",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_145ad4bba-1763294926258.png",
    authorImageAlt: "Professional headshot of Hispanic man with short dark hair wearing gray suit and blue tie",
    timeline: "4 months",
    roi: "425%"
  },
  {
    id: 3,
    company: "FinanceFlow Solutions",
    industry: "Financial Services",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_15ce098c2-1764166619243.png",
    logoAlt: "FinanceFlow Solutions logo featuring modern green and gold financial chart design with upward arrow",
    challenge: "Fraud detection system with 70% accuracy, processing delays of 48 hours, and $2M annual fraud losses.",
    solution: "Implemented ML-based fraud detection with real-time transaction analysis and adaptive learning algorithms.",
    results: [
    { metric: "Fraud Detection", before: "70%", after: "97%", improvement: "39%" },
    { metric: "Processing Time", before: "48 hours", after: "Real-time", improvement: "100%" },
    { metric: "False Positives", before: "25%", after: "3%", improvement: "88%" },
    { metric: "Annual Losses", before: "$2M", after: "$180K", improvement: "91%" }],

    testimonial: "Real-time fraud detection has saved us millions. The system learns and adapts faster than any human team could.",
    author: "Jennifer Park",
    authorRole: "Chief Risk Officer, FinanceFlow",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_13a598d69-1763293517685.png",
    authorImageAlt: "Professional headshot of Asian woman with long black hair wearing burgundy blazer and pearl necklace",
    timeline: "5 months",
    roi: "580%"
  }];


  const currentStudy = caseStudies?.[activeStudy];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Real Results, Real Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our AI solutions have transformed businesses across industries with measurable outcomes
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {caseStudies?.map((study, index) =>
          <button
            key={study?.id}
            onClick={() => setActiveStudy(index)}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
            activeStudy === index ?
            'bg-primary text-primary-foreground shadow-lg' :
            'bg-muted text-muted-foreground hover:bg-primary/10'}`
            }>

              <div className="text-sm font-medium">{study?.company}</div>
              <div className="text-xs opacity-80">{study?.industry}</div>
            </button>
          )}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="card-elevated p-8 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <Image
                      src={currentStudy?.logo}
                      alt={currentStudy?.logoAlt}
                      className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-foreground">
                      {currentStudy?.company}
                    </h3>
                    <p className="text-muted-foreground">{currentStudy?.industry}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Challenge</h4>
                  <p className="text-foreground">{currentStudy?.challenge}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Solution</h4>
                  <p className="text-foreground">{currentStudy?.solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {currentStudy?.results?.map((result, idx) =>
                  <div key={idx} className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">{result?.metric}</div>
                      <div className="flex items-baseline space-x-2 mb-1">
                        <span className="text-sm line-through text-muted-foreground">{result?.before}</span>
                        <Icon name="ArrowRight" size={14} color="var(--color-primary)" />
                        <span className="text-lg font-bold text-primary">{result?.after}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="TrendingUp" size={12} color="var(--color-success)" />
                        <span className="text-xs text-success font-medium">{result?.improvement} improvement</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="flex items-start space-x-3 mb-4">
                    <Icon name="Quote" size={24} color="var(--color-primary)" />
                    <p className="text-foreground italic">{currentStudy?.testimonial}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={currentStudy?.authorImage}
                        alt={currentStudy?.authorImageAlt}
                        className="w-full h-full object-cover" />

                    </div>
                    <div>
                      <div className="font-medium text-foreground">{currentStudy?.author}</div>
                      <div className="text-sm text-muted-foreground">{currentStudy?.authorRole}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-success/10 rounded-lg text-center">
                    <div className="text-2xl font-bold text-success mb-1">{currentStudy?.roi}</div>
                    <div className="text-xs text-muted-foreground">ROI in Year 1</div>
                  </div>
                  <div className="p-4 bg-brand-wisdom/10 rounded-lg text-center">
                    <div className="text-2xl font-bold text-brand-wisdom mb-1">{currentStudy?.timeline}</div>
                    <div className="text-xs text-muted-foreground">Implementation</div>
                  </div>
                </div>

                <Button variant="outline" fullWidth iconName="FileText" iconPosition="right">
                  Download Full Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CaseStudiesSection;