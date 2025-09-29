import React from "react";
import HeroSection from "./HeroSection";
import WhySection from "./WhySection";
import HowItWorksSection from "./HowItWorksSection";
import WhatYouGetSection from "./WhatYouGetSection";
import BetaAccessSection from "./BetaAccessSection";
import CommunitySection from "./CommunitySection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <HowItWorksSection />
      <WhatYouGetSection />
      <BetaAccessSection />
      <CommunitySection />
      <FAQSection />
      <Footer />
    </>
  );
}
