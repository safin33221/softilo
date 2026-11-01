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
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Clean, Scannable Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-accent-cyan mb-3"
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
            <span className="text-gradient-accent">Own the Software Forever.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-gray-400 text-base sm:text-lg"
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
          <div className="flex items-center gap-4 rounded-2xl border border-blue-500/25 bg-blue-500/[0.06] px-5 py-4 backdrop-blur-md">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/30">
              <KeyRound className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Software Ownership in 2 Years
              </div>
              <div className="text-xs text-gray-400">
                Subscribe for 2 years &amp; get 100% software ownership
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-violet-500/25 bg-violet-500/[0.06] px-5 py-4 backdrop-blur-md">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400 border border-violet-500/30">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                2 Years Free Maintenance
              </div>
              <div className="text-xs text-gray-400">
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
                    ? "border border-blue-500/60 bg-gradient-to-b from-blue-950/40 via-[#0d1222] to-[#0a0c14] shadow-[0_0_50px_-12px_rgba(59,130,246,0.4)] lg:-translate-y-4"
                    : "border border-white/10 bg-white/[0.02] hover:border-white/20 backdrop-blur-xl"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/30">
                    {tier.badge}
                  </div>
                )}

                {/* Tier Header */}
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-gray-400">{tier.target}</p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                      {tier.annualPrice}
                    </span>
                    <span className="text-sm text-gray-400">/ year</span>
                  </div>
                  <p className="text-xs text-accent-cyan mt-2 font-medium">
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
                        <div
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            isSoftwareOwnership
                              ? "bg-accent-cyan/20 text-accent-cyan"
                              : "bg-blue-500/15 text-blue-400"
                          }`}
                        >
                          <Check className="h-3 w-3" />
                        </div>
                        <span
                          className={`text-sm leading-snug ${
                            isSoftwareOwnership
                              ? "font-semibold text-white"
                              : "text-gray-300"
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
                  className={`group inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold transition-all duration-300 ${
                    isPopular
                      ? "bg-white text-black hover:bg-gray-200 shadow-lg shadow-blue-500/20"
                      : "border border-white/15 bg-white/[0.06] text-white hover:bg-white/15"
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
