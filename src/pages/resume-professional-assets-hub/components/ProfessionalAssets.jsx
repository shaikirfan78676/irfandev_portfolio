import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProfessionalAssets = () => {
  const [downloadCounts, setDownloadCounts] = useState({
    resume: 0,
    portfolio: 0,
    references: 0,
    samples: 0
  });

  const handleDownload = (assetType) => {
    setDownloadCounts(prev => ({
      ...prev,
      [assetType]: prev[assetType] + 1
    }));
    
    // Simulate download
    console.log(`Downloading ${assetType}...`);
  };

  const assets = [
    {
      id: 'resume',
      title: 'Professional Resume',
      description: 'ATS-optimized PDF resume with complete work history and technical skills',
      formats: ['PDF', 'DOCX'],
      size: '245 KB',
      lastUpdated: '2025-01-15',
      icon: 'FileText',
      color: 'accent',
      downloads: downloadCounts.resume,
      features: [
        'ATS-optimized formatting',
        'Complete work history',
        'Technical skills matrix',
        'Contact information'
      ]
    },
    {
      id: 'portfolio',
      title: 'Technical Portfolio',
      description: 'Comprehensive portfolio with detailed project case studies and code samples',
      formats: ['PDF'],
      size: '2.1 MB',
      lastUpdated: '2025-01-10',
      icon: 'Folder',
      color: 'success',
      downloads: downloadCounts.portfolio,
      features: [
        'Detailed case studies',
        'Architecture diagrams',
        'Code snippets',
        'Performance metrics'
      ]
    },
    {
      id: 'references',
      title: 'Professional References',
      description: 'Contact information and recommendations from previous clients and colleagues',
      formats: ['PDF'],
      size: '180 KB',
      lastUpdated: '2024-12-20',
      icon: 'Users',
      color: 'warning',
      downloads: downloadCounts.references,
      features: [
        'Client testimonials',
        'Colleague recommendations',
        'Contact information',
        'Project context'
      ]
    },
    {
      id: 'samples',
      title: 'Code Samples',
      description: 'Curated collection of code samples demonstrating best practices and expertise',
      formats: ['ZIP'],
      size: '1.8 MB',
      lastUpdated: '2025-01-05',
      icon: 'Code2',
      color: 'electric-blue',
      downloads: downloadCounts.samples,
      features: [
        'React components',
        'Node.js APIs',
        'Database schemas',
        'Documentation'
      ]
    }
  ];

  const additionalResources = [
    {
      title: 'GitHub Profile',
      description: 'Complete repository of open-source projects and contributions',
      icon: 'Github',
      link: 'https://github.com/sirfan',
      external: true
    },
    {
      title: 'LinkedIn Profile',
      description: 'Professional network and career timeline',
      icon: 'Linkedin',
      link: 'https://linkedin.com/in/sirfan',
      external: true
    },
    {
      title: 'Technical Blog',
      description: 'Articles and insights on modern web development',
      icon: 'BookOpen',
      link: '/blog-technical-insights-knowledge-hub',
      external: false
    },
    {
      title: 'Project Showcase',
      description: 'Interactive demos and detailed case studies',
      icon: 'Monitor',
      link: '/skills-interactive-technical-showcase',
      external: false
    }
  ];

  return (
    <div className="space-y-8">
      {/* Downloadable Assets */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Download" size={20} className="text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Professional Assets</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {assets.map((asset) => (
            <div key={asset.id} className="bg-muted/10 border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-${asset.color}/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-${asset.color}/20 transition-colors duration-300`}>
                  <Icon name={asset.icon} size={24} className={`text-${asset.color}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{asset.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Download" size={14} />
                      <span>{asset.downloads}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {asset.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="File" size={12} />
                        <span>{asset.formats.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="HardDrive" size={12} />
                        <span>{asset.size}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={12} />
                        <span>Updated {asset.lastUpdated}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Includes:</h4>
                      <ul className="grid grid-cols-2 gap-1">
                        {asset.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Icon name="Check" size={10} className="text-success flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {asset.formats.map((format) => (
                      <Button
                        key={format}
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(asset.id)}
                        iconName="Download"
                        iconPosition="left"
                        iconSize={14}
                        className="text-xs"
                      >
                        {format}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Link" size={20} className="text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Additional Resources</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {additionalResources.map((resource, index) => (
            <div key={index} className="group">
              {resource.external ? (
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-muted/10 border border-border rounded-lg hover:border-accent/50 hover:bg-muted/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name={resource.icon} size={18} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                </a>
              ) : (
                <a
                  href={resource.link}
                  className="flex items-center gap-4 p-4 bg-muted/10 border border-border rounded-lg hover:border-accent/50 hover:bg-muted/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name={resource.icon} size={18} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 rounded-xl p-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">Ready to Start a Project?</h3>
          <p className="text-muted-foreground mb-6">
            Let's discuss how I can help bring your ideas to life with modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="default"
              size="default"
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-gradient-to-r from-accent to-electric-blue hover:from-accent/90 hover:to-electric-blue/90"
              asChild
            >
              <a href="/contact-collaboration-gateway">
                Start Conversation
              </a>
            </Button>
            <Button
              variant="outline"
              size="default"
              iconName="Calendar"
              iconPosition="left"
              asChild
            >
              <a href="/contact-collaboration-gateway">
                Schedule Meeting
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalAssets;