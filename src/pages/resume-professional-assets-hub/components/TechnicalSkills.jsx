import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalSkills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: 'Monitor',
      skills: [
        { name: 'React.js', level: 95, experience: '5 years', projects: 25 },
        { name: 'Next.js', level: 90, experience: '3 years', projects: 15 },
        { name: 'TypeScript', level: 88, experience: '4 years', projects: 20 },
        { name: 'Tailwind CSS', level: 92, experience: '3 years', projects: 18 },
        { name: 'Vue.js', level: 75, experience: '2 years', projects: 8 },
        { name: 'Angular', level: 70, experience: '2 years', projects: 6 }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: 'Server',
      skills: [
        { name: 'Node.js', level: 93, experience: '5 years', projects: 22 },
        { name: 'Express.js', level: 90, experience: '4 years', projects: 20 },
        { name: 'Python', level: 85, experience: '3 years', projects: 12 },
        { name: 'PostgreSQL', level: 88, experience: '4 years', projects: 18 },
        { name: 'MongoDB', level: 82, experience: '3 years', projects: 14 },
        { name: 'Redis', level: 78, experience: '2 years', projects: 10 }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: 'Cloud',
      skills: [
        { name: 'AWS', level: 87, experience: '4 years', projects: 16 },
        { name: 'Docker', level: 85, experience: '3 years', projects: 15 },
        { name: 'Kubernetes', level: 75, experience: '2 years', projects: 8 },
        { name: 'CI/CD', level: 88, experience: '4 years', projects: 20 },
        { name: 'Terraform', level: 70, experience: '2 years', projects: 6 },
        { name: 'Nginx', level: 80, experience: '3 years', projects: 12 }
      ]
    },
    tools: {
      title: 'Tools & Methodologies',
      icon: 'Wrench',
      skills: [
        { name: 'Git', level: 95, experience: '5 years', projects: 30 },
        { name: 'Jest/Testing', level: 85, experience: '4 years', projects: 18 },
        { name: 'Agile/Scrum', level: 90, experience: '5 years', projects: 25 },
        { name: 'Figma', level: 75, experience: '3 years', projects: 15 },
        { name: 'Webpack', level: 80, experience: '3 years', projects: 12 },
        { name: 'GraphQL', level: 78, experience: '2 years', projects: 9 }
      ]
    }
  };

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-success';
    if (level >= 80) return 'bg-accent';
    if (level >= 70) return 'bg-warning';
    return 'bg-muted';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="Code" size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Technical Skills</h2>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(skillCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeCategory === key
                ? 'bg-accent text-white' :'bg-muted/20 text-muted-foreground hover:bg-muted/30 hover:text-foreground'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories[activeCategory].skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-foreground">{skill.name}</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{skill.level}%</span>
                <div className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="w-full bg-muted/20 rounded-full h-2 mb-3 overflow-hidden">
              <div
                className={`h-full ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Icon name="Clock" size={12} />
                {skill.experience}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Briefcase" size={12} />
                {skill.projects} projects
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Skill Legend */}
      <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-border">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 bg-success rounded-full"></div>
          <span className="text-muted-foreground">Expert (90%+)</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 bg-accent rounded-full"></div>
          <span className="text-muted-foreground">Advanced (80-89%)</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 bg-warning rounded-full"></div>
          <span className="text-muted-foreground">Intermediate (70-79%)</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 bg-muted rounded-full"></div>
          <span className="text-muted-foreground">Beginner (&lt;70%)</span>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;