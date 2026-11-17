import Image from "next/image";
import { motion } from "framer-motion";

const industries = [
  {
    name: "School & College",
    tag: "LMS, Student ERP & Institutional Portals",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Restaurant",
    tag: "POS, Table Booking & Digital Ordering",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Real Estate",
    tag: "Property CRM & Investor Dashboards",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Travel Agency",
    tag: "Tour Portals, Visa Tracker & Agent ERP",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
  },
  {
    name: "Corporate",
    tag: "Enterprise Software & Brand Ecosystems",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
];

export function Industries() {
  return (
    <section className="relative overflow-hidden bg-[#0e0c17] py-28 border-y border-[#262038]">
      <div className="mx-auto mb-14 max-w-7xl px-6">
        <span className="mb-3 inline-block rounded-full border border-[#32294d] bg-[#161224] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#c084fc]">
          Sector Expertise
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-white md:text-5xl"
        >
          Industries We <span className="text-[#a855f7]">Elevate</span>
        </motion.h2>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative flex h-[440px] min-w-[300px] snap-center flex-col overflow-hidden rounded-3xl border border-[#262038] bg-[#13111c] transition-all duration-300 hover:border-[#7f0bed] hover:bg-[#191626] md:min-w-[360px]"
          >
            <div className="relative h-[310px] w-full overflow-hidden bg-[#0b0912]">
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                sizes="(max-width: 768px) 300px, 360px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center border-t border-[#262038] bg-[#13111c] p-6 transition-colors duration-300 group-hover:bg-[#191626]">
              <div className="mb-2 h-1 w-10 rounded-full bg-[#7f0bed]" />
              <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#c084fc] transition-colors">
                {industry.name}
              </h3>
              <p className="mt-1 text-sm text-slate-300">{industry.tag}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
