import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsAstra } from "@/components/sections/WhatIsAstra";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { EarningsShowcase } from "@/components/sections/EarningsShowcase";
import { GamificationSection } from "@/components/sections/GamificationSection";
import { ToolsFeatures } from "@/components/sections/ToolsFeatures";

import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";
import { StarParticlesWrapper } from "@/components/ui/StarParticlesWrapper";
import { MobileCTA } from "@/components/ui/MobileCTA";

export default function Home() {
  return (
    <main className="relative">
      <StarParticlesWrapper />
      <Navbar />
      <HeroSection />
      <EarningsShowcase />
      <WhatIsAstra />
      <HowItWorks />
      <GamificationSection />
      <BenefitsSection />
      <ToolsFeatures />
      <FAQSection />
      <CTASection />
      <Footer />
      <MobileCTA />
    </main>
  );
}
