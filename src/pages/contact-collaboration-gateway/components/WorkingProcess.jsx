import React from 'react';
import Icon from '../../../components/AppIcon';

const WorkingProcess = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your project goals, requirements, and vision in detail',
      duration: '30-60 minutes',
      deliverables: ['Project scope document', 'Technical requirements', 'Timeline estimate'],
      icon: 'MessageCircle'
    },
    {
      step: '02',
      title: 'Proposal & Planning',
      description: 'Detailed project proposal with architecture, timeline, and pricing',
      duration: '2-3 business days',
      deliverables: ['Technical proposal', 'Project roadmap', 'Cost breakdown', 'Contract terms'],
      icon: 'FileText'
    },
    {
      step: '03',
      title: 'Design & Architecture',
      description: 'System design, database schema, and user interface mockups',
      duration: '1-2 weeks',
      deliverables: ['System architecture', 'Database design', 'UI/UX wireframes', 'API specifications'],
      icon: 'Layers'
    },
    {
      step: '04',
      title: 'Development Sprints',
      description: 'Agile development with regular updates and milestone reviews',
      duration: 'Project dependent',
      deliverables: ['Working prototypes', 'Weekly progress reports', 'Code reviews', 'Testing results'],
      icon: 'Code'
    },
    {
      step: '05',
      title: 'Testing & Deployment',
      description: 'Comprehensive testing, optimization, and production deployment',
      duration: '1 week',
      deliverables: ['Test reports', 'Performance metrics', 'Deployment guide', 'User documentation'],
      icon: 'Rocket'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, bug fixes, and feature enhancements',
      duration: 'Ongoing',
      deliverables: ['Bug fixes', 'Performance monitoring', 'Feature updates', 'Technical support'],
      icon: 'Settings'
    }
  ];

  const engagementModels = [
    {
      title: 'Fixed Price Project',
      description: 'Best for well-defined projects with clear scope and requirements',
      features: [
        'Detailed project specification',
        'Fixed timeline and budget',
        'Milestone-based payments',
        'Scope change management'
      ],
      icon: 'DollarSign',
      color: 'accent'
    },
    {
      title: 'Hourly Consulting',
      description: 'Flexible engagement for ongoing development and consulting needs',
      features: [
        'Flexible time commitment',
        'Weekly/monthly billing',
        'Priority support access',
        'Scalable team involvement'
      ],
      icon: 'Clock',
      color: 'electric-blue'
    },
    {
      title: 'Retainer Agreement',
      description: 'Long-term partnership for continuous development and support',
      features: [
        'Guaranteed availability',
        'Reduced hourly rates',
        'Priority project queue',
        'Strategic planning sessions'
      ],
      icon: 'Handshake',
      color: 'success'
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We'll Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A transparent, collaborative process designed to deliver exceptional results while keeping you informed every step of the way.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Development Process</h3>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-accent to-electric-blue opacity-30"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Step Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-electric-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Icon name={step.icon} size={24} className="text-accent" />
                        <h4 className="text-xl font-semibold text-foreground">{step.title}</h4>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-2">Deliverables:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Icon name="CheckCircle" size={14} className="text-success" />
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Models */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Engagement Models</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-${model.color}/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={model.icon} size={24} className={`text-${model.color}`} />
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {model.title}
                </h4>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {model.description}
                </p>
                
                <div className="space-y-3">
                  {model.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className={`text-${model.color}`} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 to-electric-blue/10 border border-accent/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Why This Process Works</h3>
            <p className="text-muted-foreground">
              A proven methodology that ensures project success and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Target', title: 'Clear Objectives', desc: 'Well-defined goals and success metrics' },
              { icon: 'Users', title: 'Collaborative', desc: 'Regular communication and feedback loops' },
              { icon: 'Zap', title: 'Agile Approach', desc: 'Flexible and adaptive to changing needs' },
              { icon: 'Award', title: 'Quality Focus', desc: 'Rigorous testing and code review process' }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} size={24} className="text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;