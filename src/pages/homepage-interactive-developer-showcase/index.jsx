import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SkillsLaboratory from './components/SkillsLaboratory';
import FeaturedProjects from './components/FeaturedProjects';
import LatestInsights from './components/LatestInsights';
import GitHubActivity from './components/GitHubActivity';
import TestimonialsSlider from './components/TestimonialsSlider';
import FloatingContactButton from './components/FloatingContactButton';

const HomepageInteractiveDeveloperShowcase = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>S.Irfan - Full-Stack Developer | Interactive Portfolio Showcase</title>
        <meta 
          name="description" 
          content="Explore S.Irfan's interactive developer portfolio featuring React, Node.js, and full-stack solutions. View live projects, technical insights, and GitHub activity." 
        />
        <meta name="keywords" content="Full-Stack Developer, React Developer, Node.js, TypeScript, Portfolio, Web Development, Software Engineer" />
        <meta property="og:title" content="S.Irfan - Full-Stack Developer Portfolio" />
        <meta property="og:description" content="Interactive showcase of full-stack development expertise with live projects and technical insights" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sirfan.dev" />
        <link rel="canonical" href="https://sirfan.dev" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Skills Laboratory */}
          <SkillsLaboratory />

          {/* Featured Projects */}
          <FeaturedProjects />

          {/* Latest Insights */}
          <LatestInsights />

          {/* GitHub Activity */}
          <GitHubActivity />

          {/* Testimonials */}
          <TestimonialsSlider />
        </main>

        {/* Floating Contact Button */}
        <FloatingContactButton />

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-electric-blue rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">S.Irfan</h3>
                    <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Crafting digital solutions that bridge innovation and functionality. 
                  Transforming complex problems into elegant, scalable applications.
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com/sirfan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/sirfan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/sirfan_dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/about-professional-journey-philosophy" className="text-muted-foreground hover:text-accent transition-colors">About</a></li>
                  <li><a href="/skills-interactive-technical-showcase" className="text-muted-foreground hover:text-accent transition-colors">Projects</a></li>
                  <li><a href="/blog-technical-insights-knowledge-hub" className="text-muted-foreground hover:text-accent transition-colors">Blog</a></li>
                  <li><a href="/contact-collaboration-gateway" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><span className="text-muted-foreground">Web Development</span></li>
                  <li><span className="text-muted-foreground">Mobile Apps</span></li>
                  <li><span className="text-muted-foreground">API Development</span></li>
                  <li><span className="text-muted-foreground">Consulting</span></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} S.Irfan. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy" className="text-muted-foreground hover:text-accent text-sm transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-muted-foreground hover:text-accent text-sm transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepageInteractiveDeveloperShowcase;