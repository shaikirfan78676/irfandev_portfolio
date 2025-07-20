import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PersonalInterests = () => {
  const [activeInterest, setActiveInterest] = useState(0);

  const interests = [
    {
      title: "Open Source Contributions",
      icon: "Github",
      description: "Contributing to the developer community through open-source projects and knowledge sharing.",
      details: [
        "Maintained 5+ open-source React libraries",
        "500+ GitHub stars across projects",
        "Active contributor to popular frameworks",
        "Regular participant in Hacktoberfest"
      ],
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
      stats: { contributions: "200+", repositories: "25+", followers: "150+" }
    },
    {
      title: "Technology Writing",
      icon: "PenTool",
      description: "Sharing technical insights and tutorials through blog posts and technical documentation.",
      details: [
        "Published 50+ technical articles",
        "10K+ monthly readers on dev.to",
        "Guest writer for tech publications",
        "Speaker at local developer meetups"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      stats: { articles: "50+", readers: "10K+", talks: "8" }
    },
    {
      title: "Continuous Learning",
      icon: "BookOpen",
      description: "Staying current with emerging technologies and expanding knowledge through courses and certifications.",
      details: [
        "Completed 20+ online certifications",
        "Regular attendee at tech conferences",
        "Active in developer communities",
        "Experimenting with AI/ML technologies"
      ],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      stats: { certificates: "20+", courses: "100+", conferences: "15+" }
    },
    {
      title: "Photography",
      icon: "Camera",
      description: "Capturing moments and exploring creativity through landscape and street photography.",
      details: [
        "Weekend photography expeditions",
        "Focus on landscape and urban photography",
        "Digital photo editing and processing",
        "Building a personal portfolio"
      ],
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      stats: { photos: "1000+", locations: "50+", equipment: "3 cameras" }
    },
    {
      title: "Fitness & Wellness",
      icon: "Activity",
      description: "Maintaining physical and mental health through regular exercise and mindfulness practices.",
      details: [
        "Daily morning workout routine",
        "Weekend hiking and outdoor activities",
        "Meditation and mindfulness practice",
        "Healthy work-life balance advocate"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      stats: { workouts: "300+/year", hikes: "24+", meditation: "Daily" }
    },
    {
      title: "Travel & Culture",
      icon: "MapPin",
      description: "Exploring different cultures, cuisines, and gaining new perspectives through travel.",
      details: [
        "Visited 15+ countries and counting",
        "Immersive cultural experiences",
        "Local cuisine exploration",
        "Remote work from different locations"
      ],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
      stats: { countries: "15+", cities: "40+", cultures: "Many" }
    }
  ];

  const personalValues = [
    {
      icon: "Heart",
      title: "Empathy",
      description: "Understanding and connecting with people from all backgrounds"
    },
    {
      icon: "Lightbulb",
      title: "Curiosity",
      description: "Always asking questions and seeking to learn something new"
    },
    {
      icon: "Users",
      title: "Community",
      description: "Believing in the power of collaboration and giving back"
    },
    {
      icon: "Zap",
      title: "Innovation",
      description: "Embracing change and finding creative solutions to problems"
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Beyond the Code
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While I'm passionate about technology, I believe in maintaining a well-rounded life 
            that fuels creativity and brings fresh perspectives to my work.
          </p>
        </div>

        {/* Personal Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {personalValues.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon name={value.icon} size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Interests Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interest Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className={`bg-card border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeInterest === index
                    ? 'border-accent shadow-lg shadow-accent/20 scale-105'
                    : 'border-border hover:border-accent/50'
                }`}
                onClick={() => setActiveInterest(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={interest.image}
                    alt={interest.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-accent/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Icon name={interest.icon} size={16} className="text-white" />
                      </div>
                      <h3 className="text-white font-semibold">{interest.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-3">
                    {interest.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex justify-between text-xs">
                    {Object.entries(interest.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-semibold text-accent">{value}</div>
                        <div className="text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Interest Details */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name={interests[activeInterest].icon} size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {interests[activeInterest].title}
                  </h3>
                  <p className="text-sm text-muted-foreground">Personal Interest</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {interests[activeInterest].description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground flex items-center">
                  <Icon name="CheckCircle" size={16} className="text-accent mr-2" />
                  Highlights
                </h4>
                <ul className="space-y-2">
                  {interests[activeInterest].details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <Icon name="ArrowRight" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="bg-gradient-to-br from-accent/5 to-electric-blue/5 border border-accent/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Sparkles" size={20} className="text-accent mr-2" />
                Fun Fact
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I believe that diverse experiences outside of coding make me a better developer. 
                Photography teaches me about composition and attention to detail, travel exposes 
                me to different problem-solving approaches, and fitness keeps my mind sharp for 
                tackling complex technical challenges.
              </p>
            </div>

            {/* Life Philosophy */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Quote" size={20} className="text-accent mr-2" />
                Life Philosophy
              </h4>
              <blockquote className="text-muted-foreground text-sm italic leading-relaxed">
                "The best code comes from developers who understand the world beyond their screens. 
                Every experience, every conversation, every challenge outside of programming 
                contributes to better problem-solving and more empathetic software design."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInterests;