"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { teamData, TeamMember } from "@/data/team.data";

function Linkedin({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className || "h-4 w-4"}
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    </svg>
  );
}

function Github({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className || "h-4 w-4"}
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className || "h-3.5 w-3.5"}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Fallback high-res professional portraits if local /images/team/*.jpg is pending upload
const fallbackImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop", // Safin (real photo: /images/team/safin.jpg)
  "2": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop", // Tanvir
  "3": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop", // Ahsan
  "4": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", // Nusrat
};

interface TeamSectionProps {
  members?: TeamMember[];
}

export function Team({ members = teamData }: TeamSectionProps) {
  return (
    <section id="team" className="relative py-28 sm:py-36 overflow-hidden bg-[#020617]">
      {/* Background Ambient Lighting (Deep Navy with Electric Blue & Violet Mesh) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Core Violet & Blue Radial Aurora */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12),rgba(59,130,246,0.06)_45%,transparent_70%)] blur-[140px]" />
        
        {/* Electric Cyan Secondary Ambient Flare */}
        <div className="absolute -bottom-24 right-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.05] blur-[140px]" />
        
        {/* Deep Indigo Subtle Left Accent */}
        <div className="absolute top-1/2 -left-20 h-[380px] w-[380px] rounded-full bg-indigo-600/[0.05] blur-[120px]" />

        {/* Subtle Tech Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* 1. Section Header & Typography */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          {/* Glowing Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-300 mb-6 backdrop-blur-md shadow-[0_0_24px_rgba(168,85,247,0.18)]"
          >
                  <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            <span>THE MINDS BEHIND SOFTILO</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12]"
          >
            Engineers, Creators &amp;{" "}
            <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Digital Visionaries
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed font-normal"
          >
            The multidisciplinary architects, engineers, and strategists engineering elite digital products and brand acceleration at Softilo.
          </motion.p>
        </div>

        {/* 2. Bento-Style Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {members.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const hasSocialLinks = Boolean(
    member.socialUrl.linkedin || member.socialUrl.github || member.socialUrl.twitter
  );
  const [imgSrc, setImgSrc] = useState<string>(
    member.image || fallbackImages[member.id] || fallbackImages["1"]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-md p-4 sm:p-5 transition-all duration-500 hover:border-violet-500/50 hover:bg-slate-900/75 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(168,85,247,0.18)]"
    >
      {/* Top Ambient Card Glow on Hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div>
        {/* Member Portrait Container with Fixed 4/5 Aspect Ratio & object-top */}
        <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-950/80 border border-white/5">
          <Image
            src={imgSrc}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => {
              if (fallbackImages[member.id]) {
                setImgSrc(fallbackImages[member.id]);
              }
            }}
          />

          {/* Dark Gradient Overlay for Contrast & Smooth Bottom Blend */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Top Subtle Vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-transparent" />

          {/* Floating Role Badge */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/25 bg-slate-950/75 px-3 py-1 text-[11px] font-semibold text-violet-300 backdrop-blur-md shadow-lg shadow-black/50">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span>{member.role}</span>
            </span>
          </div>

          {/* Floating Glassmorphic Socials Pill (Slides Up on Hover) */}
          <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
            {hasSocialLinks && (
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/85 px-2.5 py-1.5 backdrop-blur-xl shadow-xl transition-all duration-300 ease-out sm:translate-y-3 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              {member.socialUrl.linkedin && (
                <a
                  href={member.socialUrl.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn Profile`}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition-all duration-200 hover:bg-violet-500/25 hover:text-violet-300 hover:scale-110"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              )}

              {member.socialUrl.github && (
                <a
                  href={member.socialUrl.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s GitHub Profile`}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition-all duration-200 hover:bg-cyan-500/25 hover:text-cyan-300 hover:scale-110"
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
              )}

              {member.socialUrl.twitter && (
                <a
                  href={member.socialUrl.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s X (Twitter) Profile`}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition-all duration-200 hover:bg-blue-500/25 hover:text-blue-300 hover:scale-110"
                >
                  <XTwitterIcon className="h-3 w-3" />
                </a>
              )}
            </div>
            )}

            {/* Micro-interaction Corner Accent Indicator — links to portfolio if available */}
            {member.portfolio ? (
              <a
                href={member.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s Portfolio`}
                className="ml-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-slate-400 backdrop-blur-md shadow-md transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/20 group-hover:text-violet-300 group-hover:rotate-45"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : (
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-slate-400 backdrop-blur-md shadow-md transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/20 group-hover:text-violet-300 group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            )}
          </div>
        </div>

        {/* Member Name */}
        <h3 className="font-display text-lg sm:text-xl font-bold text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 mb-2">
          {member.name}
        </h3>

        {/* Bio */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-2">
          {member.bio}
        </p>
      </div>

      {/* Bottom Glowing Border Accent */}
      <div className="pointer-events-none absolute bottom-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
