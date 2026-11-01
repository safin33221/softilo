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
    <section id="why-us" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display mb-6 text-5xl font-bold md:text-6xl"
          >
            The Softilo <span className="text-gradient-accent">Advantage</span>
          </motion.h2>
        </div>

        <div className="grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card group relative overflow-hidden rounded-3xl p-8 md:col-span-2 md:row-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <Target className="mb-6 h-12 w-12 text-accent-purple" />
            <h3 className="font-display mb-4 text-3xl font-bold">
              Creative Strategy
            </h3>
            <p className="max-w-md text-lg leading-relaxed text-gray-400">
              We don&apos;t just execute; we strategize. Every campaign is backed by
              data and designed to dominate your specific market niche.
            </p>
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-accent-purple/20 blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card flex items-center gap-6 rounded-3xl p-8 transition-colors hover:bg-white/[0.04] md:col-span-2"
          >
            <div className="rounded-2xl bg-white/5 p-4 transition-transform group-hover:scale-110">
              <Zap className="h-8 w-8 text-accent-cyan" />
            </div>
            <div>
              <h3 className="font-display mb-2 text-2xl font-bold">Fast Delivery</h3>
              <p className="text-gray-400">
                Agile workflows ensuring rapid turnaround without compromising
                quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card flex flex-col justify-center rounded-3xl p-8 transition-colors hover:bg-white/[0.04]"
          >
            <Award className="mb-4 h-8 w-8 text-accent-blue transition-transform group-hover:scale-110" />
            <h3 className="font-display mb-2 text-xl font-bold">Premium Quality</h3>
            <p className="text-sm text-gray-400">Awwwards-level design standards.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card flex flex-col justify-center rounded-3xl p-8 transition-colors hover:bg-white/[0.04]"
          >
            <HeartHandshake className="mb-4 h-8 w-8 text-white transition-transform group-hover:scale-110" />
            <h3 className="font-display mb-2 text-xl font-bold">
              Dedicated Support
            </h3>
            <p className="text-sm text-gray-400">24/7 priority communication.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-card group relative overflow-hidden rounded-3xl p-8 md:col-span-2"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 transition-opacity duration-500 group-hover:opacity-20" />
            <div className="relative z-10">
              <TrendingUp className="mb-4 h-8 w-8 text-accent-cyan" />
              <h3 className="font-display mb-2 text-2xl font-bold">
                Viral Content Ideas
              </h3>
              <p className="text-gray-400">
                Trend-setting content creation that captures attention and
                drives massive engagement across all social platforms.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="glass-card flex items-center justify-between rounded-3xl p-8 transition-colors hover:bg-white/[0.04] md:col-span-2"
          >
            <div>
              <h3 className="font-display mb-2 text-2xl font-bold">
                Motion Graphics
              </h3>
              <p className="text-gray-400">Cinematic animations.</p>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 transition-transform group-hover:rotate-12">
              <Rocket className="h-8 w-8 text-accent-purple" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
