import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-br from-accent/10 to-electric-blue/10 rounded-2xl p-8 border border-accent/20 text-center">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Welcome to the Community!
        </h3>
        <p className="text-muted-foreground">
          You'll receive exclusive technical insights and project updates directly in your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-card to-card/80 rounded-2xl p-8 border border-border">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-accent to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Mail" size={32} className="text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Stay Updated with Latest Insights
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          Get exclusive technical tutorials, industry perspectives, and behind-the-scenes project updates delivered to your inbox weekly.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 text-center"
        />
        
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isLoading}
          disabled={!email}
          className="bg-gradient-to-r from-accent to-electric-blue hover:from-accent/90 hover:to-electric-blue/90 text-white border-0 h-12"
          iconName="Send"
          iconPosition="right"
        >
          Subscribe to Newsletter
        </Button>
      </form>
      
      <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="Users" size={16} className="text-accent" />
          <span>2,500+ developers</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="Shield" size={16} className="text-accent" />
          <span>No spam, unsubscribe anytime</span>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;