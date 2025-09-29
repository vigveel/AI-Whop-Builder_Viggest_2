import React from "react";
import { Card, CardContent } from "./ui/card";

export default function WhySection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <span className="pill">Why this matters</span>
          <h2 className="h2 mt-4">We solve the 3 blockers</h2>
          <p className="body-lg text-secondary-text mt-3">Clarity, validation and speed — done.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <Card><CardContent>❌ Don’t know <b>what to build</b>?</CardContent></Card>
          <Card><CardContent>❌ Don’t know <b>if it will sell</b>?</CardContent></Card>
          <Card><CardContent>❌ Don’t want to pay <b>$300+</b>?</CardContent></Card>
        </div>
      </div>
    </section>
  );
}
