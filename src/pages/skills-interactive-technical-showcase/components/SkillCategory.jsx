import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import SkillCard from './SkillCard';

const SkillCategory = ({ category, skills, isActive, onToggle }) => {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className="mb-8">
      {/* Category Header */}
      <div
        className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 ${
          isActive 
            ? 'bg-accent/10 border border-accent/30' :'bg-card border border-border hover:border-accent/20'
        }`}
        onClick={onToggle}
      >
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient} shadow-lg`}>
            <Icon name={category.icon} size={24} color="white" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{category.name}</h2>
            <p className="text-muted-foreground">{category.description}</p>
            <div className="flex items-center space-x-4 mt-1">
              <span className="text-sm text-accent font-medium">{skills.length} Skills</span>
              <span className="text-sm text-muted-foreground">
                Avg. {Math.round(skills.reduce((acc, skill) => acc + skill.proficiency, 0) / skills.length)}% Proficiency
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {isActive && (
            <div className="flex items-center space-x-1 mr-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setViewMode('grid');
                }}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ?'bg-accent text-white' :'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name="Grid3X3" size={16} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setViewMode('list');
                }}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ?'bg-accent text-white' :'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name="List" size={16} />
              </button>
            </div>
          )}
          <Icon 
            name={isActive ? "ChevronUp" : "ChevronDown"} 
            size={20} 
            className={`text-muted-foreground transition-transform duration-300 ${
              isActive ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {/* Skills Grid/List */}
      {isActive && (
        <div className="mt-6">
          <div className={`${
            viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' :'space-y-4'
          }`}>
            {skills.map((skill, index) => (
              <SkillCard 
                key={skill.id} 
                skill={skill} 
                index={index}
                viewMode={viewMode}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillCategory;