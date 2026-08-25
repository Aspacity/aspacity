import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  status: "LIVE PRODUCT" | "IN DEVELOPMENT" | "RESEARCH & AI" | string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ status, className }) => {
  const isLive = status === "LIVE PRODUCT";
  const isResearch = status === "RESEARCH & AI";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest border transition-all duration-300",
        isLive
          ? "bg-brand-orange-light text-brand-orange border-brand-orange/30 font-semibold"
          : isResearch
          ? "bg-neutral-900 text-white border-neutral-800"
          : "bg-neutral-100 text-neutral-600 border-neutral-200",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        {isLive && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
        )}
        <span
          className={cn(
            "relative inline-flex rounded-full h-2 w-2",
            isLive
              ? "bg-brand-orange"
              : isResearch
              ? "bg-white"
              : "bg-neutral-400"
          )}
        ></span>
      </span>
      <span>{status}</span>
    </div>
  );
};
