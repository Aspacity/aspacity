import React from "react";

export const metadata = {
  title: "Privacy Policy — Aspacity",
  description: "Aspacity Privacy Policy and data protection standards.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 md:pt-44 pb-28 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto space-y-8 text-brand-charcoal">
        <div className="border-b border-neutral-200 pb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold">
            LEGAL & TRUST
          </span>
          <h1 className="text-4xl font-black">Privacy Policy</h1>
          <p className="text-xs font-mono text-neutral-400">Last updated: August 2026</p>
        </div>

        <div className="space-y-6 text-sm text-neutral-600 leading-relaxed">
          <p>
            At Aspacity Technology Inc., we are committed to respecting your privacy and protecting the security of your personal data.
          </p>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">1. Data Collection Philosophy</h2>
          <p>
            We collect only the essential data required to provide and improve our spatial 3D visualization tools, user account profiles, and database synchronization services. We do not sell personal data to third-party brokers.
          </p>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">2. Technical & Workspace Data</h2>
          <p>
            When utilizing PaintIT Studio or other Aspacity products, design project configurations (wall colors, finishes, model parameters, and camera presets) are cached locally in your browser and stored securely in our cloud servers to enable cross-device session restoration.
          </p>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">3. Contact & Support</h2>
          <p>
            For privacy inquiries or account data removal requests, please contact our team at privacy@aspacity.com.
          </p>
        </div>
      </div>
    </div>
  );
}
