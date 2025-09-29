
import React from "react";
import HeroSection from "../components/HeroSection";
import WhySection from "../components/WhySection";
import HowItWorksSection from "../components/HowItWorksSection";
import WhatYouGetSection from "../components/WhatYouGetSection";
import BetaAccessSection from "../components/BetaAccessSection";
import CommunitySection from "../components/CommunitySection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-primary">
      <HeroSection />
      <WhySection />
      <HowItWorksSection />
      <WhatYouGetSection />
      <BetaAccessSection />
      <CommunitySection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default LandingPage;