import React from "react";
import { ResearchLabSection } from "@/components/research/ResearchLabSection";

export const metadata = {
  title: "Aspacity Research Lab — Spatial Compute & AI Initiatives",
  description:
    "Explore active research initiatives in 3D neural rendering, material physics, zero-latency spatial UI, and decentralized trade networks.",
};

export default function ResearchPage() {
  return (
    <div className="pt-20">
      <ResearchLabSection />
    </div>
  );
}
