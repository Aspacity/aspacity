"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getGSAP, isReducedMotion } from "@/lib/gsap";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const { gsap } = getGSAP();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.0 } });

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, delay: 0.2 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0 },
          "-=0.7"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0 },
          "-=0.7"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          "-=0.7"
        )
        .fromTo(
          graphicRef.current,
          { opacity: 0, scale: 0.9, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: "expo.out" },
          "-=0.9"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] md:min-h-screen pt-32 md:pt-44 pb-20 px-6 md:px-12 bg-white flex flex-col justify-between overflow-hidden"
    >
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-orange pointer-events-none opacity-60 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* EYEBROW */}
        <div ref={eyebrowRef} className="mb-6 opacity-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100/80 border border-neutral-200/80 text-xs font-mono uppercase tracking-widest text-neutral-600">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>THE ASPACITY ECOSYSTEM</span>
          </div>
        </div>

        {/* MAIN CINEMATIC HEADLINE */}
        <h1
          ref={titleRef}
          className="opacity-0 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-brand-charcoal leading-[1.05] max-w-5xl text-balance"
        >
          Building technology for the spaces and people{" "}
          <span className="relative inline-block text-brand-orange">
            shaping tomorrow.
            <span className="absolute bottom-1 left-0 right-0 h-[6px] bg-brand-orange/20 rounded-full" />
          </span>
        </h1>

        {/* SUPPORTING TEXT */}
        <p
          ref={subtitleRef}
          className="opacity-0 mt-8 text-lg sm:text-xl md:text-2xl text-neutral-600 font-normal leading-relaxed max-w-2xl text-balance"
        >
          Aspacity builds technology products that connect people, creativity, and
          intelligent tools across the industries that shape how we live and work.
        </p>

        {/* CALL TO ACTIONS */}
        <div
          ref={ctaRef}
          className="opacity-0 mt-10 flex flex-wrap items-center gap-4"
        >
          <Button
            variant="orange"
            size="lg"
            href="#products"
            className="flex items-center gap-2 group"
          >
            <span>Explore Our Products</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

          <Button variant="outline" size="lg" href="/about">
            Discover Aspacity
          </Button>
        </div>
      </div>

      {/* HERO ELEGANT GRAPHICAL ACCENT */}
      <div
        ref={graphicRef}
        className="opacity-0 max-w-7xl mx-auto w-full mt-16 pt-8 border-t border-neutral-200/60 flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Featured Active Platform — PaintIT Studio
          </span>
        </div>

        <div className="flex items-center gap-8 text-xs font-mono uppercase text-neutral-400">
          <span>01 / ECOSYSTEM</span>
          <span>02 / SPATIAL 3D</span>
          {/*<span>03 / AI INTELLIGENCE</span>*/}
        </div>
      </div>
    </section>
  );
};
