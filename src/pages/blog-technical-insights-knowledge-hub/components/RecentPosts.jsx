import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecentPosts = ({ posts, title = "Recent Articles" }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="Clock" size={16} className="text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {posts.map((post, index) => (
          <article key={post.id} className="group">
            <Link to={`/blog/${post.slug}`} className="flex gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300">
              <div className="flex-shrink-0">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2 mb-1">
                  {post.title}
                </h4>
                
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span>•</span>
                  <span>{getReadTime(post.content)} min read</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Icon name="Eye" size={12} />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 flex items-center">
                <Icon 
                  name="ArrowRight" 
                  size={16} 
                  className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" 
                />
              </div>
            </Link>
            
            {index < posts.length - 1 && (
              <div className="border-b border-border mt-4"></div>
            )}
          </article>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border">
        <Link
          to="/blog-technical-insights-knowledge-hub"
          className="flex items-center justify-center gap-2 w-full py-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-300"
        >
          View All Articles
          <Icon name="ArrowRight" size={16} />
        </Link>
      </div>
    </div>
  );
};

export default RecentPosts;