"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Layers, Sparkles } from "lucide-react";
import { PRODUCTS, ProductItem } from "@/data/products";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getGSAP, isReducedMotion } from "@/lib/gsap";

export const ProductEcosystem: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("paintit");

  const activeProduct = PRODUCTS.find((p) => p.id === activeTab) || PRODUCTS[0];

  useEffect(() => {
    if (isReducedMotion()) return;

    const { gsap, ScrollTrigger } = getGSAP();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".eco-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-28 md:py-40 px-6 md:px-12 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="eco-header max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold block mb-3">
            PRODUCT ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-charcoal tracking-tight">
            Software built for the physical world.
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-600 leading-relaxed">
            Explore our expanding suite of visual, spatial, and trade management platforms.
            PaintIT Studio is available today; our future tools are in active development.
          </p>
        </div>

        {/* ECOSYSTEM INTERACTIVE TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-neutral-200">
          {PRODUCTS.map((prod) => {
            const isSelected = activeTab === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveTab(prod.id)}
                className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-brand-charcoal text-white shadow-md scale-102"
                    : "bg-neutral-100/80 text-neutral-600 hover:bg-neutral-200 hover:text-brand-charcoal"
                }`}
              >
                <span>{prod.name}</span>
                {prod.isLive ? (
                  <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                ) : (
                  <span className="text-[10px] opacity-60 font-mono">SOON</span>
                )}
              </button>
            );
          })}
        </div>

        {/* ACTIVE PRODUCT DETAILED VIEWPORT */}
        <div className="bg-neutral-50 border border-neutral-200/80 rounded-3xl p-8 md:p-14 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT DETAILS */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge status={activeProduct.status} />
                <span className="text-xs font-mono uppercase text-neutral-400 font-semibold tracking-wider">
                  {activeProduct.category}
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-black text-brand-charcoal tracking-tight">
                {activeProduct.name}
              </h3>

              <p className="text-lg md:text-xl font-medium text-brand-orange leading-snug">
                {activeProduct.tagline}
              </p>

              <p className="text-base text-neutral-600 leading-relaxed">
                {activeProduct.description}
              </p>

              {/* FEATURES LIST */}
              <div className="pt-4 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                  Core Capabilities
                </h4>
                <ul className="space-y-2.5">
                  {activeProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ACTION BUTTON */}
              <div className="pt-6 flex items-center gap-4">
                {activeProduct.isLive ? (
                  <Button
                    variant="orange"
                    size="lg"
                    href={activeProduct.externalUrl || "https://paintit.aspacity.com"}
                    external
                    className="flex items-center gap-2 group"
                  >
                    <span>Launch {activeProduct.name}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                ) : (
                  <Button variant="secondary" size="lg" disabled className="cursor-not-allowed opacity-80">
                    <span>In Active Development</span>
                  </Button>
                )}

                <Link
                  href={`/products/${activeProduct.slug}`}
                  className="text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-brand-charcoal underline underline-offset-4 font-bold"
                >
                  View Specification
                </Link>
              </div>
            </div>

            {/* RIGHT GRAPHICAL PREVIEW CARD */}
            <div className="lg:col-span-5 bg-white border border-neutral-200/90 rounded-2xl p-8 shadow-xl flex flex-col justify-between min-h-[380px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial-orange pointer-events-none opacity-40 blur-2xl" />

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange-light flex items-center justify-center text-brand-orange">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                  {activeProduct.name} Metrics
                </div>
              </div>

              {activeProduct.metrics && activeProduct.metrics.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 my-6">
                  {activeProduct.metrics.map((m, idx) => (
                    <div key={idx} className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                      <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                        {m.label}
                      </span>
                      <span className="text-xl font-black text-brand-charcoal">{m.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="my-6 p-6 rounded-xl bg-neutral-50 border border-neutral-100 text-center space-y-2">
                  <Sparkles className="w-5 h-5 text-brand-orange mx-auto" />
                  <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider font-semibold">
                    Product Pipeline Active
                  </p>
                  <p className="text-xs text-neutral-400">
                    Engineered to integrate seamlessly with Aspacity shared spatial protocols.
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>STATUS</span>
                <span className={activeProduct.isLive ? "text-brand-orange font-bold" : "text-neutral-500"}>
                  {activeProduct.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
