import React from "react";
import { Button } from "./ui/button";

export default function BetaAccessSection() {
  const join = () => (window.location.href = "https://discord.gg/TU_INVITE");

  return (
    <section className="py-20 px-6 bg-white/5 border-t border-white/10">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="h2">Beta is open today</h2>
        <p className="body-lg text-secondary-text mt-3">
          First 20 members get free access in exchange for feedback. Everyone else: $29 early bird.
        </p>
        <Button onClick={join} className="mt-6 px-6 py-3">Join Early Access + Discord</Button>
      </div>
    </section>
  );
}
