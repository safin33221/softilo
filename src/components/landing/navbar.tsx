"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SoftiloLogo } from "@/components/ui/softilo-logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/portfolio" },
  { name: "About", href: "/#why-us" },
  { name: "Team", href: "/#team" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#262038] bg-[#0b0912]/95 py-3.5 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6"
      >
        <SoftiloLogo size="md" />

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-6 rounded-full border border-[#262038] bg-[#13111c] px-6 py-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-[#a855f7]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <ThemeToggle />

          <Link
            href="/contact"
            className="rounded-full bg-[#7f0bed] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#6a05d5]"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <div className="flex items-center gap-2.5 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="text-white p-1"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 right-0 top-full flex flex-col gap-4 border-b border-[#262038] bg-[#13111c] p-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-200 transition-colors hover:text-[#a855f7]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-full bg-[#7f0bed] px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[#6a05d5]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let&apos;s Talk
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
