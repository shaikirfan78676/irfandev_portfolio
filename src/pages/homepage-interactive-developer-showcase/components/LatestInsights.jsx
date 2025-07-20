import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LatestInsights = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Explore advanced patterns and best practices for creating maintainable React applications using TypeScript. Learn about type safety, performance optimization, and architectural decisions.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      category: "React",
      readTime: "8 min read",
      publishDate: "2025-01-15",
      engagement: {
        views: "2.4K",
        likes: 156,
        comments: 23
      },
      tags: ["React", "TypeScript", "Architecture"]
    },
    {
      id: 2,
      title: "Microservices Architecture: From Monolith to Distributed Systems",
      excerpt: "A comprehensive guide to transitioning from monolithic applications to microservices architecture. Covering design patterns, communication strategies, and deployment considerations.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?w=600&h=400&fit=crop",
      category: "Architecture",
      readTime: "12 min read",
      publishDate: "2025-01-10",
      engagement: {
        views: "3.1K",
        likes: 203,
        comments: 34
      },
      tags: ["Microservices", "Architecture", "DevOps"]
    },
    {
      id: 3,
      title: "Advanced Node.js Performance Optimization Techniques",
      excerpt: "Deep dive into Node.js performance optimization strategies including memory management, event loop optimization, and clustering for high-throughput applications.",
      image: "https://images.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg?w=600&h=400&fit=crop",
      category: "Node.js",
      readTime: "10 min read",
      publishDate: "2025-01-05",
      engagement: {
        views: "1.8K",
        likes: 127,
        comments: 18
      },
      tags: ["Node.js", "Performance", "Backend"]
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical articles and industry perspectives with engagement metrics
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-white rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Reading Time */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 text-white rounded-full text-xs font-medium backdrop-blur-sm">
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-muted text-foreground rounded text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engagement Metrics */}
                <div className="mb-4 pb-4 border-b border-border">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Eye" size={14} />
                        <span>{post.engagement.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={14} />
                        <span>{post.engagement.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={14} />
                        <span>{post.engagement.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Meta Information */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {formatDate(post.publishDate)}
                  </div>
                  <Link
                    to="/blog-technical-insights-knowledge-hub"
                    className="text-accent hover:text-accent/80 text-sm font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span>Read More</span>
                    <Icon name="ArrowRight" size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Blog Stats */}
        <div className="mt-16 bg-card border border-border rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Articles Published</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">15K+</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Subscribers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">4.8</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </div>
          </div>
        </div>

        {/* View All Blog CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-white"
            iconName="BookOpen"
            iconPosition="left"
            iconSize={20}
            asChild
          >
            <Link to="/blog-technical-insights-knowledge-hub">
              View All Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;