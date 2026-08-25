import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "orange";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full select-none cursor-pointer active:scale-98 tracking-tight";

  const variants = {
    primary:
      "bg-brand-charcoal text-white hover:bg-black shadow-sm hover:shadow-md",
    orange:
      "bg-brand-orange text-white hover:bg-brand-orange-hover shadow-sm hover:shadow-lg hover:shadow-brand-orange/20",
    secondary:
      "bg-neutral-100 text-brand-charcoal hover:bg-neutral-200 border border-neutral-200/80",
    outline:
      "bg-transparent text-brand-charcoal border border-neutral-300 hover:border-brand-charcoal hover:bg-neutral-50",
    ghost:
      "bg-transparent text-brand-charcoal hover:bg-neutral-100/70 hover:text-brand-orange",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs font-semibold",
    md: "px-6 py-3 text-sm font-semibold",
    lg: "px-8 py-4 text-base font-semibold",
  };

  const combinedClass = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};
