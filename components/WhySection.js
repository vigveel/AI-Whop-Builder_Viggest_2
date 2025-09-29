
import React from "react";
import { Card, CardContent } from "./ui/card";
import { mockData } from "../data/mock";

const WhySection = () => {
  const { whySection } = mockData;

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="display-md text-primary-text mb-4">
            {whySection.headline}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whySection.problems.map((problem, index) => (
            <Card key={index} className="feature-card hover-lift">
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="h3 text-primary-text mb-4">
                    {problem.title}
                  </h3>
                  <p className="body-md text-secondary-text">
                    {problem.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;