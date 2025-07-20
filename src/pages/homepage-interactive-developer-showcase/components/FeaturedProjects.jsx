import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/sirfan/ecommerce-platform",
      metrics: {
        performance: "98%",
        users: "10K+",
        uptime: "99.9%"
      },
      category: "Full-Stack",
      duration: "3 months",
      status: "Live"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Docker"],
      liveUrl: "https://taskflow-demo.com",
      githubUrl: "https://github.com/sirfan/taskflow",
      metrics: {
        performance: "95%",
        users: "5K+",
        uptime: "99.8%"
      },
      category: "SaaS",
      duration: "4 months",
      status: "Live"
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "Machine learning powered content generation platform with natural language processing and automated SEO optimization.",
      image: "https://images.pixabay.com/photo/2023/01/26/22/13/ai-generated-7747171_1280.jpg?w=800&h=600&fit=crop",
      technologies: ["Python", "React", "TensorFlow", "FastAPI", "Redis"],
      liveUrl: "https://ai-content-demo.com",
      githubUrl: "https://github.com/sirfan/ai-content-generator",
      metrics: {
        performance: "92%",
        users: "2K+",
        uptime: "99.5%"
      },
      category: "AI/ML",
      duration: "6 months",
      status: "Beta"
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[activeProject];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of standout case studies with live previews and technical deep-dives
          </p>
        </div>

        {/* Main Project Display */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    currentProject.status === 'Live' ?'bg-success text-white' :'bg-warning text-white'
                  }`}>
                    {currentProject.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent text-white rounded-full text-xs font-medium">
                    {currentProject.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {currentProject.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Key Metrics
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{currentProject.metrics.performance}</div>
                      <div className="text-xs text-muted-foreground">Performance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{currentProject.metrics.users}</div>
                      <div className="text-xs text-muted-foreground">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{currentProject.metrics.uptime}</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    className="bg-gradient-to-r from-accent to-electric-blue hover:from-accent/90 hover:to-electric-blue/90 text-white border-0"
                    iconName="ExternalLink"
                    iconPosition="right"
                    iconSize={16}
                  >
                    <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Live Preview
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white"
                    iconName="Github"
                    iconPosition="left"
                    iconSize={16}
                  >
                    <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      View Code
                    </a>
                  </Button>
                </div>

                {/* Project Meta */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Duration: {currentProject.duration}</span>
                    <span>Project #{activeProject + 1} of {projects.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 shadow-lg"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 shadow-lg"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeProject 
                  ? 'bg-accent scale-125' :'bg-muted hover:bg-accent/50'
              }`}
            />
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-white"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={20}
            asChild
          >
            <Link to="/skills-interactive-technical-showcase">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;