import { Clock, Lightbulb, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: "100+",
    label: "Clients Worldwide",
  },
  {
    icon: TrendingUp,
    value: "250%",
    label: "Average Growth",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Dedicated Support",
  },
  {
    icon: Lightbulb,
    value: "10+",
    label: "Strategy Experts",
  },
];

export function Stats() {
  return (
    <section className="relative z-10 bg-[#0b0912] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col items-center rounded-3xl border border-[#262038] bg-[#13111c] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#7f0bed] hover:bg-[#191626]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#32294d] bg-[#1c172b] text-[#a855f7] transition-transform duration-300 group-hover:scale-110">
                <stat.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display mb-2 text-4xl font-bold text-white md:text-5xl">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-slate-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
