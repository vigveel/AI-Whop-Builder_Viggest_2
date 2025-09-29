
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Users, TrendingUp, DollarSign } from "lucide-react";
import { mockData } from "../data/mock";

const CommunitySection = () => {
  const { community } = mockData;

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="display-md text-primary-text mb-6">
            {community.headline}
          </h2>
          <p className="body-lg text-secondary-text max-w-3xl mx-auto">
            {community.description}
          </p>
        </div>
        
        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="feature-card hover-lift text-center">
            <CardContent className="p-0">
              <div className="pad-lg">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="h2 text-accent mb-2">{community.stats.members}</div>
                <p className="body-md text-secondary-text">Active Members</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="feature-card hover-lift text-center">
            <CardContent className="p-0">
              <div className="pad-lg">
                <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="h2 text-accent mb-2">{community.stats.products}</div>
                <p className="body-md text-secondary-text">Products Launched</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="feature-card hover-lift text-center">
            <CardContent className="p-0">
              <div className="pad-lg">
                <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="h2 text-accent mb-2">{community.stats.revenue}</div>
                <p className="body-md text-secondary-text">Revenue Generated</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Community Preview Placeholder */}
        <div className="max-w-4xl mx-auto">
          <Card className="feature-card">
            <CardContent className="p-0">
              <div className="pad-xl text-center">
                <div className="bg-tertiary rounded-lg p-12 border-2 border-dashed border-border-primary">
                  <Users className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="h3 text-primary-text mb-2">Discord Community Preview</h3>
                  <p className="body-md text-secondary-text">
                    Screenshots and Discord widget will be displayed here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;