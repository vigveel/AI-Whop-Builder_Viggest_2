import React from "react";
import { mockData } from "../data/mock";

export default function FAQSection() {
  const { faq } = mockData;

  return (
    <section className="py-20 px-6 bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <span className="pill">FAQ</span>
          <h2 className="h2 mt-4">Questions people ask</h2>
          <p className="body-lg text-secondary-text mt-3">Short answers. No fluff.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faq.map((item, index) => (
            <details
              key={index}
              className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
            >
              <summary className="cursor-pointer list-none px-6 py-4 h4 text-primary-text hover:text-accent">
                {item.question}
              </summary>
              <div className="px-6 pb-6 body-md text-secondary-text">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
