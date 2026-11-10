import Image from "next/image";
import { motion } from "framer-motion";

const industries = [
  {
    name: "School & College",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Travel Agency",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
  },
  {
    name: "Corporate",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
];

export function Industries() {
  return (
    <section className="relative overflow-hidden bg-surface2 py-32">
      <div className="mx-auto mb-16 max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mb-6 text-4xl font-bold md:text-5xl"
        >
          Industries We <span className="text-gradient">Elevate</span>
        </motion.h2>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-12">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative h-[500px] min-w-[300px] snap-center overflow-hidden rounded-3xl md:min-w-[400px]"
          >
            <div className="absolute inset-0 z-10 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <Image
              src={industry.image}
              alt={industry.name}
              fill
              sizes="(max-width: 768px) 300px, 400px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute bottom-0 left-0 z-20 w-full translate-y-4 p-8 transition-transform duration-500 group-hover:translate-y-0">
              <div className="mb-4 h-1 w-12 origin-left scale-x-0 bg-accent-blue transition-transform delay-100 duration-500 group-hover:scale-x-100" />
              <h3 className="font-display text-3xl font-bold text-white">
                {industry.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
