import {
  Award,
  HeartHandshake,
  Rocket,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-[#0b0912] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#32294d] bg-[#161224] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#c084fc]">
            Why Partner With Us
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display mb-5 text-4xl font-bold text-white md:text-6xl"
          >
            The Softilo <span className="text-[#a855f7]">Advantage</span>
          </motion.h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Engineered for long-term reliability, rapid execution, and measurable business growth.
          </p>
        </div>

        <div className="grid auto-rows-[230px] grid-cols-1 gap-6 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#262038] bg-[#13111c] p-8 transition-all duration-300 hover:border-[#7f0bed] hover:bg-[#191626] md:col-span-2 md:row-span-2"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#32294d] bg-[#1c172b] text-[#a855f7] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#7f0bed] group-hover:text-white">
              <Target className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display mb-3 text-3xl font-bold text-white group-hover:text-[#c084fc] transition-colors">
                Creative Strategy &amp; Architecture
              </h3>
              <p className="max-w-md text-base leading-relaxed text-slate-300">
                We don&apos;t just execute; we strategize. Every software platform and brand campaign is backed by data and engineered to dominate your market niche.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group flex items-center gap-6 rounded-3xl border border-[#262038] bg-[#13111c] p-8 transition-all duration-300 hover:border-[#7f0bed] hover:bg-[#191626] md:col-span-2"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#32294d] bg-[#1c172b] text-[#a855f7] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#7f0bed] group-hover:text-white">
              <Zap className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display mb-2 text-2xl font-bold text-white group-hover:text-[#c084fc] transition-colors">
                Fast Delivery
              </h3>
              <p className="text-base leading-relaxed text-slate-300">
                Agile workflows ensuring rapid turnaround without compromising code or design quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group flex flex-col justify-center rounded-3xl border border-[#262038] bg-[#13111c] p-8 transition-all duration-300 hover:border-[#7f0bed] hover:bg-[#191626]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#32294d] bg-[#1c172b] text-[#a855f7] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#7f0bed] group-hover:text-white">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="font-display mb-2 text-xl font-bold text-white group-hover:text-[#c084fc] transition-colors">
              Premium Quality
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Enterprise-grade design &amp; clean code standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group flex flex-col justify-center rounded-3xl border border-[#262038] bg-[#13111c] p-8 transition-all duration-300 hover:border-[#7f0bed] hover:bg-[#191626]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#32294d] bg-[#1c172b] text-[#a855f7] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#7f0bed] group-hover:text-white">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h3 className="font-display mb-2 text-xl font-bold text-white group-hover:text-[#c084fc] transition-colors">
              Dedicated Support
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              24/7 priority engineering communication.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-[#262038] bg-[#13111c] p-8 transition-all duration-300 hover:border-[#7f0bed] hover:bg-[#191626] md:col-span-2"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#32294d] bg-[#1c172b] text-[#a855f7] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#7f0bed] group-hover:text-white">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="font-display mb-2 text-2xl font-bold text-white group-hover:text-[#c084fc] transition-colors">
              High-Impact Growth Content
            </h3>
            <p className="text-base leading-relaxed text-slate-300">
              Result-oriented content creation that captures attention and drives measurable engagement across all social platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group flex items-center justify-between rounded-3xl border border-[#262038] bg-[#13111c] p-8 transition-all duration-300 hover:border-[#7f0bed] hover:bg-[#191626] md:col-span-2"
          >
            <div>
              <h3 className="font-display mb-2 text-2xl font-bold text-white group-hover:text-[#c084fc] transition-colors">
                Motion Graphics &amp; Video
              </h3>
              <p className="text-base leading-relaxed text-slate-300">
                Commercial documentaries &amp; brand storytelling animations.
              </p>
            </div>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#32294d] bg-[#1c172b] text-[#a855f7] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#7f0bed] group-hover:text-white">
              <Rocket className="h-7 w-7" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
