import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SoftiloLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showText?: boolean;
}

export function SoftiloLogo({
  size = "md",
  className = "",
  showText = true,
}: SoftiloLogoProps) {
  const dimensions = {
    sm: { box: "h-8 w-8", px: 32, text: "text-xl" },
    md: { box: "h-10 w-10", px: 40, text: "text-2xl" },
    lg: { box: "h-11 w-11", px: 44, text: "text-3xl" },
  }[size];

  return (
    <Link
      href="/"
      aria-label="Softilo Agency Home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        className={`relative ${dimensions.box} shrink-0 overflow-hidden rounded-full border border-white/15 bg-[#0a0a0f] shadow-[0_0_20px_-4px_rgba(59,130,246,0.45)] transition-transform duration-300 group-hover:scale-105`}
      >
        <Image
          src="/logo.jpg"
          alt="Softilo Agency Logo"
          fill
          sizes={`${dimensions.px}px`}
          priority
          className="object-cover scale-[1.22]"
        />
      </span>
      {showText && (
        <span
          className={`font-display ${dimensions.text} font-bold tracking-tighter text-white`}
        >
          SOFTILO<span className="text-accent-cyan">.</span>
        </span>
      )}
    </Link>
  );
}

