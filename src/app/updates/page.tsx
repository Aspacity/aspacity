import React from "react";
import { Sparkles, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Updates & Releases — Aspacity",
  description:
    "Latest announcements, product releases, and platform updates across the Aspacity ecosystem.",
};

const UPDATES = [
  {
    date: "August 24, 2026",
    version: "PaintIT Studio v2.4",
    title: "Persistent Lighting Configurations & Full-Screen Canvas Engine",
    summary:
      "Released complete 100% full-screen canvas modes for PaintIT Studio, added locked 360° horizontal eye-level camera rigs, and integrated persistent sunlight azimuth and elevation saving directly to PostgreSQL.",
    category: "PaintIT Release",
  },
  {
    date: "August 16, 2026",
    version: "Ecosystem Architecture",
    title: "Official Aspacity Technology Company Website Unveiled",
    summary:
      "Unveiled the official Aspacity company portal outlining our broader product ecosystem (PaintIT Studio, DesignIT, BuildIT, SellIT, FurnishIT, Marketplace, and Aspacity AI).",
    category: "Company News",
  },
  {
    date: "July 30, 2026",
    version: "Dual DB Sync v1.8",
    title: "Automatic Offline & Online Background Database Synchronization",
    summary:
      "Engineered local storage and IndexedDB fallback engines allowing 3D canvas customization to continue uninterrupted without active internet connections.",
    category: "Infrastructure",
  },
];

export default function UpdatesPage() {
  return (
    <div className="pt-32 md:pt-44 pb-28 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 border-b border-neutral-200 pb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold block">
            ECOSYSTEM UPDATES
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-brand-charcoal tracking-tight">
            Updates & Releases
          </h1>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
            Follow the latest engineering milestones, product announcements, and platform releases across Aspacity.
          </p>
        </div>

        <div className="space-y-8">
          {UPDATES.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 border border-neutral-200/80 p-8 rounded-3xl space-y-4 hover:border-brand-orange/40 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-neutral-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-orange" />
                  <span>{item.date}</span>
                </div>
                <span className="px-3 py-1 bg-neutral-200/70 rounded-full font-bold text-brand-charcoal">
                  {item.version}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-brand-charcoal">
                {item.title}
              </h2>

              <p className="text-sm text-neutral-600 leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
