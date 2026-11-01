"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { CyberGridBackground } from "@/services/educational-solutions";

const teamAvatars = [
  {
    name: "Safayet Hossan Safin",
    role: "Founder & CEO",
    image: "/images/team/safin.jpg",
  },
  {
    name: "Jahedul Alam",
    role: "Chief Operating Officer",
    image: "/images/team/jahedul-alam.png",
  },
  {
    name: "Muntasir Mahmud",
    role: "Full Stack Developer",
    image: "/images/team/muntasir-mahmud.png",
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-[#0a0a0c] pt-28 pb-20">
      {/* Cyberpunk Geometric Grid Mesh, 3D Perspective Floor & Laser Nodes */}
      <CyberGridBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left-Side Alignment: Context Pill, Stylized Headline, Copy & Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Trust Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="group relative mb-7 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-sky-500/30 bg-[#0c1326]/90 px-4 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-xl shadow-[0_0_25px_-5px_rgba(56,189,248,0.28)]"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="tracking-wide text-slate-200">
                Trusted Software, EdTech &amp; Growth Partner for 25+ Brands
              </span>
            </motion.div>

            {/* Brand Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14 }}
              className="font-display text-4xl sm:text-6xl lg:text-[4.15rem] font-extrabold leading-[1.06] tracking-tight text-white mb-6"
            >
              Building Brands That{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-sky-300 to-violet-400 bg-clip-text text-transparent">
                  Dominate Digitally
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-sky-400/0 via-sky-400/70 to-violet-500/0" />
              </span>
            </motion.h1>

            {/* Smooth Body Copy */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-300 font-normal mb-9"
            >
              We engineer custom software systems, institutional LMS/ERP platforms,
              and high-converting brand ecosystems designed to scale your business
              with complete reliability.
            </motion.p>

            {/* Dual High-Conversion CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-4 text-sm sm:text-base font-bold text-white shadow-[0_0_35px_-5px_rgba(59,130,246,0.55)] transition-all duration-300 hover:shadow-[0_0_45px_-5px_rgba(139,92,246,0.75)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2.5 rounded-full border border-slate-700/80 bg-[#0d1220]/80 px-7 py-4 text-sm sm:text-base font-semibold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/50 hover:bg-[#131b30] hover:text-white"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-300" />
              </Link>
            </motion.div>

            {/* Verified Leadership & Client Rating Bar */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="flex flex-wrap items-center gap-5 rounded-2xl border border-slate-800/80 bg-[#0b0f1c]/80 px-5 py-3.5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5 overflow-hidden">
                  {teamAvatars.map((member) => (
                    <div
                      key={member.name}
                      className="relative h-9 w-9 rounded-full border-2 border-[#0a0a0c] overflow-hidden ring-1 ring-slate-700"
                      title={`${member.name} — ${member.role}`}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-xs font-bold text-white ml-1">4.9/5</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">
                    Direct Senior Engineering Team
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-7 w-px bg-slate-800" />

              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% On-Time Project Delivery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right-Side Content: Realistic High-Trust Agency & Engineering Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Soft Natural Backlight Behind Photo Card */}
              <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-indigo-500/10 to-violet-600/20 blur-2xl" />

              {/* Floating Top-Left Badge: Verified Live Status */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 }}
                className="absolute -top-4 left-4 sm:-left-4 z-20 flex items-center gap-2.5 rounded-2xl border border-slate-700/80 bg-[#0b101e]/95 px-4 py-2.5 backdrop-blur-xl shadow-xl"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-semibold text-white">
                  Verified Engineering Studio
                </span>
              </motion.div>

              {/* Main Realistic Photo Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="group relative z-10 overflow-hidden rounded-3xl border border-slate-800/90 bg-[#0b101e] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)]"
              >
                {/* Top Laser Edge Accent */}
                <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-sky-400/80 to-violet-500/80" />

                {/* Realistic Software Engineering Team / Product Collaboration Image */}
                <div className="relative h-[380px] sm:h-[430px] w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=85&w=1400&auto=format&fit=crop"
                    alt="Softilo Senior Engineering and Product Strategy Team Collaborating"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Dark Vignette Gradient for High-Contrast Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-[#080b14]/45 to-transparent" />

                  {/* Bottom-Inside Overlay: Real Team & Client Trust Proof */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="rounded-2xl border border-white/10 bg-[#0a0f1d]/85 p-4 backdrop-blur-xl">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                          <span>Dedicated In-House Engineers &amp; Designers</span>
                        </span>
                        <span className="rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                          99.8% SLA
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        From architecture planning to post-launch maintenance—built by real specialists in Bangladesh.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Bottom-Right Badge: Proven Client Results */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45 }}
                className="absolute -bottom-5 right-4 sm:-right-4 z-20 flex items-center gap-3 rounded-2xl border border-violet-500/40 bg-[#0d1224]/95 px-4 py-3 backdrop-blur-xl shadow-[0_15px_40px_-10px_rgba(139,92,246,0.45)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/30 to-violet-600/30 border border-violet-400/40 text-sky-300">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-display font-extrabold text-white">
                    50+ <span className="text-emerald-400">Live Systems</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Delivered with Full Ownership
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
