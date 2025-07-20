import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BlogCard = ({ post, featured = false }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20">
        <div className="aspect-video overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full border border-accent/30">
              Featured
            </span>
            <span className="px-3 py-1 bg-primary/20 text-primary-foreground text-xs font-medium rounded-full">
              {post.category}
            </span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
            <Link to={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h2>
          
          <p className="text-muted-foreground mb-4 line-clamp-2 text-lg">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>{getReadTime(post.content)} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Eye" size={16} />
                <span>{post.views.toLocaleString()}</span>
              </div>
            </div>
            
            <Link
              to={`/blog/${post.slug}`}
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
            >
              Read More
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-md">
            {post.category}
          </span>
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              #{tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
          <Link to={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={14} />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={14} />
              <span>{getReadTime(post.content)} min</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="MessageCircle" size={14} />
              <span>{post.comments}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-1 hover:text-accent transition-colors duration-300">
              <Icon name="Heart" size={16} />
            </button>
            <button className="p-1 hover:text-accent transition-colors duration-300">
              <Icon name="Share2" size={16} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;