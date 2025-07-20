import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ onSearch, onTagFilter, popularTags }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isTagsVisible, setIsTagsVisible] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleTagClick = (tag) => {
    onTagFilter(tag);
    setIsTagsVisible(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <div className="relative mb-8">
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          <Icon name="Search" size={20} />
        </div>
        
        <Input
          type="text"
          placeholder="Search articles, technologies, or topics..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="pl-12 pr-20 h-14 text-lg bg-card border-border focus:border-accent rounded-xl"
        />
        
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="p-1 hover:text-accent transition-colors duration-300"
            >
              <Icon name="X" size={18} />
            </button>
          )}
          
          <button
            onClick={() => setIsTagsVisible(!isTagsVisible)}
            className="p-2 hover:text-accent transition-colors duration-300 hover:bg-muted rounded-lg"
          >
            <Icon name="Tag" size={18} />
          </button>
        </div>
      </div>
      
      {isTagsVisible && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-card border border-border rounded-xl shadow-lg z-10">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="TrendingUp" size={16} className="text-accent" />
            <span className="text-sm font-medium text-foreground">Popular Tags</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <button
                key={tag.name}
                onClick={() => handleTagClick(tag.name)}
                className="flex items-center gap-1 px-3 py-1.5 bg-muted hover:bg-accent hover:text-white text-sm rounded-lg transition-all duration-300 group"
              >
                <span>#{tag.name}</span>
                <span className="text-xs opacity-70 group-hover:opacity-100">
                  {tag.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;