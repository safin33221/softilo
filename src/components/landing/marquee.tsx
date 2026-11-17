import { motion } from "framer-motion";

const brands = [
  "Lumina Tech",
  "Vertex Capital",
  "Nova Schools",
  "Aura Dining",
  "Elevate Real Estate",
  "Horizon Travel",
  "Nexus Health",
  "Quantum Corp",
];

const clients = [...brands, ...brands];

export function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-[#262038] bg-[#0b0912] py-16">
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c084fc]">
          Trusted by modern businesses worldwide
        </p>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
          className="flex w-max items-center gap-6 whitespace-nowrap px-4"
        >
          {clients.map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="flex min-w-[200px] items-center justify-center rounded-2xl border border-[#262038] bg-[#13111c] px-8 py-4 transition-colors duration-300 hover:border-[#7f0bed] hover:bg-[#191626]"
            >
              <span className="font-display text-lg font-bold text-slate-200">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
