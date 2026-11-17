"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  KeyRound,
  ArrowRight,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  1. SOLID BRAND PURPLE GEOMETRIC GRID & 3D PERSPECTIVE BACKGROUND          */
/* -------------------------------------------------------------------------- */

const DATA_NODES = [
  { top: "18%", left: "12%", delay: 0 },
  { top: "28%", left: "44%", delay: 1.4 },
  { top: "64%", left: "18%", delay: 0.8 },
  { top: "22%", left: "82%", delay: 2.1 },
  { top: "72%", left: "52%", delay: 1.7 },
  { top: "58%", left: "88%", delay: 0.5 },
];

const CROSSHAIR_COORDS = [
  { top: "128px", left: "12%" },
  { top: "128px", left: "50%" },
  { top: "128px", left: "88%" },
  { top: "384px", left: "24%" },
  { top: "384px", left: "76%" },
];

export function CyberGridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#0b0912]"
    >
      {/* 1. Primary 2D Geometric Grid Mesh (64px x 64px) in Brand Purple */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(127, 11, 237, 0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(127, 11, 237, 0.09) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* 2. Fine Sub-Grid Micro Mesh (16px x 16px) */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(168, 85, 247, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px",
        }}
      />

      {/* 3. Coordinate '+' Marks at Select Grid Intersections */}
      {CROSSHAIR_COORDS.map((coord, idx) => (
        <div
          key={idx}
          style={{ top: coord.top, left: coord.left }}
          className="absolute hidden md:flex items-center justify-center -translate-x-1/2 -translate-y-1/2 text-[#a855f7]/45 select-none"
        >
          <span className="font-mono text-xs leading-none">+</span>
        </div>
      ))}

      {/* 4. Ambient Pulsing Data Nodes in Solid Logo Purple */}
      {DATA_NODES.map((node, index) => (
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
              duration: 3.5,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut",
            }}
            style={{ willChange: "transform, opacity" }}
            className="block h-3.5 w-3.5 rounded-full border border-[#a855f7]/50"
          />
          <span className="absolute inset-1 rounded-full bg-[#a855f7]" />
        </div>
      ))}

      {/* 5. 3D Perspective Grid Floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-[48%] overflow-hidden opacity-45"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          style={{
            transform: "rotateX(60deg) scale(1.75) translateY(8%)",
            transformOrigin: "center top",
            willChange: "transform",
            backgroundImage: `
              linear-gradient(to right, rgba(127, 11, 237, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(127, 11, 237, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  2. CLEAN, LIGHTWEIGHT PRICING & PACKAGES SECTION (SOLID BRAND PURPLE)     */
/* -------------------------------------------------------------------------- */

export interface EducationalPricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  annualPrice: string;
  monthlyNote: string;
  target: string;
  features: string[];
}

export const EDUCATIONAL_PRICING_TIERS: EducationalPricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    popular: false,
    annualPrice: "৳25,000",
    monthlyNote: "or ৳2,500 / month",
    target: "Independent tutors & small batches",
    features: [
      "Standard Web LMS Portal",
      "All National Days Design Suite",
      "1 Cover Photo / month (12/yr)",
      "10–15 Graphic Design Items",
      "2 Years Free Maintenance",
      "Full Software Ownership after 2 Years",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Most Popular",
    popular: true,
    annualPrice: "৳45,000",
    monthlyNote: "Best value for growing institutes",
    target: "Coaching centers & training institutes",
    features: [
      "Advanced Student ERP & SMS Gateway",
      "1 Promotional Video Documentary / yr",
      "All National Days & Festival Designs",
      "2 Cover Photos / mo + Story Banners",
      "Up to 50 Graphic Design Items / yr",
      "Facebook Page Branding & Setup",
      "2 Years Free Maintenance & Priority Support",
      "Full Software Ownership after 2 Years",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    popular: false,
    annualPrice: "৳75,000",
    monthlyNote: "Complete institutional suite",
    target: "Large coaching networks & academies",
    features: [
      "Custom Multi-Branch ERP & LMS",
      "2 Video Documentaries / yr",
      "Unlimited / Priority Graphic Design (100+)",
      "Facebook Growth & Ads Strategy Setup",
      "2 Years VIP Free Maintenance",
      "Dedicated Developer Support",
      "Full Software Ownership after 2 Years",
    ],
  },
];

export function EducationalPricingSection() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden bg-[#0b0912]">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Clean, Scannable Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border border-[#32294d] bg-[#161224] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4"
          >
            Pricing &amp; Packages
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Invest for 2 Years.{" "}
            <span className="text-[#a855f7]">Own the Software Forever.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            All-in-one software, branding, and media packages tailored for educators in Bangladesh.
          </motion.p>
        </div>

        {/* Sleek 2-Column Highlight Bar ("Why Softilo is Different") */}
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
                Software Ownership in 2 Years
              </div>
              <div className="text-xs text-slate-300">
                Subscribe for 2 years &amp; get 100% software ownership
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[#32294d] bg-[#13111c] px-5 py-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1c172b] text-[#a855f7] border border-[#32294d]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                2 Years Free Maintenance
              </div>
              <div className="text-xs text-slate-300">
                Saves ৳2,000–৳3,000/month in standard upkeep fees
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Clean Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {EDUCATIONAL_PRICING_TIERS.map((tier, index) => {
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
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#7f0bed] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {tier.badge}
                  </div>
                )}

                {/* Tier Header */}
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
                    <span className="text-sm text-slate-300">/ year</span>
                  </div>
                  <p className="text-xs text-[#c084fc] mt-2 font-medium">
                    {tier.monthlyNote}
                  </p>
                </div>

                {/* Short, Easy-to-Read Feature List */}
                <ul className="flex-1 space-y-3.5 mb-8">
                  {tier.features.map((feature) => {
                    const isSoftwareOwnership = feature
                      .toLowerCase()
                      .includes("software ownership");
                    return (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1c172b] border border-[#32294d] text-[#a855f7]">
                          <Check className="h-3 w-3" />
                        </div>
                        <span
                          className={`text-sm leading-snug ${
                            isSoftwareOwnership
                              ? "font-semibold text-white"
                              : "text-slate-300"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* Single Clean CTA Button */}
                <Link
                  href={`/contact?service=educational-solutions&package=${encodeURIComponent(
                    `${tier.name} Package (${tier.annualPrice}/year)`
                  )}`}
                  className={`group inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold transition-all duration-300 ${
                    isPopular
                      ? "bg-[#7f0bed] text-white hover:bg-[#6a05d5]"
                      : "border border-[#32294d] bg-[#1c172b] text-white hover:border-[#7f0bed] hover:bg-[#7f0bed]"
                  }`}
                >
                  <span>Claim {tier.name}</span>
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
