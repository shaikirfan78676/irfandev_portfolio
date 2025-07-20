import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const contactMethods = [
    {
      icon: "Mail",
      title: "Email",
      description: "Get in touch for project discussions",
      action: "Send Email",
      link: "/contact-collaboration-gateway"
    },
    {
      icon: "FileText",
      title: "Resume",
      description: "Download detailed professional resume",
      action: "Download PDF",
      link: "/resume-professional-assets-hub"
    },
    {
      icon: "Code",
      title: "Portfolio",
      description: "Explore my technical projects",
      action: "View Projects",
      link: "/skills-interactive-technical-showcase"
    },
    {
      icon: "BookOpen",
      title: "Blog",
      description: "Read technical insights and tutorials",
      action: "Read Articles",
      link: "/blog-technical-insights-knowledge-hub"
    }
  ];

  const quickStats = [
    { label: "Response Time", value: "< 4 hours", icon: "Clock" },
    { label: "Project Success Rate", value: "98%", icon: "TrendingUp" },
    { label: "Client Satisfaction", value: "5.0/5.0", icon: "Star" },
    { label: "Years Experience", value: "5+", icon: "Calendar" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-electric-blue/5">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Build Something{' '}
            <span className="text-gradient bg-gradient-to-r from-accent to-electric-blue bg-clip-text text-transparent">
              Amazing?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Let's collaborate on your next project. I'm passionate about creating solutions 
            that make a real impact and would love to hear about your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-accent to-electric-blue hover:from-accent/90 hover:to-electric-blue/90 text-white border-0 shadow-lg shadow-accent/30"
              iconName="MessageCircle"
              iconPosition="left"
              asChild
            >
              <Link to="/contact-collaboration-gateway">
                Start a Conversation
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              asChild
            >
              <Link to="/contact-collaboration-gateway">
                Schedule a Call
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickStats.map((stat, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={stat.icon} size={20} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Link
              key={index}
              to={method.link}
              className="group bg-card border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon name={method.icon} size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
                {method.title}
              </h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                {method.description}
              </p>
              <div className="flex items-center justify-center space-x-2 text-accent text-sm font-medium group-hover:text-electric-blue transition-colors duration-300">
                <span>{method.action}</span>
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Final Message */}
        <div className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <Icon name="Sparkles" size={32} className="text-accent mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Let's Create Something Extraordinary Together
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every great project starts with a conversation. Whether you have a clear vision 
              or just an idea you'd like to explore, I'm here to help turn your concepts into reality. Let's discuss how we can work together to build something that truly matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="CheckCircle" size={16} className="text-accent" />
                <span className="text-sm">Free initial consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="CheckCircle" size={16} className="text-accent" />
                <span className="text-sm">No commitment required</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="CheckCircle" size={16} className="text-accent" />
                <span className="text-sm">Quick response guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Connect with me on social platforms</p>
          <div className="flex justify-center space-x-4">
            {[
              { icon: "Github", label: "GitHub" },
              { icon: "Linkedin", label: "LinkedIn" },
              { icon: "Twitter", label: "Twitter" },
              { icon: "Mail", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                aria-label={social.label}
              >
                <Icon 
                  name={social.icon} 
                  size={20} 
                  className="text-muted-foreground group-hover:text-accent transition-colors duration-300" 
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;