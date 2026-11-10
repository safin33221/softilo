import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-surface2">
        <div className="animate-blob absolute left-1/4 top-0 h-full w-1/2 bg-accent-blue/20 blur-[150px]" />
        <div className="animate-blob animation-delay-2000 absolute bottom-0 right-1/4 h-full w-1/2 bg-accent-purple/20 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card relative overflow-hidden rounded-[3rem] border-white/10 p-12 shadow-2xl md:p-24"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30" />

          <h2 className="font-display relative z-10 mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Ready to Scale Your{" "}
            <span className="text-gradient-accent">Brand?</span>
          </h2>

          <p className="relative z-10 mx-auto mb-10 max-w-2xl text-xl text-gray-400">
            Let Softilo turn your business into a powerful digital brand.
            Book a free strategy call today.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:hello.softilo@gmail.com"
            className="group relative z-10 mx-auto flex w-fit items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition-all hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]"
          >
            Book Free Consultation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
