import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SolutionsGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Solutions', icon: 'Grid3x3' },
    { id: 'ml', label: 'Machine Learning', icon: 'Brain' },
    { id: 'nlp', label: 'Natural Language', icon: 'MessageSquare' },
    { id: 'vision', label: 'Computer Vision', icon: 'Eye' },
    { id: 'automation', label: 'Automation', icon: 'Zap' }
  ];

  const solutions = [
    {
      id: 1,
      category: 'ml',
      title: "Predictive Analytics Engine",
      description: "Advanced machine learning models that forecast trends, identify patterns, and enable data-driven decision making with 95% accuracy.",
      icon: "TrendingUp",
      features: ["Real-time predictions", "Custom model training", "API integration", "Automated retraining"],
      metrics: { accuracy: "95%", speed: "2ms", savings: "40%" }
    },
    {
      id: 2,
      category: 'nlp',
      title: "Intelligent Chatbot Platform",
      description: "Natural language processing powered conversational AI that understands context, sentiment, and intent for superior customer engagement.",
      icon: "MessageCircle",
      features: ["Multi-language support", "Sentiment analysis", "Context awareness", "24/7 availability"],
      metrics: { accuracy: "92%", speed: "1.5s", savings: "60%" }
    },
    {
      id: 3,
      category: 'vision',
      title: "Visual Recognition System",
      description: "Computer vision solutions for object detection, facial recognition, and quality inspection with enterprise-grade accuracy.",
      icon: "Camera",
      features: ["Real-time detection", "Custom training", "Edge deployment", "Multi-camera support"],
      metrics: { accuracy: "98%", speed: "50ms", savings: "55%" }
    },
    {
      id: 4,
      category: 'automation',
      title: "Process Automation Suite",
      description: "Intelligent automation that streamlines workflows, reduces manual tasks, and optimizes business processes using AI-driven insights.",
      icon: "Workflow",
      features: ["Workflow automation", "Smart routing", "Exception handling", "Performance analytics"],
      metrics: { accuracy: "97%", speed: "5s", savings: "70%" }
    },
    {
      id: 5,
      category: 'ml',
      title: "Recommendation Engine",
      description: "Personalized recommendation system using collaborative filtering and deep learning to boost engagement and conversion rates.",
      icon: "Target",
      features: ["Personalization", "A/B testing", "Real-time updates", "Multi-channel support"],
      metrics: { accuracy: "89%", speed: "3ms", savings: "35%" }
    },
    {
      id: 6,
      category: 'nlp',
      title: "Document Intelligence",
      description: "Extract, classify, and analyze information from documents using advanced NLP and OCR technologies for automated processing.",
      icon: "FileText",
      features: ["OCR extraction", "Entity recognition", "Classification", "Multi-format support"],
      metrics: { accuracy: "94%", speed: "2s", savings: "65%" }
    }
  ];

  const filteredSolutions = activeCategory === 'all' 
    ? solutions 
    : solutions?.filter(sol => sol?.category === activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Our AI Solutions Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI capabilities designed to solve real business challenges and drive measurable outcomes
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10'
              }`}
            >
              <Icon name={category?.icon} size={18} />
              <span className="text-sm font-medium">{category?.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions?.map((solution) => (
            <div
              key={solution?.id}
              className="card-elevated p-6 hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={solution?.icon} size={24} color="var(--color-primary)" />
              </div>
              
              <h3 className="text-xl font-headline font-semibold text-foreground mb-3">
                {solution?.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {solution?.description}
              </p>
              
              <div className="space-y-2 mb-4">
                {solution?.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} color="var(--color-success)" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{solution?.metrics?.accuracy}</div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{solution?.metrics?.speed}</div>
                  <div className="text-xs text-muted-foreground">Response</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{solution?.metrics?.savings}</div>
                  <div className="text-xs text-muted-foreground">Savings</div>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                fullWidth 
                iconName="ArrowRight" 
                iconPosition="right"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;