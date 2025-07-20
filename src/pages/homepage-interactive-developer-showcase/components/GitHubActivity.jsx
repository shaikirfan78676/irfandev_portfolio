import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const GitHubActivity = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  // Mock GitHub activity data
  const activityData = {
    week: [
      { day: 'Mon', commits: 8, color: 'bg-green-500' },
      { day: 'Tue', commits: 12, color: 'bg-green-600' },
      { day: 'Wed', commits: 6, color: 'bg-green-400' },
      { day: 'Thu', commits: 15, color: 'bg-green-700' },
      { day: 'Fri', commits: 10, color: 'bg-green-500' },
      { day: 'Sat', commits: 4, color: 'bg-green-300' },
      { day: 'Sun', commits: 7, color: 'bg-green-400' }
    ],
    month: [
      { week: 'Week 1', commits: 45, color: 'bg-green-600' },
      { week: 'Week 2', commits: 52, color: 'bg-green-700' },
      { week: 'Week 3', commits: 38, color: 'bg-green-500' },
      { week: 'Week 4', commits: 41, color: 'bg-green-600' }
    ]
  };

  const recentActivity = [
    {
      id: 1,
      type: 'push',
      repo: 'portfolio-website',
      message: 'Add interactive skills laboratory component',
      time: '2 hours ago',
      icon: 'GitCommit'
    },
    {
      id: 2,
      type: 'create',
      repo: 'react-performance-toolkit',
      message: 'Created new repository for React optimization tools',
      time: '1 day ago',
      icon: 'Plus'
    },
    {
      id: 3,
      type: 'push',
      repo: 'ecommerce-platform',
      message: 'Implement payment gateway integration',
      time: '2 days ago',
      icon: 'GitCommit'
    },
    {
      id: 4,
      type: 'merge',
      repo: 'task-management-app',
      message: 'Merge pull request #23: Add real-time notifications',
      time: '3 days ago',
      icon: 'GitMerge'
    },
    {
      id: 5,
      type: 'push',
      repo: 'ai-content-generator',
      message: 'Optimize ML model performance and accuracy',
      time: '4 days ago',
      icon: 'GitCommit'
    }
  ];

  const stats = {
    totalCommits: 1247,
    currentStreak: 23,
    longestStreak: 67,
    repositories: 42,
    contributions: 1580,
    followers: 234
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'push': return 'GitCommit';
      case 'create': return 'Plus';
      case 'merge': return 'GitMerge';
      default: return 'GitCommit';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'push': return 'text-blue-400';
      case 'create': return 'text-green-400';
      case 'merge': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Consistent contribution patterns and development activity
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Activity Chart */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Contribution Activity</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedPeriod('week')}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      selectedPeriod === 'week' ?'bg-accent text-white' :'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Week
                  </button>
                  <button
                    onClick={() => setSelectedPeriod('month')}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      selectedPeriod === 'month' ?'bg-accent text-white' :'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Month
                  </button>
                </div>
              </div>

              {/* Chart */}
              <div className="space-y-4">
                <div className="flex items-end justify-between h-32 space-x-2">
                  {activityData[selectedPeriod].map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div
                        className={`w-full ${item.color} rounded-t transition-all duration-500 hover:opacity-80`}
                        style={{ height: `${(item.commits / 15) * 100}%` }}
                        title={`${item.commits} commits`}
                      ></div>
                      <div className="text-xs text-muted-foreground mt-2">
                        {selectedPeriod === 'week' ? item.day : item.week}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Less</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-muted rounded-sm"></div>
                    <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                    <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-card border border-border rounded-xl p-6 mt-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/20 transition-colors">
                    <div className={`mt-1 ${getActivityColor(activity.type)}`}>
                      <Icon name={getActivityIcon(activity.type)} size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-foreground">{activity.repo}</span>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{activity.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            {/* Profile Stats */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">GitHub Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="GitCommit" size={16} className="text-accent" />
                    <span className="text-sm text-muted-foreground">Total Commits</span>
                  </div>
                  <span className="font-semibold text-foreground">{stats.totalCommits.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Flame" size={16} className="text-orange-500" />
                    <span className="text-sm text-muted-foreground">Current Streak</span>
                  </div>
                  <span className="font-semibold text-foreground">{stats.currentStreak} days</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Trophy" size={16} className="text-yellow-500" />
                    <span className="text-sm text-muted-foreground">Longest Streak</span>
                  </div>
                  <span className="font-semibold text-foreground">{stats.longestStreak} days</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Folder" size={16} className="text-blue-500" />
                    <span className="text-sm text-muted-foreground">Repositories</span>
                  </div>
                  <span className="font-semibold text-foreground">{stats.repositories}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} className="text-green-500" />
                    <span className="text-sm text-muted-foreground">Followers</span>
                  </div>
                  <span className="font-semibold text-foreground">{stats.followers}</span>
                </div>
              </div>
            </div>

            {/* Contribution Summary */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">This Year</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">
                  {stats.contributions.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  contributions in 2025
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  78% more than last year
                </div>
              </div>
            </div>

            {/* GitHub Profile Link */}
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Icon name="Github" size={32} className="text-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">@sirfan</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Follow my open source journey
              </p>
              <a
                href="https://github.com/sirfan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                <Icon name="ExternalLink" size={16} />
                <span>View Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;