import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Products & Platform Ecosystem — Aspacity",
  description:
    "Explore Aspacity suite of spatial technology products including PaintIT Studio, DesignIT, BuildIT, SellIT, FurnishIT, and Aspacity AI.",
};

export default function ProductsPage() {
  return (
    <div className="pt-32 md:pt-44 pb-28 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold block">
            THE PRODUCT ECOSYSTEM
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-brand-charcoal tracking-tight">
            Independent software. Shared direction.
          </h1>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
            Aspacity builds focused software platforms for specific trades, design workflows, and spatial challenges.
            Explore our live products and active development pipeline.
          </p>
        </div>

        {/* PRODUCTS DIRECTORY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className={`border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                prod.isLive
                  ? "bg-white border-brand-orange/40 shadow-lg shadow-brand-orange/5 hover:border-brand-orange"
                  : "bg-neutral-50 border-neutral-200/80 hover:border-neutral-300"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-neutral-400 font-bold">
                    {prod.category}
                  </span>
                  <Badge status={prod.status} />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-brand-charcoal">
                    {prod.name}
                  </h2>
                  <p className="text-sm font-semibold text-brand-orange mt-1">
                    {prod.tagline}
                  </p>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {prod.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase text-neutral-400 font-bold block">
                    Key Features
                  </span>
                  <ul className="space-y-1.5">
                    {prod.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-neutral-200/60 flex items-center justify-between">
                <Link
                  href={`/products/${prod.slug}`}
                  className="text-xs font-mono uppercase font-bold text-neutral-600 hover:text-brand-orange underline underline-offset-4"
                >
                  View Details
                </Link>

                {prod.isLive && (
                  <Button
                    variant="orange"
                    size="sm"
                    href={prod.externalUrl || "https://paintit.aspacity.com"}
                    external
                    className="flex items-center gap-1"
                  >
                    <span>Launch App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
