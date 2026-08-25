import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);
  if (!product) return { title: "Product Not Found — Aspacity" };

  return {
    title: `${product.name} — Aspacity Product Specification`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-32 md:pt-44 pb-28 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* BACK LINK */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-brand-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Directory</span>
        </Link>

        {/* HERO SPEC HEADER */}
        <div className="space-y-6 border-b border-neutral-200 pb-12">
          <div className="flex items-center gap-3">
            <Badge status={product.status} />
            <span className="text-xs font-mono uppercase text-neutral-400 font-bold">
              {product.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-brand-charcoal tracking-tight">
            {product.name}
          </h1>

          <p className="text-xl font-medium text-brand-orange leading-snug">
            {product.tagline}
          </p>

          <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            {product.description}
          </p>

          {product.isLive && (
            <div className="pt-4">
              <Button
                variant="orange"
                size="lg"
                href={product.externalUrl || "https://paintit.aspacity.com"}
                external
                className="flex items-center gap-2 group"
              >
                <span>Launch {product.name} Application</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          )}
        </div>

        {/* CAPABILITIES & ARCHITECTURE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-brand-charcoal uppercase tracking-wide font-mono">
              Core Technical Capabilities
            </h2>
            <ul className="space-y-4">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-neutral-50 border border-neutral-200/80 p-8 rounded-3xl space-y-6">
            <div className="flex items-center gap-2 text-brand-orange">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-mono uppercase font-bold tracking-wider">
                Ecosystem Integration
              </span>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed">
              Every product in the Aspacity portfolio conforms to shared 3D spatial data schemas, material color codes, and trade project APIs.
            </p>

            <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>DEVELOPMENT STATUS</span>
              <span className={product.isLive ? "text-brand-orange font-bold" : "text-neutral-500"}>
                {product.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
