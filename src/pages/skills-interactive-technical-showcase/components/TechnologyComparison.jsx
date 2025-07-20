import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyComparison = () => {
  const [activeComparison, setActiveComparison] = useState(0);

  const comparisons = [
    {
      id: 1,
      title: "React vs Vue vs Angular",
      category: "Frontend Frameworks",
      icon: "Code2",
      gradient: "from-blue-500 to-purple-600",
      technologies: [
        {
          name: "React",
          pros: ["Large ecosystem", "Virtual DOM", "Component reusability", "Strong community"],
          cons: ["Steep learning curve", "Frequent updates", "JSX complexity"],
          useCase: "Complex applications with dynamic UIs",
          rating: 95
        },
        {
          name: "Vue.js",
          pros: ["Easy to learn", "Great documentation", "Progressive framework", "Small size"],
          cons: ["Smaller ecosystem", "Limited job market", "Less mature"],
          useCase: "Rapid prototyping and small to medium projects",
          rating: 85
        },
        {
          name: "Angular",
          pros: ["Full framework", "TypeScript support", "Enterprise ready", "Powerful CLI"],
          cons: ["Complex setup", "Heavy framework", "Steep learning curve"],
          useCase: "Large enterprise applications",
          rating: 80
        }
      ]
    },
    {
      id: 2,
      title: "Node.js vs Python vs Java",
      category: "Backend Technologies",
      icon: "Server",
      gradient: "from-green-500 to-teal-600",
      technologies: [
        {
          name: "Node.js",
          pros: ["JavaScript everywhere", "Fast I/O operations", "NPM ecosystem", "Real-time apps"],
          cons: ["Single-threaded", "CPU-intensive tasks", "Callback complexity"],
          useCase: "Real-time applications and APIs",
          rating: 90
        },
        {
          name: "Python",
          pros: ["Easy syntax", "Rich libraries", "Data science support", "Rapid development"],
          cons: ["Slower execution", "GIL limitations", "Mobile development"],
          useCase: "Data analysis, AI/ML, and web development",
          rating: 85
        },
        {
          name: "Java",
          pros: ["Platform independent", "Strong typing", "Enterprise support", "Performance"],
          cons: ["Verbose syntax", "Memory consumption", "Slow startup"],
          useCase: "Enterprise applications and Android development",
          rating: 75
        }
      ]
    },
    {
      id: 3,
      title: "MongoDB vs PostgreSQL vs MySQL",
      category: "Database Systems",
      icon: "Database",
      gradient: "from-orange-500 to-red-600",
      technologies: [
        {
          name: "MongoDB",
          pros: ["Flexible schema", "JSON-like documents", "Horizontal scaling", "Fast development"],
          cons: ["Memory usage", "No ACID transactions", "Data consistency"],
          useCase: "Rapid development and unstructured data",
          rating: 85
        },
        {
          name: "PostgreSQL",
          pros: ["ACID compliance", "Advanced features", "JSON support", "Extensible"],
          cons: ["Complex setup", "Memory usage", "Learning curve"],
          useCase: "Complex queries and data integrity requirements",
          rating: 90
        },
        {
          name: "MySQL",
          pros: ["Easy to use", "Fast performance", "Wide adoption", "Good documentation"],
          cons: ["Limited features", "Storage engines", "Replication complexity"],
          useCase: "Web applications and simple data structures",
          rating: 80
        }
      ]
    }
  ];

  const currentComparison = comparisons[activeComparison];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
            <Icon name="GitCompare" size={24} color="white" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Technology Comparisons</h2>
            <p className="text-muted-foreground">Strategic decision-making insights</p>
          </div>
        </div>
        <div className="flex space-x-2">
          {comparisons.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveComparison(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeComparison ? 'bg-accent' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Comparison Tabs */}
      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {comparisons.map((comparison, index) => (
          <button
            key={comparison.id}
            onClick={() => setActiveComparison(index)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
              index === activeComparison
                ? 'bg-accent text-white' :'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
            }`}
          >
            <Icon name={comparison.icon} size={16} />
            <span className="text-sm font-medium">{comparison.title}</span>
          </button>
        ))}
      </div>

      {/* Comparison Content */}
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-2">{currentComparison.title}</h3>
          <p className="text-muted-foreground">{currentComparison.category}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentComparison.technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-4 hover:border-accent/30 transition-colors"
            >
              {/* Technology Header */}
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-foreground">{tech.name}</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-electric-blue transition-all duration-1000"
                      style={{ width: `${tech.rating}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-accent">{tech.rating}%</span>
                </div>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <h5 className="text-sm font-medium text-green-400 mb-2 flex items-center">
                  <Icon name="Plus" size={14} className="mr-1" />
                  Pros
                </h5>
                <ul className="space-y-1">
                  {tech.pros.map((pro, proIndex) => (
                    <li key={proIndex} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="mb-4">
                <h5 className="text-sm font-medium text-red-400 mb-2 flex items-center">
                  <Icon name="Minus" size={14} className="mr-1" />
                  Cons
                </h5>
                <ul className="space-y-1">
                  {tech.cons.map((con, conIndex) => (
                    <li key={conIndex} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1 h-1 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Case */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                <h5 className="text-sm font-medium text-accent mb-1">Best Use Case</h5>
                <p className="text-sm text-muted-foreground">{tech.useCase}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decision Framework */}
        <div className="bg-muted/20 border border-muted rounded-lg p-4">
          <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
            <Icon name="Lightbulb" size={16} className="mr-2 text-yellow-400" />
            Decision Framework
          </h4>
          <p className="text-sm text-muted-foreground">
            Choose based on project requirements, team expertise, scalability needs, and long-term maintenance considerations. 
            Consider factors like development speed, performance requirements, and ecosystem maturity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyComparison;