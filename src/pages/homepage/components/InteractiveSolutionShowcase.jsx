import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveSolutionShowcase = () => {
  const [activeSolution, setActiveSolution] = useState('ai');

  const solutions = {
    ai: {
      title: "AI Solutions",
      icon: "Brain",
      color: "primary",
      description: "Transform your business with custom machine learning models and intelligent automation that learns and adapts to your unique needs.",
      features: [
        {
          icon: "Sparkles",
          title: "Custom ML Models",
          description: "Tailored algorithms trained on your specific data for maximum accuracy"
        },
        {
          icon: "Zap",
          title: "Intelligent Automation",
          description: "Automate complex workflows with AI-powered decision making"
        },
        {
          icon: "TrendingUp",
          title: "Predictive Analytics",
          description: "Forecast trends and outcomes with advanced statistical models"
        },
        {
          icon: "Eye",
          title: "Computer Vision",
          description: "Extract insights from images and video streams in real-time"
        }
      ],
      metrics: [
        { value: "85%", label: "Accuracy Improvement" },
        { value: "60%", label: "Time Saved" },
        { value: "3x", label: "ROI Increase" }
      ],
      route: "/ai-solutions"
    },
    analytics: {
      title: "Data Analytics",
      icon: "BarChart3",
      color: "accent",
      description: "Turn raw data into actionable insights with advanced analytics platforms that reveal hidden patterns and opportunities.",
      features: [
        {
          icon: "Database",
          title: "Data Integration",
          description: "Unify data from multiple sources into a single source of truth"
        },
        {
          icon: "PieChart",
          title: "Visual Dashboards",
          description: "Interactive visualizations that make complex data understandable"
        },
        {
          icon: "Target",
          title: "Business Intelligence",
          description: "Strategic insights that drive informed decision making"
        },
        {
          icon: "LineChart",
          title: "Advanced Reporting",
          description: "Automated reports with customizable metrics and KPIs"
        }
      ],
      metrics: [
        { value: "40%", label: "Faster Insights" },
        { value: "95%", label: "Data Accuracy" },
        { value: "2x", label: "Decision Speed" }
      ],
      route: "/about"
    }
  };

  const currentSolution = solutions?.[activeSolution];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            Explore Our <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive demonstrations of how our AI-IoT solutions transform business operations 
            across industries and use cases.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(solutions)?.map(([key, solution]) => (
            <button
              key={key}
              onClick={() => setActiveSolution(key)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSolution === key
                  ? `bg-${solution?.color} text-${solution?.color}-foreground shadow-lg scale-105`
                  : 'bg-card text-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon 
                name={solution?.icon} 
                size={20} 
                color={activeSolution === key ? 'currentColor' : `var(--color-${solution?.color})`}
              />
              <span>{solution?.title}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-${currentSolution?.color}/10 rounded-full border border-${currentSolution?.color}/20 mb-6`}>
                <Icon name={currentSolution?.icon} size={20} color={`var(--color-${currentSolution?.color})`} />
                <span className={`text-sm font-medium text-${currentSolution?.color}`}>
                  {currentSolution?.title}
                </span>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                {currentSolution?.description}
              </p>
            </div>

            <div className="grid gap-4">
              {currentSolution?.features?.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-${currentSolution?.color}/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-${currentSolution?.color}/20 transition-colors duration-300`}>
                    <Icon name={feature?.icon} size={20} color={`var(--color-${currentSolution?.color})`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature?.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to={currentSolution?.route}>
              <Button 
                variant="default" 
                size="lg" 
                className="btn-gradient"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Explore {currentSolution?.title}
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-headline font-semibold text-foreground mb-6">
                Proven Results
              </h3>
              <div className="grid gap-6">
                {currentSolution?.metrics?.map((metric, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-background rounded-xl">
                    <span className="text-sm text-muted-foreground">{metric?.label}</span>
                    <span className="text-3xl font-headline font-bold text-gradient">
                      {metric?.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 border border-border">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Lightbulb" size={24} color="var(--color-accent)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Ready to Get Started?</h4>
                  <p className="text-sm text-muted-foreground">
                    Schedule a consultation to discuss how our {currentSolution?.title?.toLowerCase()} 
                    can transform your business operations.
                  </p>
                </div>
              </div>
              <Link to="/contact">
                <Button variant="outline" size="sm" fullWidth iconName="Calendar" iconPosition="left">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSolutionShowcase;