"use client";

import React, { useEffect, useRef } from "react";
import { PRODUCTS } from "@/data/products";
import { Badge } from "@/components/ui/Badge";
import { getGSAP, isReducedMotion } from "@/lib/gsap";

export const IntroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const { gsap, ScrollTrigger } = getGSAP();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".intro-animate",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
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

  return (
    <section
      ref={containerRef}
      className="py-28 md:py-40 px-6 md:px-12 bg-neutral-50 border-y border-neutral-200/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* EYEBROW */}
        <span className="intro-animate block text-xs font-mono uppercase tracking-widest text-brand-orange font-bold mb-4">
          WHAT WE BUILD
        </span>

        {/* HEADLINE */}
        <h2 className="intro-animate text-3xl sm:text-5xl lg:text-6xl font-black text-brand-charcoal tracking-tight max-w-3xl leading-[1.1]">
          One company. Multiple products. One direction.
        </h2>

        {/* PHILOSOPHY STATEMENT */}
        <div className="intro-animate mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-600 text-base md:text-lg leading-relaxed max-w-5xl">
          <p>
            Rather than forcing every industry problem into a single monolithic, overcrowded
            software application, Aspacity architects standalone, focused software products tailored
            precisely to specific trades, creative workflows, and spatial challenges.
          </p>
          <p>
            Every product operates with singular clarity while remaining seamlessly connected
            under Aspacity’s shared vision of 3D spatial technology, intelligent AI, and
            transparent professional collaboration.
          </p>
        </div>

        {/* ECOSYSTEM DIAGRAM ARCHITECTURE */}
        <div className="intro-animate mt-20 pt-16 border-t border-neutral-200">
          <div className="flex flex-col items-center">
            {/* PARENT NODE */}
            <div className="relative group bg-brand-charcoal text-white px-8 py-4 rounded-2xl shadow-xl flex items-center gap-3 border border-neutral-800 transition-transform duration-300 hover:scale-105">
              <span className="font-extrabold text-lg md:text-xl tracking-wider">ASPACITY</span>
              <span className="h-2.5 w-2.5 rounded-full bg-brand-orange"></span>
            </div>

            {/* CONNECTING STEM */}
            <div className="w-0.5 h-12 bg-gradient-to-b from-brand-charcoal via-brand-orange to-neutral-300 my-2"></div>

            {/* PRODUCT ECOSYSTEM BRANCHES */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    prod.isLive
                      ? "bg-white border-brand-orange/40 shadow-lg shadow-brand-orange/5 hover:border-brand-orange"
                      : "bg-white/60 border-neutral-200/80 hover:border-neutral-300"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono uppercase text-neutral-400 font-semibold">
                        {prod.category}
                      </span>
                      <Badge status={prod.status} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-charcoal">{prod.name}</h3>
                    <p className="text-xs text-neutral-500 mt-2 line-clamp-2 leading-relaxed">
                      {prod.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>{prod.isLive ? "Active Product" : "In Pipeline"}</span>
                    <span className={prod.isLive ? "text-brand-orange font-bold" : ""}>
                      {prod.isLive ? "v1.0 Live" : "Future"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
