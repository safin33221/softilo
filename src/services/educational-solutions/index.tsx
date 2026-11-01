"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  KeyRound,
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  TrendingUp,
  Layers,
  CheckCircle2,
  Calendar,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  1. IMMERSIVE CYBERPUNK GRID & 3D PERSPECTIVE MATRIX BACKGROUND            */
/* -------------------------------------------------------------------------- */

const DATA_NODES = [
  { top: "18%", left: "12%", delay: 0, color: "bg-sky-400", ring: "border-sky-400/40" },
  { top: "28%", left: "44%", delay: 1.4, color: "bg-violet-400", ring: "border-violet-400/40" },
  { top: "64%", left: "18%", delay: 0.8, color: "bg-blue-400", ring: "border-blue-400/40" },
  { top: "22%", left: "82%", delay: 2.1, color: "bg-sky-300", ring: "border-sky-300/40" },
  { top: "72%", left: "52%", delay: 1.7, color: "bg-violet-400", ring: "border-violet-400/40" },
  { top: "58%", left: "88%", delay: 0.5, color: "bg-cyan-400", ring: "border-cyan-400/40" },
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
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#0a0a0c]"
    >
      {/* 1. Primary 2D Geometric Grid Mesh (64px x 64px) with Radial Vignette Mask */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.045) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 38%, #000 35%, transparent 92%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 38%, #000 35%, transparent 92%)",
        }}
      />

      {/* 2. Fine Sub-Grid Micro Mesh (16px x 16px) */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.014) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.014) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, #000 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, #000 20%, transparent 80%)",
        }}
      />

      {/* 3. Intersection Dot Matrix Pattern at 64px Cross-Sections */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(56, 189, 248, 0.26) 1px, transparent 1.5px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, #000 25%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, #000 25%, transparent 85%)",
        }}
      />

      {/* 4. Coordinate '+' Marks at Select Grid Intersections */}
      {CROSSHAIR_COORDS.map((coord, idx) => (
        <div
          key={idx}
          style={{ top: coord.top, left: coord.left }}
          className="absolute hidden md:flex items-center justify-center -translate-x-1/2 -translate-y-1/2 text-sky-400/35 select-none"
        >
          <span className="font-mono text-xs leading-none drop-shadow-[0_0_6px_rgba(56,189,248,0.4)]">
            +
          </span>
        </div>
      ))}

      {/* 5. Sharp Laser Trace Lines Running Along Grid Tracks */}
      <motion.div
        animate={{ x: ["-20%", "120%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform, opacity" }}
        className="absolute top-[192px] left-0 h-px w-72 bg-gradient-to-r from-transparent via-sky-400/75 to-transparent shadow-[0_0_12px_rgba(56,189,248,0.65)]"
      />
      <motion.div
        animate={{ x: ["120%", "-20%"], opacity: [0, 0.9, 0.9, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 2 }}
        style={{ willChange: "transform, opacity" }}
        className="absolute top-[384px] left-0 h-px w-80 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent shadow-[0_0_12px_rgba(139,92,246,0.6)]"
      />
      <motion.div
        animate={{ y: ["-20%", "110%"], opacity: [0, 0.85, 0.85, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
        style={{ willChange: "transform, opacity" }}
        className="absolute top-0 left-[38%] hidden lg:block w-px h-64 bg-gradient-to-b from-transparent via-blue-400/70 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.6)]"
      />

      {/* 6. Ambient Pulsing Data Nodes */}
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
            className={`block h-3.5 w-3.5 rounded-full border ${node.ring}`}
          />
          <span
            className={`absolute inset-1 rounded-full ${node.color} shadow-[0_0_10px_rgba(56,189,248,0.8)]`}
          />
        </div>
      ))}

      {/* 7. 3D Perspective Grid Floor & Matrix (Depth Horizon) */}
      <div
        className="absolute inset-x-0 bottom-0 h-[54%] overflow-hidden"
        style={{
          perspective: "1000px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 35%, #000 15%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 35%, #000 15%, transparent 75%)",
        }}
      >
        <div
          style={{
            transform: "rotateX(60deg) scale(1.75) translateY(8%)",
            transformOrigin: "center top",
            willChange: "transform",
            backgroundImage: `
              linear-gradient(to right, rgba(56, 189, 248, 0.14) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
          className="h-full w-full"
        />
      </div>

      {/* 8. Deep Vignette Edge & Floor Fade into #0a0a0c */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0a0c] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/85 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0a0a0c] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0a0a0c] to-transparent" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  2. RIGHT-SIDE FROSTED GLASS DASHBOARD & LAYERED SUB-CARDS                 */
/* -------------------------------------------------------------------------- */

export function EducationalHeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none pt-4 pb-6">
      {/* Targeted Natural Backlight Directly Under Interface Card */}
      <div className="pointer-events-none absolute inset-x-10 top-8 bottom-8 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-violet-600/20 blur-2xl" />

      {/* Floating Sub-Card 1 (Top-Left): Status Bar "Status: System Deployed" */}
      <motion.div
        initial={{ opacity: 0, y: -14, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        style={{ willChange: "transform" }}
        className="relative z-20 mb-4 sm:mb-0 sm:absolute sm:-top-5 sm:-left-6 flex items-center gap-3 rounded-2xl border border-sky-400/35 bg-[#0c1222]/90 px-4 py-2.5 backdrop-blur-xl shadow-[0_12px_35px_-8px_rgba(14,165,233,0.35)]"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        <div className="text-left">
          <div className="text-[11px] font-mono uppercase tracking-wider text-sky-300 font-bold">
            Status: System Deployed
          </div>
          <div className="text-[10px] text-slate-400">
            LMS + ERP Cluster • 99.98% Uptime
          </div>
        </div>
      </motion.div>

      {/* Main Realistic Photo & Frosted-Glass Showcase Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.15 }}
        style={{ willChange: "transform" }}
        className="group relative z-10 overflow-hidden rounded-3xl border border-slate-800/90 bg-[#0b101e] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)]"
      >
        {/* Sharp Top Laser Border Highlight */}
        <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-sky-400/80 to-violet-500/80" />

        {/* Realistic Classroom / Engineering Collaboration Image */}
        <div className="relative h-[380px] sm:h-[430px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=85&w=1400&auto=format&fit=crop"
            alt="Softilo Engineering and Educational Platform Team"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Subtle Dark Gradient Overlay for High-Contrast Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-[#080b14]/45 to-transparent" />

          {/* Bottom Frosted Glass Trust Card */}
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="rounded-2xl border border-white/10 bg-[#0a0f1d]/85 p-4 backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-200 font-semibold mb-1.5">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>2 Years Free Maintenance</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-sky-300">
                  <KeyRound className="h-3.5 w-3.5 text-sky-400" />
                  <span>Software Ownership in 2 Yrs</span>
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Built &amp; supported directly by Softilo&apos;s in-house engineering team.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Sub-Card 2 (Bottom-Right): "Growth +247%" Metrics Badge */}
      <motion.div
        initial={{ opacity: 0, y: 16, x: 10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        style={{ willChange: "transform" }}
        className="relative z-20 mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-5 flex items-center gap-3.5 rounded-2xl border border-violet-500/40 bg-[#0d1224]/95 px-4 py-3 backdrop-blur-xl shadow-[0_15px_40px_-10px_rgba(139,92,246,0.45)]"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/30 to-violet-600/30 border border-violet-400/40 text-sky-300">
          <TrendingUp className="h-5 w-5" />
        </div>
        <div className="text-left">
          <div className="text-sm font-display font-extrabold text-white">
            Growth <span className="text-emerald-400">+247%</span>
          </div>
          <div className="text-[11px] text-slate-400">
            Avg. Student Enrollment Surge
          </div>
        </div>
      </motion.div>

      {/* Floating Sub-Card 3 (Bottom-Left): Client Count Pill */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        style={{ willChange: "transform" }}
        className="hidden sm:flex absolute -bottom-4 left-6 z-20 items-center gap-2.5 rounded-xl border border-slate-700/80 bg-[#0b101d]/95 px-3.5 py-2 backdrop-blur-xl shadow-lg"
      >
        <Layers className="h-3.5 w-3.5 text-sky-400" />
        <span className="text-[11px] font-semibold text-slate-200">
          25+ Academies &amp; Coaching Networks Powered
        </span>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  3. EDUCATIONAL SOLUTIONS DEDICATED HERO SECTION                           */
/* -------------------------------------------------------------------------- */

export function EducationalHeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-24 border-b border-slate-800/80">
      {/* Cyberpunk Geometric Grid & 3D Perspective Floor */}
      <CyberGridBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left-Side Alignment: Context Pill, Stylized Headline, Copy & Dual CTAs */}
          <div className="lg:col-span-7 text-left">
            {/* Top Context Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-sky-500/30 bg-[#0c1326]/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-300 mb-6 backdrop-blur-md shadow-[0_0_25px_-5px_rgba(56,189,248,0.3)]"
            >
              <GraduationCap className="h-3.5 w-3.5 text-sky-400" />
              <span>Educational Solutions</span>
              <span className="h-1 w-1 rounded-full bg-violet-400" />
              <span className="text-violet-300">EdTech OS &amp; Growth Suite</span>
            </motion.div>

            {/* Brand Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]"
            >
              Building Brands That{" "}
              <span className="bg-gradient-to-r from-white via-sky-300 to-violet-400 bg-clip-text text-transparent">
                Dominate Digitally
              </span>
            </motion.h1>

            {/* Smooth Body Copy */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl"
            >
              End-to-end digital infrastructure for coaching centers, academies, and
              educators. Launch your custom LMS &amp; Student ERP with bundled video
              documentaries, year-round graphic design,{" "}
              <span className="text-white font-semibold">
                2 years free maintenance
              </span>
              , and{" "}
              <span className="text-sky-300 font-semibold">
                full software ownership after 2 years
              </span>
              .
            </motion.p>

            {/* High-Conversion CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact?service=educational-solutions"
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-4 text-sm sm:text-base font-bold text-white shadow-[0_0_35px_-5px_rgba(59,130,246,0.55)] transition-all duration-300 hover:shadow-[0_0_45px_-5px_rgba(139,92,246,0.75)] hover:scale-[1.02] active:scale-[0.99]"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Free Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-[#0d1220]/80 px-7 py-4 text-sm sm:text-base font-semibold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/50 hover:bg-[#131b30] hover:text-white"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-300" />
              </Link>
            </motion.div>
          </div>

          {/* Right-Side Content: Frosted-Glass Feature Card & Overlapping Sub-Cards */}
          <div className="lg:col-span-5">
            <EducationalHeroShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  4. CLEAN, LIGHTWEIGHT PRICING & PACKAGES SECTION                          */
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
    <section id="pricing" className="relative py-24 overflow-hidden">
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
