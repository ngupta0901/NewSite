import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    industry: '',
    inquiryType: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false,
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const companySizeOptions = [
    { value: '1-50', label: '1-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '501-1000', label: '501-1,000 employees' },
    { value: '1000+', label: '1,000+ employees' }
  ];

  const industryOptions = [
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'technology', label: 'Technology' },
    { value: 'logistics', label: 'Logistics & Supply Chain' },
    { value: 'other', label: 'Other' }
  ];

  const inquiryTypeOptions = [
    { value: 'ai-solutions', label: 'AI Solutions Inquiry' },
    { value: 'data-analytics', label: 'Data Analytics' },
    { value: 'pilot-project', label: 'Pilot Project Discussion' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'general', label: 'General Inquiry' }
  ];

  const budgetOptions = [
    { value: 'under-50k', label: 'Under 50,000' },
    { value: '50k-100k', label: '50,000 - 100,000' },
    { value: '100k-500k', label: '100,000 - 500,000' },
    { value: '500k+', label: '500,000+' },
    { value: 'not-sure', label: 'Not sure yet' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 1 month)' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: 'exploring', label: 'Just exploring' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData?.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData?.company?.trim()) newErrors.company = 'Company name is required';
    if (!formData?.companySize) newErrors.companySize = 'Please select company size';
    if (!formData?.industry) newErrors.industry = 'Please select your industry';
    if (!formData?.inquiryType) newErrors.inquiryType = 'Please select inquiry type';
    if (!formData?.message?.trim()) newErrors.message = 'Please provide details about your inquiry';
    if (!formData?.terms) newErrors.terms = 'You must accept the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your inquiry! Our team will contact you within 24 hours at ' + formData?.email);
    
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      companySize: '',
      industry: '',
      inquiryType: '',
      budget: '',
      timeline: '',
      message: '',
      newsletter: false,
      terms: false
    });
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-card">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
              Request a <span className="text-gradient">Consultation</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Share your requirements and our experts will craft a personalized solution strategy for your business.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card-elevated p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                type="text"
                name="firstName"
                placeholder="John"
                value={formData?.firstName}
                onChange={handleInputChange}
                error={errors?.firstName}
                required
              />
              
              <Input
                label="Last Name"
                type="text"
                name="lastName"
                placeholder="Doe"
                value={formData?.lastName}
                onChange={handleInputChange}
                error={errors?.lastName}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="john.doe@company.com"
                value={formData?.email}
                onChange={handleInputChange}
                error={errors?.email}
                description="We'll send consultation details here"
                required
              />
              
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData?.phone}
                onChange={handleInputChange}
                description="Optional for follow-up calls"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Company Name"
                type="text"
                name="company"
                placeholder="Acme Corporation"
                value={formData?.company}
                onChange={handleInputChange}
                error={errors?.company}
                required
              />
              
              <Select
                label="Company Size"
                placeholder="Select company size"
                options={companySizeOptions}
                value={formData?.companySize}
                onChange={(value) => handleSelectChange('companySize', value)}
                error={errors?.companySize}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Industry"
                placeholder="Select your industry"
                options={industryOptions}
                value={formData?.industry}
                onChange={(value) => handleSelectChange('industry', value)}
                error={errors?.industry}
                searchable
                required
              />
              
              <Select
                label="Inquiry Type"
                placeholder="What brings you here?"
                options={inquiryTypeOptions}
                value={formData?.inquiryType}
                onChange={(value) => handleSelectChange('inquiryType', value)}
                error={errors?.inquiryType}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Estimated Budget"
                placeholder="Select budget range"
                options={budgetOptions}
                value={formData?.budget}
                onChange={(value) => handleSelectChange('budget', value)}
                description="Helps us tailor our recommendations"
              />
              
              <Select
                label="Project Timeline"
                placeholder="When do you plan to start?"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => handleSelectChange('timeline', value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Project Details <span className="text-error">*</span>
              </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your project goals, challenges, and what you hope to achieve with AI solutions..."
                value={formData?.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-md border ${
                  errors?.message ? 'border-error' : 'border-input'
                } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300`}
              />
              {errors?.message && (
                <p className="mt-1 text-sm text-error">{errors?.message}</p>
              )}
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <Checkbox
                label="Subscribe to our newsletter for AI insights and industry trends"
                checked={formData?.newsletter}
                onChange={(e) => handleInputChange(e)}
                name="newsletter"
              />
              
              <Checkbox
                label="I agree to the Terms of Service and Privacy Policy"
                description="We'll handle your data securely and never share it with third parties"
                checked={formData?.terms}
                onChange={(e) => handleInputChange(e)}
                name="terms"
                error={errors?.terms}
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                className="btn-gradient flex-1"
              >
                {isSubmitting ? 'Submitting...' : 'Request Consultation'}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Meeting
              </Button>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg">
              <Icon name="Shield" size={20} color="var(--color-primary)" className="mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Your data is secure</p>
                <p className="text-xs text-muted-foreground">
                  All communications are encrypted and confidential.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;