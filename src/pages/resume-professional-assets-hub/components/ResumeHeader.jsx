import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResumeHeader = ({ onDownload, onPrint }) => {
  return (
    <div className="bg-gradient-to-br from-card via-card/95 to-background border border-border rounded-2xl p-8 mb-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-accent/20">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="S. Irfan - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-background flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              S. Irfan
            </h1>
            <p className="text-xl text-accent font-medium mb-3">
              Senior Full Stack Developer
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-accent" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-accent" />
                <span>s.irfan@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Globe" size={16} className="text-accent" />
                <span>irfandev.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button
            variant="default"
            size="default"
            onClick={onDownload}
            iconName="Download"
            iconPosition="left"
            className="bg-gradient-to-r from-accent to-electric-blue hover:from-accent/90 hover:to-electric-blue/90"
          >
            Download PDF
          </Button>
          <Button
            variant="outline"
            size="default"
            onClick={onPrint}
            iconName="Printer"
            iconPosition="left"
          >
            Print Resume
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-accent mb-1">5+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent mb-1">50+</div>
          <div className="text-sm text-muted-foreground">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent mb-1">15+</div>
          <div className="text-sm text-muted-foreground">Technologies</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent mb-1">98%</div>
          <div className="text-sm text-muted-foreground">Client Satisfaction</div>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;