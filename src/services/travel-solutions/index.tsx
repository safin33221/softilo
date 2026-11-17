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
  FileCheck2,
  TrendingUp,
  Compass,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  1. SOLID BRAND PURPLE GEOMETRIC GRID FOR TRAVEL                           */
/* -------------------------------------------------------------------------- */

const FLIGHT_NODES = [
  { top: "16%", left: "14%", delay: 0 },
  { top: "24%", left: "48%", delay: 1.1 },
  { top: "62%", left: "16%", delay: 0.6 },
  { top: "20%", left: "84%", delay: 1.8 },
  { top: "70%", left: "54%", delay: 1.4 },
  { top: "56%", left: "86%", delay: 0.4 },
];

export function TravelGridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#0b0912]"
    >
      {/* 2D Geometric Grid Mesh */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(127, 11, 237, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(127, 11, 237, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Node-Based Tracking Dots */}
      {FLIGHT_NODES.map((node, index) => (
        <div
          key={index}
          style={{ top: node.top, left: node.left }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <motion.span
            animate={{
              scale: [1, 2.2, 1],
              opacity: [0.25, 0.75, 0.25],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut",
            }}
            style={{ willChange: "transform, opacity" }}
            className="block h-3.5 w-3.5 rounded-full border border-[#a855f7]/45"
          />
          <span className="absolute inset-1 rounded-full bg-[#a855f7]" />
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  2. OPERATIONAL DASHBOARD SNAPSHOTS (SOLID CARDS)                          */
/* -------------------------------------------------------------------------- */

export function TravelDashboardSnapshots() {
  return (
    <div className="mx-auto max-w-6xl mb-16 grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* (a) Flight / Hajj Booking Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-[#262038] bg-[#13111c] p-5"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1c172b] text-[#a855f7] border border-[#32294d]">
              <Plane className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold text-white">
              Flight &amp; Hajj Booking
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#32294d] bg-[#1c172b] px-2.5 py-0.5 text-[10px] font-bold text-[#c084fc]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7] animate-pulse" />
            Hajj/Tour Tracking Active
          </span>
        </div>
        <div className="flex items-baseline justify-between pt-2 border-t border-[#262038] text-xs text-slate-300">
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
        className="rounded-2xl border border-[#262038] bg-[#13111c] p-5"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1c172b] text-[#a855f7] border border-[#32294d]">
              <FileCheck2 className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold text-white">
              Passport &amp; Visa Tracker
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#32294d] bg-[#1c172b] px-2.5 py-0.5 text-[10px] font-bold text-[#c084fc]">
            Automated Ledger Active
          </span>
        </div>
        <div className="flex items-baseline justify-between pt-2 border-t border-[#262038] text-xs text-slate-300">
          <span>Live SMS &amp; Embassy Sync</span>
          <span className="font-display text-lg font-extrabold text-[#a855f7]">
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
        className="rounded-2xl border border-[#262038] bg-[#13111c] p-5"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1c172b] text-[#a855f7] border border-[#32294d]">
              <TrendingUp className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold text-white">
              Booking Leads Engine
            </span>
          </div>
          <span className="rounded-full border border-[#32294d] bg-[#1c172b] px-2.5 py-0.5 text-[10px] font-bold text-[#c084fc]">
            +324% Bookings
          </span>
        </div>
        <div className="flex items-baseline justify-between pt-2 border-t border-[#262038] text-xs text-slate-300">
          <span>bKash / Nagad Instant Checkout</span>
          <span className="font-display text-lg font-extrabold text-white">
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
      className="relative py-24 overflow-hidden border-y border-[#262038] bg-[#0b0912]"
    >
      <TravelGridBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Clean Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#32294d] bg-[#161224] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4"
          >
            <Compass className="h-3.5 w-3.5 text-[#a855f7]" />
            <span>Travel Agency Digital Solutions &amp; ERP</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Automate Bookings.{" "}
            <span className="text-[#a855f7]">
              Own Your Software in 2 Years.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Complete booking engine, visa tracking, agent accounting, and creative media bundled for travel agencies.
          </motion.p>
        </div>

        {/* 3 Compact Operational Snapshots */}
        <TravelDashboardSnapshots />

        {/* Sleek 2-Column Ownership & Zero Maintenance Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl mb-16 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="flex items-center gap-4 rounded-2xl border border-[#32294d] bg-[#13111c] px-5 py-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1c172b] text-[#a855f7] border border-[#32294d]">
              <KeyRound className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                2-Year Software Ownership Hand-Over
              </div>
              <div className="text-xs text-slate-300">
                Continuous 2-year subscription grants 100% software ownership
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[#32294d] bg-[#13111c] px-5 py-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1c172b] text-[#a855f7] border border-[#32294d]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                2 Years Zero Maintenance Fee
              </div>
              <div className="text-xs text-slate-300">
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
                    ? "border-2 border-[#7f0bed] bg-[#191626] lg:-translate-y-4"
                    : "border border-[#262038] bg-[#13111c] hover:border-[#7f0bed]"
                }`}
              >
                {/* Spotlight Badge */}
                {tier.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-white ${
                      isPopular
                        ? "bg-[#7f0bed]"
                        : "border border-[#32294d] bg-[#1c172b] text-[#c084fc]"
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
                  <p className="text-sm text-slate-300">{tier.target}</p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-6 border-b border-[#262038]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                      {tier.annualPrice}
                    </span>
                    <span className="text-sm text-slate-300">/ Year</span>
                  </div>
                  <p className="text-xs text-[#c084fc] mt-2 font-medium">
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
                          ? "text-slate-300"
                          : "text-slate-600 line-through"
                      }`}
                    >
                      {item.included ? (
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1c172b] border border-[#32294d] text-[#a855f7]">
                          <Check className="h-3 w-3" />
                        </div>
                      ) : (
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1c172b] text-slate-600">
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
                      ? "bg-[#7f0bed] text-white hover:bg-[#6a05d5]"
                      : "border border-[#32294d] bg-[#1c172b] text-white hover:border-[#7f0bed] hover:bg-[#7f0bed]"
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
