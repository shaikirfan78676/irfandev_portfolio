import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const contactOptions = [
    {
      name: 'Email',
      icon: 'Mail',
      href: 'mailto:contact@sirfan.dev',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      href: 'https://wa.me/1234567890',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      href: 'https://linkedin.com/in/sirfan',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Schedule Call',
      icon: 'Calendar',
      href: '/contact-collaboration-gateway',
      color: 'bg-purple-500 hover:bg-purple-600',
      isInternal: true
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      <div className={`flex flex-col space-y-3 mb-4 transition-all duration-300 ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {contactOptions.map((option, index) => (
          <div
            key={option.name}
            className="flex items-center justify-end group"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {/* Label */}
            <div className="mr-3 px-3 py-2 bg-card border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {option.name}
              </span>
            </div>

            {/* Button */}
            {option.isInternal ? (
              <Link
                to={option.href}
                className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200`}
                onClick={() => setIsExpanded(false)}
              >
                <Icon name={option.icon} size={20} />
              </Link>
            ) : (
              <a
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200`}
              >
                <Icon name={option.icon} size={20} />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Main Contact Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-16 h-16 bg-gradient-to-r from-accent to-electric-blue rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ${
          isExpanded ? 'rotate-45' : 'rotate-0'
        }`}
      >
        <Icon name={isExpanded ? "X" : "MessageCircle"} size={24} />
      </button>

      {/* Pulse Animation */}
      {!isExpanded && (
        <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-accent to-electric-blue rounded-full animate-ping opacity-20"></div>
      )}

      {/* Notification Badge */}
      <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
        <span className="text-xs font-bold text-white">!</span>
      </div>
    </div>
  );
};

export default FloatingContactButton;