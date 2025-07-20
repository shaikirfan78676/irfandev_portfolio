import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectHighlights = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      category: "Full Stack Development",
      client: "TechCorp Solutions",
      duration: "8 months",
      team: "6 developers",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: `Led complete redesign and development of enterprise e-commerce platform serving 100K+ users. Implemented modern React architecture with microservices backend, resulting in 40% performance improvement and 25% increase in conversion rates.`,
      keyFeatures: [
        "Real-time inventory management",
        "Advanced search and filtering",
        "Multi-payment gateway integration",
        "Mobile-responsive design",
        "Admin dashboard with analytics"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
      metrics: {
        performance: "+40%",
        conversion: "+25%",
        users: "100K+",
        uptime: "99.9%"
      },
      challenges: [
        "Migrating legacy data without downtime",
        "Implementing real-time features at scale",
        "Optimizing for mobile performance"
      ],
      solutions: [
        "Blue-green deployment strategy",
        "WebSocket with Redis pub/sub",
        "Progressive web app implementation"
      ]
    },
    {
      id: 2,
      title: "Real-time Analytics Dashboard",
      category: "Data Visualization",
      client: "StartupXYZ",
      duration: "4 months",
      team: "4 developers",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: `Built comprehensive analytics dashboard with real-time data visualization for startup's SaaS platform. Integrated multiple data sources and created interactive charts that helped increase user engagement by 35%.`,
      keyFeatures: [
        "Real-time data streaming",
        "Interactive charts and graphs",
        "Custom report generation",
        "Data export functionality",
        "Role-based access control"
      ],
      technologies: ["Vue.js", "D3.js", "Express.js", "MongoDB", "Socket.io", "Chart.js"],
      metrics: {
        engagement: "+35%",
        dataPoints: "1M+",
        response: "<200ms",
        accuracy: "99.5%"
      },
      challenges: [
        "Processing large datasets efficiently",
        "Real-time data synchronization",
        "Complex data visualization requirements"
      ],
      solutions: [
        "Data aggregation and caching strategies",
        "WebSocket-based real-time updates",
        "Custom D3.js visualization components"
      ]
    },
    {
      id: 3,
      title: "Mobile Banking Application",
      category: "Mobile Development",
      client: "Digital Agency Pro",
      duration: "6 months",
      team: "5 developers",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      description: `Developed secure mobile banking application with biometric authentication and real-time transaction processing. Achieved 4.8/5 app store rating and processed over $10M in transactions within first quarter.`,
      keyFeatures: [
        "Biometric authentication",
        "Real-time transaction processing",
        "Account management",
        "Bill payment integration",
        "Investment portfolio tracking"
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "Stripe", "Firebase"],
      metrics: {
        rating: "4.8/5",
        transactions: "$10M+",
        downloads: "50K+",
        security: "100%"
      },
      challenges: [
        "Implementing bank-level security",
        "Cross-platform compatibility",
        "Real-time transaction processing"
      ],
      solutions: [
        "Multi-layer encryption and JWT tokens",
        "React Native with platform-specific optimizations",
        "Microservices architecture with message queues"
      ]
    }
  ];

  const currentProject = projects[selectedProject];

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="Folder" size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Project Highlights</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project List */}
        <div className="space-y-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(index)}
              className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                selectedProject === index
                  ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50 hover:bg-muted/20'
              }`}
            >
              <h3 className="font-semibold text-foreground mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{project.client}</span>
                <span className={`px-2 py-1 rounded-full ${
                  project.status === 'Completed' 
                    ? 'bg-success/10 text-success' :'bg-warning/10 text-warning'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Image */}
          <div className="relative rounded-lg overflow-hidden h-48">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white mb-1">{currentProject.title}</h3>
              <p className="text-white/80 text-sm">{currentProject.category}</p>
            </div>
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-accent">{currentProject.duration}</div>
              <div className="text-sm text-muted-foreground">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-accent">{currentProject.team}</div>
              <div className="text-sm text-muted-foreground">Team Size</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-accent">{currentProject.client}</div>
              <div className="text-sm text-muted-foreground">Client</div>
            </div>
            <div className="text-center">
              <div className={`text-lg font-bold ${
                currentProject.status === 'Completed' ? 'text-success' : 'text-warning'
              }`}>
                {currentProject.status}
              </div>
              <div className="text-sm text-muted-foreground">Status</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-semibold text-foreground mb-2">Project Overview</h4>
            <p className="text-muted-foreground leading-relaxed">{currentProject.description}</p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-accent" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {currentProject.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="ArrowRight" size={14} className="text-accent flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Icon name="Code2" size={16} className="text-accent" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-muted/20 text-foreground text-sm rounded-full border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Icon name="TrendingUp" size={16} className="text-accent" />
              Key Metrics
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(currentProject.metrics).map(([key, value]) => (
                <div key={key} className="text-center p-3 bg-muted/10 rounded-lg">
                  <div className="text-lg font-bold text-accent">{value}</div>
                  <div className="text-sm text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Icon name="AlertTriangle" size={16} className="text-warning" />
                Challenges
              </h4>
              <ul className="space-y-2">
                {currentProject.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Icon name="Minus" size={14} className="text-warning mt-1 flex-shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Icon name="Lightbulb" size={16} className="text-success" />
                Solutions
              </h4>
              <ul className="space-y-2">
                {currentProject.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Icon name="Plus" size={14} className="text-success mt-1 flex-shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-border">
            <Button
              variant="outline"
              size="sm"
              iconName="ExternalLink"
              iconPosition="right"
              className="w-full lg:w-auto"
            >
              View Full Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHighlights;