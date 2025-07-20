import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      description: 'For detailed project discussions and formal inquiries',
      value: 'hello@irfandev.com',
      action: 'mailto:hello@irfandev.com',
      buttonText: 'Send Email',
      responseTime: '< 24 hours',
      color: 'accent'
    },
    {
      icon: 'Linkedin',
      title: 'LinkedIn',
      description: 'Professional networking and career opportunities',
      value: 'linkedin.com/in/sirfan-dev',
      action: 'https://linkedin.com/in/sirfan-dev',
      buttonText: 'Connect',
      responseTime: '< 48 hours',
      color: 'electric-blue'
    },
    {
      icon: 'Calendar',
      title: 'Schedule Call',
      description: 'Book a consultation for complex projects',
      value: '30-60 min sessions',
      action: '#consultation',
      buttonText: 'Book Now',
      responseTime: 'Same day',
      color: 'success'
    },
    {
      icon: 'MessageSquare',
      title: 'WhatsApp',
      description: 'Quick questions and project updates',
      value: '+1 (555) 123-4567',
      action: 'https://wa.me/15551234567',
      buttonText: 'Message',
      responseTime: '< 4 hours',
      color: 'warning'
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Emergency only' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the communication method that works best for you. I'm committed to responding promptly and professionally.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 bg-${method.color}/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={method.icon} size={24} className={`text-${method.color}`} />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {method.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {method.description}
              </p>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-foreground mb-1">
                  {method.value}
                </p>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    Response: {method.responseTime}
                  </span>
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                fullWidth
                className={`border-${method.color} text-${method.color} hover:bg-${method.color} hover:text-white`}
                asChild
              >
                <a href={method.action} target={method.action.startsWith('http') ? '_blank' : '_self'}>
                  {method.buttonText}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Working Hours & Availability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Working Hours */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Working Hours</h3>
            </div>
            
            <div className="space-y-4">
              {workingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                  <span className="text-foreground font-medium">{schedule.day}</span>
                  <span className="text-muted-foreground">{schedule.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-accent">Currently Available</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Timezone: Eastern Standard Time (EST)
              </p>
            </div>
          </div>

          {/* Response Commitment */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={20} className="text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">My Commitment</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={16} className="text-success mt-1" />
                <div>
                  <p className="text-sm font-medium text-foreground">24-Hour Response</p>
                  <p className="text-xs text-muted-foreground">All inquiries answered within one business day</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={16} className="text-success mt-1" />
                <div>
                  <p className="text-sm font-medium text-foreground">NDA Protection</p>
                  <p className="text-xs text-muted-foreground">Your project ideas are safe and confidential</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={16} className="text-success mt-1" />
                <div>
                  <p className="text-sm font-medium text-foreground">Transparent Communication</p>
                  <p className="text-xs text-muted-foreground">Clear timelines, budgets, and expectations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={16} className="text-success mt-1" />
                <div>
                  <p className="text-sm font-medium text-foreground">Quality Assurance</p>
                  <p className="text-xs text-muted-foreground">Rigorous testing and code review process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;