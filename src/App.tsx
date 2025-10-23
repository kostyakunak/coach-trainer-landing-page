import { HeroSection } from "./components/HeroSection";
import { ForYouSection } from "./components/ForYouSection";
import { WhatAwaitsSection } from "./components/WhatAwaitsSection";
import { ProgramSection } from "./components/ProgramSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { MentorSection } from "./components/MentorSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { UniquenessSection } from "./components/UniquenessSection";
import { PricingSection } from "./components/PricingSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ForYouSection />
      <WhatAwaitsSection />
      <ProgramSection />
      <TestimonialsSection />
      <MentorSection />
      <HowItWorksSection />
      <UniquenessSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
