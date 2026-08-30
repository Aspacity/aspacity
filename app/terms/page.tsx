import React from "react";

export const metadata = {
  title: "Terms of Service — Aspacity Identity & Ecosystem",
  description: "Aspacity Terms of Service governing Aspacity Accounts and ecosystem products.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 md:pt-44 pb-28 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto space-y-8 text-brand-charcoal">
        <div className="border-b border-neutral-200 pb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold">
            LEGAL ARCHITECTURE & TERMS
          </span>
          <h1 className="text-4xl font-black">Aspacity Ecosystem Terms of Service</h1>
          <p className="text-xs font-mono text-neutral-400">Last updated: August 2026 • Platform Version 2.0</p>
        </div>

        <div className="space-y-6 text-sm text-neutral-600 leading-relaxed">
          <p>
            Aspacity Technology Inc. (&quot;Aspacity&quot;) provides a centralized single-sign-on (SSO) account infrastructure (&quot;Aspacity Account&quot;) enabling authorized access to Aspacity spatial tools and ecosystem products, including <strong>PAINTIT</strong>.
          </p>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs">
            <strong>Legal Review Required:</strong> These terms establish the platform vs. product legal framework. Formal legal review is required before production commercial deployment.
          </div>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">1. Central Identity & Product Relationship</h2>
          <p>
            Your Aspacity Account is the platform-level identity that grants access to PAINTIT and future Aspacity products (such as DesignIT). Creating an Aspacity Account establishes a single authenticated identity across our software ecosystem.
          </p>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">2. Product Data Boundaries</h2>
          <p>
            Aspacity manages your global identity, login credentials, and product access permissions. Products such as PAINTIT independently manage product-specific business data, 3D room scenes, color compositions, portfolios, and contractor bookings. Product-specific data is not automatically shared across unrelated products.
          </p>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">3. Account Deletion & Data Retention</h2>
          <p>
            Deleting your global Aspacity Account revokes access across all ecosystem products and triggers product-specific data cleanup and anonymization workflows in accordance with our data retention policy.
          </p>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">4. Spatial Visualization Disclaimer</h2>
          <p>
            3D room renderings, sheen physics, and lighting simulations in PAINTIT are visual approximations designed to assist physical planning. Real-world material batches, surface textures, and natural lighting conditions may vary.
          </p>
        </div>
      </div>
    </div>
  );
}
