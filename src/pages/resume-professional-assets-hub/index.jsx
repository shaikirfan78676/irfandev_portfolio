import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import ResumeHeader from './components/ResumeHeader';
import ProfessionalSummary from './components/ProfessionalSummary';
import TechnicalSkills from './components/TechnicalSkills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import ProjectHighlights from './components/ProjectHighlights';
import Testimonials from './components/Testimonials';
import ProfessionalAssets from './components/ProfessionalAssets';

const ResumeProfessionalAssetsHub = () => {
  useEffect(() => {
    document.title = 'Resume - Professional Assets Hub | IrfanDev Portfolio';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadResume = () => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '/assets/resume/S_Irfan_Resume.pdf';
    link.download = 'S_Irfan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrintResume = () => {
    // Open print dialog
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Professional Documentation
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Resume & Professional Assets
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive professional documentation showcasing 5+ years of full-stack development 
              expertise, project achievements, and technical leadership experience.
            </p>
          </div>

          {/* Resume Header with Quick Actions */}
          <ResumeHeader 
            onDownload={handleDownloadResume}
            onPrint={handlePrintResume}
          />

          {/* Professional Summary */}
          <ProfessionalSummary />

          {/* Technical Skills Interactive Section */}
          <TechnicalSkills />

          {/* Work Experience Timeline */}
          <WorkExperience />

          {/* Education & Certifications */}
          <Education />

          {/* Project Highlights */}
          <ProjectHighlights />

          {/* Client Testimonials */}
          <Testimonials />

          {/* Professional Assets & Downloads */}
          <ProfessionalAssets />

          {/* Last Updated Info */}
          <div className="text-center mt-12 pt-8 border-t border-border">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Resume last updated on January 20, {new Date().getFullYear()}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              This resume is automatically synchronized with portfolio projects and skills
            </p>
          </div>
        </div>
      </main>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Neural Network Pattern */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="resumeGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="var(--color-accent)" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#resumeGrid)" />
        </svg>

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 text-accent/10 font-mono text-sm animate-pulse">
          const developer = "S.Irfan";
        </div>
        <div className="absolute top-40 right-20 text-accent/10 font-mono text-sm animate-pulse delay-1000">
          experience: "5+ years"
        </div>
        <div className="absolute bottom-40 left-20 text-accent/10 font-mono text-sm animate-pulse delay-2000">
          skills: ["React", "Node.js", "AWS"]
        </div>
        <div className="absolute bottom-20 right-10 text-accent/10 font-mono text-sm animate-pulse delay-3000">
          status: "Available for hire"
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          body {
            background: white !important;
            color: black !important;
          }
          
          .bg-card {
            background: white !important;
            border: 1px solid #e5e7eb !important;
          }
          
          .text-foreground {
            color: black !important;
          }
          
          .text-muted-foreground {
            color: #6b7280 !important;
          }
          
          .text-accent {
            color: #0ea5e9 !important;
          }
          
          .border-border {
            border-color: #e5e7eb !important;
          }
          
          .bg-accent\\/10 {
            background-color: #e0f2fe !important;
          }
          
          .bg-muted\\/10 {
            background-color: #f9fafb !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeProfessionalAssetsHub;