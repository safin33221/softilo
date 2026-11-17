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
  Compass,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { ServiceItem } from "@/data/data";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { EducationalPricingSection } from "@/services/educational-solutions";
import { TravelPricingSection } from "@/services/travel-solutions";

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
  Compass,
};

interface ServiceDetailViewProps {
  service: ServiceItem;
  allServices: ServiceItem[];
}

export function ServiceDetailView({ service, allServices }: ServiceDetailViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const IconComponent = iconMap[service.iconName] || Zap;

  const otherServices = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="relative min-h-screen bg-[#0b0912] text-white overflow-x-clip selection:bg-[#7f0bed]/40 selection:text-white">
      <Navbar />

      <main className="relative z-10 pt-28 pb-24">
        {/* Breadcrumb Bar */}
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-400">
            <Link
              href="/"
              className="transition-colors hover:text-white flex items-center gap-1"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-slate-600">/</span>
            <Link href="/#services" className="transition-colors hover:text-white">
              Services
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-[#c084fc] truncate max-w-[200px] sm:max-w-none">
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
                className="inline-flex items-center gap-2 rounded-full border border-[#32294d] bg-[#161224] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#c084fc] mb-6"
              >
                <IconComponent className="h-3.5 w-3.5 text-[#a855f7]" />
                <span>{service.category}</span>
                <span className="h-1 w-1 rounded-full bg-[#a855f7]" />
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
                <span className="text-[#a855f7]">
                  {service.title.split(" ").slice(-1)}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-200 font-medium mb-4"
              >
                {service.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl"
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
                  className="group relative inline-flex items-center gap-2 rounded-full bg-[#7f0bed] px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#6a05d5] hover:scale-[1.02]"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Free Consultation</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {(service.slug === "educational-solutions" ||
                  service.slug === "travel-solutions") && (
                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 rounded-full border border-[#32294d] bg-[#161224] px-6 py-3.5 text-sm font-semibold text-[#c084fc] transition-all duration-300 hover:border-[#7f0bed] hover:bg-[#1c172b] hover:text-white"
                  >
                    <span>View Pricing &amp; Packages</span>
                  </a>
                )}

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-[#262038] bg-[#13111c] px-6 py-3.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-[#7f0bed] hover:bg-[#191626] hover:text-white"
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
                className="relative rounded-3xl p-8 border border-[#262038] bg-[#13111c] overflow-hidden shadow-2xl"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#262038]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1c172b] border border-[#32294d] text-[#a855f7]">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-base font-bold text-white">Execution Metrics</h2>
                        <p className="text-xs text-slate-300">Softilo Verified Performance</p>
                      </div>
                    </div>
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a855f7] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#a855f7]"></span>
                    </span>
                  </div>

                  {/* Metrics 2x2 Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {service.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-[#262038] bg-[#0b0912] p-4 text-center transition-colors hover:border-[#7f0bed]"
                      >
                        <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#a855f7]">
                          {metric.value}
                        </div>
                        <p className="text-xs text-slate-300 mt-1 font-medium leading-tight">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Trust Highlights */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <ShieldCheck className="h-4 w-4 text-[#a855f7] shrink-0" />
                      <span>Dedicated Senior Engineering Team &amp; NDA Protected</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <Zap className="h-4 w-4 text-[#a855f7] shrink-0" />
                      <span>Agile Bi-Weekly Sprints with Live Staging Previews</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <Award className="h-4 w-4 text-[#a855f7] shrink-0" />
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

        {/* Travel Agency Solutions Dedicated Pricing & Packages Section */}
        {service.slug === "travel-solutions" && <TravelPricingSection />}

        {/* Feature Checklist & Highlights Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 border-t border-[#262038]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full border border-[#32294d] bg-[#161224] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-3">
              Capabilities &amp; Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Engineered for <span className="text-[#a855f7]">Total Dominance</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
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
                className="group relative rounded-3xl p-8 border border-[#262038] bg-[#13111c] transition-all hover:border-[#7f0bed] hover:bg-[#191626]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1c172b] text-[#a855f7] border border-[#32294d]">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#c084fc] transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Checklist Grid */}
          <div className="rounded-3xl p-8 sm:p-12 border border-[#262038] bg-[#13111c]">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-8 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#a855f7]" />
              <span>Core Deliverable Specifications Checklist</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#191626] transition-colors"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1c172b] text-[#a855f7] border border-[#32294d]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-200 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables & Tech Stack Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 border-t border-[#262038]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Deliverables */}
            <div className="lg:col-span-7">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-3">
                Tangible Outputs
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                What You Get With <span className="text-[#a855f7]">Every Engagement</span>
              </h2>
              <div className="space-y-4">
                {service.deliverables.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-[#262038] bg-[#13111c] transition-all hover:border-[#7f0bed]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#1c172b] text-xs font-bold text-[#c084fc] border border-[#32294d]">
                      0{index + 1}
                    </span>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-8 border border-[#262038] bg-[#13111c]">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-3">
                  Modern Tools &amp; Runtimes
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Tech Stack &amp; Standards
                </h3>
                <p className="text-xs text-slate-300 mb-6">
                  We leverage industry-standard, high-performance tooling built for
                  velocity, type safety, and infinite scalability.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#32294d] bg-[#1c172b] px-4 py-2 text-xs font-medium text-slate-200 transition-all hover:border-[#7f0bed] hover:bg-[#7f0bed] hover:text-white"
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
        <section className="relative mx-auto max-w-7xl px-6 py-20 border-t border-[#262038]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-3">
              Methodology
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our 4-Stage <span className="text-[#a855f7]">Delivery Blueprint</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
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
                className="relative rounded-3xl p-6 border border-[#262038] bg-[#13111c] flex flex-col justify-between transition-all hover:border-[#7f0bed]"
              >
                <div>
                  <div className="font-display text-3xl font-extrabold text-[#a855f7] mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        {service.faq && service.faq.length > 0 && (
          <section className="relative mx-auto max-w-4xl px-6 py-20 border-t border-[#262038]">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-3">
                Got Questions?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Frequently Asked <span className="text-[#a855f7]">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {service.faq.map((faqItem, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#262038] bg-[#13111c] overflow-hidden transition-colors hover:border-[#7f0bed]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="text-base font-semibold text-white flex items-center gap-3">
                        <HelpCircle className="h-5 w-5 text-[#a855f7] shrink-0" />
                        {faqItem.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180 text-[#a855f7]" : ""
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
                          className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed"
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
          <div className="relative overflow-hidden rounded-3xl border border-[#262038] bg-[#13111c] p-8 sm:p-14 text-center">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#32294d] bg-[#1c172b] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#c084fc] mb-6">
                <Award className="h-3.5 w-3.5" />
                <span>Ready to Execute?</span>
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Let&apos;s Build Your <span className="text-[#a855f7]">{service.title}</span> System
              </h2>

              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                Schedule a confidential, high-impact technical consultation with our engineering directors.
                We&apos;ll scope your requirements and prepare a custom proposal within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#7f0bed] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#6a05d5]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Book Consultation / Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#32294d] bg-[#1c172b] px-8 py-4 text-base font-medium text-white transition-all hover:border-[#7f0bed]"
                >
                  <span>Request Custom Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Other Services Strip */}
        <section className="relative mx-auto max-w-7xl px-6 pt-16 border-t border-[#262038]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#c084fc]">
                Related Capabilities
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                Explore Other Services
              </h3>
            </div>
            <Link
              href="/#services"
              className="text-sm font-medium text-slate-300 hover:text-[#a855f7] flex items-center gap-1"
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
                  className="group rounded-2xl p-6 border border-[#262038] bg-[#13111c] transition-all hover:border-[#7f0bed] hover:bg-[#191626] hover:-translate-y-1 block"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1c172b] border border-[#32294d] text-[#a855f7]">
                      <OtherIcon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 uppercase">
                      {other.category}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-white group-hover:text-[#c084fc] transition-colors mb-2">
                    {other.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2">
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
