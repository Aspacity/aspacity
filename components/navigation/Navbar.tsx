"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { name: "Products", href: "/products" },
  { name: "Vision", href: "/vision" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Updates", href: "/updates" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-neutral-200/80 py-3.5 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-1.5 select-none">
          <span className="font-extrabold tracking-tighter text-xl md:text-2xl text-brand-charcoal transition-colors group-hover:text-brand-orange">
            ASPACITY
          </span>
          <span className="h-2 w-2 rounded-full bg-brand-orange transition-transform duration-300 group-hover:scale-125"></span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 bg-neutral-100/70 border border-neutral-200/60 px-6 py-2 rounded-full backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs uppercase font-semibold tracking-wider transition-colors duration-200 relative py-1",
                  isActive
                    ? "text-brand-orange font-bold"
                    : "text-neutral-600 hover:text-brand-charcoal"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="orange"
            size="sm"
            href="https://paintit.aspacity.com"
            external
            className="flex items-center gap-1.5 group"
          >
            <span>Explore PaintIT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-brand-charcoal hover:bg-neutral-100 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-neutral-200 px-6 py-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-brand-charcoal hover:text-brand-orange transition-colors border-b border-neutral-100 pb-3"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                variant="orange"
                size="md"
                href="https://paintit.aspacity.com"
                external
                className="w-full flex items-center justify-center gap-2"
              >
                <span>Explore PaintIT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
