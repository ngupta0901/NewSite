import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceCenter = () => {
  const resources = [
    {
      id: 1,
      icon: "FileText",
      title: "AI Implementation Guide",
      description: "Comprehensive 50-page guide covering AI strategy, technology selection, and deployment best practices.",
      fileSize: "2.4 MB PDF",
      downloads: "12,450",
      color: "var(--color-primary)"
    },
    {
      id: 3,
      icon: "BookOpen",
      title: "Case Study Collection",
      description: "15 detailed case studies showcasing successful AI transformations across various industries.",
      fileSize: "5.1 MB PDF",
      downloads: "15,680",
      color: "var(--color-accent)"
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Free <span className="text-gradient">Resource Center</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download premium guides, templates, and tools to accelerate your AI and IoT journey—no strings attached.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {resources?.map((resource) => (
            <div
              key={resource?.id}
              className="card-elevated p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${resource?.color}15` }}
                >
                  <Icon name={resource?.icon} size={28} color={resource?.color} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                    {resource?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource?.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="File" size={14} />
                        <span>{resource?.fileSize}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Download" size={14} />
                        <span>{resource?.downloads} downloads</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Download"
                    iconPosition="right"
                    fullWidth
                    className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                  >
                    Download Free
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResourceCenter;