"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Minus,
  ShieldCheck,
  KeyRound,
  ArrowRight,
  Plane,
  Compass,
  FileCheck2,
  TrendingUp,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  1. 3D CYBERPUNK TRAVEL GRID & FLIGHT-ROUTE NODE TRACKING BACKGROUND       */
/* -------------------------------------------------------------------------- */

const FLIGHT_NODES = [
  { top: "24%", left: "16%", label: "DAC", delay: 0 },
  { top: "18%", left: "48%", label: "JED", delay: 1.1 },
  { top: "30%", left: "82%", label: "DXB", delay: 2.2 },
  { top: "68%", left: "22%", label: "KUL", delay: 0.7 },
  { top: "64%", left: "76%", label: "SIN", delay: 1.6 },
];

export function TravelGridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#030206]"
    >
      {/* Subtle 2D Coordinate Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 115, 22, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 45%, #000 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 45%, #000 30%, transparent 90%)",
        }}
      />

      {/* Faint Glowing Flight Route Arcs (SVG Overlay) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-35"
        viewBox="0 0 1200 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flightRoute1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59,130,246,0)" />
            <stop offset="45%" stopColor="rgba(56,189,248,0.65)" />
            <stop offset="80%" stopColor="rgba(249,115,22,0.75)" />
            <stop offset="100%" stopColor="rgba(249,115,22,0)" />
          </linearGradient>
          <linearGradient id="flightRoute2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139,92,246,0)" />
            <stop offset="50%" stopColor="rgba(168,85,247,0.6)" />
            <stop offset="100%" stopColor="rgba(56,189,248,0)" />
          </linearGradient>
        </defs>
        <path
          d="M 120 180 Q 560 40 1020 200"
          stroke="url(#flightRoute1)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <path
          d="M 220 420 Q 620 240 960 390"
          stroke="url(#flightRoute2)"
          strokeWidth="1.5"
          strokeDasharray="5 7"
        />
      </svg>

      {/* Node-Based Tracking Dots (Airport / Route Connectors) */}
      {FLIGHT_NODES.map((node) => (
        <div
          key={node.label}
          style={{ top: node.top, left: node.left }}
          className="absolute hidden sm:flex items-center gap-1.5 -translate-x-1/2 -translate-y-1/2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <motion.span
              animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                delay: node.delay,
                ease: "easeInOut",
              }}
              style={{ willChange: "transform, opacity" }}
              className="absolute inline-flex h-full w-full rounded-full bg-orange-400/50"
            />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.9)]" />
          </span>
          <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-500">
            {node.label}
          </span>
        </div>
      ))}

      {/* 3D Perspective Grid Horizon */}
      <div
        className="absolute inset-x-0 bottom-0 h-[48%] overflow-hidden"
        style={{
          perspective: "1000px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 40%, #000 15%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 40%, #000 15%, transparent 75%)",
        }}
      >
        <div
          style={{
            transform: "rotateX(60deg) scale(1.7) translateY(10%)",
            transformOrigin: "center top",
            willChange: "transform",
            backgroundImage: `
              linear-gradient(to right, rgba(56, 189, 248, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
          className="h-full w-full"
        />
      </div>

      {/* Vignette Edges */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030206] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030206] via-[#030206]/85 to-transparent" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  2. GLASSMORPHIC TRAVEL OPERATIONS SNAPSHOTS (3 COMPACT CARDS)             */
/* -------------------------------------------------------------------------- */

export function TravelDashboardSnapshots() {
  return (
    <div className="mx-auto max-w-6xl mb-16 grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* (a) Flight / Hajj Booking Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-slate-800/90 bg-[#0b0f1d]/85 p-5 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400 border border-orange-500/30">
              <Plane className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold text-white">
              Flight &amp; Hajj Booking
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Hajj/Tour Tracking Active
          </span>
        </div>
        <div className="flex items-baseline justify-between pt-2 border-t border-slate-800/80 text-xs text-slate-400">
          <span>Active Pilgrims &amp; Travelers</span>
          <span className="font-display text-lg font-extrabold text-white">
            1,420+ Seats
          </span>
        </div>
      </motion.div>

      {/* (b) Visa Status Tracker Visual */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="rounded-2xl border border-slate-800/90 bg-[#0b0f1d]/85 p-5 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-sky-400 border border-blue-500/30">
              <FileCheck2 className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold text-white">
              Passport &amp; Visa Tracker
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-[10px] font-bold text-sky-300">
            Automated Ledger Active
          </span>
        </div>
        <div className="flex items-baseline justify-between pt-2 border-t border-slate-800/80 text-xs text-slate-400">
          <span>Live SMS &amp; Embassy Sync</span>
          <span className="font-display text-lg font-extrabold text-sky-300">
            99.6% Cleared
          </span>
        </div>
      </motion.div>

      {/* (c) Travel Growth / Booking Leads Interface */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.16 }}
        className="rounded-2xl border border-slate-800/90 bg-[#0b0f1d]/85 p-5 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400 border border-violet-500/30">
              <TrendingUp className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold text-white">
              Booking Leads Engine
            </span>
          </div>
          <span className="rounded-full border border-orange-500/30 bg-orange-500/15 px-2.5 py-0.5 text-[10px] font-bold text-orange-300">
            +324% Bookings
          </span>
        </div>
        <div className="flex items-baseline justify-between pt-2 border-t border-slate-800/80 text-xs text-slate-400">
          <span>bKash / Nagad Instant Checkout</span>
          <span className="font-display text-lg font-extrabold text-emerald-400">
            3.2x ROI
          </span>
        </div>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  3. CLEAN, EYE-CATCHING 3-TIER TRAVEL PRICING & OFFERS GRID                */
/* -------------------------------------------------------------------------- */

export interface TravelPricingItem {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface TravelPricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  annualPrice: string;
  monthlyNote: string;
  target: string;
  ctaLabel: string;
  features: TravelPricingItem[];
}

export const TRAVEL_PRICING_TIERS: TravelPricingTier[] = [
  {
    id: "travel-starter",
    name: "Travel Starter",
    popular: false,
    annualPrice: "৳25,000",
    monthlyNote: "or ৳2,500 / month equivalent",
    target: "Independent travel & ticketing agencies",
    ctaLabel: "Transform Agency",
    features: [
      { text: "Dynamic Tour Catalog & Website", included: true, highlight: true },
      { text: "Leads Generation CRM", included: true },
      { text: "Passport & Visa Status Tracker", included: true },
      { text: "1 Cover/mo + Festival & National Day Pack", included: true },
      { text: "15 Graphic Design Support Items", included: true },
      { text: "2 Years Free Maintenance (Saves ৳2k–3k/mo)", included: true },
      { text: "Full Software Ownership after 2 Years", included: true, highlight: true },
      { text: "Promo Tour Video Documentary", included: false },
      { text: "Multi-Branch Sub-Agent Ledger ERP", included: false },
    ],
  },
  {
    id: "travel-growth",
    name: "Travel Growth",
    badge: "Most Popular",
    popular: true,
    annualPrice: "৳45,000",
    monthlyNote: "Recommended for Tour & Hajj Operators",
    target: "Established tour, visa & Hajj/Umrah agencies",
    ctaLabel: "Secure Your License",
    features: [
      { text: "Tour, Flight & Hajj Booking Engine", included: true, highlight: true },
      { text: "Passport & Visa Document Tracker", included: true },
      { text: "bKash / Nagad Payment Gateway Integration", included: true },
      { text: "Agent Ledger & Automated Accounting", included: true },
      { text: "1 Promo Tour Video / Documentary per year", included: true, highlight: true },
      { text: "2 Covers & Story Templates/mo + 50 Graphics", included: true },
      { text: "Facebook Page Branding Setup", included: true },
      { text: "2 Years Free VIP Maintenance & Support", included: true },
      { text: "Full Software Ownership after 2 Years", included: true, highlight: true },
    ],
  },
  {
    id: "travel-premium",
    name: "Travel Premium",
    badge: "Enterprise ERP",
    popular: false,
    annualPrice: "৳80,000",
    monthlyNote: "Complete multi-branch agency ecosystem",
    target: "Large travel networks & IATA conglomerates",
    ctaLabel: "Secure Your License",
    features: [
      { text: "Multi-Branch ERP & Sub-Agent Balance Portal", included: true, highlight: true },
      { text: "Agent / Vendor Ledger & Commission Sync", included: true },
      { text: "API-Ready Custom Bookings & Auto SMS Alerts", included: true },
      { text: "2 Premium Tour Documentaries / Films per year", included: true, highlight: true },
      { text: "Priority 100+ Graphic Design Visual Support", included: true },
      { text: "Social Ads Campaign Setup & Page Growth", included: true },
      { text: "2 Years VIP Developer Support & Zero Maintenance", included: true },
      { text: "Fast-Tracked Full Software Ownership", included: true, highlight: true },
    ],
  },
];

export function TravelPricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-24 overflow-hidden border-y border-slate-800/80"
    >
      {/* Dynamic 3D Cyberpunk Flight Grid Background */}
      <TravelGridBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Clean Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-300 mb-4"
          >
            <Compass className="h-3.5 w-3.5 text-orange-400" />
            <span>Travel Agency Digital Solutions &amp; ERP</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Automate Bookings.{" "}
            <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-orange-400 bg-clip-text text-transparent">
              Own Your Software in 2 Years.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Complete booking engine, visa tracking, agent accounting, and creative media bundled for travel agencies.
          </motion.p>
        </div>

        {/* 3 Compact Glassmorphic Operational Snapshots */}
        <TravelDashboardSnapshots />

        {/* Sleek 2-Column Ownership & Zero Maintenance Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl mb-16 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="flex items-center gap-4 rounded-2xl border border-blue-500/25 bg-[#0b1020]/90 px-5 py-4 backdrop-blur-md">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-sky-400 border border-blue-500/30">
              <KeyRound className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                2-Year Software Ownership Hand-Over
              </div>
              <div className="text-xs text-slate-400">
                Continuous 2-year subscription grants 100% software ownership
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-orange-500/25 bg-[#120d18]/90 px-5 py-4 backdrop-blur-md">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400 border border-orange-500/30">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                2 Years Zero Maintenance Fee
              </div>
              <div className="text-xs text-slate-400">
                Saves ৳2,000–৳3,000 monthly default maintenance charges
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TRAVEL_PRICING_TIERS.map((tier, index) => {
            const isPopular = Boolean(tier.popular);

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                  isPopular
                    ? "border border-orange-500/60 bg-gradient-to-b from-[#171226]/95 via-[#0d1120]/95 to-[#070911]/95 shadow-[0_0_50px_-12px_rgba(249,115,22,0.35)] lg:-translate-y-4"
                    : "border border-slate-800/90 bg-[#0a0d18]/85 hover:border-slate-700 backdrop-blur-xl"
                }`}
              >
                {/* Spotlight Badge */}
                {tier.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg ${
                      isPopular
                        ? "bg-gradient-to-r from-orange-500 via-rose-500 to-violet-600 shadow-orange-500/30"
                        : "border border-slate-700 bg-slate-900 text-slate-300"
                    }`}
                  >
                    {tier.badge}
                  </div>
                )}

                {/* Tier Title & Target */}
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-slate-400">{tier.target}</p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-6 border-b border-slate-800/80">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                      {tier.annualPrice}
                    </span>
                    <span className="text-sm text-slate-400">/ Year</span>
                  </div>
                  <p
                    className={`text-xs mt-2 font-medium ${
                      isPopular ? "text-orange-300" : "text-sky-400"
                    }`}
                  >
                    {tier.monthlyNote}
                  </p>
                </div>

                {/* Specs & Media Checklist */}
                <ul className="flex-1 space-y-3.5 mb-8">
                  {tier.features.map((item) => (
                    <li
                      key={item.text}
                      className={`flex items-start gap-3 text-sm ${
                        item.included
                          ? "text-slate-200"
                          : "text-slate-600 line-through"
                      }`}
                    >
                      {item.included ? (
                        <div
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            item.highlight
                              ? "bg-orange-500/20 text-orange-400"
                              : "bg-blue-500/15 text-sky-400"
                          }`}
                        >
                          <Check className="h-3 w-3" />
                        </div>
                      ) : (
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-slate-600">
                          <Minus className="h-3 w-3" />
                        </div>
                      )}
                      <span
                        className={`leading-snug ${
                          item.included && item.highlight
                            ? "font-semibold text-white"
                            : ""
                        }`}
                      >
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* High-Contrast CTA Action */}
                <Link
                  href={`/contact?service=travel-solutions&package=${encodeURIComponent(
                    `${tier.name} (${tier.annualPrice}/Year)`
                  )}`}
                  className={`group inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold transition-all duration-300 ${
                    isPopular
                      ? "bg-gradient-to-r from-orange-500 via-rose-500 to-violet-600 text-white shadow-lg shadow-orange-500/25 hover:opacity-95"
                      : "bg-white text-slate-950 hover:bg-slate-200"
                  }`}
                >
                  <span>{tier.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
