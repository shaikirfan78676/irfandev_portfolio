import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import WorkingProcess from './components/WorkingProcess';
import ConsultationBooking from './components/ConsultationBooking';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Icon from '../../components/AppIcon';

const ContactCollaborationGateway = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <ContactHero />
      
      {/* Contact Methods */}
      <ContactMethods />
      
      {/* Contact Form */}
      <ContactForm />
      
      {/* Working Process */}
      <WorkingProcess />
      
      {/* Consultation Booking */}
      <ConsultationBooking />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* FAQ */}
      <FAQ />
      
      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-electric-blue/10 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Icon name="Rocket" size={48} className="text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's turn your ideas into reality. I'm here to help you build something extraordinary.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#contact-form"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent to-electric-blue hover:from-accent/90 hover:to-electric-blue/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-electric-blue/25"
            >
              <Icon name="Send" size={20} />
              <span>Send Project Inquiry</span>
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center space-x-2 border border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              <Icon name="Calendar" size={20} />
              <span>Book Free Consultation</span>
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} IrfanDev. All rights reserved. | 
              <span className="ml-2">Building the future, one project at a time.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactCollaborationGateway;