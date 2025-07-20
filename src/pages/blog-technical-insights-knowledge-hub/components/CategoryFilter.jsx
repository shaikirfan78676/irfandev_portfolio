import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const categoryIcons = {
    'All': 'Grid3X3',
    'React Deep-Dives': 'Atom',
    'Full-Stack Tutorials': 'Layers',
    'Industry Perspectives': 'TrendingUp',
    'Code Reviews': 'Code2',
    'Performance': 'Zap',
    'Architecture': 'Building'
  };

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => onCategoryChange(category.name)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeCategory === category.name
              ? 'bg-accent text-white shadow-lg shadow-accent/30'
              : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border hover:border-accent/50'
          }`}
        >
          <Icon 
            name={categoryIcons[category.name] || 'Tag'} 
            size={16} 
            className={activeCategory === category.name ? 'text-white' : ''}
          />
          <span>{category.name}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            activeCategory === category.name
              ? 'bg-white/20 text-white' :'bg-muted text-muted-foreground'
          }`}>
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;