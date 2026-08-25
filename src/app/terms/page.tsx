import React from "react";

export const metadata = {
  title: "Terms of Service — Aspacity",
  description: "Aspacity Terms of Service and user agreements.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 md:pt-44 pb-28 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto space-y-8 text-brand-charcoal">
        <div className="border-b border-neutral-200 pb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold">
            LEGAL & TRUST
          </span>
          <h1 className="text-4xl font-black">Terms of Service</h1>
          <p className="text-xs font-mono text-neutral-400">Last updated: August 2026</p>
        </div>

        <div className="space-y-6 text-sm text-neutral-600 leading-relaxed">
          <p>
            Welcome to Aspacity Technology Inc. By accessing our websites, applications, and services, you agree to comply with the following Terms of Service.
          </p>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">1. Use of Services</h2>
          <p>
            Aspacity grants you a limited, non-exclusive, non-transferable license to access our interactive 3D tools and platforms for visual estimation, room design, and professional workflows.
          </p>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">2. Intellectual Property</h2>
          <p>
            All 3D models, spatial rendering engines, source code, visual design elements, and logos associated with Aspacity and PaintIT Studio are the exclusive property of Aspacity Technology Inc.
          </p>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">3. Limitation of Liability</h2>
          <p>
            Our 3D spatial visualizers and lighting tools provide estimates intended for design exploration. Physical material variations, ambient light differences, and manufacturer paint batches may vary slightly in real-world application.
          </p>
        </div>
      </div>
    </div>
  );
}
