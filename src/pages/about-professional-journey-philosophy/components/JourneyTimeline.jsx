import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const JourneyTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const journeyData = [
    {
      year: "2024",
      title: "Senior Full-Stack Developer",
      company: "TechVision Solutions",
      type: "Current Role",
      description: "Leading development of enterprise-scale applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions for Fortune 500 clients.",
      achievements: [
        "Reduced application load time by 60% through optimization",
        "Led team of 8 developers on microservices architecture",
        "Implemented CI/CD pipelines reducing deployment time by 75%"
      ],
      technologies: ["React 18", "Node.js", "AWS", "Docker", "TypeScript"],
      icon: "Briefcase"
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      company: "Digital Innovations Inc",
      type: "Career Growth",
      description: "Developed and maintained multiple client projects, focusing on modern web technologies and user experience optimization. Specialized in React ecosystem and backend API development.",
      achievements: [
        "Built 15+ responsive web applications",
        "Increased client satisfaction scores by 40%",
        "Introduced automated testing reducing bugs by 50%"
      ],
      technologies: ["React", "Express.js", "MongoDB", "PostgreSQL", "Redux"],
      icon: "Code"
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "StartupHub Technologies",
      type: "Professional Start",
      description: "Began professional journey focusing on frontend development and user interface design. Worked closely with design teams to create pixel-perfect, responsive web applications.",
      achievements: [
        "Converted 20+ Figma designs to responsive code",
        "Improved website performance scores by 35%",
        "Collaborated with UX team on user research"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Sass"],
      icon: "Palette"
    },
    {
      year: "2019",
      title: "Computer Science Graduate",
      company: "University of Technology",
      type: "Education",
      description: "Completed Bachelor's degree in Computer Science with focus on software engineering, algorithms, and web technologies. Graduated with honors and led multiple academic projects.",
      achievements: [
        "Graduated Magna Cum Laude (GPA: 3.8/4.0)",
        "Led final year project on AI-powered web applications",
        "Published research paper on modern web frameworks"
      ],
      technologies: ["Java", "Python", "C++", "Database Design", "Algorithms"],
      icon: "GraduationCap"
    },
    {
      year: "2018",
      title: "First Line of Code",
      company: "Self-Taught Journey",
      type: "Beginning",
      description: "Started programming journey with curiosity about how websites work. Built first HTML page and fell in love with the power of code to create and solve problems.",
      achievements: [
        "Built first personal website",
        "Completed 10+ online programming courses",
        "Created first JavaScript interactive game"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git", "VS Code"],
      icon: "Rocket"
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From curious beginner to seasoned developer—every step has shaped my approach to 
            building exceptional software solutions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-electric-blue to-accent transform lg:-translate-x-1/2"></div>

          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background transform lg:-translate-x-1/2 z-10">
                  <div className={`absolute inset-0 bg-accent rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'animate-ping' : ''
                  }`}></div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ml-16 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                }`}>
                  <div className={`bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 ${
                    activeIndex === index ? 'border-accent/50 shadow-lg shadow-accent/20' : ''
                  }`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Icon name={item.icon} size={24} className="text-accent" />
                        </div>
                        <div>
                          <div className="text-sm text-accent font-medium">{item.year}</div>
                          <div className="text-xs text-muted-foreground">{item.type}</div>
                        </div>
                      </div>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-accent font-medium mb-4">{item.company}</p>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                        <Icon name="Trophy" size={16} className="text-accent mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                        <Icon name="Wrench" size={16} className="text-accent mr-2" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Year Badge (Desktop) */}
                <div className="hidden lg:block w-2/12">
                  <div className={`text-center ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-2xl font-bold text-accent">{item.year}</div>
                    <div className="text-sm text-muted-foreground">{item.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent/10 to-electric-blue/10 border border-accent/20 rounded-full">
            <Icon name="TrendingUp" size={20} className="text-accent" />
            <span className="text-foreground font-medium">The journey continues...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;