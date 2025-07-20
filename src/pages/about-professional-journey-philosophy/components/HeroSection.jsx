import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-deep-dark to-background flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-electric-blue rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
                <Icon name="Code2" size={16} />
                <span>Full-Stack Developer</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient bg-gradient-to-r from-accent to-electric-blue bg-clip-text text-transparent">
                  S. Irfan
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A passionate full-stack developer who transforms ideas into exceptional digital experiences. 
                I bridge the gap between technical excellence and creative problem-solving, crafting solutions 
                that don't just work—they inspire.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Target" size={20} className="text-accent mr-2" />
                My Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To create technology solutions that make a meaningful impact on people's lives, 
                combining cutting-edge development practices with user-centered design principles 
                to deliver software that truly matters.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-accent to-electric-blue hover:from-accent/90 hover:to-electric-blue/90 text-white border-0"
                iconName="MessageCircle"
                iconPosition="left"
                asChild
              >
                <Link to="/contact-collaboration-gateway">
                  Let's Collaborate
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                asChild
              >
                <Link to="/resume-professional-assets-hub">
                  Download Resume
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-electric-blue/20 rounded-full blur-2xl"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-accent/10 to-electric-blue/10 rounded-full p-2">
                <div className="bg-card rounded-full p-4 border border-border">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                    alt="S. Irfan - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-xl p-3">
                <Icon name="Code" size={24} className="text-accent" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-electric-blue/10 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-3">
                <Icon name="Zap" size={24} className="text-electric-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;