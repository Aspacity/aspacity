"use client";

import React, { useEffect, useRef } from "react";
import { RESEARCH_TOPICS } from "@/data/research";
import { Badge } from "@/components/ui/Badge";
import { Atom, Cpu, Layers3, Network } from "lucide-react";
import { getGSAP, isReducedMotion } from "@/lib/gsap";

export const ResearchLabSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const { gsap, ScrollTrigger } = getGSAP();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".res-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "3D Neural Rendering":
        return <Layers3 className="w-5 h-5 text-brand-orange" />;
      case "Generative Materials":
        return <Atom className="w-5 h-5 text-brand-orange" />;
      case "Spatial Interfaces":
        return <Cpu className="w-5 h-5 text-brand-orange" />;
      default:
        return <Network className="w-5 h-5 text-brand-orange" />;
    }
  };

  return (
    <section
      ref={containerRef}
      className="py-28 md:py-40 px-6 md:px-12 bg-neutral-50 border-t border-neutral-200/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold block">
            ASPACITY RESEARCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-charcoal tracking-tight">
            We’re still building.
          </h2>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
            Our long-term commitment extends beyond existing products. We invest in active research
            exploring the boundaries of 3D spatial computing, neural light physics, and intelligent trade networks.
          </p>
        </div>

        {/* RESEARCH TOPICS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESEARCH_TOPICS.map((item) => (
            <div
              key={item.id}
              className="res-card bg-white border border-neutral-200/80 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-orange/40 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-light flex items-center justify-center">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-xs font-mono text-neutral-400 font-bold">
                    {item.code}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-brand-orange font-bold tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-brand-charcoal leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">RESEARCH STATUS</span>
                <span className="text-brand-charcoal font-semibold">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
