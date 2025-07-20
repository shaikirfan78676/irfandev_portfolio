import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LearningJourney = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  const journeyData = [
    {
      year: 2020,
      title: "Foundation Building",
      description: "Started with HTML, CSS, and JavaScript fundamentals",
      skills: ["HTML5", "CSS3", "JavaScript ES6", "Git", "Responsive Design"],
      achievements: ["First portfolio website", "Basic DOM manipulation", "CSS Grid & Flexbox mastery"],
      icon: "BookOpen",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      year: 2021,
      title: "Frontend Specialization",
      description: "Dove deep into React ecosystem and modern frontend development",
      skills: ["React.js", "Redux", "Webpack", "Sass", "Bootstrap"],
      achievements: ["Built 5+ React applications", "State management expertise", "Component architecture mastery"],
      icon: "Code2",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      year: 2022,
      title: "Full-Stack Expansion",
      description: "Extended skills to backend development and databases",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
      achievements: ["Full-stack applications", "Database design", "API development"],
      icon: "Server",
      gradient: "from-green-500 to-teal-400"
    },
    {
      year: 2023,
      title: "Advanced Technologies",
      description: "Adopted modern frameworks and cloud technologies",
      skills: ["Next.js", "TypeScript", "AWS", "Docker", "GraphQL"],
      achievements: ["Production deployments", "Cloud architecture", "Performance optimization"],
      icon: "Cloud",
      gradient: "from-orange-500 to-red-400"
    },
    {
      year: 2024,
      title: "Innovation & Leadership",
      description: "Focus on emerging technologies and team leadership",
      skills: ["AI/ML Integration", "Microservices", "DevOps", "Team Leadership", "Architecture Design"],
      achievements: ["AI-powered applications", "Mentoring developers", "System architecture"],
      icon: "Zap",
      gradient: "from-yellow-500 to-orange-400"
    }
  ];

  const selectedData = journeyData.find(item => item.year === selectedYear);

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
          <Icon name="TrendingUp" size={24} color="white" strokeWidth={2} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Learning Journey</h2>
          <p className="text-muted-foreground">Continuous growth and skill development</p>
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="relative mb-8">
        <div className="flex justify-between items-center">
          {journeyData.map((item, index) => (
            <div key={item.year} className="flex flex-col items-center relative">
              <button
                onClick={() => setSelectedYear(item.year)}
                className={`w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  selectedYear === item.year
                    ? 'border-accent bg-accent text-white scale-110' :'border-muted bg-background text-muted-foreground hover:border-accent/50 hover:text-foreground'
                }`}
              >
                <Icon name={item.icon} size={20} strokeWidth={2} />
              </button>
              <span className={`text-sm font-medium mt-2 transition-colors ${
                selectedYear === item.year ? 'text-accent' : 'text-muted-foreground'
              }`}>
                {item.year}
              </span>
              {index < journeyData.length - 1 && (
                <div className="absolute top-6 left-12 w-full h-0.5 bg-muted -z-10" />
              )}
            </div>
          ))}
        </div>
        
        {/* Progress Line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-muted -z-20" />
        <div 
          className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-accent to-electric-blue transition-all duration-500 -z-10"
          style={{ width: `${(journeyData.findIndex(item => item.year === selectedYear) / (journeyData.length - 1)) * 100}%` }}
        />
      </div>

      {/* Selected Year Details */}
      {selectedData && (
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${selectedData.gradient} shadow-lg mb-4`}>
              <Icon name={selectedData.icon} size={32} color="white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{selectedData.title}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">{selectedData.description}</p>
          </div>

          {/* Skills Grid */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Icon name="Code" size={20} className="mr-2 text-accent" />
              Skills Acquired
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {selectedData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-3 text-center hover:border-accent/30 transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-sm font-medium text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Icon name="Trophy" size={20} className="mr-2 text-yellow-400" />
              Key Achievements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedData.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-4 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-foreground">{achievement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-muted/20 border border-muted rounded-lg p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-accent">{selectedData.skills.length}</div>
                <div className="text-sm text-muted-foreground">New Skills</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">{selectedData.achievements.length}</div>
                <div className="text-sm text-muted-foreground">Achievements</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">{selectedYear - 2019}</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">
                  {journeyData.slice(0, journeyData.findIndex(item => item.year === selectedYear) + 1)
                    .reduce((acc, item) => acc + item.skills.length, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Total Skills</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningJourney;