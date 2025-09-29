
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { mockData } from "../data/mock";

const FAQSection = () => {
  const { faq } = mockData;

  return (
    <section className="py-20 px-6 bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="display-md text-primary-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="body-lg text-secondary-text max-w-2xl mx-auto">
            Everything you need to know about AI Whop Builder
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="feature-card border-border-subtle"
              >
                <AccordionTrigger className="text-left hover:text-accent px-6 py-4 h4 text-primary-text">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 body-md text-secondary-text">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;