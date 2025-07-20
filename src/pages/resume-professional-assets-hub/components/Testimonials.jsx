import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: `Irfan is an exceptional developer who consistently delivers high-quality solutions. His expertise in React and Node.js helped us rebuild our entire platform, resulting in a 40% performance improvement. His attention to detail and ability to solve complex problems makes him invaluable to any team.`,
      project: "E-Commerce Platform Redesign",
      date: "2024-12-15",
      metrics: {
        performance: "+40%",
        timeline: "On time",
        quality: "Excellent"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager",
      company: "StartupXYZ",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: `Working with Irfan was a game-changer for our startup. He built our analytics dashboard from scratch and delivered beyond our expectations. His technical skills are matched by his excellent communication and project management abilities. Highly recommended!`,
      project: "Real-time Analytics Dashboard",
      date: "2024-11-20",
      metrics: {
        engagement: "+35%",
        timeline: "Ahead of schedule",
        quality: "Outstanding"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Lead Designer",
      company: "Digital Agency Pro",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: `Irfan's ability to translate design concepts into pixel-perfect, responsive web applications is remarkable. He collaborated seamlessly with our design team and delivered 12 client projects with 100% satisfaction. His code quality and attention to detail are exceptional.`,
      project: "Multiple Client Projects",
      date: "2024-10-10",
      metrics: {
        projects: "12 completed",
        satisfaction: "100%",
        quality: "Exceptional"
      }
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Senior Developer",
      company: "TechCorp Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: `As a fellow developer, I can appreciate Irfan's technical expertise and clean coding practices. He mentored our junior developers and established coding standards that improved our team's productivity by 30%. A true technical leader.`,
      project: "Team Leadership & Mentoring",
      date: "2024-09-25",
      metrics: {
        productivity: "+30%",
        mentorship: "6 developers",
        standards: "Established"
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleTestimonialChange = (index) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Client Testimonials</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Testimonial */}
        <div className="lg:col-span-2">
          <div className="bg-muted/10 border border-border rounded-lg p-6 relative">
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
              <Icon name="Quote" size={16} className="text-accent" />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={16}
                  className={`${i < current.rating ? 'text-warning fill-current' : 'text-muted'}`}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {current.rating}.0 out of 5
              </span>
            </div>

            {/* Content */}
            <blockquote className="text-muted-foreground leading-relaxed mb-6 text-lg">
              "{current.content}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/20">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{current.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {current.position} at {current.company}
                </p>
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Briefcase" size={14} className="text-accent" />
                <span>{current.project}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={14} className="text-accent" />
                <span>{new Date(current.date).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {Object.entries(current.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-lg font-bold text-accent">{value}</div>
                  <div className="text-xs text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? 'bg-accent scale-110' :'bg-muted hover:bg-muted-foreground'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial List */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground mb-4">All Testimonials</h3>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => handleTestimonialChange(index)}
              className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                currentTestimonial === index
                  ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50 hover:bg-muted/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-accent/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={12}
                    className={`${i < testimonial.rating ? 'text-warning fill-current' : 'text-muted'}`}
                  />
                ))}
              </div>
              
              <p className="text-xs text-muted-foreground line-clamp-2">
                {testimonial.content.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-accent mb-1">5.0</div>
          <div className="text-sm text-muted-foreground">Average Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent mb-1">25+</div>
          <div className="text-sm text-muted-foreground">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent mb-1">100%</div>
          <div className="text-sm text-muted-foreground">Project Success</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent mb-1">95%</div>
          <div className="text-sm text-muted-foreground">Repeat Clients</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;