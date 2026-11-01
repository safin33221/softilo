"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Star, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const clientAvatars = [
  {
    name: "Elena Rostova",
    role: "VP of Product, Lumina",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop",
  },
  {
    name: "Marcus Vance",
    role: "Managing Director, Vertex",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop",
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Aura Culinary",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&auto=format&fit=crop",
  },
  {
    name: "David Chen",
    role: "CTO, Horizon Tech",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop",
  },
];

const featuredPartners = [
  { name: "Lumina Tech", tag: "Enterprise AI" },
  { name: "Vertex Capital", tag: "Private Equity" },
  { name: "Aura Dining", tag: "Luxury Hospitality" },
  { name: "Apex Cloud", tag: "Cloud Infrastructure" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Ambient Glow Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Core Electric Blue Radial Glow */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/3 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/15 blur-[140px]"
        />

        {/* Violet Accent Glow */}
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-1/4 top-1/4 h-[450px] w-[450px] rounded-full bg-accent-purple/15 blur-[130px]"
        />

        {/* Cyan Accent Glow */}
        <div className="absolute left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent-cyan/10 blur-[130px]" />

        {/* Subtle Geometric Dot Grid / Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* 1. Top Trust Pill / Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold text-gray-200 backdrop-blur-xl shadow-lg shadow-blue-500/5 transition-all duration-300 hover:border-accent-cyan/40 hover:bg-white/[0.06]"
          >
            {/* Subtle Inner Glow */}
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>

            <span className="flex items-center gap-1.5 tracking-wide text-gray-300 group-hover:text-white transition-colors">
              <span className="text-amber-400"></span>
              <span>Trusted by 25+ Global Brands &amp; Startups Worldwide</span>
            </span>
          </motion.div>

          {/* 2. Refined Typography & Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-6"
          >
            Building Brands That{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Dominate Digitally
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-blue-400/0 via-cyan-400/50 to-violet-400/0" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 font-normal mb-10"
          >
            We engineer bespoke software architectures, autonomous AI pipelines,
            and hypnotic digital identities designed to outpace the competition and drive radical enterprise growth.
          </motion.p>

          {/* 3. Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-14"
          >
            {/* Primary Button */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-accent-cyan px-8 py-4 text-sm sm:text-base font-semibold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm sm:text-base font-semibold text-gray-200 backdrop-blur-xl transition-all duration-300 hover:border-white/35 hover:bg-white/[0.08] hover:text-white hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="h-4 w-4 text-gray-400 transition-colors group-hover:text-white" />
            </Link>
          </motion.div>

          {/* 4. Instant Social Proof Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Client Avatars & Star Rating */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3 overflow-hidden p-1">
                  {clientAvatars.map((client) => (
                    <div
                      key={client.name}
                      className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-full border-2 border-background overflow-hidden ring-1 ring-white/20"
                      title={`${client.name} — ${client.role}`}
                    >
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-xs font-bold text-white ml-1">4.9/5</span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">
                    from 50+ enterprise reviews
                  </p>
                </div>
              </div>

              {/* Vertical divider on desktop */}
              <div className="hidden md:block h-10 w-px bg-white/10" />

              {/* Client Brand Logos / Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                {featuredPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center gap-1.5 transition-opacity hover:opacity-100 opacity-70"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-blue/80" />
                    <span className="font-display text-xs sm:text-sm font-bold tracking-tight text-gray-200">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}