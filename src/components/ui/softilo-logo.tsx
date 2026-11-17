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
    lg: { box: "h-12 w-12", px: 48, text: "text-3xl" },
  }[size];

  return (
    <Link
      href="/"
      aria-label="Softilo Home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        className={`relative ${dimensions.box} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      >
        <Image
          src="/logo.png"
          alt="Softilo Official Logo"
          fill
          sizes={`${dimensions.px}px`}
          priority
          className="object-contain"
        />
      </span>
      {showText && (
        <span
          className={`font-display ${dimensions.text} font-bold tracking-tighter text-white`}
        >
          SOFTILO<span className="text-sky-400">.</span>
        </span>
      )}
    </Link>
  );
}
