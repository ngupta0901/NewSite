import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnicalSpecs = () => {
  const [activeTab, setActiveTab] = useState('architecture');

  const tabs = [
    { id: 'architecture', label: 'Architecture', icon: 'Layers' },
    { id: 'integration', label: 'Integration', icon: 'Plug' },
    { id: 'security', label: 'Security', icon: 'Shield' },
    { id: 'performance', label: 'Performance', icon: 'Zap' }
  ];

  const specifications = {
    architecture: {
      title: "System Architecture",
      items: [
        {
          category: "Core Components",
          specs: [
            { label: "ML Framework", value: "TensorFlow 2.x / PyTorch 2.0", icon: "Brain" },
            { label: "Model Serving", value: "TensorFlow Serving / TorchServe", icon: "Server" },
            { label: "API Gateway", value: "Kong / AWS API Gateway", icon: "Network" },
            { label: "Message Queue", value: "Apache Kafka / RabbitMQ", icon: "Workflow" }
          ]
        },
        {
          category: "Infrastructure",
          specs: [
            { label: "Cloud Platform", value: "AWS / Azure / GCP", icon: "Cloud" },
            { label: "Container Orchestration", value: "Kubernetes", icon: "Box" },
            { label: "Database", value: "PostgreSQL / MongoDB", icon: "Database" },
            { label: "Cache Layer", value: "Redis / Memcached", icon: "Zap" }
          ]
        }
      ]
    },
    integration: {
      title: "Integration Capabilities",
      items: [
        {
          category: "API Standards",
          specs: [
            { label: "REST API", value: "OpenAPI 3.0 Specification", icon: "Code" },
            { label: "GraphQL", value: "Full Query Support", icon: "GitBranch" },
            { label: "WebSocket", value: "Real-time Streaming", icon: "Radio" },
            { label: "Webhooks", value: "Event-driven Integration", icon: "Webhook" }
          ]
        },
        {
          category: "Data Formats",
          specs: [
            { label: "Input Formats", value: "JSON, XML, CSV, Parquet", icon: "FileInput" },
            { label: "Output Formats", value: "JSON, XML, Protocol Buffers", icon: "FileOutput" },
            { label: "Batch Processing", value: "Apache Spark Integration", icon: "Layers" },
            { label: "Stream Processing", value: "Apache Flink Support", icon: "Workflow" }
          ]
        }
      ]
    },
    security: {
      title: "Security & Compliance",
      items: [
        {
          category: "Authentication & Authorization",
          specs: [
            { label: "Authentication", value: "OAuth 2.0 / JWT / SAML", icon: "Key" },
            { label: "Authorization", value: "RBAC / ABAC Models", icon: "Lock" },
            { label: "API Security", value: "Rate Limiting / API Keys", icon: "Shield" },
            { label: "Encryption", value: "TLS 1.3 / AES-256", icon: "ShieldCheck" }
          ]
        },
        {
          category: "Compliance",
          specs: [
            { label: "Data Privacy", value: "GDPR / CCPA Compliant", icon: "FileCheck" },
            { label: "Security Standards", value: "SOC 2 Type II / ISO 27001", icon: "Award" },
            { label: "Audit Logging", value: "Comprehensive Activity Logs", icon: "FileText" },
            { label: "Data Residency", value: "Regional Data Storage", icon: "Globe" }
          ]
        }
      ]
    },
    performance: {
      title: "Performance Metrics",
      items: [
        {
          category: "Response Times",
          specs: [
            { label: "API Latency", value: "&lt; 100ms (p95)", icon: "Gauge" },
            { label: "Model Inference", value: "&lt; 50ms (p99)", icon: "Zap" },
            { label: "Batch Processing", value: "10K+ records/second", icon: "TrendingUp" },
            { label: "Concurrent Users", value: "100K+ simultaneous", icon: "Users" }
          ]
        },
        {
          category: "Scalability",
          specs: [
            { label: "Horizontal Scaling", value: "Auto-scaling enabled", icon: "Maximize2" },
            { label: "Load Balancing", value: "Multi-region distribution", icon: "Network" },
            { label: "Availability", value: "99.99% SLA", icon: "CheckCircle2" },
            { label: "Disaster Recovery", value: "RPO &lt; 1 hour", icon: "RefreshCw" }
          ]
        }
      ]
    }
  };

  const currentSpec = specifications?.[activeTab];

  return (
    <section className="py-20 bg-card">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Technical Specifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade architecture built for scale, security, and seamless integration
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab?.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background text-muted-foreground hover:bg-primary/10'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span className="font-medium">{tab?.label}</span>
              </button>
            ))}
          </div>

          <div className="card-elevated p-8 animate-fade-in">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-6">
              {currentSpec?.title}
            </h3>

            <div className="space-y-8">
              {currentSpec?.items?.map((item, idx) => (
                <div key={idx}>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                    <div className="w-1 h-6 bg-primary rounded-full"></div>
                    <span>{item?.category}</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item?.specs?.map((spec, specIdx) => (
                      <div
                        key={specIdx}
                        className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-300"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={spec?.icon} size={20} color="var(--color-primary)" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-muted-foreground mb-1">
                            {spec?.label}
                          </div>
                          <div className="text-foreground font-medium" dangerouslySetInnerHTML={{ __html: spec?.value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Icon name="FileText" size={18} />
                  <span className="text-sm">Need detailed API documentation?</span>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" iconName="Download" iconPosition="left">
                    Download Specs
                  </Button>
                  <Button variant="default" className="btn-gradient" iconName="BookOpen" iconPosition="left">
                    View API Docs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;