"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#32294d] bg-[#13111c] px-3.5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:border-[#7f0bed] hover:bg-[#191626] ${className}`}
    >
      {isDark ? (
        <>
          <Sun className="h-4 w-4 text-[#a855f7]" />
          {showLabel && <span>Light Mode</span>}
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 text-[#7f0bed]" />
          {showLabel && <span>Dark Mode</span>}
        </>
      )}
    </button>
  );
}
