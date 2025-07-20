import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-deep-dark to-background py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
      </div>

      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="var(--color-electric-blue)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 Q250,200 500,300 T1000,300"
            stroke="url(#heroGradient)"
            strokeWidth="2"
            fill="none"
            className="neural-connection"
          />
          <path
            d="M0,400 Q300,250 600,400 T1000,400"
            stroke="url(#heroGradient)"
            strokeWidth="1.5"
            fill="none"
            className="neural-connection"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-accent">Available for New Projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Build Something
            <span className="block text-gradient mt-2">Extraordinary Together</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Ready to transform your ideas into powerful digital solutions? 
            <span className="block mt-2">I'm here to make it happen.</span>
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card/50 border border-border/50">
              <Icon name="Clock" size={20} className="text-accent" />
              <span className="text-sm font-medium text-foreground">24h Response Time</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card/50 border border-border/50">
              <Icon name="Shield" size={20} className="text-accent" />
              <span className="text-sm font-medium text-foreground">NDA Protected</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card/50 border border-border/50">
              <Icon name="Zap" size={20} className="text-accent" />
              <span className="text-sm font-medium text-foreground">Agile Development</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#contact-form"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent to-electric-blue hover:from-accent/90 hover:to-electric-blue/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-electric-blue/25"
            >
              <Icon name="MessageCircle" size={20} />
              <span>Start Your Project</span>
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center space-x-2 border border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              <Icon name="Calendar" size={20} />
              <span>Book Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;