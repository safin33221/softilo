"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Minus,
  ShieldCheck,
  KeyRound,
  Wrench,
  Film,
  Palette,
  GraduationCap,
  Building2,
  Rocket,
  ArrowRight,
  Calendar,
  Award,
  CheckCircle2,
  Layers,
} from "lucide-react";

export interface PricingDeliverable {
  text: string;
  included: boolean;
  highlight?: boolean;
  badge?: string;
}

export interface EducationalPricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  annualPrice: string;
  monthlyEquivalent: string;
  target: string;
  tagline: string;
  savingsNote: string;
  ctaLabel: string;
  secondaryCtaLabel: string;
  deliverables: PricingDeliverable[];
}

export const EDUCATIONAL_PRICING_TIERS: EducationalPricingTier[] = [
  {
    id: "starter",
    name: "Starter Package",
    badge: "Essential Launch",
    popular: false,
    annualPrice: "৳25,000",
    monthlyEquivalent: "৳2,500/mo equivalent",
    target: "Independent tutors & small coaching batches.",
    tagline:
      "Everything an independent educator or growing batch needs to launch an automated LMS with year-round visual branding.",
    savingsNote: "Saves ৳24,000+/yr in standard maintenance",
    ctaLabel: "Claim This Package",
    secondaryCtaLabel: "Book Consultation",
    deliverables: [
      {
        text: "Standard Web LMS Portal Setup",
        included: true,
        highlight: true,
      },
      {
        text: "All National Days photo design suite",
        included: true,
      },
      {
        text: "1 Cover Photo per month (12/year)",
        included: true,
      },
      {
        text: "10–15 Graphic design support items",
        included: true,
      },
      {
        text: "2 Years Free Maintenance",
        included: true,
        highlight: true,
        badge: "৳0 Maint. Fee",
      },
      {
        text: "Software Ownership eligibility after 2 years",
        included: true,
        highlight: true,
      },
      {
        text: "Video Documentary / Promotional Ad Film",
        included: false,
      },
      {
        text: "Facebook Page Branding & Performance Ads Setup",
        included: false,
      },
      {
        text: "Custom Multi-Branch ERP & Dedicated Developer",
        included: false,
      },
    ],
  },
  {
    id: "growth",
    name: "Growth Package",
    badge: "Most Popular • Best Value",
    popular: true,
    annualPrice: "৳45,000",
    monthlyEquivalent: "৳3,750/mo equivalent",
    target: "Established coaching centers and training institutes.",
    tagline:
      "Full-scale Student ERP, automated SMS gateway, promotional documentary production, and complete graphic design support.",
    savingsNote: "Saves ৳36,000+/yr in maintenance & media costs",
    ctaLabel: "Claim This Package",
    secondaryCtaLabel: "Book Consultation",
    deliverables: [
      {
        text: "Advanced Student ERP & SMS Notification Gateway",
        included: true,
        highlight: true,
      },
      {
        text: "1 Video Documentary / Promotional Ad Film per year",
        included: true,
        highlight: true,
        badge: "Pro Shoot",
      },
      {
        text: "All National Days & Festival Design Suite",
        included: true,
      },
      {
        text: "2 Cover Photos per month + Banner/Story designs",
        included: true,
      },
      {
        text: "Up to 50 Graphic Design Support items per year",
        included: true,
      },
      {
        text: "Facebook Page Branding & Setup",
        included: true,
      },
      {
        text: "2 Years Free Maintenance & Priority Support",
        included: true,
        highlight: true,
        badge: "Saves ৳3k/mo",
      },
      {
        text: "Full system ownership unlock after 2 years",
        included: true,
        highlight: true,
      },
      {
        text: "Custom Multi-Branch Platform & Dedicated Developer",
        included: false,
      },
    ],
  },
  {
    id: "premium",
    name: "Premium Package",
    badge: "Enterprise Network",
    popular: false,
    annualPrice: "৳75,000",
    monthlyEquivalent: "৳6,250/mo equivalent",
    target: "Large coaching networks & educational institutions.",
    tagline:
      "Bespoke multi-branch institutional architecture coupled with aggressive social media acquisition and VIP engineering.",
    savingsNote: "All-inclusive institutional growth & ERP suite",
    ctaLabel: "Claim This Package",
    secondaryCtaLabel: "Book Consultation",
    deliverables: [
      {
        text: "Custom Multi-Branch ERP & LMS Platform",
        included: true,
        highlight: true,
      },
      {
        text: "2 Video Documentaries per year",
        included: true,
        highlight: true,
        badge: "2x Films",
      },
      {
        text: "Unlimited/Priority Graphic Design Support (Up to 100+ items)",
        included: true,
        highlight: true,
      },
      {
        text: "Full Facebook & Social Media Growth + Performance Ads strategy setup",
        included: true,
      },
      {
        text: "2 Years VIP Free Maintenance & Dedicated Developer Support",
        included: true,
        highlight: true,
        badge: "VIP SLA",
      },
      {
        text: "Fast-track complete platform ownership",
        included: true,
        highlight: true,
      },
      {
        text: "All National Days & Festival Complete Brand Kit",
        included: true,
      },
      {
        text: "Custom Parent, Teacher & Branch Director Portals",
        included: true,
      },
      {
        text: "Priority Data Migration & On-Campus Staff Training",
        included: true,
      },
    ],
  },
];

const VALUE_PILLARS = [
  {
    icon: KeyRound,
    badge: "2-Year Software Ownership Transfer",
    title: "Own Your Platform Outright After 2 Years",
    highlight: "100% License Ownership",
    description:
      "Stop paying endless monthly SaaS rent forever. Maintain a continuous subscription for 2 years and receive full software/system license ownership transferred directly to your institution.",
    metrics: [
      "Full system & database license transfer after 24 months",
      "Zero vendor lock-in or perpetual seat taxes",
      "Long-term institutional asset equity",
    ],
    accentGradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderGlow: "hover:border-blue-500/50",
    iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  },
  {
    icon: Wrench,
    badge: "2 Years Free Maintenance",
    title: "Zero Maintenance Fees for 24 Months",
    highlight: "Save ৳2,000–৳3,000 / Month",
    description:
      "Local software vendors in Bangladesh typically charge ৳2,000 to ৳3,000 every month just for server upkeep and bug fixes. Softilo includes 2 full years of technical maintenance at ৳0 extra cost.",
    metrics: [
      "Saves ৳48,000–৳72,000 over 2 years in hidden upkeep",
      "24/7 server health monitoring, backups & security patches",
      "Instant bug resolution & academic season load scaling",
    ],
    accentGradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    borderGlow: "hover:border-violet-500/50",
    iconColor: "text-violet-400 bg-violet-500/10 border-violet-500/30",
  },
];

const ADDON_HIGHLIGHTS = [
  {
    icon: Film,
    title: "Video Documentaries & Ad Films",
    desc: "Cinematic campus documentaries and admission promo films bundled directly into Growth & Premium tiers.",
  },
  {
    icon: Palette,
    title: "National Days & Festival Suites",
    desc: "Ready-to-post branded graphics for 21st February, 26th March, 16th December, Eid, Puja & admission drives.",
  },
  {
    icon: Layers,
    title: "Monthly Cover & Social Creatives",
    desc: "Consistent monthly Facebook cover refreshes, batch announcement banners, and up to 100+ design items.",
  },
];

export function EducationalPricingSection() {
  const [priceView, setPriceView] = useState<"yearly" | "monthly">("yearly");

  return (
    <section
      id="pricing"
      className="relative py-24 bg-[#0a0a0c] border-y border-slate-800/80 overflow-hidden"
    >
      {/* Ambient Midnight Navy, Electric Blue & Violet Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.14),transparent_70%)]" />
        <div className="absolute top-1/3 right-[-10%] w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(139,92,246,0.12),transparent_70%)]" />
        <div className="absolute bottom-0 left-[-10%] w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(37,99,235,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300 mb-5 backdrop-blur-md"
          >
            <GraduationCap className="h-4 w-4 text-blue-400" />
            <span>Bangladesh EdTech &amp; Institutional Growth Packages</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Software + Branding Packages{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Built for Ownership
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Unlike traditional software agencies that charge endless monthly rent and hefty
            maintenance fees, Softilo combines{" "}
            <span className="text-white font-semibold">
              LMS/ERP technology, creative graphic design, and promotional documentaries
            </span>{" "}
            with a clear 2-year path to 100% software ownership.
          </motion.p>

          {/* Price View Switcher (Annual vs Monthly Equivalent Display) */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-slate-800/80 bg-[#0d1220]/90 p-1.5 backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setPriceView("yearly")}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                priceView === "yearly"
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Annual Package Rate
            </button>
            <button
              type="button"
              onClick={() => setPriceView("monthly")}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                priceView === "monthly"
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Monthly Cost Breakdown</span>
              <span className="rounded-md bg-emerald-500/20 border border-emerald-500/30 px-1.5 py-0.5 text-[10px] font-bold text-emerald-300">
                ৳0 Maint.
              </span>
            </button>
          </div>
        </div>

        {/* Dedicated "Why Softilo is Different" Comparison Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 rounded-3xl border border-slate-800/80 bg-gradient-to-b from-[#0e1424]/95 to-[#0a0d18]/95 p-6 sm:p-10 backdrop-blur-xl shadow-[0_0_60px_-15px_rgba(59,130,246,0.2)]"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-8 mb-8 border-b border-slate-800/80">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-400 mb-2">
                <Award className="h-4 w-4 text-blue-400" />
                <span>Why Softilo is Different</span>
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Two Game-Changing Guarantees for Educational Institutions
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-3.5 py-2 text-xs font-bold text-blue-300">
                <Wrench className="h-3.5 w-3.5 text-blue-400" />
                2 Years Free Maintenance
              </span>
              <span className="text-slate-600 font-bold">+</span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-500/10 px-3.5 py-2 text-xs font-bold text-violet-300">
                <KeyRound className="h-3.5 w-3.5 text-violet-400" />
                2-Year Software Ownership Transfer
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {VALUE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`relative rounded-2xl border border-slate-800/80 bg-[#0b0f1c]/90 p-6 sm:p-8 transition-all duration-300 ${pillar.borderGlow}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.accentGradient} opacity-75`}
                  />
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl border ${pillar.iconColor}`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                          {pillar.badge}
                        </span>
                      </div>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">
                        {pillar.highlight}
                      </span>
                    </div>

                    <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                      {pillar.title}
                    </h4>

                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {pillar.description}
                    </p>

                    <ul className="space-y-2.5 border-t border-slate-800/70 pt-4">
                      {pillar.metrics.map((metric) => (
                        <li
                          key={metric}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium"
                        >
                          <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {EDUCATIONAL_PRICING_TIERS.map((tier, index) => {
            const isPopular = Boolean(tier.popular);

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                  isPopular
                    ? "border-2 border-blue-500/70 bg-gradient-to-b from-[#131b33]/95 via-[#0e1426]/95 to-[#0b0f1c]/95 shadow-[0_0_55px_-10px_rgba(59,130,246,0.45)] lg:-translate-y-3"
                    : "border border-slate-800/80 bg-[#0d111d]/90 hover:border-violet-500/40 hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.25)]"
                } backdrop-blur-xl p-7 sm:p-9`}
              >
                {/* Top Glow Accent Line */}
                <div
                  className={`absolute inset-x-8 top-0 h-px ${
                    isPopular
                      ? "bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                      : "bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"
                  }`}
                />

                {/* Prominent Badge */}
                {isPopular ? (
                  <div className=" -top-4 left-1/2 -translate-x-1/2 absolute whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/40 ring-1 ring-white/20">
                    {tier.badge}
                  </div>
                ) : (
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                      {tier.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-violet-400">
                      2-Yr Ownership Path
                    </span>
                  </div>
                )}

                {isPopular && (
                  <div className="mb-4 mt-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/15 px-3 py-1 text-[11px] font-semibold text-blue-300">
                      <Rocket className="h-3.5 w-3.5 text-blue-400" />
                      Recommended for Coaching &amp; Academies
                    </span>
                  </div>
                )}

                {/* Package Name & Target */}
                <div className="mb-6">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-blue-300/90 mb-2">
                    Target: {tier.target}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {tier.tagline}
                  </p>
                </div>

                {/* Price Block */}
                <div className="mb-6 rounded-2xl border border-slate-800/90 bg-[#080b12]/90 p-5">
                  {priceView === "yearly" ? (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                          {tier.annualPrice}
                        </span>
                        <span className="text-sm font-semibold text-slate-400">
                          / year
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-medium text-slate-300">
                          ({tier.monthlyEquivalent})
                        </span>
                        <span className="rounded-md bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[11px] font-semibold text-emerald-300">
                          2 Yrs Free Maint.
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                          {tier.monthlyEquivalent.replace(" equivalent", "")}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          billed {tier.annualPrice}/yr
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs text-slate-400">
                          Saves ৳2,000–৳3,000/mo maintenance
                        </span>
                        <span className="rounded-md bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 text-[11px] font-semibold text-blue-300">
                          Own in 2 Yrs
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Deliverables Checklist */}
                <div className="mb-8 flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
                    <span>Included Deliverables</span>
                    <span className="text-[11px] text-blue-400 font-semibold">
                      Software + Media
                    </span>
                  </div>

                  <ul className="space-y-3.5">
                    {tier.deliverables.map((item) => (
                      <li
                        key={item.text}
                        className={`flex items-start gap-3 text-sm ${
                          item.included
                            ? "text-slate-200"
                            : "text-slate-600 line-through decoration-slate-700/80"
                        }`}
                      >
                        {item.included ? (
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                              item.highlight
                                ? "border-blue-400/50 bg-blue-500/20 text-blue-300"
                                : "border-slate-700 bg-slate-800/80 text-emerald-400"
                            }`}
                          >
                            <Check className="h-3.5 w-3.5" />
                          </span>
                        ) : (
                          <span
                            aria-label="Not included in this tier"
                            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 text-slate-600"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </span>
                        )}

                        <div className="flex-1 leading-snug">
                          <span
                            className={
                              item.included && item.highlight
                                ? "font-semibold text-white"
                                : ""
                            }
                          >
                            {item.text}
                          </span>
                          {item.badge && (
                            <span className="ml-2 inline-block rounded-md border border-violet-500/30 bg-violet-500/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-violet-300">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* High-Converting Action Buttons */}
                <div className="mt-auto space-y-3 pt-4 border-t border-slate-800/80">
                  <Link
                    href={`/contact?service=educational-solutions&package=${encodeURIComponent(
                      `${tier.name} (${tier.annualPrice}/year)`
                    )}`}
                    className={`group/btn w-full inline-flex items-center justify-center gap-2 rounded-2xl py-4 px-6 text-sm font-bold transition-all duration-300 ${
                      isPopular
                        ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.01]"
                        : "bg-white text-slate-950 hover:bg-slate-200"
                    }`}
                  >
                    <span>{tier.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <Link
                    href={`/contact?service=educational-solutions&package=${encodeURIComponent(
                      `Consultation: ${tier.name}`
                    )}`}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 py-3 px-5 text-xs font-semibold text-slate-300 transition-all hover:border-slate-700 hover:bg-slate-800/80 hover:text-white"
                  >
                    <Calendar className="h-3.5 w-3.5 text-blue-400" />
                    <span>{tier.secondaryCtaLabel}</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bundled Branding & Growth Add-ons Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-slate-800/80 bg-[#0d111d]/80 p-6 sm:p-8 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                All-In-One Institutional Growth Engine
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                Bundled Media, National Days &amp; Admission Branding Included
              </h3>
            </div>
            <Link
              href="/contact?service=educational-solutions&package=Custom%20Institutional%20Demo"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              <span>Request Custom Campus Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADDON_HIGHLIGHTS.map((addon) => {
              const AddonIcon = addon.icon;
              return (
                <div
                  key={addon.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-800/70 bg-[#0a0d16]/80 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-300">
                    <AddonIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {addon.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {addon.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

