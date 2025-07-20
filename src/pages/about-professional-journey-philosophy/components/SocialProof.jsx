import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechVision Solutions",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      content: `Irfan is an exceptional developer who consistently delivers high-quality solutions. His ability to understand business requirements and translate them into elegant code is remarkable. He's also a great team player who mentors junior developers.`,
      rating: 5,
      project: "E-commerce Platform Redesign"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "StartupHub Technologies",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: `Working with Irfan was a game-changer for our startup. He built our entire frontend from scratch and delivered it ahead of schedule. His attention to detail and performance optimization skills are outstanding.`,
      rating: 5,
      project: "SaaS Dashboard Development"
    },
    {
      name: "Emily Johnson",
      role: "Lead Designer",
      company: "Digital Innovations Inc",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      content: `Irfan has an incredible eye for design implementation. He takes our Figma designs and brings them to life with pixel-perfect precision. His collaboration skills and feedback during the design process are invaluable.`,
      rating: 5,
      project: "Mobile App UI Development"
    },
    {
      name: "David Park",
      role: "Senior Developer",
      company: "TechVision Solutions",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      content: `As a fellow developer, I can say that Irfan's code quality is exceptional. His React components are clean, reusable, and well-documented. He's always willing to share knowledge and help solve complex problems.`,
      rating: 5,
      project: "Component Library Development"
    }
  ];

  const achievements = [
    {
      icon: "Award",
      title: "Top Performer 2023",
      description: "Recognized as top performer at TechVision Solutions",
      date: "December 2023"
    },
    {
      icon: "Users",
      title: "Team Leadership",
      description: "Successfully led a team of 8 developers on microservices project",
      date: "September 2023"
    },
    {
      icon: "Zap",
      title: "Performance Optimization",
      description: "Reduced application load time by 60% through optimization",
      date: "June 2023"
    },
    {
      icon: "BookOpen",
      title: "Technical Writing",
      description: "Published 15+ technical articles with 50K+ total views",
      date: "Ongoing"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: "☁️",
      verified: true
    },
    {
      name: "React Advanced Patterns",
      issuer: "Frontend Masters",
      date: "2023",
      icon: "⚛️",
      verified: true
    },
    {
      name: "Node.js Application Development",
      issuer: "Linux Foundation",
      date: "2022",
      icon: "🟢",
      verified: true
    },
    {
      name: "TypeScript Deep Dive",
      issuer: "Udemy",
      date: "2022",
      icon: "📘",
      verified: true
    }
  ];

  const communityStats = [
    { label: "GitHub Stars", value: "500+", icon: "Star" },
    { label: "Open Source Contributions", value: "200+", icon: "GitBranch" },
    { label: "Technical Articles", value: "50+", icon: "FileText" },
    { label: "Community Followers", value: "1.2K+", icon: "Users" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Social Proof & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonials from colleagues, achievements, and community contributions 
            that validate my expertise and professional impact.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon name={stat.icon} size={24} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Testimonial Cards */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Icon name="MessageSquare" size={24} className="text-accent mr-3" />
              Client Testimonials
            </h3>
            
            <div className="grid gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-card border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'border-accent shadow-lg shadow-accent/20'
                      : 'border-border hover:border-accent/50'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={14} className="text-accent fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-accent">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Briefcase" size={14} className="text-accent" />
                    <span className="text-muted-foreground">Project: {testimonial.project}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Testimonial Highlight */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-accent/5 to-electric-blue/5 border border-accent/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Quote" size={20} className="text-accent mr-2" />
                Featured Testimonial
              </h4>
              
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-foreground">
                    {testimonials[activeTestimonial].name}
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="text-sm text-accent">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-muted-foreground text-sm italic leading-relaxed">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
            </div>

            {/* Achievements */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Trophy" size={20} className="text-accent mr-2" />
                Recent Achievements
              </h4>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={achievement.icon} size={16} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-foreground text-sm">{achievement.title}</h5>
                      <p className="text-xs text-muted-foreground mb-1">{achievement.description}</p>
                      <p className="text-xs text-accent">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Icon name="Award" size={24} className="text-accent mr-3" />
            Certifications & Credentials
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-background/50 border border-border rounded-lg p-4 hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{cert.icon}</span>
                  {cert.verified && (
                    <div className="flex items-center space-x-1 text-xs text-accent">
                      <Icon name="CheckCircle" size={14} />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                
                <h4 className="font-semibold text-foreground text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                <p className="text-xs text-accent">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;