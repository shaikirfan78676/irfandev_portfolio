import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AuthorBio = () => {
  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/sirfan', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/in/sirfan', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/sirfan_dev', color: 'hover:text-blue-400' },
    { name: 'Email', icon: 'Mail', url: 'mailto:hello@sirfan.dev', color: 'hover:text-accent' }
  ];

  const stats = [
    { label: 'Articles Published', value: '47', icon: 'BookOpen' },
    { label: 'Total Readers', value: '25K+', icon: 'Users' },
    { label: 'Years Experience', value: '8+', icon: 'Calendar' },
    { label: 'Projects Completed', value: '120+', icon: 'Code2' }
  ];

  return (
    <div className="bg-gradient-to-br from-card to-card/80 rounded-2xl p-8 border border-border">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Author Image & Basic Info */}
        <div className="flex-shrink-0">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              alt="S. Irfan - Full-Stack Developer"
              className="w-24 h-24 rounded-full object-cover border-4 border-accent/20"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-4 border-card">
              <Icon name="Code2" size={16} className="text-white" />
            </div>
          </div>
        </div>
        
        {/* Author Details */}
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-foreground mb-1">S. Irfan</h3>
            <p className="text-accent font-medium mb-2">Full-Stack Developer & Technical Writer</p>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about creating scalable web applications and sharing knowledge with the developer community. 
              Specializing in React, Node.js, and modern web technologies with 8+ years of industry experience.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg bg-muted hover:bg-accent transition-all duration-300 ${social.color} group`}
                title={social.name}
              >
                <Icon name={social.icon} size={18} className="group-hover:text-white" />
              </a>
            ))}
          </div>
          
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about-professional-journey-philosophy"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-300 text-sm font-medium"
            >
              <Icon name="User" size={16} />
              View Full Profile
            </Link>
            
            <Link
              to="/contact-collaboration-gateway"
              className="flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg hover:border-accent hover:text-accent transition-colors duration-300 text-sm font-medium"
            >
              <Icon name="MessageCircle" size={16} />
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon name={stat.icon} size={20} className="text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorBio;