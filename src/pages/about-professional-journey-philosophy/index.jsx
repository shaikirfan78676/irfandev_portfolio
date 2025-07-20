import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import JourneyTimeline from './components/JourneyTimeline';
import TechnicalPhilosophy from './components/TechnicalPhilosophy';
import WorkingWithMe from './components/WorkingWithMe';
import SkillsShowcase from './components/SkillsShowcase';
import PersonalInterests from './components/PersonalInterests';
import SocialProof from './components/SocialProof';
import CallToAction from './components/CallToAction';

const AboutPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About - S. Irfan | Professional Journey & Philosophy';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Discover S. Irfan\'s professional journey, technical philosophy, and personal story. From curious beginner to seasoned full-stack developer, learn about the experiences that shaped my approach to building exceptional software solutions.'
      );
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section with Personal Introduction */}
        <HeroSection />
        
        {/* Professional Journey Timeline */}
        <JourneyTimeline />
        
        {/* Technical Philosophy & Approach */}
        <TechnicalPhilosophy />
        
        {/* Working Style & Methodology */}
        <WorkingWithMe />
        
        {/* Interactive Skills Showcase */}
        <SkillsShowcase />
        
        {/* Personal Interests & Values */}
        <PersonalInterests />
        
        {/* Social Proof & Testimonials */}
        <SocialProof />
        
        {/* Call to Action */}
        <CallToAction />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} S. Irfan. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;