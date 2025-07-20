import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const WorkingWithMe = () => {
  const [activeTab, setActiveTab] = useState('communication');

  const workingStyles = {
    communication: {
      title: "Communication Style",
      icon: "MessageSquare",
      content: {
        overview: "Clear, proactive communication is the foundation of successful projects. I believe in transparency, regular updates, and collaborative problem-solving.",
        details: [
          {
            title: "Daily Updates",
            description: "Regular progress reports via Slack, email, or project management tools",
            icon: "Clock"
          },
          {
            title: "Weekly Sync Meetings",
            description: "Structured meetings to discuss progress, challenges, and next steps",
            icon: "Calendar"
          },
          {
            title: "Documentation First",
            description: "Comprehensive documentation for all decisions, changes, and processes",
            icon: "FileText"
          },
          {
            title: "Open Feedback Loop",
            description: "Encouraging honest feedback and maintaining open dialogue throughout",
            icon: "MessageCircle"
          }
        ]
      }
    },
    methodology: {
      title: "Project Methodology",
      icon: "GitBranch",
      content: {
        overview: "I follow agile principles with a focus on iterative development, continuous integration, and user feedback incorporation.",
        details: [
          {
            title: "Sprint Planning",
            description: "Breaking down projects into manageable 2-week sprints with clear deliverables",
            icon: "Target"
          },
          {
            title: "Version Control",
            description: "Git-based workflow with feature branches and comprehensive commit messages",
            icon: "Git"
          },
          {
            title: "Testing Strategy",
            description: "Unit tests, integration tests, and user acceptance testing at every stage",
            icon: "CheckSquare"
          },
          {
            title: "Continuous Deployment",
            description: "Automated CI/CD pipelines for reliable and frequent deployments",
            icon: "Zap"
          }
        ]
      }
    },
    collaboration: {
      title: "Collaboration Approach",
      icon: "Users",
      content: {
        overview: "I thrive in collaborative environments where ideas are shared freely, and everyone's expertise contributes to the final solution.",
        details: [
          {
            title: "Cross-functional Teams",
            description: "Working closely with designers, product managers, and stakeholders",
            icon: "Users"
          },
          {
            title: "Code Reviews",
            description: "Thorough peer reviews to maintain code quality and knowledge sharing",
            icon: "Eye"
          },
          {
            title: "Mentoring",
            description: "Supporting junior developers and sharing knowledge across the team",
            icon: "GraduationCap"
          },
          {
            title: "Problem Solving",
            description: "Collaborative approach to tackling complex technical challenges",
            icon: "Lightbulb"
          }
        ]
      }
    },
    tools: {
      title: "Preferred Tools",
      icon: "Wrench",
      content: {
        overview: "I use modern development tools and platforms that enhance productivity, collaboration, and code quality.",
        details: [
          {
            title: "Development Environment",
            description: "VS Code, Git, Docker, and modern terminal tools for efficient coding",
            icon: "Code"
          },
          {
            title: "Project Management",
            description: "Jira, Trello, or Linear for task tracking and sprint management",
            icon: "Kanban"
          },
          {
            title: "Communication",
            description: "Slack, Discord, or Microsoft Teams for team communication",
            icon: "MessageSquare"
          },
          {
            title: "Design Collaboration",
            description: "Figma, Adobe XD for design handoffs and collaborative design work",
            icon: "Palette"
          }
        ]
      }
    }
  };

  const workingPrinciples = [
    {
      icon: "Clock",
      title: "Punctuality",
      description: "Respecting deadlines and meeting commitments consistently"
    },
    {
      icon: "Shield",
      title: "Reliability",
      description: "Delivering quality work that you can depend on"
    },
    {
      icon: "Lightbulb",
      title: "Innovation",
      description: "Bringing creative solutions to complex problems"
    },
    {
      icon: "Heart",
      title: "Passion",
      description: "Genuine enthusiasm for creating exceptional software"
    }
  ];

  const availabilityInfo = {
    timezone: "UTC+5:30 (IST)",
    workingHours: "9:00 AM - 6:00 PM",
    responseTime: "Within 4 hours during business days",
    availability: "Monday to Friday, flexible for urgent matters"
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Working With Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding my working style, communication preferences, and project methodology 
            helps ensure smooth collaboration and successful outcomes.
          </p>
        </div>

        {/* Working Principles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {workingPrinciples.map((principle, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon name={principle.icon} size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{principle.title}</h3>
              <p className="text-sm text-muted-foreground">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Working Style Tabs */}
        <div className="bg-card border border-border rounded-xl overflow-hidden mb-16">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-border">
            {Object.entries(workingStyles).map(([key, style]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 min-w-0 px-6 py-4 text-sm font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-accent/10 text-accent border-b-2 border-accent' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Icon name={style.icon} size={16} />
                  <span className="hidden sm:inline">{style.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center">
                <Icon name={workingStyles[activeTab].icon} size={24} className="text-accent mr-3" />
                {workingStyles[activeTab].title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {workingStyles[activeTab].content.overview}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {workingStyles[activeTab].content.details.map((detail, index) => (
                <div
                  key={index}
                  className="bg-background/50 border border-border rounded-lg p-6 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={detail.icon} size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{detail.title}</h4>
                      <p className="text-muted-foreground">{detail.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Availability Information */}
        <div className="bg-gradient-to-r from-accent/5 to-electric-blue/5 border border-accent/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Icon name="Calendar" size={24} className="text-accent mr-3" />
            Availability & Contact
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Icon name="Globe" size={24} className="text-accent mx-auto mb-2" />
              <div className="text-sm font-semibold text-foreground">Timezone</div>
              <div className="text-sm text-muted-foreground">{availabilityInfo.timezone}</div>
            </div>
            
            <div className="text-center">
              <Icon name="Clock" size={24} className="text-accent mx-auto mb-2" />
              <div className="text-sm font-semibold text-foreground">Working Hours</div>
              <div className="text-sm text-muted-foreground">{availabilityInfo.workingHours}</div>
            </div>
            
            <div className="text-center">
              <Icon name="MessageCircle" size={24} className="text-accent mx-auto mb-2" />
              <div className="text-sm font-semibold text-foreground">Response Time</div>
              <div className="text-sm text-muted-foreground">{availabilityInfo.responseTime}</div>
            </div>
            
            <div className="text-center">
              <Icon name="Calendar" size={24} className="text-accent mx-auto mb-2" />
              <div className="text-sm font-semibold text-foreground">Availability</div>
              <div className="text-sm text-muted-foreground">{availabilityInfo.availability}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingWithMe;