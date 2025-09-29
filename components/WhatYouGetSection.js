import React from "react";
import { Card, CardContent } from "./ui/card";

const items = [
  "3 product ideas tailored to you",
  "Complete copy + pricing suggestions",
  "Landing text for Whop",
  "Mini launch plan (Twitter, Reddit, Discord, Email)",
  "Access to private Discord",
];

export default function WhatYouGetSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <span className="pill">What you get</span>
          <h2 className="h2 mt-4">Value, not fluff</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <Card key={i}><CardContent>✅ {t}</CardContent></Card>
          ))}
        </div>
      </div>
    </section>
  );
}
