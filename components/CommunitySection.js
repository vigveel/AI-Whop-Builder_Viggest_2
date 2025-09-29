import React from "react";
import { Card, CardContent } from "./ui/card";

export default function CommunitySection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <span className="pill">Community</span>
          <h2 className="h2 mt-4">You’re not building alone</h2>
          <p className="body-lg text-secondary-text mt-3">
            Join the first community of AI digital product creators. Share results, get feedback, and grow together.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <Card><CardContent>💬 #feedback — improve fast with peers</CardContent></Card>
          <Card><CardContent>🚀 #showcase-results — share your wins</CardContent></Card>
          <Card><CardContent>📣 #announcements — drops & updates</CardContent></Card>
        </div>
      </div>
    </section>
  );
}
