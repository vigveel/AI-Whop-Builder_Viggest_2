
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Check } from "lucide-react";
import { mockData } from "../data/mock";

const WhatYouGetSection = () => {
  const { whatYouGet } = mockData;

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="display-md text-primary-text mb-4">
            {whatYouGet.headline}
          </h2>
          <p className="body-lg text-secondary-text max-w-2xl mx-auto">
            {whatYouGet.subheadline}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="feature-card">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 gap-6">
                {whatYouGet.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-tertiary hover:bg-opacity-80 transition-all duration-200">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="body-lg text-primary-text font-medium">
                      {feature.replace('✅ ', '')}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;