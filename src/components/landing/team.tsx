"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

const fallbackImages: Record<string, string> = {
  "1": "/images/team/safin.jpg",
  "2": "/images/team/jahedul-alam.png",
  "3": "/images/team/Belal-Hossain.png",
  "4": "/images/team/muntasir-mahmud.png",
  "5": "/images/team/Shawon-Devnath.png",
  "6": "/images/team/siam-patwary-noman.png",
};

interface TeamSectionProps {
  members?: TeamMember[];
}

export function Team({ members = teamData }: TeamSectionProps) {
  return (
    <section
      id="team"
      aria-labelledby="softilo-team-heading"
      className="relative overflow-hidden border-t border-[#262038] bg-[#0b0912] py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* 1. Section Header & Typography */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#32294d] bg-[#161224] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#c084fc]"
          >
            <span className="h-2 w-2 rounded-full bg-[#a855f7]" />
            <span>THE MINDS BEHIND SOFTILO</span>
          </motion.div>

          <motion.h2
            id="softilo-team-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mb-5 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Softilo Leadership, Engineers &amp;{" "}
            <span className="text-[#a855f7]">Digital Visionaries</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Meet the official leadership, software architects, and creative directors building enterprise software, ERP systems, and digital brands at Softilo.
          </motion.p>
        </div>

        {/* 2. Symmetrical 3-Column Executive Grid Layout for 6 Members */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
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
    <motion.article
      itemScope
      itemType="https://schema.org/Person"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#262038] bg-[#13111c] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#7f0bed] hover:bg-[#191626]"
    >
      {/* Hidden Schema.org Organization link for Entity Disambiguation */}
      <div
        itemProp="worksFor"
        itemScope
        itemType="https://schema.org/Organization"
        className="sr-only"
      >
        <span itemProp="name">Softilo</span>
        <link itemProp="url" href="https://softilo.io" />
      </div>

      <div>
        {/* Member Portrait Container */}
        <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#262038] bg-[#0b0912]">
          <Image
            src={imgSrc}
            alt={`${member.name} — ${member.role} at Softilo`}
            title={`${member.name} | ${member.role} at Softilo (softilo.io)`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => {
              if (fallbackImages[member.id]) {
                setImgSrc(fallbackImages[member.id]);
              }
            }}
          />

          {/* Role Badge */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#32294d] bg-[#13111c]/95 px-3 py-1 text-[11px] font-semibold text-[#c084fc]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
              <span itemProp="jobTitle">{member.role}</span>
            </span>
          </div>

          {/* Socials & Portfolio Action Bar */}
          <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
            {hasSocialLinks && (
              <div className="flex items-center gap-1 rounded-full border border-[#32294d] bg-[#13111c]/95 px-2.5 py-1.5 transition-all duration-300">
                {member.socialUrl.linkedin && (
                  <a
                    itemProp="sameAs"
                    href={member.socialUrl.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} — ${member.role} at Softilo on LinkedIn`}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-[#7f0bed] hover:text-white"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                )}

                {member.socialUrl.github && (
                  <a
                    itemProp="sameAs"
                    href={member.socialUrl.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} — ${member.role} at Softilo on GitHub`}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-[#7f0bed] hover:text-white"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </a>
                )}

                {member.socialUrl.twitter && (
                  <a
                    itemProp="sameAs"
                    href={member.socialUrl.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} — ${member.role} at Softilo on X`}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-[#7f0bed] hover:text-white"
                  >
                    <XTwitterIcon className="h-3 w-3" />
                  </a>
                )}
              </div>
            )}

            {member.portfolio ? (
              <a
                itemProp="url"
                href={member.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s Official Portfolio`}
                className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-[#32294d] bg-[#13111c]/95 text-slate-200 transition-all duration-300 hover:border-[#7f0bed] hover:bg-[#7f0bed] hover:text-white"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>

        {/* Member Name */}
        <h3
          itemProp="name"
          className="font-display mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#c084fc]"
        >
          {member.name}
        </h3>

        {/* Bio */}
        <p
          itemProp="description"
          className="text-sm leading-relaxed text-slate-300"
        >
          {member.bio}
        </p>
      </div>
    </motion.article>
  );
}
