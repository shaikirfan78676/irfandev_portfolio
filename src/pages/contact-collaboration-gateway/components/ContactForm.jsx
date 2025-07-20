import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    technologies: [],
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Platform',
    'API Development',
    'Database Design',
    'System Integration',
    'Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Above $100,000',
    'Hourly Rate',
    'To be discussed'
  ];

  const timelineOptions = [
    'ASAP (Rush)',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const techOptions = [
    'React', 'Node.js', 'Python', 'TypeScript', 'Next.js',
    'Express.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker',
    'GraphQL', 'REST API', 'React Native', 'Vue.js', 'Angular'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTechToggle = (tech) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter(t => t !== tech)
        : [...prev.technologies, tech]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        technologies: [],
        priority: 'medium'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section id="contact-form" className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center bg-card border border-border rounded-2xl p-12">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} className="text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Message Sent Successfully!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for reaching out! I'll review your project details and get back to you within 24 hours.
            </p>
            <Button
              variant="outline"
              onClick={() => setSubmitStatus(null)}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-20 bg-card/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Project Inquiry Form
          </h2>
          <p className="text-xl text-muted-foreground">
            Tell me about your project and let's discuss how we can bring it to life
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@company.com"
                required
              />
            </div>

            <Input
              label="Company/Organization"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your Company Name (Optional)"
            />

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Budget Range *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Timeline *
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map(timeline => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-4">
                Preferred Technologies
              </label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {techOptions.map(tech => (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => handleTechToggle(tech)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      formData.technologies.includes(tech)
                        ? 'bg-accent text-white' :'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Project Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Please describe your project in detail. Include:\n• What problem you're trying to solve\n• Key features and functionality needed\n• Target audience\n• Any specific requirements or constraints\n• Success metrics or goals"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
              />
            </div>

            {/* Priority Level */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-4">
                Project Priority
              </label>
              <div className="flex space-x-4">
                {[
                  { value: 'low', label: 'Low Priority', color: 'text-muted-foreground' },
                  { value: 'medium', label: 'Medium Priority', color: 'text-warning' },
                  { value: 'high', label: 'High Priority', color: 'text-destructive' }
                ].map(priority => (
                  <label key={priority.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="priority"
                      value={priority.value}
                      checked={formData.priority === priority.value}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-accent focus:ring-accent"
                    />
                    <span className={`text-sm font-medium ${priority.color}`}>
                      {priority.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-accent to-electric-blue hover:from-accent/90 hover:to-electric-blue/90 text-white border-0"
                iconName="Send"
                iconPosition="right"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Project Inquiry'}
              </Button>
            </div>

            {/* Form Footer */}
            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                By submitting this form, you agree to our privacy policy and terms of service.
                <br />
                All project discussions are covered under NDA protection.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;