import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [taglineText, setTaglineText] = useState('');
  const [taglineIndex, setTaglineIndex] = useState(0);

  const codeSnippet = `const DeveloperProfile = () => {
  const [skills, setSkills] = useState([
    'React', 'Node.js', 'TypeScript'
  ]);
  
  return (
    <div className="developer">
      <h1>S.Irfan</h1>
      <p>Full-Stack Developer</p>
      {skills.map(skill => (
        <span key={skill}>{skill}</span>
      ))}
    </div>
  );
};`;

  const tagline = "Full-Stack Solutions for Real-World Problems";

  useEffect(() => {
    if (currentIndex < codeSnippet.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(codeSnippet.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, codeSnippet]);

  useEffect(() => {
    if (taglineIndex < tagline.length) {
      const timer = setTimeout(() => {
        setTaglineText(tagline.slice(0, taglineIndex + 1));
        setTaglineIndex(taglineIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [taglineIndex, tagline]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background Neural Network */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <radialGradient id="neuralGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r="2"
              fill="var(--color-accent)"
              opacity="0.6"
            >
              <animate
                attributeName="opacity"
                values="0.6;0.2;0.6"
                dur={`${2 + Math.random() * 3}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-4">
                S.<span className="text-gradient">Irfan</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground font-mono mb-2">
                Full-Stack Developer
              </div>
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <p className="text-lg lg:text-xl text-accent font-medium">
                  {taglineText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Crafting digital solutions that bridge innovation and functionality. 
                Transforming complex problems into elegant, scalable applications.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-accent to-electric-blue hover:from-accent/90 hover:to-electric-blue/90 text-white border-0 shadow-electric-blue/30"
                iconName="FolderOpen"
                iconPosition="left"
                iconSize={20}
                asChild
              >
                <Link to="/skills-interactive-technical-showcase">
                  View Projects
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-white"
                iconName="Download"
                iconPosition="left"
                iconSize={20}
                asChild
              >
                <Link to="/resume-professional-assets-hub">
                  Download Resume
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Live Code Editor */}
          <div className="relative">
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl">
              {/* Code Editor Header */}
              <div className="bg-muted/20 px-4 py-3 border-b border-border flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  DeveloperProfile.jsx
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Play" size={16} className="text-success" />
                  <Icon name="Square" size={16} className="text-muted-foreground" />
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 bg-deep-dark min-h-[400px]">
                <pre className="text-sm font-mono text-foreground leading-relaxed">
                  <code>
                    {displayedCode.split('\n').map((line, index) => (
                      <div key={index} className="flex">
                        <span className="text-muted-foreground mr-4 select-none w-6 text-right">
                          {index + 1}
                        </span>
                        <span className="flex-1">
                          {line.includes('const') && (
                            <span className="text-purple-400">const </span>
                          )}
                          {line.includes('useState') && (
                            <span className="text-blue-400">useState</span>
                          )}
                          {line.includes('return') && (
                            <span className="text-purple-400">return </span>
                          )}
                          {line.includes('className') && (
                            <span className="text-green-400">className</span>
                          )}
                          {line.replace(/const |useState|return |className/g, '')}
                        </span>
                      </div>
                    ))}
                    <span className="animate-pulse text-accent">|</span>
                  </code>
                </pre>
              </div>

              {/* Code Editor Footer */}
              <div className="bg-muted/10 px-4 py-2 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <span>React JSX</span>
                  <span>UTF-8</span>
                  <span>Ln {displayedCode.split('\n').length}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={14} className="text-success" />
                  <span>No errors</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent to-electric-blue rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;