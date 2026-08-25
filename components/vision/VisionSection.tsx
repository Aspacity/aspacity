"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { getGSAP, isReducedMotion } from "@/lib/gsap";

export const VisionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const { gsap, ScrollTrigger } = getGSAP();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".vision-animate",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-32 md:py-44 px-6 md:px-12 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* EYEBROW */}
        <div className="vision-animate mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold">
            OUR VISION
          </span>
        </div>

        {/* HEADLINE */}
        <h2 className="vision-animate text-4xl sm:text-6xl lg:text-7xl font-black text-brand-charcoal tracking-tight leading-[1.08] max-w-4xl">
          Technology should make complex things easier to imagine.
        </h2>

        {/* EDITORIAL ESSAY */}
        <div className="vision-animate mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-neutral-600 text-lg md:text-xl font-normal leading-relaxed max-w-5xl">
          <div className="space-y-6">
            <p>
              Decisions that shape physical spaces — whether choosing a wall finish, reconfiguring an interior layout, or coordinating trade professionals — carry high costs when misunderstood.
            </p>
            <p>
              We do not build software to replace human craftsmanship or creative intuition. We build software to illuminate possibilities, remove ambiguity, and ground decisions in shared visual reality.
            </p>
          </div>

          <div className="space-y-6">
            <p>
              By combining real-time 3D rendering, intelligent material physics, and targeted workflow automation, Aspacity is constructing an integrated technology foundation for the physical world.
            </p>
            <p>
              Our objective is straightforward: to create software so intuitive and precise that turning an idea into physical reality becomes frictionless.
            </p>
          </div>
        </div>

        {/* STATS & METRIC HIGHLIGHTS */}
        <div className="vision-animate mt-20 pt-16 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="text-3xl md:text-5xl font-black text-brand-charcoal">3D Real-Time</span>
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              Interactive WebGL spatial rendering
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-3xl md:text-5xl font-black text-brand-orange">1 Ecosystem</span>
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              Unified design to trade execution
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-3xl md:text-5xl font-black text-brand-charcoal">Zero Hype</span>
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              Grounded, practical engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
