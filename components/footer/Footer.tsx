import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-20 pb-12 px-6 md:px-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-1.5 group select-none">
              <span className="font-black tracking-tighter text-2xl text-white transition-colors group-hover:text-brand-orange">
                ASPACITY
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-brand-orange"></span>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Building technology products that connect people, professionals, creativity,
              and intelligent tools across the physical spaces shaping how we live.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              © {new Date().getFullYear()} Aspacity Technology Inc. All rights reserved.
            </div>
          </div>

          {/* PRODUCTS COLUMN */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
              <li>
                <a
                  href="https://paintit.aspacity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange transition-colors inline-flex items-center gap-1 font-bold text-white"
                >
                  <span>PaintIT Studio</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-brand-orange text-white">LIVE</span>
                </a>
              </li>
              {/* <li>
                <Link href="/products/designit" className="hover:text-white transition-colors text-neutral-400">
                  DesignIT (In Dev)
                </Link>
              </li>
              <li>
                <Link href="/products/buildit" className="hover:text-white transition-colors text-neutral-400">
                  BuildIT (In Dev)
                </Link>
              </li>
              <li>
                <Link href="/products/sellit" className="hover:text-white transition-colors text-neutral-400">
                  SellIT (In Dev)
                </Link>
              </li> */}
              <li>
                <Link href="/products/furnishit" className="hover:text-white transition-colors text-neutral-400">
                  FurnishIT (In Dev)
                </Link>
              </li>
              {/*<li>
                <Link href="/products/ai" className="hover:text-white transition-colors text-neutral-400">
                  Aspacity AI
                </Link>
              </li>*/}
            </ul>
          </div>

          {/* COMPANY & RESEARCH COLUMN */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
              <li>
                <Link href="/vision" className="hover:text-brand-orange transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-brand-orange transition-colors">
                  Research Lab
                </Link>
              </li>
              <li>
                <Link href="/updates" className="hover:text-brand-orange transition-colors">
                  Updates & News
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL & SOCIALS COLUMN */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-4">
              Legal & Social
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookie Preferences
                </Link>
              </li>
            </ul>

            <div className="pt-4 flex items-center gap-3 text-neutral-400 text-xs font-mono">
              <a href="https://x.com/Aspacityhq" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange">
                X / Twitter
              </a>
              <span>/</span>
              <a href="https://www.linkedin.com/company/aspacity/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM ACCENT BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <span>ASPACITY ECOSYSTEM</span>
          <span>WHITE CANVAS + PRECISE ORANGE ENERGY</span>
        </div>
      </div>
    </footer>
  );
};
