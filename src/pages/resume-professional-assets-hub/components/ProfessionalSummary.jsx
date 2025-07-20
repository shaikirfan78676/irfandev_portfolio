import React from 'react';
import Icon from '../../../components/AppIcon';

const ProfessionalSummary = () => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="User" size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Professional Summary</h2>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Passionate Full Stack Developer with 5+ years of experience building scalable web applications 
          and leading development teams. Expertise in React ecosystem, Node.js, and cloud technologies 
          with a proven track record of delivering high-performance solutions that drive business growth.
        </p>
        
        <p className="text-muted-foreground leading-relaxed mb-4">
          Specialized in modern JavaScript frameworks, microservices architecture, and DevOps practices. 
          Strong advocate for clean code, test-driven development, and agile methodologies. Successfully 
          led cross-functional teams and mentored junior developers while maintaining focus on user 
          experience and technical excellence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Icon name="Code2" size={18} className="text-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Technical Leadership</h4>
              <p className="text-sm text-muted-foreground">
                Led development teams of 5-8 engineers, established coding standards, and implemented CI/CD pipelines
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Icon name="Zap" size={18} className="text-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Performance Optimization</h4>
              <p className="text-sm text-muted-foreground">
                Improved application performance by 40% through code optimization and architecture improvements
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Icon name="Users" size={18} className="text-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Cross-functional Collaboration</h4>
              <p className="text-sm text-muted-foreground">
                Worked closely with designers, product managers, and stakeholders to deliver user-centric solutions
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Icon name="Rocket" size={18} className="text-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Innovation Focus</h4>
              <p className="text-sm text-muted-foreground">
                Introduced modern technologies and best practices that reduced development time by 30%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSummary;