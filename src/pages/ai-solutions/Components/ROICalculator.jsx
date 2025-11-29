import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    industry: '',
    employees: '',
    monthlyInquiries: '',
    avgHandlingTime: '',
    hourlyRate: ''
  });

  const [results, setResults] = useState(null);

  const industries = [
    { value: 'ecommerce', label: 'E-commerce & Retail' },
    { value: 'finance', label: 'Financial Services' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'technology', label: 'Technology' },
    { value: 'other', label: 'Other' }
  ];

  const employeeRanges = [
    { value: '1-50', label: '1-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '501-1000', label: '501-1,000 employees' },
    { value: '1000+', label: '1,000+ employees' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateROI = () => {
    const inquiries = parseInt(formData?.monthlyInquiries) || 0;
    const handlingTime = parseInt(formData?.avgHandlingTime) || 0;
    const rate = parseInt(formData?.hourlyRate) || 0;

    const currentMonthlyCost = (inquiries * handlingTime * rate) / 60;
    const aiMonthlyCost = currentMonthlyCost * 0.15;
    const monthlySavings = currentMonthlyCost - aiMonthlyCost;
    const annualSavings = monthlySavings * 12;
    const implementationCost = 50000;
    const paybackMonths = Math.ceil(implementationCost / monthlySavings);
    const threeYearROI = ((annualSavings * 3 - implementationCost) / implementationCost * 100)?.toFixed(0);

    setResults({
      currentMonthlyCost: currentMonthlyCost?.toFixed(0),
      aiMonthlyCost: aiMonthlyCost?.toFixed(0),
      monthlySavings: monthlySavings?.toFixed(0),
      annualSavings: annualSavings?.toFixed(0),
      paybackMonths,
      threeYearROI,
      efficiency: 85,
      satisfaction: 54
    });
  };

  const isFormValid = formData?.industry && formData?.employees && 
                      formData?.monthlyInquiries && formData?.avgHandlingTime && 
                      formData?.hourlyRate;

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-conversion/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Calculator" size={18} color="var(--color-brand-conversion)" />
            <span className="text-sm font-medium text-brand-conversion">ROI Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Calculate Your AI Investment Return
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the potential cost savings and efficiency gains from implementing our AI solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-elevated p-6">
              <h3 className="text-xl font-headline font-semibold text-foreground mb-6">
                Your Business Details
              </h3>

              <div className="space-y-4">
                <Select
                  label="Industry"
                  placeholder="Select your industry"
                  options={industries}
                  value={formData?.industry}
                  onChange={(value) => handleInputChange('industry', value)}
                  required
                />

                <Select
                  label="Company Size"
                  placeholder="Select employee range"
                  options={employeeRanges}
                  value={formData?.employees}
                  onChange={(value) => handleInputChange('employees', value)}
                  required
                />

                <Input
                  label="Monthly Customer Inquiries"
                  type="number"
                  placeholder="e.g., 10000"
                  value={formData?.monthlyInquiries}
                  onChange={(e) => handleInputChange('monthlyInquiries', e?.target?.value)}
                  description="Average number of inquiries per month"
                  required
                />

                <Input
                  label="Average Handling Time (minutes)"
                  type="number"
                  placeholder="e.g., 15"
                  value={formData?.avgHandlingTime}
                  onChange={(e) => handleInputChange('avgHandlingTime', e?.target?.value)}
                  description="Time spent per inquiry"
                  required
                />

                <Input
                  label="Average Hourly Rate ($)"
                  type="number"
                  placeholder="e.g., 25"
                  value={formData?.hourlyRate}
                  onChange={(e) => handleInputChange('hourlyRate', e?.target?.value)}
                  description="Cost per hour for handling inquiries"
                  required
                />

                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  className="btn-gradient mt-6"
                  onClick={calculateROI}
                  disabled={!isFormValid}
                  iconName="Calculator"
                  iconPosition="left"
                >
                  Calculate ROI
                </Button>
              </div>
            </div>

            <div className="card-elevated p-6">
              <h3 className="text-xl font-headline font-semibold text-foreground mb-6">
                Projected Results
              </h3>

              {!results ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Icon name="TrendingUp" size={40} color="var(--color-muted-foreground)" />
                  </div>
                  <p className="text-muted-foreground">
                    Fill in your business details to see your potential ROI
                  </p>
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-error/10 rounded-lg border border-error/20">
                      <div className="text-sm text-muted-foreground mb-1">Current Monthly Cost</div>
                      <div className="text-2xl font-bold text-error">${results?.currentMonthlyCost}</div>
                    </div>
                    <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                      <div className="text-sm text-muted-foreground mb-1">With AI Solution</div>
                      <div className="text-2xl font-bold text-success">${results?.aiMonthlyCost}</div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-brand-conversion/10 to-brand-conversion/5 rounded-lg border border-brand-conversion/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">Monthly Savings</span>
                      <Icon name="TrendingUp" size={20} color="var(--color-brand-conversion)" />
                    </div>
                    <div className="text-4xl font-bold text-brand-conversion mb-1">
                      ${results?.monthlySavings}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ${results?.annualSavings} annually
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Clock" size={16} color="var(--color-primary)" />
                        <span className="text-sm text-muted-foreground">Payback Period</span>
                      </div>
                      <div className="text-xl font-bold text-primary">{results?.paybackMonths} months</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="TrendingUp" size={16} color="var(--color-primary)" />
                        <span className="text-sm text-muted-foreground">3-Year ROI</span>
                      </div>
                      <div className="text-xl font-bold text-primary">{results?.threeYearROI}%</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-foreground">Efficiency Improvement</span>
                        <span className="text-sm font-bold text-primary">{results?.efficiency}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all duration-1000"
                          style={{ width: `${results?.efficiency}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-foreground">Satisfaction Increase</span>
                        <span className="text-sm font-bold text-success">{results?.satisfaction}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-success transition-all duration-1000"
                          style={{ width: `${results?.satisfaction}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Button variant="default" fullWidth className="btn-gradient" iconName="Calendar" iconPosition="right">
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted/30 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> These calculations are estimates based on industry averages and typical implementation scenarios. Actual results may vary based on your specific use case, existing infrastructure, and implementation approach. Contact our team for a detailed assessment tailored to your business.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;