"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

const STORAGE_KEY = "softilo_theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const root = document.documentElement;
    const saved = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initialTheme: Theme =
      saved === "light" || saved === "dark" ? saved : "dark";

    setThemeState(initialTheme);
    root.classList.remove("dark", "light");
    root.classList.add(initialTheme);
    root.style.colorScheme = initialTheme;
  }, []);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      root.classList.remove("dark", "light");
      root.classList.add(nextTheme);
      root.style.colorScheme = nextTheme;
      try {
        window.localStorage.setItem(STORAGE_KEY, nextTheme);
      } catch {
        // Ignore storage errors
      }
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
