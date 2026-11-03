"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SoftiloLogo } from "@/components/ui/softilo-logo";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/portfolio" },
  { name: "Packages", href: "/#packages" },
  { name: "About", href: "/#why-us" },
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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-background/70 py-3.5 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6"
      >
        <SoftiloLogo size="md" />

        <div className="hidden items-center gap-8 md:flex">
          <div className="glass-card flex items-center gap-6 rounded-full px-6 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-200"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          className="text-white md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 right-0 top-full flex flex-col gap-4 border-b border-white/10 bg-surface2 p-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg text-gray-300 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-black"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let&apos;s Talk
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
