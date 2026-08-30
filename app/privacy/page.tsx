import React from "react";

export const metadata = {
  title: "Privacy Policy — Aspacity Identity & Ecosystem",
  description: "Aspacity Privacy Policy detailing identity data boundaries and product data ownership.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 md:pt-44 pb-28 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto space-y-8 text-brand-charcoal">
        <div className="border-b border-neutral-200 pb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold">
            PRIVACY & DATA GOVERNANCE
          </span>
          <h1 className="text-4xl font-black">Aspacity Privacy Policy</h1>
          <p className="text-xs font-mono text-neutral-400">Last updated: August 2026 • Platform Version 2.0</p>
        </div>

        <div className="space-y-6 text-sm text-neutral-600 leading-relaxed">
          <p>
            Aspacity Technology Inc. (&quot;Aspacity&quot;) values your privacy. This policy explains how we handle personal identity data across the Aspacity Identity Platform and product services like <strong>PAINTIT</strong>.
          </p>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs">
            <strong>Legal Notice:</strong> This document outlines data governance architecture. Formal regulatory compliance (e.g., GDPR, NDPR) requires final legal counsel review.
          </div>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">1. Data Ownership & Separation</h2>
          <p>
            <strong>Aspacity Identity Platform</strong> owns global account identity data (email, name, authentication provider, product access tokens). <strong>PAINTIT</strong> independently owns product domain data (painter profile, 3D scenes, color palettes, project portfolios, client bookings).
          </p>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">2. Identity Claims & Token Transfer</h2>
          <p>
            When you sign in to PAINTIT using your Aspacity Account, Aspacity issues a cryptographically signed identity claim containing your account ID, verified email, and product role. No passwords or security credentials are ever transmitted to or stored inside product databases.
          </p>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">3. Data Minimization</h2>
          <p>
            We adhere to data minimization principles. We only collect identity information strictly necessary for secure account management, single-sign-on verification, and product delivery.
          </p>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">4. Account Deletion Rights</h2>
          <p>
            Users can request global Aspacity Account deletion at any time via Account Settings or by contacting support. Account deletion revokes product memberships and initiates automated product data anonymization.
          </p>
        </div>
      </div>
    </div>
  );
}
