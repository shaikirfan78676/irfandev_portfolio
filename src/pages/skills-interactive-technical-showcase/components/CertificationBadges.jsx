import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationBadges = () => {
  const [filter, setFilter] = useState('all');

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024-03-15",
      status: "active",
      category: "cloud",
      credentialId: "AWS-SAA-2024-001",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop",
      skills: ["AWS", "Cloud Architecture", "EC2", "S3", "Lambda"],
      gradient: "from-orange-500 to-yellow-400"
    },
    {
      id: 2,
      name: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "2023-11-20",
      status: "active",
      category: "frontend",
      credentialId: "META-REACT-2023-045",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
      skills: ["React", "JSX", "Hooks", "Context API", "Testing"],
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      id: 3,
      name: "Node.js Application Developer",
      issuer: "OpenJS Foundation",
      date: "2023-08-10",
      status: "active",
      category: "backend",
      credentialId: "NODEJS-DEV-2023-078",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop",
      skills: ["Node.js", "Express", "NPM", "Async Programming", "APIs"],
      gradient: "from-green-500 to-teal-400"
    },
    {
      id: 4,
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "2023-06-05",
      status: "active",
      category: "database",
      credentialId: "MONGO-DEV-2023-156",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop",
      skills: ["MongoDB", "Aggregation", "Indexing", "Schema Design", "Performance"],
      gradient: "from-green-600 to-emerald-400"
    },
    {
      id: 5,
      name: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2023-04-18",
      status: "active",
      category: "devops",
      credentialId: "DOCKER-DCA-2023-089",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335a?w=100&h=100&fit=crop",
      skills: ["Docker", "Containers", "Docker Compose", "Orchestration", "Deployment"],
      gradient: "from-blue-600 to-indigo-400"
    },
    {
      id: 6,
      name: "Google Analytics Certified",
      issuer: "Google",
      date: "2024-01-12",
      status: "active",
      category: "analytics",
      credentialId: "GA-CERT-2024-234",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
      skills: ["Analytics", "Data Analysis", "Reporting", "Conversion Tracking", "SEO"],
      gradient: "from-red-500 to-pink-400"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Certifications', icon: 'Award' },
    { id: 'cloud', name: 'Cloud', icon: 'Cloud' },
    { id: 'frontend', name: 'Frontend', icon: 'Monitor' },
    { id: 'backend', name: 'Backend', icon: 'Server' },
    { id: 'database', name: 'Database', icon: 'Database' },
    { id: 'devops', name: 'DevOps', icon: 'Settings' },
    { id: 'analytics', name: 'Analytics', icon: 'BarChart3' }
  ];

  const filteredCertifications = filter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === filter);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg">
          <Icon name="Award" size={24} color="white" strokeWidth={2} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Certifications & Badges</h2>
          <p className="text-muted-foreground">Professional validation and continuous learning</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === category.id
                ? 'bg-accent text-white' :'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span>{category.name}</span>
            {category.id !== 'all' && (
              <span className="bg-background/20 text-xs px-2 py-0.5 rounded-full">
                {certifications.filter(cert => cert.category === category.id).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertifications.map((cert, index) => (
          <div
            key={cert.id}
            className="group bg-background border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Certificate Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Image
                    src={cert.image}
                    alt={cert.issuer}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br ${cert.gradient} flex items-center justify-center`}>
                    <Icon name="CheckCircle" size={14} color="white" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                cert.status === 'active' ?'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
              }`}>
                {cert.status}
              </div>
            </div>

            {/* Certificate Details */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Issued:</span>
                <span className="text-foreground font-medium">{formatDate(cert.date)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Credential ID:</span>
                <span className="text-foreground font-mono text-xs">{cert.credentialId}</span>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2">Validated Skills</p>
              <div className="flex flex-wrap gap-1">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-colors text-sm font-medium">
                <Icon name="ExternalLink" size={14} />
                <span>Verify</span>
              </button>
              <button className="flex items-center justify-center px-3 py-2 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-lg transition-colors">
                <Icon name="Download" size={14} />
              </button>
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
          </div>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="mt-8 bg-muted/20 border border-muted rounded-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-accent">{certifications.length}</div>
            <div className="text-sm text-muted-foreground">Total Certifications</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent">
              {certifications.filter(cert => cert.status === 'active').length}
            </div>
            <div className="text-sm text-muted-foreground">Active</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent">
              {new Set(certifications.flatMap(cert => cert.skills)).size}
            </div>
            <div className="text-sm text-muted-foreground">Validated Skills</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent">
              {new Date().getFullYear() - Math.min(...certifications.map(cert => new Date(cert.date).getFullYear()))}
            </div>
            <div className="text-sm text-muted-foreground">Years Learning</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationBadges;