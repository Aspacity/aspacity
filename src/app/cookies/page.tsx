import React from "react";

export const metadata = {
  title: "Cookie Policy — Aspacity",
  description: "Aspacity Cookie Policy and storage preferences.",
};

export default function CookiesPage() {
  return (
    <div className="pt-32 md:pt-44 pb-28 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto space-y-8 text-brand-charcoal">
        <div className="border-b border-neutral-200 pb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold">
            LEGAL & TRUST
          </span>
          <h1 className="text-4xl font-black">Cookie & Local Storage Policy</h1>
          <p className="text-xs font-mono text-neutral-400">Last updated: August 2026</p>
        </div>

        <div className="space-y-6 text-sm text-neutral-600 leading-relaxed">
          <p>
            Aspacity utilizes browser local storage, session storage, and essential cookies to ensure high-performance 3D rendering and offline database synchronization.
          </p>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">1. Essential Technical Storage</h2>
          <p>
            We store authentication tokens, offline project edits, and active UI preferences locally on your device to maintain your workspace state even when working without an active internet connection.
          </p>

          <h2 className="text-lg font-bold text-brand-charcoal pt-4">2. Performance & Analytics</h2>
          <p>
            Anonymized WebGL performance metrics (such as frame rate and render time) may be processed to help our engineering team optimize 3D graphics algorithms across different mobile and desktop devices.
          </p>
        </div>
      </div>
    </div>
  );
}
