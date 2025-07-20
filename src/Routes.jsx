import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import HomepageInteractiveDeveloperShowcase from "pages/homepage-interactive-developer-showcase";
import BlogTechnicalInsightsKnowledgeHub from "pages/blog-technical-insights-knowledge-hub";
import ContactCollaborationGateway from "pages/contact-collaboration-gateway";
import ResumeProfessionalAssetsHub from "pages/resume-professional-assets-hub";
import AboutProfessionalJourneyPhilosophy from "pages/about-professional-journey-philosophy";
import SkillsInteractiveTechnicalShowcase from "pages/skills-interactive-technical-showcase";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<HomepageInteractiveDeveloperShowcase />} />
        <Route path="/homepage-interactive-developer-showcase" element={<HomepageInteractiveDeveloperShowcase />} />
        <Route path="/blog-technical-insights-knowledge-hub" element={<BlogTechnicalInsightsKnowledgeHub />} />
        <Route path="/contact-collaboration-gateway" element={<ContactCollaborationGateway />} />
        <Route path="/resume-professional-assets-hub" element={<ResumeProfessionalAssetsHub />} />
        <Route path="/about-professional-journey-philosophy" element={<AboutProfessionalJourneyPhilosophy />} />
        <Route path="/skills-interactive-technical-showcase" element={<SkillsInteractiveTechnicalShowcase />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;