"use client";
import React from "react";
import { Button } from "./ui/button";

export default function HeroSection() {
  const handleJoinEarlyAccess = () => {
    // Pega aquí tu invite de Discord
    window.location.href = "https://discord.gg/TU_INVITE";
  };
  const handleWatchDemo = () => {
    // Pega aquí tu Loom si lo tienes
    window.location.href = "https://loom.com/share/DEMO_ID";
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center px-6">
      {/* Background */}
      <div className="absolute inset-0 hero-bg">
        <div className="hero-gradient" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="h1">
          Launch your <span className="text-accent">digital product</span> on Whop in minutes{" "}
          <span className="underline decoration-4 decoration-accent">with AI</span>.
        </h1>
        <p className="body-lg text-secondary-text mt-4">
          Skip the $XXX program. My AI co-founder designs, validates & launches your product for you — faster, cheaper, easier.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleJoinEarlyAccess} className="px-6 py-3">
            🚀 Join Early Access + Discord
          </Button>
          <Button onClick={handleWatchDemo} variant="outline" className="px-6 py-3">
            ▶ Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
