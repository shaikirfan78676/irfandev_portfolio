import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      testimonial: `Working with Irfan was exceptional. His technical expertise in React and Node.js helped us build a scalable platform that handles 10K+ concurrent users. The code quality and architecture decisions were outstanding, and he delivered ahead of schedule.`,
      project: "E-commerce Platform",
      collaboration: "6 months",
      highlight: "Delivered 2 weeks ahead of schedule"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "StartupHub Inc",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      testimonial: `Irfan's ability to understand business requirements and translate them into technical solutions is remarkable. He built our task management platform with real-time features that our users love. His communication throughout the project was clear and professional.`,
      project: "Task Management App",
      collaboration: "4 months",
      highlight: "98% client satisfaction score"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Founder",
      company: "AI Innovations Lab",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      testimonial: `The AI content generator Irfan developed exceeded our expectations. His expertise in Python and machine learning, combined with a beautiful React frontend, created a product that our customers absolutely love. Highly recommended!`,
      project: "AI Content Generator",
      collaboration: "6 months",
      highlight: "2K+ active users within first month"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Engineering Lead",
      company: "CloudTech Systems",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      rating: 5,
      testimonial: `Irfan's full-stack development skills are top-notch. He helped us migrate our monolithic application to microservices architecture with zero downtime. His attention to detail and problem-solving abilities make him an invaluable team member.`,
      project: "System Migration",
      collaboration: "8 months",
      highlight: "Zero downtime migration"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "CEO",
      company: "Digital Marketing Pro",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      rating: 5,
      testimonial: `Irfan transformed our digital presence with a modern, responsive website that perfectly represents our brand. His understanding of both technical implementation and user experience design resulted in a 40% increase in conversions.`,
      project: "Corporate Website",
      collaboration: "3 months",
      highlight: "40% increase in conversions"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Feedback emphasizing technical execution and collaboration quality
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div 
            className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote Icon */}
            <div className="text-accent mb-6">
              <Icon name="Quote" size={48} />
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
              "{current.testimonial}"
            </blockquote>

            {/* Rating */}
            <div className="flex items-center mb-6">
              {[...Array(current.rating)].map((_, index) => (
                <Icon key={index} name="Star" size={20} className="text-yellow-500 fill-current" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {current.rating}.0 out of 5
              </span>
            </div>

            {/* Client Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-card flex items-center justify-center">
                    <Icon name="Check" size={12} color="white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{current.name}</h4>
                  <p className="text-muted-foreground">{current.role}</p>
                  <p className="text-accent text-sm font-medium">{current.company}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="text-right hidden sm:block">
                <div className="text-sm text-muted-foreground mb-1">Project:</div>
                <div className="font-medium text-foreground mb-2">{current.project}</div>
                <div className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                  {current.highlight}
                </div>
              </div>
            </div>

            {/* Project Meta (Mobile) */}
            <div className="sm:hidden mt-6 pt-6 border-t border-border">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-muted-foreground">Project:</div>
                  <div className="font-medium text-foreground">{current.project}</div>
                </div>
                <div className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                  {current.highlight}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 shadow-lg"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 shadow-lg"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-accent scale-125' :'bg-muted hover:bg-accent/50'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Project Success</div>
          </div>
        </div>

        {/* Auto-play Indicator */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
            <span>{isAutoPlaying ? "Pause" : "Play"} Auto-rotation</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;