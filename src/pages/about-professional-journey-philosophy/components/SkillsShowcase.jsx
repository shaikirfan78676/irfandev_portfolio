import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "Monitor",
      description: "Creating responsive, interactive user interfaces with modern frameworks",
      skills: [
        {
          name: "React.js",
          level: 95,
          experience: "5+ years",
          description: "Advanced React development with hooks, context, and performance optimization",
          projects: 25,
          icon: "⚛️"
        },
        {
          name: "TypeScript",
          level: 90,
          experience: "3+ years",
          description: "Type-safe development for large-scale applications",
          projects: 18,
          icon: "📘"
        },
        {
          name: "Next.js",
          level: 88,
          experience: "3+ years",
          description: "Full-stack React framework with SSR and static generation",
          projects: 15,
          icon: "▲"
        },
        {
          name: "Tailwind CSS",
          level: 92,
          experience: "4+ years",
          description: "Utility-first CSS framework for rapid UI development",
          projects: 30,
          icon: "🎨"
        },
        {
          name: "JavaScript ES6+",
          level: 94,
          experience: "5+ years",
          description: "Modern JavaScript with async/await, modules, and advanced patterns",
          projects: 40,
          icon: "🟨"
        }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "Server",
      description: "Building scalable server-side applications and APIs",
      skills: [
        {
          name: "Node.js",
          level: 90,
          experience: "4+ years",
          description: "Server-side JavaScript with Express.js and microservices architecture",
          projects: 22,
          icon: "🟢"
        },
        {
          name: "Python",
          level: 85,
          experience: "3+ years",
          description: "Backend development with Django and Flask frameworks",
          projects: 12,
          icon: "🐍"
        },
        {
          name: "PostgreSQL",
          level: 88,
          experience: "4+ years",
          description: "Advanced SQL queries, optimization, and database design",
          projects: 20,
          icon: "🐘"
        },
        {
          name: "MongoDB",
          level: 82,
          experience: "3+ years",
          description: "NoSQL database design and aggregation pipelines",
          projects: 15,
          icon: "🍃"
        },
        {
          name: "REST APIs",
          level: 93,
          experience: "5+ years",
          description: "RESTful API design, documentation, and best practices",
          projects: 35,
          icon: "🔗"
        }
      ]
    },
    tools: {
      title: "Tools & DevOps",
      icon: "Wrench",
      description: "Development tools, deployment, and infrastructure management",
      skills: [
        {
          name: "Git & GitHub",
          level: 95,
          experience: "5+ years",
          description: "Version control, branching strategies, and collaborative development",
          projects: 50,
          icon: "📚"
        },
        {
          name: "Docker",
          level: 80,
          experience: "2+ years",
          description: "Containerization and microservices deployment",
          projects: 10,
          icon: "🐳"
        },
        {
          name: "AWS",
          level: 75,
          experience: "2+ years",
          description: "Cloud services including EC2, S3, Lambda, and RDS",
          projects: 8,
          icon: "☁️"
        },
        {
          name: "VS Code",
          level: 98,
          experience: "5+ years",
          description: "Advanced IDE usage with extensions and custom configurations",
          projects: 50,
          icon: "💻"
        },
        {
          name: "Figma",
          level: 78,
          experience: "3+ years",
          description: "Design collaboration and component-based design systems",
          projects: 20,
          icon: "🎨"
        }
      ]
    }
  };

  const codeExamples = {
    frontend: `// Modern React Hook with TypeScript
const useApiData = <T>(url: string): ApiState<T> => {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error });
      }
    };

    fetchData();
  }, [url]);

  return state;
};`,
    backend: `// Express.js API with error handling
const express = require('express');
const app = express();

app.get('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id)
      .populate('profile')
      .lean();
    
    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      });
    }
    
    res.json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});`,
    tools: `# Docker multi-stage build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise, from frontend frameworks 
            to backend systems and development tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-accent text-white shadow-lg shadow-accent/30'
                  : 'bg-card text-muted-foreground border border-border hover:border-accent/50 hover:text-foreground'
              }`}
            >
              <Icon name={category.icon} size={20} />
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skills List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center">
                <Icon name={skillCategories[activeCategory].icon} size={24} className="text-accent mr-3" />
                {skillCategories[activeCategory].title}
              </h3>
              <p className="text-muted-foreground">
                {skillCategories[activeCategory].description}
              </p>
            </div>

            <div className="space-y-4">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                        <p className="text-sm text-accent">{skill.experience}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Proficiency</div>
                      <div className="text-lg font-bold text-accent">{skill.level}%</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-accent to-electric-blue h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: hoveredSkill === index ? `${skill.level}%` : '0%' 
                        }}
                      ></div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-3">{skill.description}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Icon name="Briefcase" size={16} />
                      <span>{skill.projects} projects</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className={i < Math.floor(skill.level / 20) ? 'text-accent fill-current' : 'text-muted'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Example */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Code" size={20} className="text-accent mr-2" />
                Code Example
              </h4>
              <div className="bg-deep-dark border border-border rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">
                    {activeCategory}.{activeCategory === 'tools' ? 'dockerfile' : 'js'}
                  </span>
                </div>
                <pre className="p-4 text-sm font-mono text-foreground overflow-x-auto">
                  <code>{codeExamples[activeCategory]}</code>
                </pre>
              </div>
            </div>

            {/* Skill Summary */}
            <div className="bg-gradient-to-br from-accent/5 to-electric-blue/5 border border-accent/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Icon name="BarChart3" size={20} className="text-accent mr-2" />
                Category Summary
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Skills</span>
                  <span className="font-semibold text-foreground">
                    {skillCategories[activeCategory].skills.length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg. Experience</span>
                  <span className="font-semibold text-foreground">
                    {Math.round(
                      skillCategories[activeCategory].skills.reduce((acc, skill) => 
                        acc + parseInt(skill.experience), 0
                      ) / skillCategories[activeCategory].skills.length
                    )}+ years
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Projects</span>
                  <span className="font-semibold text-foreground">
                    {skillCategories[activeCategory].skills.reduce((acc, skill) => 
                      acc + skill.projects, 0
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;