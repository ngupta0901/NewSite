import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const InteractivePlayground = () => {
  const [selectedModel, setSelectedModel] = useState('sentiment');
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const models = [
    { value: 'sentiment', label: 'Sentiment Analysis', description: 'Analyze emotional tone' },
    { value: 'classification', label: 'Text Classification', description: 'Categorize content' },
    { value: 'entity', label: 'Entity Recognition', description: 'Extract key information' },
    { value: 'summary', label: 'Text Summarization', description: 'Generate concise summaries' }
  ];

  const sampleTexts = {
    sentiment: "This product exceeded my expectations! The quality is outstanding and customer service was incredibly helpful.",
    classification: "Breaking news: Scientists discover new renewable energy source that could revolutionize power generation worldwide.",
    entity: "Apple Inc. CEO Tim Cook announced the new iPhone 15 will launch on September 22, 2025 at their headquarters in Cupertino, California.",
    summary: "Artificial intelligence is transforming industries worldwide. From healthcare diagnostics to financial forecasting, AI systems are processing vast amounts of data to generate insights that were previously impossible. Machine learning algorithms continue to improve, enabling more accurate predictions and automated decision-making across various sectors."
  };

  const mockResults = {
    sentiment: {
      sentiment: "Positive",
      confidence: 0.94,
      emotions: [
        { label: "Joy", score: 0.78 },
        { label: "Trust", score: 0.65 },
        { label: "Satisfaction", score: 0.82 }
      ]
    },
    classification: {
      category: "Technology News",
      confidence: 0.91,
      subcategories: ["Science", "Energy", "Innovation"]
    },
    entity: {
      entities: [
        { text: "Apple Inc.", type: "Organization", confidence: 0.98 },
        { text: "Tim Cook", type: "Person", confidence: 0.96 },
        { text: "iPhone 15", type: "Product", confidence: 0.95 },
        { text: "September 22, 2025", type: "Date", confidence: 0.99 },
        { text: "Cupertino, California", type: "Location", confidence: 0.97 }
      ]
    },
    summary: {
      summary: "AI is revolutionizing industries through advanced data processing and machine learning, enabling unprecedented insights and automated decision-making capabilities.",
      compression: "75%",
      keyPoints: [
        "AI transforming multiple industries",
        "Processing vast data amounts",
        "Improving prediction accuracy"
      ]
    }
  };

  const handleAnalyze = () => {
    if (!inputText?.trim()) return;
    
    setIsProcessing(true);
    setTimeout(() => {
      setResult(mockResults?.[selectedModel]);
      setIsProcessing(false);
    }, 1500);
  };

  const handleUseSample = () => {
    setInputText(sampleTexts?.[selectedModel]);
    setResult(null);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-wisdom/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Sparkles" size={18} color="var(--color-brand-wisdom)" />
            <span className="text-sm font-medium text-brand-wisdom">Interactive Demo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            AI Model Playground
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our AI capabilities firsthand. Test different models with your own data or use our sample inputs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="card-elevated p-6">
                <h3 className="text-lg font-headline font-semibold text-foreground mb-4">
                  Configure Model
                </h3>
                
                <Select
                  label="Select AI Model"
                  description="Choose the model you want to test"
                  options={models}
                  value={selectedModel}
                  onChange={setSelectedModel}
                  className="mb-4"
                />

                <Input
                  label="Input Text"
                  type="text"
                  placeholder="Enter text to analyze..."
                  value={inputText}
                  onChange={(e) => setInputText(e?.target?.value)}
                  description="Minimum 10 characters required"
                  className="mb-4"
                />

                <div className="flex gap-3">
                  <Button
                    variant="default"
                    className="btn-gradient flex-1"
                    onClick={handleAnalyze}
                    loading={isProcessing}
                    disabled={!inputText?.trim() || inputText?.length < 10}
                    iconName="Play"
                    iconPosition="left"
                  >
                    Analyze
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleUseSample}
                    iconName="FileText"
                  >
                    Use Sample
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Icon name="Info" size={18} color="var(--color-primary)" className="mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> This is a demonstration using mock data. Production models deliver real-time analysis with your actual data.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-elevated p-6 min-h-[400px]">
                <h3 className="text-lg font-headline font-semibold text-foreground mb-4">
                  Analysis Results
                </h3>

                {!result ? (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                      <Icon name="Brain" size={32} color="var(--color-muted-foreground)" />
                    </div>
                    <p className="text-muted-foreground">
                      Configure your model and click Analyze to see results
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fade-in">
                    {selectedModel === 'sentiment' && (
                      <>
                        <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground">Sentiment</span>
                            <span className="text-lg font-bold text-success">{result?.sentiment}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-success transition-all duration-500"
                                style={{ width: `${result?.confidence * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-foreground">
                              {(result?.confidence * 100)?.toFixed(0)}%
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-foreground">Emotion Analysis</h4>
                          {result?.emotions?.map((emotion, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                              <span className="text-sm text-foreground">{emotion?.label}</span>
                              <div className="flex items-center space-x-2">
                                <div className="w-24 h-2 bg-background rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-primary transition-all duration-500"
                                    style={{ width: `${emotion?.score * 100}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium text-foreground w-12 text-right">
                                  {(emotion?.score * 100)?.toFixed(0)}%
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    {selectedModel === 'classification' && (
                      <>
                        <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground">Category</span>
                            <span className="text-lg font-bold text-primary">{result?.category}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary transition-all duration-500"
                                style={{ width: `${result?.confidence * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-foreground">
                              {(result?.confidence * 100)?.toFixed(0)}%
                            </span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-2">Related Categories</h4>
                          <div className="flex flex-wrap gap-2">
                            {result?.subcategories?.map((cat, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-muted text-foreground text-sm rounded-full"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {selectedModel === 'entity' && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground mb-3">Extracted Entities</h4>
                        {result?.entities?.map((entity, idx) => (
                          <div key={idx} className="p-3 bg-muted/50 rounded-lg">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-foreground">{entity?.text}</span>
                              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                                {entity?.type}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex-1 h-1.5 bg-background rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-primary transition-all duration-500"
                                  style={{ width: `${entity?.confidence * 100}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {(entity?.confidence * 100)?.toFixed(0)}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {selectedModel === 'summary' && (
                      <>
                        <div className="p-4 bg-brand-wisdom/10 rounded-lg border border-brand-wisdom/20">
                          <h4 className="text-sm font-medium text-foreground mb-2">Generated Summary</h4>
                          <p className="text-foreground">{result?.summary}</p>
                          <div className="mt-3 flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Compression Rate</span>
                            <span className="font-medium text-brand-wisdom">{result?.compression}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-2">Key Points</h4>
                          <ul className="space-y-2">
                            {result?.keyPoints?.map((point, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="CheckCircle2" size={16} color="var(--color-brand-wisdom)" className="mt-0.5" />
                                <span className="text-sm text-foreground">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePlayground;