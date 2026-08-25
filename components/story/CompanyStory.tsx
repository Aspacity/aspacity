"use client";

import React, { useEffect, useRef } from "react";
import { COMPANY_STORY, COMPANY_VALUES } from "@/data/company";
import { getGSAP, isReducedMotion } from "@/lib/gsap";

export const CompanyStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const { gsap, ScrollTrigger } = getGSAP();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".story-step",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
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

  return (
    <section
      ref={containerRef}
      className="py-28 md:py-40 px-6 md:px-12 bg-white border-t border-neutral-200/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* ABOUT ASPACITY HEADER */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold block">
            ABOUT ASPACITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-charcoal tracking-tight leading-tight">
            Independent products, shared foundation.
          </h2>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
            Aspacity operates as an parent technology company building dedicated applications.
            Each product serves its specific audience independently while sharing underlying spatial 3D, AI, and design systems.
          </p>
        </div>

        {/* TIMELINE EVOLUTION STORY */}
        <div className="mb-24">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-10">
            OUR TIMELINE & EVOLUTION
          </h3>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-neutral-200">
            {COMPANY_STORY.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`story-step relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
                >
                  {/* TIMELINE DOT */}
                  <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-brand-orange flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-brand-orange" />
                  </div>

                  {/* CONTENT BOX */}
                  <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)] bg-neutral-50 border border-neutral-200/80 p-6 md:p-8 rounded-3xl space-y-3 shadow-sm hover:border-brand-orange/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-brand-orange">
                        {item.year}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-neutral-200/70 text-neutral-600">
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-lg md:text-xl font-bold text-brand-charcoal">
                      {item.title}
                    </h4>

                    <p className="text-xs font-semibold text-neutral-500">
                      {item.subtitle}
                    </p>

                    <p className="text-xs text-neutral-600 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GUIDING VALUES GRID */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-8">
            ENGINEERING PRINCIPLES
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((val) => (
              <div
                key={val.number}
                className="bg-neutral-50 border border-neutral-200/80 p-6 rounded-3xl space-y-3"
              >
                <span className="text-xs font-mono font-bold text-brand-orange block">
                  {val.number}
                </span>
                <h4 className="text-base font-bold text-brand-charcoal">{val.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
