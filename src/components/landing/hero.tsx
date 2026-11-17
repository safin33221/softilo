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
    name: "Belal Hossain",
    role: "Chief Creative Officer",
    image: "/images/team/Belal-Hossain.png",
  },
  {
    name: "Muntasir Mahmud",
    role: "Full Stack Developer",
    image: "/images/team/muntasir-mahmud.png",
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-[#0b0912] pt-28 pb-20">
      {/* Structured Grid Mesh Background in Solid Brand Purple */}
      <CyberGridBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left-Side Alignment */}
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
              className="group relative mb-7 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-[#32294d] bg-[#13111c] px-4 py-1.5 text-xs font-semibold text-slate-200"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a855f7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a855f7]" />
              </span>
              <span className="tracking-wide text-slate-200">
                Trusted Software, EdTech &amp; Growth Partner for 25+ Brands
              </span>
            </motion.div>

            {/* Brand Headline — Solid Logo Purple Highlight, Zero Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14 }}
              className="font-display text-4xl sm:text-6xl lg:text-[4.15rem] font-extrabold leading-[1.06] tracking-tight text-white mb-6"
            >
              Building Brands That{" "}
              <span className="relative inline-block text-[#a855f7]">
                Dominate Digitally
                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-[#7f0bed]" />
              </span>
            </motion.h1>

            {/* Body Copy */}
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

            {/* Dual High-Conversion CTAs — Solid Brand Purple */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-[#7f0bed] px-8 py-4 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:bg-[#6a05d5] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#262038] bg-[#13111c] px-7 py-4 text-sm sm:text-base font-semibold text-slate-200 transition-all duration-300 hover:border-[#7f0bed] hover:bg-[#191626] hover:text-white"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#a855f7]" />
              </Link>
            </motion.div>

            {/* Verified Leadership & Client Rating Bar */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="flex flex-wrap items-center gap-5 rounded-2xl border border-[#262038] bg-[#13111c] px-5 py-3.5"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5 overflow-hidden">
                  {teamAvatars.map((member) => (
                    <div
                      key={member.name}
                      className="relative h-9 w-9 rounded-full border-2 border-[#0b0912] overflow-hidden ring-1 ring-[#32294d]"
                      title={`${member.name} — ${member.role} at Softilo`}
                    >
                      <Image
                        src={member.image}
                        alt={`${member.name} — ${member.role} at Softilo`}
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
                        className="h-3.5 w-3.5 fill-[#a855f7] text-[#a855f7]"
                      />
                    ))}
                    <span className="text-xs font-bold text-white ml-1">4.9/5</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-medium">
                    Direct Senior Engineering Team
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-7 w-px bg-[#262038]" />

              <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                <ShieldCheck className="h-4 w-4 text-[#a855f7] shrink-0" />
                <span>100% On-Time Project Delivery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right-Side Content: Realistic High-Trust Agency & Engineering Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Floating Top-Left Badge */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 }}
                className="absolute -top-4 left-4 sm:-left-4 z-20 flex items-center gap-2.5 rounded-2xl border border-[#32294d] bg-[#13111c] px-4 py-2.5 shadow-xl"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a855f7] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#a855f7]" />
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
                className="group relative z-10 overflow-hidden rounded-3xl border border-[#262038] bg-[#13111c] shadow-2xl"
              >
                {/* Top Solid Purple Accent Line */}
                <div className=" inset-x-0 top-0 z-20 h-1 bg-[#7f0bed]" />

                <div className="relative h-[380px] sm:h-[430px] w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=85&w=1400&auto=format&fit=crop"
                    alt="Softilo Senior Engineering and Product Strategy Team Collaborating"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Bottom-Inside Solid Card Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="rounded-2xl border border-[#32294d] bg-[#13111c]/95 p-4">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c084fc]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#a855f7]" />
                          <span>Dedicated In-House Engineers &amp; Designers</span>
                        </span>
                        <span className="rounded-md bg-[#1c172b] border border-[#32294d] px-2 py-0.5 text-[10px] font-bold text-[#c084fc]">
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

              {/* Floating Bottom-Right Badge */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45 }}
                className="absolute -bottom-5 right-4 sm:-right-4 z-20 flex items-center gap-3 rounded-2xl border border-[#7f0bed] bg-[#13111c] px-4 py-3 shadow-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1c172b] border border-[#32294d] text-[#a855f7]">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-display font-extrabold text-white">
                    50+ <span className="text-[#a855f7]">Live Systems</span>
                  </div>
                  <div className="text-[11px] text-slate-300">
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
