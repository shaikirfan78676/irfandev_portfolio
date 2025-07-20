import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import SkillCategory from './components/SkillCategory';
import TechnologyComparison from './components/TechnologyComparison';
import LearningJourney from './components/LearningJourney';
import CertificationBadges from './components/CertificationBadges';
import SkillAssessment from './components/SkillAssessment';

const SkillsInteractiveTechnicalShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('categories');

  // Mock data for skills organized by categories
  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      description: 'Modern UI/UX development with cutting-edge frameworks',
      icon: 'Monitor',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'backend',
      name: 'Backend Systems',
      description: 'Scalable server-side architecture and APIs',
      icon: 'Server',
      gradient: 'from-green-500 to-teal-400'
    },
    {
      id: 'database',
      name: 'Database & Storage',
      description: 'Data modeling, optimization, and management',
      icon: 'Database',
      gradient: 'from-purple-500 to-indigo-400'
    },
    {
      id: 'devops',
      name: 'DevOps & Cloud',
      description: 'Infrastructure, deployment, and cloud services',
      icon: 'Cloud',
      gradient: 'from-orange-500 to-red-400'
    },
    {
      id: 'tools',
      name: 'Development Tools',
      description: 'Productivity tools and development environment',
      icon: 'Settings',
      gradient: 'from-gray-500 to-slate-400'
    },
    {
      id: 'emerging',
      name: 'Emerging Technologies',
      description: 'AI/ML, Web3, and next-generation technologies',
      icon: 'Zap',
      gradient: 'from-yellow-500 to-orange-400'
    }
  ];

  const skillsData = {
    frontend: [
      {
        id: 'react',
        name: 'React.js',
        category: 'Frontend Framework',
        proficiency: 95,
        experience: 4,
        icon: 'Code2',
        gradient: 'from-blue-500 to-cyan-400',
        technologies: ['React 18', 'Hooks', 'Context API', 'Redux Toolkit', 'React Router', 'Next.js'],
        recentProjects: ['E-commerce Platform', 'Portfolio Website', 'Task Management App'],
        codeExample: `// Custom Hook Example
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};`,
        liveDemo: true
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        category: 'Programming Language',
        proficiency: 90,
        experience: 3,
        icon: 'FileCode',
        gradient: 'from-blue-600 to-indigo-500',
        technologies: ['TypeScript 5.0', 'Type Guards', 'Generics', 'Decorators', 'Utility Types'],
        recentProjects: ['Enterprise Dashboard', 'API Client Library', 'Component Library'],
        codeExample: `// Generic API Response Type
interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}

// Type-safe API client
class ApiClient {
  async get<T>(url: string): Promise<ApiResponse<T>> {
    const response = await fetch(url);
    return response.json();
  }
}

// Usage with type inference
const userApi = new ApiClient();
const users = await userApi.get<User[]>('/api/users');`,
        liveDemo: false
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        category: 'CSS Framework',
        proficiency: 92,
        experience: 3,
        icon: 'Palette',
        gradient: 'from-cyan-500 to-blue-500',
        technologies: ['Tailwind CSS 3.x', 'JIT Mode', 'Custom Components', 'Responsive Design', 'Dark Mode'],
        recentProjects: ['Design System', 'Landing Pages', 'Mobile Apps'],
        codeExample: `/* Custom Tailwind Components */
@layer components {
  .btn-primary {
    @apply bg-gradient-to-r from-blue-500 to-purple-600 
           hover:from-blue-600 hover:to-purple-700 
           text-white font-semibold py-2 px-4 rounded-lg 
           transition-all duration-300 shadow-lg 
           hover:shadow-xl transform hover:scale-105;
  }
  
  .card-glass {
    @apply bg-white/10 backdrop-blur-md border 
           border-white/20 rounded-xl shadow-xl;
  }
}`,
        liveDemo: true
      }
    ],
    backend: [
      {
        id: 'nodejs',
        name: 'Node.js',
        category: 'Runtime Environment',
        proficiency: 88,
        experience: 4,
        icon: 'Server',
        gradient: 'from-green-500 to-teal-400',
        technologies: ['Node.js 18+', 'Express.js', 'Fastify', 'Socket.io', 'Cluster', 'Worker Threads'],
        recentProjects: ['REST API Service', 'Real-time Chat App', 'Microservices Architecture'],
        codeExample: `// Express.js with TypeScript and middleware
import express from 'express';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';

const app = express();

// Security middleware
app.use(helmet());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}));

// Custom error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
        liveDemo: false
      },
      {
        id: 'python',
        name: 'Python',
        category: 'Programming Language',
        proficiency: 85,
        experience: 3,
        icon: 'Code',
        gradient: 'from-yellow-500 to-green-500',
        technologies: ['Python 3.11', 'FastAPI', 'Django', 'SQLAlchemy', 'Pandas', 'NumPy'],
        recentProjects: ['Data Analysis Pipeline', 'ML Model API', 'Web Scraping Tool'],
        codeExample: `# FastAPI with Pydantic models
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

class User(BaseModel):
    id: Optional[int] = None
    name: str
    email: str
    age: int

users_db = []

@app.post("/users/", response_model=User)
async def create_user(user: User):
    user.id = len(users_db) + 1
    users_db.append(user)
    return user

@app.get("/users/", response_model=List[User])
async def get_users():
    return users_db`,
        liveDemo: false
      }
    ],
    database: [
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        category: 'Relational Database',
        proficiency: 87,
        experience: 3,
        icon: 'Database',
        gradient: 'from-blue-600 to-indigo-500',
        technologies: ['PostgreSQL 15', 'PL/pgSQL', 'Indexing', 'Partitioning', 'Replication', 'JSON/JSONB'],
        recentProjects: ['E-commerce Database', 'Analytics Platform', 'Multi-tenant SaaS'],
        codeExample: `-- Advanced PostgreSQL Query with CTE and Window Functions
WITH monthly_sales AS (
  SELECT 
    DATE_TRUNC('month', order_date) as month,
    SUM(total_amount) as monthly_total,
    COUNT(*) as order_count
  FROM orders 
  WHERE order_date >= CURRENT_DATE - INTERVAL '12 months' GROUP BY DATE_TRUNC('month', order_date)
),
sales_with_growth AS (
  SELECT 
    month,
    monthly_total,
    order_count,
    LAG(monthly_total) OVER (ORDER BY month) as prev_month_total,
    ROUND(
      ((monthly_total - LAG(monthly_total) OVER (ORDER BY month)) 
       / LAG(monthly_total) OVER (ORDER BY month) * 100)::numeric, 2
    ) as growth_rate
  FROM monthly_sales
)
SELECT * FROM sales_with_growth ORDER BY month;`,
        liveDemo: false
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        category: 'NoSQL Database',
        proficiency: 82,
        experience: 2,
        icon: 'Database',
        gradient: 'from-green-600 to-emerald-500',
        technologies: ['MongoDB 6.0', 'Aggregation Pipeline', 'Indexing', 'Sharding', 'Replica Sets', 'GridFS'],
        recentProjects: ['Content Management System', 'IoT Data Storage', 'Social Media Platform'],
        codeExample: `// MongoDB Aggregation Pipeline
db.orders.aggregate([
  // Match orders from last 30 days
  {
    $match: {
      orderDate: {
        $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      }
    }
  },
  // Group by customer and calculate metrics
  {
    $group: {
      _id: "$customerId",
      totalOrders: { $sum: 1 },
      totalAmount: { $sum: "$amount" },
      avgOrderValue: { $avg: "$amount" },
      lastOrderDate: { $max: "$orderDate" }
    }
  },
  // Sort by total amount descending
  { $sort: { totalAmount: -1 } },
  // Limit to top 10 customers
  { $limit: 10 },
  // Lookup customer details
  {
    $lookup: {
      from: "customers",
      localField: "_id",
      foreignField: "_id",
      as: "customerInfo"
    }
  }
]);`,
        liveDemo: false
      }
    ],
    devops: [
      {
        id: 'aws',
        name: 'Amazon Web Services',
        category: 'Cloud Platform',
        proficiency: 85,
        experience: 3,
        icon: 'Cloud',
        gradient: 'from-orange-500 to-yellow-400',
        technologies: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation', 'API Gateway', 'CloudWatch'],
        recentProjects: ['Serverless API', 'Auto-scaling Web App', 'Data Lake Architecture'],
        codeExample: `# AWS CloudFormation Template (YAML)
AWSTemplateFormatVersion: '2010-09-09' Description:'Serverless API with Lambda and API Gateway'

Resources:
  ApiGateway:
    Type: AWS::ApiGateway::RestApi
    Properties:
      Name: MyServerlessAPI
      Description: API Gateway for Lambda functions

  LambdaFunction:
    Type: AWS::Lambda::Function
    Properties:
      FunctionName: MyAPIFunction
      Runtime: nodejs18.x
      Handler: index.handler
      Code:
        ZipFile: |
          exports.handler = async (event) => {
            return {
              statusCode: 200,
              body: JSON.stringify({
                message: 'Hello from Lambda!',
                timestamp: new Date().toISOString()
              })
            };
          };
      Role: !GetAtt LambdaExecutionRole.Arn

  LambdaExecutionRole:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal:
              Service: lambda.amazonaws.com
            Action: sts:AssumeRole`,
        liveDemo: false
      },
      {
        id: 'docker',
        name: 'Docker',
        category: 'Containerization',
        proficiency: 88,
        experience: 3,
        icon: 'Package',
        gradient: 'from-blue-600 to-cyan-500',
        technologies: ['Docker Engine', 'Docker Compose', 'Multi-stage Builds', 'Docker Swarm', 'Kubernetes'],
        recentProjects: ['Microservices Deployment', 'Development Environment', 'CI/CD Pipeline'],
        codeExample: `# Multi-stage Dockerfile for Node.js app
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM node:18-alpine AS production

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

WORKDIR /app

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --chown=nextjs:nodejs . .

USER nextjs

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["npm", "start"]`,
        liveDemo: false
      }
    ],
    tools: [
      {
        id: 'git',
        name: 'Git & GitHub',
        category: 'Version Control',
        proficiency: 92,
        experience: 5,
        icon: 'GitBranch',
        gradient: 'from-gray-600 to-gray-800',
        technologies: ['Git', 'GitHub Actions', 'GitLab CI', 'Branching Strategies', 'Code Review', 'Git Hooks'],
        recentProjects: ['CI/CD Pipelines', 'Code Review Workflows', 'Automated Testing'],
        codeExample: `# Advanced Git workflow with hooks
#!/bin/bash
# pre-commit hook for code quality

# Run linting
npm run lint
if [ $? -ne 0 ]; then
  echo "❌ Linting failed. Please fix errors before committing."
  exit 1
fi

# Run tests
npm run test
if [ $? -ne 0 ]; then
  echo "❌ Tests failed. Please fix failing tests before committing."
  exit 1
fi

# Check for TODO comments in staged files
if git diff --cached --name-only | xargs grep -l "TODO\\|FIXME" > /dev/null; then echo"⚠️  Warning: Found TODO/FIXME comments in staged files" echo"Consider addressing these before committing:"
  git diff --cached --name-only | xargs grep -n "TODO\\|FIXME"
fi

echo "✅ Pre-commit checks passed!"`,
        liveDemo: false
      },
      {
        id: 'vscode',
        name: 'VS Code',
        category: 'Code Editor',
        proficiency: 95,
        experience: 5,
        icon: 'Code2',
        gradient: 'from-blue-500 to-indigo-600',
        technologies: ['Extensions', 'Snippets', 'Debugging', 'IntelliSense', 'Git Integration', 'Remote Development'],
        recentProjects: ['Custom Extensions', 'Team Settings', 'Debugging Configurations'],
        codeExample: `// VS Code settings.json for optimal development
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "editor.rulers": [80, 120],
  "editor.minimap.enabled": false,
  "workbench.colorTheme": "One Dark Pro",
  "terminal.integrated.defaultProfile.osx": "zsh",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "git.autofetch": true,
  "extensions.ignoreRecommendations": false
}`,
        liveDemo: false
      }
    ],
    emerging: [
      {
        id: 'ai-integration',
        name: 'AI/ML Integration',
        category: 'Artificial Intelligence',
        proficiency: 75,
        experience: 1,
        icon: 'Brain',
        gradient: 'from-purple-500 to-pink-500',
        technologies: ['OpenAI API', 'TensorFlow.js', 'Hugging Face', 'LangChain', 'Vector Databases', 'RAG'],
        recentProjects: ['AI Chatbot', 'Content Generator', 'Image Recognition App'],
        codeExample: `// AI-powered content generation with OpenAI
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

class ContentGenerator {
  async generateBlogPost(topic, tone = 'professional') {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: \`You are a skilled technical writer. Generate a blog post about \${topic} with a \${tone} tone.\`
          },
          {
            role: "user",
            content: \`Write a comprehensive blog post about \${topic}\`
          }
        ],
        max_tokens: 1500,
        temperature: 0.7,
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('Error generating content:', error);
      throw new Error('Failed to generate content');
    }
  }
}`,
        liveDemo: false
      },
      {
        id: 'web3',
        name: 'Web3 & Blockchain',
        category: 'Blockchain Technology',
        proficiency: 65,
        experience: 1,
        icon: 'Link',
        gradient: 'from-yellow-500 to-orange-500',
        technologies: ['Ethereum', 'Solidity', 'Web3.js', 'MetaMask', 'IPFS', 'Smart Contracts'],
        recentProjects: ['NFT Marketplace', 'DeFi Dashboard', 'Token Swap Interface'],
        codeExample: `// Web3 integration with React
import { useState, useEffect } from 'react';
import Web3 from 'web3';

const useWeb3 = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        
        const web3Instance = new Web3(window.ethereum);
        const accounts = await web3Instance.eth.getAccounts();
        
        setWeb3(web3Instance);
        setAccount(accounts[0]);
        setConnected(true);
        
        // Listen for account changes
        window.ethereum.on('accountsChanged', (accounts) => {
          setAccount(accounts[0] || '');
          setConnected(accounts.length > 0);
        });
        
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    }
  };

  return { web3, account, connected, connectWallet };
};`,
        liveDemo: false
      }
    ]
  };

  const getAllSkills = () => {
    return Object.values(skillsData).flat();
  };

  const filteredSkills = searchTerm
    ? getAllSkills().filter(skill =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : [];

  const viewModes = [
    { id: 'categories', name: 'Categories', icon: 'Grid3X3' },
    { id: 'comparison', name: 'Comparisons', icon: 'GitCompare' },
    { id: 'journey', name: 'Journey', icon: 'TrendingUp' },
    { id: 'certifications', name: 'Certifications', icon: 'Award' },
    { id: 'assessment', name: 'Assessment', icon: 'Brain' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Skills - Interactive Technical Showcase | IrfanDev Portfolio</title>
        <meta name="description" content="Explore S.Irfan's comprehensive technical skills through interactive demonstrations, code examples, and proficiency assessments. Frontend, backend, cloud, and emerging technologies." />
        <meta name="keywords" content="React developer skills, full-stack expertise, JavaScript proficiency, Node.js backend, AWS cloud, technical assessment, programming skills" />
        <meta property="og:title" content="Skills - Interactive Technical Showcase | IrfanDev Portfolio" />
        <meta property="og:description" content="Interactive showcase of technical skills with live code examples, proficiency assessments, and technology comparisons." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skills - Interactive Technical Showcase | IrfanDev Portfolio" />
        <meta name="twitter:description" content="Explore comprehensive technical skills through interactive demonstrations and assessments." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-electric-blue shadow-lg mb-6">
                <Icon name="Code2" size={32} color="white" strokeWidth={2} />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Technical <span className="text-gradient">Skills</span> Showcase
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Explore my comprehensive technical expertise through interactive demonstrations, 
                live code examples, and hands-on assessments. From frontend frameworks to cloud architecture.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="Search" size={20} className="text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search skills or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
            </div>

            {/* View Mode Selector */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {viewModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setViewMode(mode.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    viewMode === mode.id
                      ? 'bg-accent text-white' :'bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border'
                  }`}
                >
                  <Icon name={mode.icon} size={16} />
                  <span>{mode.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Search Results */}
            {searchTerm && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Search Results for "{searchTerm}" ({filteredSkills.length} found)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSkills.map((skill, index) => (
                    <div
                      key={skill.id}
                      className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.gradient} shadow-lg`}>
                            <Icon name={skill.icon} size={24} color="white" strokeWidth={2} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                            <p className="text-sm text-muted-foreground">{skill.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-accent">{skill.proficiency}%</div>
                          <p className="text-xs text-muted-foreground">{skill.experience} years</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {skill.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {skill.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">
                            +{skill.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content based on view mode */}
            {!searchTerm && (
              <>
                {viewMode === 'categories' && (
                  <div className="space-y-8">
                    {skillCategories.map((category) => (
                      <SkillCategory
                        key={category.id}
                        category={category}
                        skills={skillsData[category.id] || []}
                        isActive={activeCategory === category.id}
                        onToggle={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                      />
                    ))}
                  </div>
                )}

                {viewMode === 'comparison' && <TechnologyComparison />}
                {viewMode === 'journey' && <LearningJourney />}
                {viewMode === 'certifications' && <CertificationBadges />}
                {viewMode === 'assessment' && <SkillAssessment />}
              </>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 lg:px-8 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {Object.values(skillsData).flat().length}
                </div>
                <div className="text-muted-foreground">Technical Skills</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {Math.round(Object.values(skillsData).flat().reduce((acc, skill) => acc + skill.proficiency, 0) / Object.values(skillsData).flat().length)}%
                </div>
                <div className="text-muted-foreground">Avg. Proficiency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {Math.max(...Object.values(skillsData).flat().map(skill => skill.experience))}+
                </div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {new Set(Object.values(skillsData).flat().flatMap(skill => skill.technologies)).size}
                </div>
                <div className="text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Build Something <span className="text-gradient">Amazing</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how my technical expertise can bring your project to life. 
              From concept to deployment, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-collaboration-gateway"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-electric-blue hover:from-accent/90 hover:to-electric-blue/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Start a Project
              </a>
              <a
                href="/resume-professional-assets-hub"
                className="inline-flex items-center justify-center px-8 py-4 bg-card border border-border hover:border-accent/30 text-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SkillsInteractiveTechnicalShowcase;