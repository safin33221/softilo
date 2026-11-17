"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  ExternalLink,
  X,
  TrendingUp,
  SlidersHorizontal,
  Building,
  Calendar,
  Tag,
} from "lucide-react";
import { ProjectItem } from "@/data/data";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

interface PortfolioViewProps {
  projects: ProjectItem[];
}

const CATEGORIES = ["All", "UI/UX", "Software", "Marketing"] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

export function PortfolioView({ projects }: PortfolioViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <div className="relative min-h-screen bg-[#0b0912] text-white overflow-x-clip selection:bg-[#7f0bed]/40 selection:text-white">
      <Navbar />

      <main className="relative z-10 pt-32 pb-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#32294d] bg-[#161224] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#c084fc] mb-6"
          >
            <Award className="h-3.5 w-3.5 text-[#a855f7]" />
            <span>Case Studies &amp; Client Impact</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Selected <span className="text-[#a855f7]">Masterpieces</span> &amp;{" "}
            <span className="text-[#c084fc]">Transformations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base sm:text-xl text-slate-300 leading-relaxed mb-10"
          >
            Explore how Softilo engineers hyper-scalable software, breathtaking user journeys,
            and algorithmic marketing engines for forward-thinking enterprises worldwide.
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-3xl border border-[#262038] bg-[#13111c] mb-12"
          >
            <div className="text-center p-3">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">$50M+</div>
              <div className="text-xs text-slate-300 mt-0.5">Client Value Created</div>
            </div>
            <div className="text-center p-3 border-l border-[#262038]">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#a855f7]">99.8%</div>
              <div className="text-xs text-slate-300 mt-0.5">On-Time Sprint Delivery</div>
            </div>
            <div className="text-center p-3 border-l border-[#262038]">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">4.9/5</div>
              <div className="text-xs text-slate-300 mt-0.5">Client NPS Score</div>
            </div>
            <div className="text-center p-3 border-l border-[#262038]">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#c084fc]">100%</div>
              <div className="text-xs text-slate-300 mt-0.5">Codebase Ownership</div>
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1.5">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Filter:</span>
            </span>
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#7f0bed] text-white"
                      : "border border-[#262038] bg-[#13111c] text-slate-300 hover:border-[#7f0bed] hover:text-white"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      isActive
                        ? "bg-black/25 text-white"
                        : "bg-[#1c172b] text-[#c084fc]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Portfolio Showcase Grid */}
        <section className="mx-auto max-w-7xl px-6 pt-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setActiveProjectModal(project)}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-[#262038] bg-[#13111c] flex flex-col justify-between transition-all duration-300 hover:border-[#7f0bed] hover:bg-[#191626] hover:-translate-y-1.5"
                >
                  {/* Top Image Container */}
                  <div className="relative h-60 w-full overflow-hidden bg-[#0b0912]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="rounded-full border border-[#32294d] bg-[#13111c]/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#c084fc]">
                        {project.category}
                      </span>
                      <span className="rounded-full border border-[#32294d] bg-[#13111c]/95 px-3 py-1 text-[11px] font-medium text-slate-200">
                        {project.year}
                      </span>
                    </div>

                    {/* Corner Expand Action */}
                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#7f0bed] text-white transition-transform duration-300 group-hover:scale-105">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-6 flex flex-col flex-1 justify-between border-t border-[#262038]">
                    <div>
                      <p className="text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                        <Building className="h-3.5 w-3.5 text-[#a855f7]" />
                        <span>{project.industry}</span>
                      </p>
                      <h2 className="font-display text-2xl font-bold text-white group-hover:text-[#c084fc] transition-colors mb-3">
                        {project.title}
                      </h2>
                      <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-2">
                        {project.shortDesc}
                      </p>
                    </div>

                    <div>
                      {/* Metric highlights pill strip */}
                      <div className="grid grid-cols-2 gap-2 mb-6 pt-4 border-t border-[#262038]">
                        {project.results.slice(0, 2).map((res) => (
                          <div
                            key={res.label}
                            className="rounded-xl border border-[#32294d] bg-[#1c172b] p-2.5 text-center"
                          >
                            <span className="block font-display text-base font-bold text-[#c084fc]">
                              {res.metric}
                            </span>
                            <span className="block text-[10px] text-slate-300 truncate">
                              {res.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-[#32294d] bg-[#1c172b] px-2 py-0.5 text-[11px] text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="rounded-md border border-[#32294d] bg-[#1c172b] px-2 py-0.5 text-[11px] text-[#c084fc]">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="mx-auto max-w-7xl px-6 pt-24">
          <div className="relative overflow-hidden rounded-3xl border border-[#262038] bg-[#13111c] p-8 sm:p-14 text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
                Have a Vision for Your <span className="text-[#a855f7]">Next Product?</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                Whether you need a custom enterprise platform, an AI pipeline, or an untouchable
                brand design, Softilo brings the firepower to make it reality.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#7f0bed] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#6a05d5]"
              >
                <span>Let&apos;s Build Together</span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Case Study Detail Modal Dialog */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-xl bg-black/80">
            <div
              className="fixed inset-0 -z-10"
              onClick={() => setActiveProjectModal(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#32294d] bg-[#13111c] p-6 sm:p-10 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#32294d] bg-[#1c172b] text-slate-300 transition-colors hover:bg-[#7f0bed] hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="rounded-full border border-[#32294d] bg-[#1c172b] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#c084fc]">
                  {activeProjectModal.category}
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#a855f7]" />
                  <span>{activeProjectModal.year}</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-300">{activeProjectModal.client}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                {activeProjectModal.title}
              </h2>

              <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden mb-8 border border-[#262038]">
                <Image
                  src={activeProjectModal.image}
                  alt={activeProjectModal.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="rounded-2xl border border-[#262038] bg-[#0b0912] p-6">
                  <h3 className="text-lg font-bold text-[#c084fc] mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#a855f7]" />
                    <span>The Challenge</span>
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeProjectModal.challenge}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#262038] bg-[#0b0912] p-6">
                  <h3 className="text-lg font-bold text-[#a855f7] mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#7f0bed]" />
                    <span>The Solution</span>
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeProjectModal.solution}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-[#a855f7]" />
                  <span>Impact &amp; Verifiable Metrics</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {activeProjectModal.results.map((res) => (
                    <div
                      key={res.label}
                      className="rounded-2xl border border-[#262038] bg-[#0b0912] p-4 text-center"
                    >
                      <div className="font-display text-2xl font-extrabold text-[#a855f7]">
                        {res.metric}
                      </div>
                      <div className="text-xs text-slate-300 mt-1">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#262038] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4 text-[#a855f7]" />
                  {activeProjectModal.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[#32294d] bg-[#1c172b] px-2.5 py-1 text-xs text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#7f0bed] px-6 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#6a05d5]"
                >
                  <span>Build a Similar Project</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
