import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalPhilosophy = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophies = [
    {
      title: "Clean Code First",
      icon: "Code2",
      description: "Code should be written for humans to read, not just machines to execute.",
      principles: [
        "Self-documenting code with meaningful variable names",
        "Single responsibility principle for functions and components",
        "Consistent formatting and style across the codebase",
        "Regular refactoring to maintain code quality"
      ],
      codeExample: `// Clean, readable function
const calculateUserEngagement = (sessions, totalTime) => {
  const averageSessionTime = totalTime / sessions;
  return averageSessionTime > ENGAGEMENT_THRESHOLD;
};`
    },
    {
      title: "User-Centered Design",
      icon: "Users",
      description: "Every technical decision should ultimately serve the end user\'s needs and experience.",
      principles: [
        "Performance optimization for better user experience",
        "Accessibility compliance for inclusive design",
        "Mobile-first responsive development approach",
        "Intuitive interfaces that require minimal learning"
      ],
      codeExample: `// Accessible component with proper ARIA labels
const SearchInput = ({ onSearch, placeholder }) => (
  <input
    type="search"
    aria-label="Search products"
    placeholder={placeholder}
    onChange={(e) => onSearch(e.target.value)}
  />
);`
    },
    {
      title: "Business Impact Focus",
      icon: "TrendingUp",
      description: "Technology should solve real problems and create measurable business value.",
      principles: [
        "Understanding business requirements before coding",
        "Measuring and optimizing for key performance indicators",
        "Balancing technical debt with feature delivery",
        "Communicating technical concepts to stakeholders"
      ],
      codeExample: `// Performance monitoring for business metrics
const trackConversion = (action, value) => {
  analytics.track('conversion', {
    action,
    value,
    timestamp: Date.now()
  });
};`
    },
    {
      title: "Continuous Learning",
      icon: "BookOpen",
      description: "Technology evolves rapidly; staying current is essential for delivering modern solutions.",
      principles: [
        "Regular exploration of new technologies and frameworks",
        "Contributing to open-source projects and community",
        "Sharing knowledge through documentation and mentoring",
        "Adapting development practices based on industry trends"
      ],
      codeExample: `// Modern React patterns with hooks
const useApiData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchData(url).then(setData).finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading };
};`
    }
  ];

  const coreValues = [
    {
      icon: "Shield",
      title: "Reliability",
      description: "Building robust systems that work consistently under pressure"
    },
    {
      icon: "Zap",
      title: "Performance",
      description: "Optimizing for speed and efficiency in every line of code"
    },
    {
      icon: "Heart",
      title: "Empathy",
      description: "Understanding user needs and team dynamics for better outcomes"
    },
    {
      icon: "Target",
      title: "Precision",
      description: "Attention to detail in implementation and problem-solving"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Technical Philosophy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My approach to software development is guided by principles that ensure 
            quality, maintainability, and real-world impact.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon name={value.icon} size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Philosophy Tabs */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          {/* Tab Headers */}
          <div className="flex flex-wrap border-b border-border">
            {philosophies.map((philosophy, index) => (
              <button
                key={index}
                onClick={() => setActivePhilosophy(index)}
                className={`flex-1 min-w-0 px-6 py-4 text-sm font-medium transition-all duration-300 ${
                  activePhilosophy === index
                    ? 'bg-accent/10 text-accent border-b-2 border-accent' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Icon name={philosophy.icon} size={16} />
                  <span className="hidden sm:inline">{philosophy.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Philosophy Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center">
                    <Icon name={philosophies[activePhilosophy].icon} size={24} className="text-accent mr-3" />
                    {philosophies[activePhilosophy].title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {philosophies[activePhilosophy].description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Principles</h4>
                  <ul className="space-y-3">
                    {philosophies[activePhilosophy].principles.map((principle, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Code Example */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground flex items-center">
                  <Icon name="Terminal" size={20} className="text-accent mr-2" />
                  Code Example
                </h4>
                <div className="bg-deep-dark border border-border rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">example.js</span>
                  </div>
                  <pre className="p-4 text-sm font-mono text-foreground overflow-x-auto">
                    <code>{philosophies[activePhilosophy].codeExample}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-accent/5 to-electric-blue/5 border border-accent/20 rounded-xl p-8">
            <Icon name="Quote" size={32} className="text-accent mx-auto mb-4" />
            <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-4 leading-relaxed">
              "Great software is not just about writing code that works—it's about crafting solutions 
              that empower users, drive business success, and inspire other developers to build better."
            </blockquote>
            <cite className="text-accent font-semibold">— S. Irfan</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalPhilosophy;