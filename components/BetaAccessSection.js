
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Rocket, Clock } from "lucide-react";
import { mockData } from "../data/mock";

const BetaAccessSection = () => {
  const { betaAccess } = mockData;

  const handleJoinBeta = () => {
    // Mock action - will be replaced with real functionality
    alert("Joining Beta Access! (Mock action)");
  };

  return (
    <section className="py-20 px-6 bg-primary">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="feature-card bg-gradient-to-br from-secondary to-tertiary border-accent">
            <CardContent className="p-0">
              <div className="text-center pad-xl">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Clock className="w-6 h-6 text-accent" />
                  <span className="body-sm text-accent font-semibold uppercase tracking-wide">
                    {betaAccess.urgency}
                  </span>
                </div>
                
                <h2 className="display-md text-primary-text mb-6">
                  {betaAccess.headline}
                </h2>
                
                <p className="body-lg text-secondary-text mb-8 max-w-2xl mx-auto">
                  {betaAccess.subheadline}
                </p>
                
                <Button 
                  onClick={handleJoinBeta}
                  className="btn-primary flex items-center gap-3 text-lg px-10 py-5 mx-auto"
                >
                  <Rocket className="w-6 h-6" />
                  {betaAccess.cta}
                </Button>
                
                <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Join in seconds</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BetaAccessSection;