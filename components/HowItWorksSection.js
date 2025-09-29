
import React from "react";
import { Card, CardContent } from "./ui/card";
import { ArrowRight } from "lucide-react";
import { mockData } from "../data/mock";

const HowItWorksSection = () => {
  const { howItWorks } = mockData;

  return (
    <section className="py-20 px-6 bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="display-md text-primary-text mb-4">
            {howItWorks.headline}
          </h2>
          <p className="body-lg text-secondary-text max-w-2xl mx-auto">
            {howItWorks.subheadline}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {howItWorks.steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="feature-card hover-lift">
                <CardContent className="p-0">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="h3 text-primary-text mb-4">
                      {step.title}
                    </h3>
                    <p className="body-md text-secondary-text">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Arrow connector for desktop */}
              {index < howItWorks.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;