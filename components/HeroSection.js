
import React from "react";
import { Button } from "./ui/button";
import { Rocket, Play } from "lucide-react";
import { mockData } from "../data/mock";

const HeroSection = () => {
  const { hero } = mockData;

  const handleJoinEarlyAccess = () => {
    // Mock action - will be replaced with real functionality
    alert("Joining Early Access + Discord! (Mock action)");
  };

  const handleWatchDemo = () => {
    // Mock action - will be replaced with real functionality
    alert("Opening demo video! (Mock action)");
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center px-6">
      {/* Futuristic background with glowing orbs */}
      <div className="absolute inset-0 hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <h1 className="display-lg text-primary-text leading-tight">
                        Launch your <span className="text-accent font-bold">digital product</span> on Whop <span className="hero-highlight">in minutes with AI</span>.

          </h1>
          
          <p className="body-lg text-secondary-text max-w-3xl mx-auto">
            {hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={handleJoinEarlyAccess}
              className="btn-primary flex items-center gap-3 text-lg px-8 py-4"
            >
              <Rocket className="w-5 h-5" />
              {hero.primaryCTA}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleWatchDemo}
              className="btn-secondary flex items-center gap-3 text-lg px-8 py-4"
            >
              <Play className="w-5 h-5" />
              {hero.secondaryCTA}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;