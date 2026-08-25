import React from "react";
import { VisionSection } from "@/components/vision/VisionSection";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Vision & Philosophy — Aspacity",
  description:
    "Explore Aspacity core vision: technology should make complex physical spatial decisions easier to imagine.",
};

export default function VisionPage() {
  return (
    <div className="pt-20">
      <VisionSection />
      
      <section className="py-24 px-6 md:px-12 bg-neutral-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold">
            EXPERIENCE OUR VISION IN ACTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            See how PaintIT Studio applies our spatial principles today.
          </h2>
          <div className="pt-4 flex justify-center">
            <Button
              variant="orange"
              size="lg"
              href="https://paintit.aspacity.com"
              external
            >
              Launch PaintIT Studio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
