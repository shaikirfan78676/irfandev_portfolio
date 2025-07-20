import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          question: 'What types of projects do you work on?',
          answer: `I specialize in full-stack web applications, e-commerce platforms, API development, and mobile applications. My expertise includes React, Node.js, Python, and modern database technologies.\n\nI work with startups, established businesses, and individual entrepreneurs on projects ranging from simple websites to complex enterprise applications.`
        },
        {
          question: 'How do you handle project communication?',
          answer: `I believe in transparent, regular communication. You'll receive:\n• Weekly progress reports with screenshots and demos\n• Access to project management tools (Trello, Asana, or your preferred platform)\n• Scheduled check-in calls (weekly or bi-weekly)\n• Immediate updates on any blockers or changes\n• 24-hour response time to all messages`
        },
        {
          question: 'Do you work with international clients?',
          answer: `Absolutely! I work with clients worldwide and am experienced in managing projects across different time zones. I'm based in EST but flexible with meeting times to accommodate global teams.\n\nI'm comfortable with various communication tools and can adapt to your preferred working hours for important meetings and calls.`
        }
      ]
    },
    {
      category: 'Pricing & Timeline',
      questions: [
        {
          question: 'How do you determine project pricing?',
          answer: `Project pricing depends on several factors:\n• Complexity and scope of the project\n• Technology stack and integrations required\n• Timeline and urgency\n• Ongoing maintenance needs\n\nI provide detailed estimates after our initial consultation, with transparent breakdowns of development phases and associated costs.`
        },
        {
          question: 'What are your typical project timelines?',
          answer: `Timeline varies by project complexity:\n• Simple websites: 1-2 weeks\n• Web applications: 4-8 weeks\n• Complex platforms: 2-6 months\n• Enterprise solutions: 3-12 months\n\nI always provide realistic timelines with buffer time for testing and revisions. Rush projects are possible with adjusted pricing.`
        },
        {
          question: 'Do you offer payment plans?',
          answer: `Yes, I offer flexible payment structures:\n• Milestone-based payments (most common)\n• 50% upfront, 50% on completion\n• Monthly retainer for ongoing projects\n• Hourly billing for consulting work\n\nAll payment terms are clearly outlined in the project contract before work begins.`
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What technologies do you specialize in?',
          answer: `My core technology stack includes:\n\nFrontend: React, Next.js, TypeScript, Tailwind CSS\nBackend: Node.js, Express.js, Python, Django\nDatabases: PostgreSQL, MongoDB, Redis\nCloud: AWS, Vercel, Netlify\nTools: Docker, Git, CI/CD pipelines\n\nI stay current with industry trends and can adapt to your existing technology stack if needed.`
        },
        {
          question: 'How do you ensure code quality?',
          answer: `I follow industry best practices for code quality:\n• Comprehensive code reviews and testing\n• TypeScript for type safety\n• ESLint and Prettier for consistent formatting\n• Unit and integration testing\n• Documentation for all major functions\n• Git version control with meaningful commit messages\n\nYou'll receive clean, maintainable code that your team can easily understand and extend.`
        },
        {
          question: 'Do you provide ongoing maintenance?',
          answer: `Yes, I offer several maintenance options:\n• Bug fixes and security updates\n• Performance monitoring and optimization\n• Feature enhancements and additions\n• Server maintenance and backups\n• Technical support and consultation\n\nMaintenance can be included in the initial project or arranged as a separate retainer agreement.`
        }
      ]
    },
    {
      category: 'Process',
      questions: [
        {
          question: 'How do you handle project changes?',
          answer: `I understand that requirements can evolve during development. My change management process includes:\n• Clear documentation of all change requests\n• Impact assessment on timeline and budget\n• Client approval before implementing changes\n• Transparent communication about implications\n\nMinor changes are often included, while major scope changes are handled through formal change orders.`
        },
        {
          question: 'What happens if I\'m not satisfied with the work?',
          answer: `Client satisfaction is my top priority. If you're not happy with any deliverable:\n• We'll discuss the specific concerns in detail\n• I'll provide revisions at no additional cost\n• We'll work together until you're completely satisfied\n• If needed, we can bring in a third-party reviewer\n\nI stand behind my work and am committed to delivering solutions that exceed your expectations.`
        },
        {
          question: 'Do you sign NDAs and contracts?',
          answer: `Absolutely. I take confidentiality seriously and am happy to sign:\n• Non-disclosure agreements (NDAs)\n• Work-for-hire agreements\n• Custom contracts with your legal requirements\n• IP assignment agreements\n\nAll project details, code, and business information are kept strictly confidential.`
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const globalIndex = faqData.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.questions.length, 0) + questionIndex;
    setOpenIndex(openIndex === globalIndex ? -1 : globalIndex);
  };

  const getGlobalIndex = (categoryIndex, questionIndex) => {
    return faqData.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.questions.length, 0) + questionIndex;
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about working with me
          </p>
        </div>

        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Icon 
                    name={
                      category.category === 'General' ? 'HelpCircle' :
                      category.category === 'Pricing & Timeline' ? 'DollarSign' :
                      category.category === 'Technical' ? 'Code' : 'Settings'
                    } 
                    size={16} 
                    className="text-accent" 
                  />
                </div>
                <span>{category.category}</span>
              </h3>

              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = getGlobalIndex(categoryIndex, questionIndex);
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="border border-border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
                      >
                        <span className="text-foreground font-medium pr-4">
                          {faq.question}
                        </span>
                        <Icon
                          name={isOpen ? 'ChevronUp' : 'ChevronDown'}
                          size={20}
                          className="text-muted-foreground flex-shrink-0 transition-transform duration-200"
                        />
                      </button>

                      <div
                        className={`transition-all duration-300 ease-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                      >
                        <div className="px-6 pb-4 border-t border-border/50">
                          <div className="pt-4">
                            {faq.answer.split('\n').map((paragraph, idx) => (
                              <p
                                key={idx}
                                className="text-muted-foreground leading-relaxed mb-2 last:mb-0"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center bg-gradient-to-r from-accent/10 to-electric-blue/10 border border-accent/20 rounded-2xl p-8">
          <Icon name="MessageCircle" size={48} className="text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't see your question here? I'm happy to discuss your specific needs and concerns. 
            Every project is unique, and I'm here to provide personalized answers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact-form"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent to-electric-blue hover:from-accent/90 hover:to-electric-blue/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <Icon name="Send" size={18} />
              <span>Ask Your Question</span>
            </a>
            <a
              href="mailto:hello@irfandev.com"
              className="inline-flex items-center space-x-2 border border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <Icon name="Mail" size={18} />
              <span>Email Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;