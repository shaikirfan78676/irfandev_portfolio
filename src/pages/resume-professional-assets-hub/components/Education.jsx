import React from 'react';
import Icon from '../../../components/AppIcon';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2017 - 2019",
      gpa: "3.8/4.0",
      status: "Graduated Magna Cum Laude",
      description: "Specialized in Software Engineering and Artificial Intelligence. Completed thesis on 'Scalable Microservices Architecture for Real-time Applications'.",
      coursework: [
        "Advanced Algorithms & Data Structures",
        "Distributed Systems",
        "Machine Learning",
        "Software Engineering Principles",
        "Database Systems",
        "Computer Networks"
      ],
      achievements: [
        "Dean\'s List for 4 consecutive semesters",
        "Graduate Research Assistant",
        "Published 2 papers in IEEE conferences"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2013 - 2017",
      gpa: "3.7/4.0",
      status: "Graduated Cum Laude",
      description: "Comprehensive foundation in software development, computer science fundamentals, and engineering principles. Active member of Computer Science Society.",
      coursework: [
        "Object-Oriented Programming",
        "Web Development",
        "Software Architecture",
        "Operating Systems",
        "Computer Graphics",
        "Mobile App Development"
      ],
      achievements: [
        "President of Computer Science Society",
        "Winner of Annual Hackathon 2016",
        "Undergraduate Teaching Assistant for 2 years"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001234",
      status: "Active",
      icon: "Award"
    },
    {
      id: 2,
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-2022-005678",
      status: "Active",
      icon: "Award"
    },
    {
      id: 3,
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-2022-009876",
      status: "Active",
      icon: "Award"
    },
    {
      id: 4,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2021",
      credentialId: "META-RD-2021-112233",
      status: "Active",
      icon: "Award"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Education Section */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="GraduationCap" size={20} className="text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Education</h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={edu.id} className="relative">
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-border"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
              
              {/* Content */}
              <div className="ml-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                      <div className="flex items-center gap-2">
                        <Icon name="School" size={16} className="text-accent" />
                        <span className="font-medium">{edu.school}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" size={16} className="text-accent" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} className="text-accent" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <div className="px-3 py-1 bg-success/10 text-success text-sm rounded-full">
                      {edu.status}
                    </div>
                    <div className="text-sm font-semibold text-accent">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {edu.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Relevant Coursework */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Icon name="BookOpen" size={16} className="text-accent" />
                      Relevant Coursework
                    </h4>
                    <ul className="space-y-1">
                      {edu.coursework.map((course, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Icon name="Dot" size={12} className="text-accent mt-1 flex-shrink-0" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Icon name="Trophy" size={16} className="text-accent" />
                      Achievements
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Icon name="Star" size={12} className="text-success mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Certificate" size={20} className="text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-muted/10 border border-border rounded-lg p-4 hover:border-accent/50 transition-colors duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={cert.icon} size={18} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Issued: {cert.date}</span>
                      <span className="px-2 py-1 bg-success/10 text-success rounded-full">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 font-mono">
                    ID: {cert.credentialId}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;