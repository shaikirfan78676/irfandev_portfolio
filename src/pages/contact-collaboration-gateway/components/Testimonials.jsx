import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechStart Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `Working with Irfan was exceptional. He delivered our e-commerce platform ahead of schedule and exceeded all our expectations. His attention to detail and proactive communication made the entire process smooth and stress-free.`,
      project: 'E-commerce Platform',
      timeline: '6 weeks',
      technologies: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Founder',
      company: 'GrowthMetrics',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `Irfan transformed our complex data visualization requirements into an intuitive, powerful dashboard. His technical expertise and ability to understand business needs made him the perfect partner for our project.`,
      project: 'Analytics Dashboard',
      timeline: '8 weeks',
      technologies: ['React', 'D3.js', 'Python']
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Product Manager',
      company: 'InnovateLab',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `The mobile app Irfan developed for us has been a game-changer. His React Native expertise and focus on user experience resulted in an app that our customers love. Highly recommended!`,
      project: 'Mobile Application',
      timeline: '10 weeks',
      technologies: ['React Native', 'Firebase', 'Node.js']
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'CEO',
      company: 'CloudSync Pro',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `Irfan's API development skills are outstanding. He built a robust, scalable backend that handles our growing user base effortlessly. His documentation and code quality are top-notch.`,
      project: 'API Development',timeline: '4 weeks',
      technologies: ['Node.js', 'MongoDB', 'AWS']
    },
    {
      id: 5,
      name: 'Lisa Thompson',role: 'Marketing Director',company: 'BrandBoost',avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',rating: 5,content: `Our website redesign project was completed flawlessly. Irfan's understanding of modern web technologies and SEO best practices resulted in a 40% increase in our conversion rates.`,
      project: 'Website Redesign',
      timeline: '5 weeks',
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients say about working with me.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <Icon name="Quote" size={128} className="text-accent" />
            </div>

            <div className="relative">
              {/* Rating */}
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-warning fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-foreground text-center leading-relaxed mb-8 font-medium">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-foreground">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-muted-foreground">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-muted/20 rounded-lg">
                  <Icon name="Briefcase" size={20} className="text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{currentTestimonial.project}</p>
                </div>
                <div className="text-center p-4 bg-muted/20 rounded-lg">
                  <Icon name="Clock" size={20} className="text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{currentTestimonial.timeline}</p>
                </div>
                <div className="text-center p-4 bg-muted/20 rounded-lg">
                  <Icon name="Code" size={20} className="text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">
                    {currentTestimonial.technologies.join(', ')}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-muted hover:bg-accent hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-accent w-8' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-muted hover:bg-accent hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-card border border-border rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                index === currentIndex 
                  ? 'border-accent shadow-lg shadow-accent/20 scale-105' 
                  : 'hover:border-accent/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                "{testimonial.content}"
              </p>

              {/* Client */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-border">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Project Badge */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <span className="inline-flex items-center space-x-1 text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                  <Icon name="Briefcase" size={12} />
                  <span>{testimonial.project}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">5★</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24h</div>
              <p className="text-sm text-muted-foreground">Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;