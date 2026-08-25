import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { IntroSection } from "@/components/ecosystem/IntroSection";
import { ProductEcosystem } from "@/components/ecosystem/ProductEcosystem";
import { PaintitFeatured } from "@/components/featured/PaintitFeatured";
import { VisionSection } from "@/components/vision/VisionSection";
import { ResearchLabSection } from "@/components/research/ResearchLabSection";
import { CompanyStory } from "@/components/story/CompanyStory";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ProductEcosystem />
      <PaintitFeatured />
      <VisionSection />
      {*/<ResearchLabSection />/*}
      <CompanyStory />
    </>
  );
}
