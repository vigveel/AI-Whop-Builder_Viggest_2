import React from "react";
import { Card, CardContent } from "./ui/card";

const steps = [
  { n: "1", t: "Tell the AI", d: "Share your skills or your idea." },
  { n: "2", t: "Get a Whop-ready blueprint", d: "Offer, copy, pricing, and a 48h launch plan." },
  { n: "3", t: "Publish & start selling", d: "Copy-paste to Whop with our checklist." },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <span className="pill">How it works</span>
          <h2 className="h2 mt-4">From idea to live in minutes</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map(s => (
            <Card key={s.n}>
              <CardContent>
                <div className="text-accent font-bold text-lg mb-2">Step {s.n}</div>
                <div className="h4">{s.t}</div>
                <p className="text-secondary-text mt-2">{s.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
