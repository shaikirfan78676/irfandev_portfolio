import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsLaboratory = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      id: 'react',
      name: 'React',
      icon: 'Atom',
      proficiency: 95,
      experience: '5+ years',
      projects: 25,
      description: 'Advanced React development with hooks, context, and performance optimization',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      icon: 'Server',
      proficiency: 90,
      experience: '4+ years',
      projects: 20,
      description: 'Backend development with Express, APIs, and microservices architecture',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: 'Code2',
      proficiency: 88,
      experience: '3+ years',
      projects: 18,
      description: 'Type-safe development with advanced TypeScript patterns and generics',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'python',
      name: 'Python',
      icon: 'FileCode',
      proficiency: 85,
      experience: '4+ years',
      projects: 15,
      description: 'Backend development, data analysis, and machine learning applications',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'aws',
      name: 'AWS',
      icon: 'Cloud',
      proficiency: 82,
      experience: '3+ years',
      projects: 12,
      description: 'Cloud infrastructure, serverless architecture, and DevOps practices',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      icon: 'Database',
      proficiency: 87,
      experience: '4+ years',
      projects: 22,
      description: 'NoSQL database design, aggregation pipelines, and performance optimization',
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 'docker',
      name: 'Docker',
      icon: 'Package',
      proficiency: 80,
      experience: '2+ years',
      projects: 10,
      description: 'Containerization, orchestration, and deployment automation',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      id: 'graphql',
      name: 'GraphQL',
      icon: 'Zap',
      proficiency: 78,
      experience: '2+ years',
      projects: 8,
      description: 'API design, schema development, and efficient data fetching',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills <span className="text-gradient">Laboratory</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive showcase of technical expertise with real-world application metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2">
                {/* Skill Icon & Name */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                    <Icon name={skill.icon} size={24} color="white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{skill.proficiency}%</div>
                    <div className="text-xs text-muted-foreground">Proficiency</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{skill.name}</h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 mb-4">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: hoveredSkill === skill.id ? `${skill.proficiency}%` : '0%' 
                    }}
                  ></div>
                </div>

                {/* Basic Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="text-foreground font-medium">{skill.experience}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Projects:</span>
                    <span className="text-foreground font-medium">{skill.projects}</span>
                  </div>
                </div>

                {/* Hover Description */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  hoveredSkill === skill.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>

              {/* Floating Badge */}
              {hoveredSkill === skill.id && (
                <div className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                  Expert
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">130+</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsLaboratory;