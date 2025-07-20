import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import BlogCard from './components/BlogCard';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import NewsletterSignup from './components/NewsletterSignup';
import AuthorBio from './components/AuthorBio';
import RecentPosts from './components/RecentPosts';

const BlogTechnicalInsightsKnowledgeHub = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Mock blog data
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with Advanced Patterns",
      slug: "building-scalable-react-applications-advanced-patterns",
      excerpt: "Explore advanced React patterns including compound components, render props, and custom hooks to build maintainable and scalable applications that can grow with your team.",
      content: `React has evolved significantly over the years, and with it, the patterns we use to build applications. In this comprehensive guide, we'll explore advanced patterns that can help you build more maintainable and scalable React applications.\n\nWe'll cover compound components, render props, custom hooks, and more. These patterns will help you write cleaner, more reusable code that scales with your application's complexity.`,
      category: "React Deep-Dives",
      tags: ["react", "patterns", "scalability", "hooks"],
      featuredImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      publishedAt: "2025-01-15",
      views: 3420,
      comments: 28,
      featured: true
    },
    {
      id: 2,
      title: "Full-Stack Authentication with JWT and Refresh Tokens",
      slug: "fullstack-authentication-jwt-refresh-tokens",
      excerpt: "Complete guide to implementing secure authentication in modern web applications using JWT tokens, refresh token rotation, and best security practices.",
      content: `Authentication is a critical component of any web application. In this tutorial, we'll build a complete authentication system using JWT tokens and implement refresh token rotation for enhanced security.\n\nWe'll cover both frontend and backend implementation, including secure token storage, automatic token refresh, and proper error handling.`,
      category: "Full-Stack Tutorials",
      tags: ["authentication", "jwt", "security", "nodejs"],
      featuredImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      publishedAt: "2025-01-12",
      views: 2890,
      comments: 19
    },
    {
      id: 3,
      title: "The Future of Web Development: Trends to Watch in 2025",
      slug: "future-web-development-trends-2025",
      excerpt: "Analyzing emerging trends in web development including WebAssembly, edge computing, AI integration, and the evolution of JavaScript frameworks.",
      content: `The web development landscape is constantly evolving. As we move through 2025, several trends are shaping the future of how we build web applications.\n\nFrom WebAssembly gaining mainstream adoption to AI-powered development tools, let's explore what's coming next in web development.`,
      category: "Industry Perspectives",
      tags: ["trends", "webassembly", "ai", "future"],
      featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      publishedAt: "2025-01-10",
      views: 4150,
      comments: 35
    },
    {
      id: 4,
      title: "Code Review Best Practices: Building Better Software Together",
      slug: "code-review-best-practices-building-better-software",
      excerpt: "Essential guidelines for conducting effective code reviews that improve code quality, share knowledge, and foster team collaboration.",
      content: `Code reviews are one of the most effective ways to improve code quality and share knowledge within a development team. In this article, we'll explore best practices for both reviewers and authors.\n\nWe'll cover how to give constructive feedback, what to look for during reviews, and how to create a positive review culture in your team.`,
      category: "Code Reviews",
      tags: ["code-review", "best-practices", "teamwork", "quality"],
      featuredImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
      publishedAt: "2025-01-08",
      views: 2340,
      comments: 22
    },
    {
      id: 5,
      title: "Optimizing React Performance: From Bundle Size to Runtime",
      slug: "optimizing-react-performance-bundle-runtime",
      excerpt: "Comprehensive guide to React performance optimization covering code splitting, lazy loading, memoization, and runtime performance monitoring.",
      content: `Performance is crucial for user experience. In this detailed guide, we'll explore various techniques to optimize React applications from initial bundle size to runtime performance.\n\nWe'll cover code splitting, lazy loading, React.memo, useMemo, useCallback, and performance monitoring tools.`,
      category: "Performance",
      tags: ["react", "performance", "optimization", "bundle"],
      featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      publishedAt: "2025-01-05",
      views: 3780,
      comments: 31
    },
    {
      id: 6,
      title: "Microservices Architecture: Design Patterns and Implementation",
      slug: "microservices-architecture-design-patterns-implementation",
      excerpt: "Deep dive into microservices architecture patterns, service communication, data management, and deployment strategies for scalable systems.",
      content: `Microservices architecture has become increasingly popular for building scalable, maintainable systems. In this comprehensive guide, we'll explore key design patterns and implementation strategies.\n\nWe'll cover service decomposition, communication patterns, data management, and deployment considerations for successful microservices adoption.`,
      category: "Architecture",
      tags: ["microservices", "architecture", "scalability", "patterns"],
      featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      publishedAt: "2025-01-03",
      views: 2950,
      comments: 24
    }
  ];

  const categories = [
    { name: 'All', count: blogPosts.length },
    { name: 'React Deep-Dives', count: blogPosts.filter(post => post.category === 'React Deep-Dives').length },
    { name: 'Full-Stack Tutorials', count: blogPosts.filter(post => post.category === 'Full-Stack Tutorials').length },
    { name: 'Industry Perspectives', count: blogPosts.filter(post => post.category === 'Industry Perspectives').length },
    { name: 'Code Reviews', count: blogPosts.filter(post => post.category === 'Code Reviews').length },
    { name: 'Performance', count: blogPosts.filter(post => post.category === 'Performance').length },
    { name: 'Architecture', count: blogPosts.filter(post => post.category === 'Architecture').length }
  ];

  const popularTags = [
    { name: 'react', count: 15 },
    { name: 'javascript', count: 12 },
    { name: 'nodejs', count: 8 },
    { name: 'performance', count: 7 },
    { name: 'security', count: 6 },
    { name: 'architecture', count: 5 },
    { name: 'best-practices', count: 9 },
    { name: 'tutorials', count: 11 }
  ];

  // Filter posts based on category and search query
  useEffect(() => {
    let filtered = blogPosts;

    if (activeCategory !== 'All') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleTagFilter = (tag) => {
    setSearchQuery(tag);
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Blog - Technical Insights & Knowledge Hub | IrfanDev Portfolio</title>
        <meta name="description" content="Explore in-depth technical articles, tutorials, and industry insights on React, full-stack development, performance optimization, and modern web technologies." />
        <meta name="keywords" content="React tutorials, full-stack development, web performance, JavaScript, Node.js, technical blog, programming insights" />
        <meta property="og:title" content="Technical Blog - IrfanDev" />
        <meta property="og:description" content="Deep-dive technical articles and tutorials on modern web development" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/blog-technical-insights-knowledge-hub" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-electric-blue rounded-xl flex items-center justify-center">
                  <Icon name="BookOpen" size={24} className="text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Technical <span className="text-gradient">Insights</span>
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Deep-dive articles, tutorials, and industry perspectives on modern web development. 
                From React patterns to full-stack architecture, explore the latest in software engineering.
              </p>
              
              <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="FileText" size={16} className="text-accent" />
                  <span>{blogPosts.length} Articles Published</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-accent" />
                  <span>25K+ Monthly Readers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={16} className="text-accent" />
                  <span>Updated Weekly</span>
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <SearchBar 
              onSearch={handleSearch}
              onTagFilter={handleTagFilter}
              popularTags={popularTags}
            />
            
            <CategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && activeCategory === 'All' && !searchQuery && (
          <section className="pb-16 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Icon name="Star" size={20} className="text-accent" />
                <h2 className="text-2xl font-bold text-foreground">Featured Article</h2>
              </div>
              
              <BlogCard post={featuredPost} featured={true} />
            </div>
          </section>
        )}

        {/* Main Content Grid */}
        <section className="pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Articles Grid */}
              <div className="lg:col-span-2">
                {regularPosts.length > 0 ? (
                  <>
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl font-bold text-foreground">
                        {searchQuery ? `Search Results for "${searchQuery}"` : 
                         activeCategory === 'All' ? 'Latest Articles' : activeCategory}
                      </h2>
                      <span className="text-sm text-muted-foreground">
                        {regularPosts.length} article{regularPosts.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {regularPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Search" size={32} className="text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search terms or browse different categories.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('All');
                      }}
                      className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-300"
                    >
                      View All Articles
                    </button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Author Bio */}
                <AuthorBio />
                
                {/* Recent Posts */}
                <RecentPosts posts={recentPosts} />
                
                {/* Newsletter Signup */}
                <NewsletterSignup />
                
                {/* Popular Tags */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name="Tag" size={16} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Popular Tags</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <button
                        key={tag.name}
                        onClick={() => handleTagFilter(tag.name)}
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
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-card/50 to-background border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-electric-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={32} className="text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Have a Project in Mind?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how we can bring your ideas to life with modern web technologies 
              and best practices covered in these articles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-collaboration-gateway"
                className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-electric-blue text-white rounded-lg hover:from-accent/90 hover:to-electric-blue/90 transition-all duration-300 font-medium"
              >
                <Icon name="Send" size={20} />
                Start a Project
              </a>
              
              <a
                href="/resume-professional-assets-hub"
                className="flex items-center justify-center gap-2 px-8 py-3 border border-border text-foreground rounded-lg hover:border-accent hover:text-accent transition-colors duration-300 font-medium"
              >
                <Icon name="Download" size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 lg:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} IrfanDev. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6">
                <a href="/blog-technical-insights-knowledge-hub" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                  RSS Feed
                </a>
                <a href="/blog-technical-insights-knowledge-hub" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                  Archive
                </a>
                <a href="/contact-collaboration-gateway" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BlogTechnicalInsightsKnowledgeHub;