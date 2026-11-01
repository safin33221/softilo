"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Clock,
  CheckCircle2,
  Send,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  Building,
  HelpCircle,
  PhoneCall,
  Loader2,
} from "lucide-react";
import { ServiceItem } from "@/data/data";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

interface ContactViewProps {
  services: ServiceItem[];
}

const BUDGET_OPTIONS = [
  { id: "sub-5k", label: "< $5,000", desc: "Starter Sprints & Audits" },
  { id: "5k-15k", label: "$5,000 - $15,000", desc: "Core MVP & Redesign" },
  { id: "15k-30k", label: "$15,000 - $30,000", desc: "Full Stack Platform" },
  { id: "30k-plus", label: "$30,000+", desc: "Enterprise Architecture" },
];

const TIMELINE_OPTIONS = [
  "Immediate (Next 1-2 Weeks)",
  "Within 1 Month",
  "1-3 Months",
  "Flexible / Exploring",
];

function ContactFormInner({ services }: { services: ServiceItem[] }) {
  const searchParams = useSearchParams();
  const preselectedServiceSlug = searchParams.get("service") || "";
  const preselectedPackage = searchParams.get("package") || "";

  const initialService =
    services.find((s) => s.slug === preselectedServiceSlug)?.title ||
    services[0]?.title ||
    "Custom Software Development";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: initialService,
    budget: "$5,000 - $15,000",
    timeline: "Within 1 Month",
    message: preselectedPackage
      ? `Interested in claiming/discussing: ${preselectedPackage} (including 2 Years Free Maintenance & 2-Year Software Ownership Transfer).`
      : "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage("Please provide both your name and email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      service: services[0]?.title || "",
      budget: "$5,000 - $15,000",
      timeline: "Within 1 Month",
      message: "",
    });
  };

  return (
    <div className="glass-card relative rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl bg-surface2/60 backdrop-blur-xl">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-12 text-center"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/30 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="font-display text-3xl font-bold text-white mb-3">
              Inquiry Dispatched Successfully!
            </h3>

            <p className="mx-auto max-w-md text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
              Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our
              technical directors have received your project details for{" "}
              <span className="text-accent-cyan font-semibold">{formData.service}</span>. We will review
              your brief and reach out within 4 business hours.
            </p>

            <div className="mx-auto max-w-md rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-left text-xs text-gray-400 mb-8 space-y-1">
              <div>
                <span className="text-gray-500">Contact Email:</span>{" "}
                <span className="text-white">{formData.email}</span>
              </div>
              <div>
                <span className="text-gray-500">Selected Scope:</span>{" "}
                <span className="text-white">{formData.service} ({formData.budget})</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-semibold text-white transition-all hover:bg-white/10"
            >
              Submit Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Initiate Project Brief
              </h2>
              <p className="text-xs sm:text-sm text-gray-400">
                Complete the parameters below to receive our architecture review &amp; scoped estimate.
              </p>
            </div>

            {errorMessage && (
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
                {errorMessage}
              </div>
            )}

            {/* Name and Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold text-gray-300 mb-2"
                >
                  Your Name <span className="text-accent-cyan">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-accent-cyan focus:bg-white/[0.06] focus:outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold text-gray-300 mb-2"
                >
                  Work Email <span className="text-accent-cyan">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-accent-cyan focus:bg-white/[0.06] focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Company / Brand Name */}
            <div>
              <label
                htmlFor="contact-company"
                className="block text-xs font-semibold text-gray-300 mb-2"
              >
                Company / Organization (Optional)
              </label>
              <input
                id="contact-company"
                type="text"
                placeholder="e.g. Vertex Systems Inc."
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-accent-cyan focus:bg-white/[0.06] focus:outline-none transition-all"
              />
            </div>

            {/* Service Selector Dropdown */}
            <div>
              <label
                htmlFor="contact-service"
                className="block text-xs font-semibold text-gray-300 mb-2"
              >
                Primary Service Domain <span className="text-accent-cyan">*</span>
              </label>
              <div className="relative">
                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full appearance-none rounded-2xl border border-white/10 bg-surface px-4 py-3 text-sm text-white focus:border-accent-cyan focus:outline-none transition-all pr-10"
                >
                  {services.map((svc) => (
                    <option key={svc.id} value={svc.title} className="bg-surface2 text-white">
                      {svc.title} ({svc.category})
                    </option>
                  ))}
                  <option value="Other / Full Enterprise Overhaul" className="bg-surface2 text-white">
                    Other / Full Enterprise Overhaul
                  </option>
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Budget Range Radio Cards */}
            <div>
              <span className="block text-xs font-semibold text-gray-300 mb-2">
                Anticipated Budget Range
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {BUDGET_OPTIONS.map((tier) => {
                  const isSelected = formData.budget === tier.label;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, budget: tier.label })
                      }
                      className={`rounded-2xl border p-3 text-center transition-all ${
                        isSelected
                          ? "border-accent-cyan bg-accent-blue/15 text-white shadow-md shadow-accent-blue/20"
                          : "border-white/5 bg-white/[0.02] text-gray-400 hover:border-white/15 hover:bg-white/[0.04]"
                      }`}
                    >
                      <span className="block text-xs sm:text-sm font-bold text-white mb-0.5">
                        {tier.label}
                      </span>
                      <span className="block text-[10px] text-gray-400 leading-tight">
                        {tier.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline Selector */}
            <div>
              <label
                htmlFor="contact-timeline"
                className="block text-xs font-semibold text-gray-300 mb-2"
              >
                Desired Timeline / Launch Goal
              </label>
              <div className="relative">
                <select
                  id="contact-timeline"
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  className="w-full appearance-none rounded-2xl border border-white/10 bg-surface px-4 py-3 text-sm text-white focus:border-accent-cyan focus:outline-none transition-all pr-10"
                >
                  {TIMELINE_OPTIONS.map((time) => (
                    <option key={time} value={time} className="bg-surface2 text-white">
                      {time}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold text-gray-300 mb-2"
              >
                Project Overview &amp; Key Goals <span className="text-accent-cyan">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="Tell us about your product vision, challenges, target audience, and key performance expectations..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white placeholder-gray-500 focus:border-accent-cyan focus:bg-white/[0.06] focus:outline-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-accent-cyan py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-cyan-500/35 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Processing Your Brief...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Submit Project Brief</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 pt-2">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Strict Mutual NDA Protected • Zero Spam Policy</span>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactView({ services }: ContactViewProps) {
  return (
    <div className="relative min-h-screen bg-background text-white overflow-x-clip selection:bg-accent-blue/30 selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.16),transparent_70%)]" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(168,85,247,0.12),transparent_70%)]" />
        <div className="absolute bottom-[15%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,212,255,0.08),transparent_70%)]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-24">
        {/* Header Section */}
        <section className="mx-auto max-w-7xl px-6 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-cyan mb-6 backdrop-blur-md"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Connect With Our Leadership</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Start Your <span className="text-gradient">Transformation</span> with{" "}
            <span className="text-gradient-accent">Softilo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base sm:text-xl text-gray-400 leading-relaxed"
          >
            Whether embarking on a greenfield software build, automating enterprise workflows,
            or scaling brand acquisition, our engineers are ready to execute.
          </motion.p>
        </section>

        {/* Form and Info Section */}
        <section className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="glass-card rounded-3xl p-12 text-center text-gray-400">
                    <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2 text-accent-cyan" />
                    <p className="text-sm">Loading Project Brief form...</p>
                  </div>
                }
              >
                <ContactFormInner services={services} />
              </Suspense>
            </div>

            {/* Sidebar Column: Geometric Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Touchpoints Card */}
              <div className="glass-card rounded-3xl border border-white/10 p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-cyan mb-2 block">
                  Direct Channels
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-6">
                  Get in Touch Immediately
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:hello@softilo.com"
                    className="flex items-center gap-4 p-3.5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-accent-blue border border-blue-500/20 group-hover:scale-105 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Official Inquiries</div>
                      <div className="text-sm font-semibold text-white group-hover:text-accent-cyan transition-colors">
                        hello@softilo.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3.5 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-accent-cyan border border-cyan-500/20">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Guaranteed Response Window</div>
                      <div className="text-sm font-semibold text-white">
                        Within 4 Hours (Mon - Sat)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3.5 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Consultation Format</div>
                      <div className="text-sm font-semibold text-white">
                        30-Min High-Impact Video Call
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Guarantee Card */}
              <div className="glass-card rounded-3xl border border-white/10 p-6 sm:p-8 bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Softilo Assurance</h4>
                    <p className="text-xs text-gray-400">What happens after you submit</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                    <span>A dedicated Solutions Architect reviews your technical specifications.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                    <span>We prepare an architectural scope, tech stack suggestion, and milestone map.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                    <span>No aggressive sales reps—strictly senior technical directors and engineers.</span>
                  </li>
                </ul>
              </div>

              {/* FAQ Snippet Card */}
              <div className="glass-card rounded-3xl border border-white/10 p-6 sm:p-8">
                <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-accent-cyan" />
                  <span>Frequently Asked</span>
                </h4>
                <div className="space-y-3 text-xs text-gray-400">
                  <div>
                    <p className="font-semibold text-gray-200">Can we sign an NDA beforehand?</p>
                    <p className="mt-0.5">Yes, we gladly execute mutual non-disclosure agreements prior to reviewing proprietary materials.</p>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <p className="font-semibold text-gray-200">Do you offer fixed-price or sprint-based contracts?</p>
                    <p className="mt-0.5">Both! We offer milestone-based fixed scope agreements as well as dedicated monthly agile engineering squads.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
