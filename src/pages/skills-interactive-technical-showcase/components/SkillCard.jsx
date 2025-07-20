import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const getProficiencyColor = (level) => {
    if (level >= 90) return 'from-emerald-500 to-green-400';
    if (level >= 75) return 'from-blue-500 to-cyan-400';
    if (level >= 60) return 'from-yellow-500 to-orange-400';
    return 'from-red-500 to-pink-400';
  };

  const getProficiencyText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div
      className={`relative group bg-card border border-border rounded-xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/30 ${
        isHovered ? 'transform scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Skill Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.gradient} shadow-lg`}>
            <Icon name={skill.icon} size={24} color="white" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
              {skill.name}
            </h3>
            <p className="text-sm text-muted-foreground">{skill.category}</p>
          </div>
        </div>
        <div className="text-right">
          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getProficiencyColor(skill.proficiency)} text-white`}>
            {getProficiencyText(skill.proficiency)}
          </div>
          <p className="text-xs text-muted-foreground mt-1">{skill.experience} years</p>
        </div>
      </div>

      {/* Proficiency Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Proficiency</span>
          <span className="text-sm font-medium text-foreground">{skill.proficiency}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${getProficiencyColor(skill.proficiency)} transition-all duration-1000 ease-out`}
            style={{ width: isHovered ? `${skill.proficiency}%` : '0%' }}
          />
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-2">Technologies & Tools</p>
        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md hover:bg-accent/10 hover:text-accent transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Recent Projects */}
      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-2">Recent Applications</p>
        <div className="space-y-1">
          {skill.recentProjects.map((project, projectIndex) => (
            <div key={projectIndex} className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-accent rounded-full" />
              <span className="text-sm text-foreground">{project}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Code Example Button */}
      {skill.codeExample && (
        <div className="flex space-x-2">
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-colors text-sm font-medium"
          >
            <Icon name="Code2" size={16} />
            <span>{showCode ? 'Hide Code' : 'View Code'}</span>
          </button>
          {skill.liveDemo && (
            <button className="flex items-center justify-center px-3 py-2 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-lg transition-colors">
              <Icon name="ExternalLink" size={16} />
            </button>
          )}
        </div>
      )}

      {/* Code Example Overlay */}
      {showCode && skill.codeExample && (
        <div className="absolute inset-0 bg-card/95 backdrop-blur-sm rounded-xl p-4 z-10 overflow-auto">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-medium text-foreground">Code Example</h4>
            <button
              onClick={() => setShowCode(false)}
              className="p-1 hover:bg-muted rounded-md transition-colors"
            >
              <Icon name="X" size={16} className="text-muted-foreground" />
            </button>
          </div>
          <pre className="bg-deep-dark rounded-lg p-3 text-xs text-green-400 font-mono overflow-x-auto">
            <code>{skill.codeExample}</code>
          </pre>
        </div>
      )}

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
    </div>
  );
};

export default SkillCard;