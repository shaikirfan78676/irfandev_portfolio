import React from 'react';
import Icon from '../../../components/AppIcon';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "Jan 2022 - Present",
      type: "Full-time",
      description: `Led development of enterprise-scale web applications serving 100K+ users. Architected microservices infrastructure that improved system reliability by 45%. Mentored team of 6 junior developers and established coding standards that reduced bug reports by 60%.`,
      achievements: [
        "Reduced application load time by 40% through performance optimization",
        "Implemented automated testing suite achieving 95% code coverage",
        "Led migration from monolith to microservices architecture",
        "Established CI/CD pipeline reducing deployment time from 2 hours to 15 minutes"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
      highlights: {
        teamSize: "8 developers",
        budget: "$2.5M project",
        impact: "45% performance improvement"
      }
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "Mar 2020 - Dec 2021",
      type: "Full-time",
      description: `Built MVP and scaled platform from 0 to 50K users. Developed real-time features using WebSocket technology. Collaborated with product team to define technical requirements and user experience improvements.`,
      achievements: [
        "Built complete platform from scratch in 6 months",
        "Implemented real-time chat system handling 10K concurrent users",
        "Optimized database queries reducing response time by 65%",
        "Integrated payment processing with 99.9% uptime"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Stripe API", "Socket.io"],
      highlights: {
        teamSize: "4 developers",
        budget: "$800K project",
        impact: "0 to 50K users"
      }
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "Jun 2019 - Feb 2020",
      type: "Contract",
      description: `Developed responsive web applications for Fortune 500 clients. Collaborated with design team to implement pixel-perfect UI components. Optimized applications for mobile devices and cross-browser compatibility.`,
      achievements: [
        "Delivered 12 client projects with 100% on-time completion",
        "Improved mobile performance scores by average 35%",
        "Implemented accessibility standards achieving WCAG 2.1 AA compliance",
        "Reduced bundle size by 50% through code splitting and optimization"
      ],
      technologies: ["React", "TypeScript", "Sass", "Webpack", "Jest", "Storybook"],
      highlights: {
        teamSize: "3 developers",
        budget: "Multiple projects",
        impact: "12 successful launches"
      }
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="Briefcase" size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative">
            {/* Timeline Line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-full bg-border"></div>
            )}
            
            {/* Timeline Dot */}
            <div className="absolute left-4 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
            
            {/* Content */}
            <div className="ml-12">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Building" size={16} className="text-accent" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-accent" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-accent" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      {exp.type}
                    </div>
                  </div>
                </div>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-4 text-sm">
                  {Object.entries(exp.highlights).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-semibold text-accent">{value}</div>
                      <div className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Icon name="Trophy" size={16} className="text-accent" />
                  Key Achievements
                </h4>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Icon name="Code2" size={16} className="text-accent" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted/20 text-foreground text-sm rounded-full border border-border hover:border-accent/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;