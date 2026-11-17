import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-[#262038] bg-[#0e0c17] py-28"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-[#262038] bg-[#13111c] p-12 md:p-20"
        >
          <span className="mb-4 inline-block rounded-full border border-[#32294d] bg-[#1c172b] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#c084fc]">
            Start Your Project
          </span>

          <h2 className="font-display relative z-10 mb-5 text-4xl font-bold leading-tight text-white md:text-6xl">
            Ready to Scale Your <span className="text-[#a855f7]">Brand?</span>
          </h2>

          <p className="relative z-10 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300">
            Let Softilo turn your business into a high-performing digital brand with custom software, ERP automation, and strategic growth.
          </p>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-2xl bg-[#7f0bed] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#6a05d5]"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="mailto:hello.softilo@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#32294d] bg-[#1c172b] px-7 py-4 text-base font-semibold text-slate-200 transition-all hover:border-[#7f0bed] hover:text-white"
            >
              <span>hello.softilo@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
