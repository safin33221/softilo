"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Award,
  ShieldCheck,
  Zap,
  HelpCircle,
  ChevronDown,
  Layers,
  Code,
  Cpu,
  Layout,
  TrendingUp,
  GraduationCap,
  ShoppingBag,
  Building2,
  Video,
  Film,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { ServiceItem } from "@/data/data";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { EducationalPricingSection } from "@/services/educational-solutions";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Cpu,
  Layout,
  TrendingUp,
  GraduationCap,
  ShoppingBag,
  Building2,
  Video,
  Film,
};

interface ServiceDetailViewProps {
  service: ServiceItem;
  allServices: ServiceItem[];
}

export function ServiceDetailView({ service, allServices }: ServiceDetailViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const IconComponent = iconMap[service.iconName] || Zap;

  // Filter other services for "Explore other services" recommendation
  const otherServices = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="relative min-h-screen bg-background text-white overflow-x-clip selection:bg-accent-blue/30 selection:text-white">
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_70%)]" />
        <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(168,85,247,0.12),transparent_70%)]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,212,255,0.1),transparent_70%)]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-28 pb-24">
        {/* Breadcrumb Bar */}
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400">
            <Link
              href="/"
              className="transition-colors hover:text-white flex items-center gap-1"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="/#services" className="transition-colors hover:text-white">
              Services
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-accent-cyan truncate max-w-[200px] sm:max-w-none">
              {service.title}
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative mx-auto max-w-7xl px-6 pt-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              {/* Service Category Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-6 backdrop-blur-md"
              >
                <IconComponent className="h-3.5 w-3.5" />
                <span>{service.category}</span>
                <span className="h-1 w-1 rounded-full bg-accent-cyan" />
                <span>Softilo Premium</span>
              </motion.div>

              {/* Title & Tagline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
              >
                {service.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-gradient-accent">
                  {service.title.split(" ").slice(-1)}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-300 font-medium mb-4"
              >
                {service.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl"
              >
                {service.fullDesc}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-accent-cyan px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.02]"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Free Consultation</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {service.slug === "educational-solutions" && (
                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-6 py-3.5 text-sm font-semibold text-violet-200 backdrop-blur-xl transition-all duration-300 hover:border-violet-400 hover:bg-violet-500/20 hover:text-white"
                  >
                    <span>View Pricing &amp; Packages</span>
                  </a>
                )}

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-gray-200 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
                >
                  <span>View Case Studies</span>
                </Link>
              </motion.div>
            </div>

            {/* Hero Visual Card / Quick Architecture Preview */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="glass-card relative rounded-3xl p-8 border border-white/10 overflow-hidden shadow-2xl"
              >
                {/* Ambient Card Glow */}
                <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-accent-blue/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-44 h-44 rounded-full bg-accent-purple/20 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/30 text-accent-cyan">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-base font-bold text-white">Execution Metrics</h2>
                        <p className="text-xs text-gray-400">Softilo Verified Performance</p>
                      </div>
                    </div>
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                  </div>

                  {/* Metrics 2x2 Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {service.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center transition-colors hover:border-white/15 hover:bg-white/[0.04]"
                      >
                        <div className="font-display text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-400">
                          {metric.value}
                        </div>
                        <p className="text-xs text-gray-400 mt-1 font-medium leading-tight">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Trust Highlights */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-xs text-gray-300">
                      <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Dedicated Senior Engineering Team &amp; NDA Protected</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-300">
                      <Zap className="h-4 w-4 text-accent-cyan shrink-0" />
                      <span>Agile Bi-Weekly Sprints with Live Staging Previews</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-300">
                      <Award className="h-4 w-4 text-purple-400 shrink-0" />
                      <span>Full Intellectual Property &amp; Codebase Transfer</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Educational Solutions Dedicated Pricing & Packages Section */}
        {service.slug === "educational-solutions" && <EducationalPricingSection />}

        {/* Feature Checklist & Highlights Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-cyan mb-3">
              Capabilities &amp; Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Engineered for <span className="text-gradient">Total Dominance</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Explore the technical features, architecture foundations, and battle-tested
              mechanisms that power this solution.
            </p>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {service.featureHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group relative rounded-3xl p-8 border border-white/10 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-blue/10 to-transparent rounded-bl-full pointer-events-none" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-blue/10 text-accent-cyan border border-accent-blue/20">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Checklist Grid */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01]">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider text-gray-300 mb-8 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent-cyan" />
              <span>Core Deliverable Specifications Checklist</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/[0.03] transition-colors"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-200 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables & Tech Stack Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Deliverables */}
            <div className="lg:col-span-7">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-cyan mb-3">
                Tangible Outputs
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                What You Get With <span className="text-gradient">Every Engagement</span>
              </h2>
              <div className="space-y-4">
                {service.deliverables.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-surface2/60 transition-all hover:border-white/15"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xs font-bold text-accent-blue border border-blue-500/20">
                      0{index + 1}
                    </span>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="lg:col-span-5">
              <div className="glass-card rounded-3xl p-8 border border-white/10">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-cyan mb-3">
                  Modern Tools &amp; Runtimes
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Tech Stack &amp; Standards
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  We leverage industry-standard, high-performance tooling built for
                  velocity, type safety, and infinite scalability.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-200 transition-all hover:border-accent-cyan/40 hover:bg-accent-blue/10 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-cyan mb-3">
              Methodology
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our 4-Stage <span className="text-gradient-accent">Delivery Blueprint</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Structured sprint cadences with zero ambiguity, total transparency, and rapid
              turnarounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card relative rounded-3xl p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="font-display text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        {service.faq && service.faq.length > 0 && (
          <section className="relative mx-auto max-w-4xl px-6 py-20 border-t border-white/5">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-cyan mb-3">
                Got Questions?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {service.faq.map((faqItem, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="text-base font-semibold text-white flex items-center gap-3">
                        <HelpCircle className="h-5 w-5 text-accent-cyan shrink-0" />
                        {faqItem.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180 text-accent-cyan" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6 pt-1 text-sm text-gray-400 leading-relaxed"
                        >
                          {faqItem.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Direct CTA Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-surface2 via-background to-surface2 p-8 sm:p-14 text-center shadow-2xl">
            {/* Ambient Backlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-purple-600/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-6">
                <Award className="h-3.5 w-3.5" />
                <span>Ready to Execute?</span>
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Let&apos;s Build Your <span className="text-gradient-accent">{service.title}</span> System
              </h2>

              <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                Schedule a confidential, high-impact technical consultation with our engineering directors.
                We&apos;ll scope your requirements and prepare a custom proposal within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-black shadow-xl transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Book Consultation / Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-xl transition-all hover:bg-white/10"
                >
                  <span>Request Custom Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Other Services Strip */}
        <section className="relative mx-auto max-w-7xl px-6 pt-16 border-t border-white/5">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-accent-cyan">
                Related Capabilities
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                Explore Other Services
              </h3>
            </div>
            <Link
              href="/#services"
              className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => {
              const OtherIcon = iconMap[other.iconName] || Zap;
              return (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="glass-card group rounded-2xl p-6 border border-white/10 transition-all hover:border-white/25 hover:-translate-y-1 block"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-accent-cyan">
                      <OtherIcon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-gray-500 uppercase">
                      {other.category}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-white group-hover:text-accent-cyan transition-colors mb-2">
                    {other.title}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {other.shortDesc}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
