"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Palette, Sun, Eye, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getGSAP, isReducedMotion } from "@/lib/gsap";

export const PaintitFeatured: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const { gsap, ScrollTrigger } = getGSAP();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".paintit-fade",
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
      className="py-28 md:py-40 px-6 md:px-12 bg-neutral-900 text-white relative overflow-hidden"
    >
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT EDITORIAL SHOWCASE */}
          <div className="lg:col-span-6 space-y-6">
            <div className="paintit-fade flex items-center gap-3">
              <Badge status="LIVE PRODUCT" />
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                FLAGSHIP SPATIAL PLATFORM
              </span>
            </div>

            <h2 className="paintit-fade text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Meet PAINTIT.
            </h2>

            <p className="paintit-fade text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed text-balance">
              PAINTIT helps painters, homeowners, and designers visualize spaces, wall finishes,
              and color compositions in interactive 3D before physical work begins.
            </p>

            {/* HIGHLIGHTED CAPABILITIES GRID */}
            <div className="paintit-fade grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-neutral-800/80 border border-neutral-750 p-4 rounded-2xl space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                  <Palette className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">Realistic Sheens</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Real-time Emulsion, Gloss, and Satin light reflection physics.
                </p>
              </div>

              <div className="bg-neutral-800/80 border border-neutral-750 p-4 rounded-2xl space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                  <Sun className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">Daylight Simulation</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Test colors across morning, midday, golden hour, and night lighting.
                </p>
              </div>

              <div className="bg-neutral-800/80 border border-neutral-750 p-4 rounded-2xl space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                  <Eye className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">360° Horizontal Orbit</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Locked horizontal camera rig for smooth eye-level room exploration.
                </p>
              </div>

              {/* <div className="bg-neutral-800/80 border border-neutral-750 p-4 rounded-2xl space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">Dual DB Sync</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Works seamlessly both online and offline with background PostgreSQL sync.
                </p>
              </div> */}
            </div>

            {/* CTAS */}
            <div className="paintit-fade pt-6 flex flex-wrap items-center gap-4">
              <Button
                variant="orange"
                size="lg"
                href="https://paint-it-six.vercel.app"
                external
                className="flex items-center gap-2 group"
              >
                <span>Visit PAINTIT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="/products/paintit"
                className="border-neutral-700 text-white hover:bg-neutral-800 hover:border-white"
              >
                Read Product Spec
              </Button>
            </div>
          </div>

          {/* RIGHT CINEMATIC MOCKUP DISPLAY */}
          <div className="paintit-fade lg:col-span-6">
            <div className="relative bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-850 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                  PAINTIT 3D CANVAS VIEWPORT
                </span>
              </div>

              {/* SIMULATED CANVAS CANVAS PREVIEW */}
              <div className="h-72 sm:h-96 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-brand-charcoal relative overflow-hidden flex flex-col justify-between p-6 border border-neutral-800">
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-mono text-emerald-400 font-bold border border-emerald-500/30">
                    ● 60 FPS REAL-TIME WEBGL
                  </span>
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-mono text-neutral-300">
                    ☀️ MORNING LIGHTING
                  </span>
                </div>

                <div className="z-10 text-center space-y-2 max-w-sm mx-auto">
                  <div className="w-10 h-10 rounded-full bg-brand-orange text-white mx-auto flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">
                    Interactive 3D Room Visualizer
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Custom wall painting, floor texture switching, and 360° horizontal camera rotation.
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 z-10 border-t border-neutral-800/80 pt-3">
                  <span>ROOM: LIVING ROOM SUITE</span>
                  <span className="text-brand-orange font-bold">ASPACITY ENGINE v2.4</span>
                </div>

                {/* Subtle Orange Light Cone Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-radial-orange pointer-events-none opacity-40 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
