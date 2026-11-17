import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Aura Fine Dining",
    category: "Restaurant Branding & Web System",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Elevate Heights",
    category: "Real Estate Asset ERP",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Nova Tech University",
    category: "Institutional LMS & Growth",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Horizon Escapes",
    category: "Travel Agency Booking ERP",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative border-t border-[#262038] bg-[#0e0c17] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 inline-block rounded-full border border-[#32294d] bg-[#161224] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#c084fc]">
              Case Studies
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display mb-3 text-4xl font-bold text-white md:text-6xl"
            >
              Selected <span className="text-[#a855f7]">Works</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-300"
            >
              A glimpse into our enterprise software and digital transformations.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/portfolio"
              className="inline-flex w-fit items-center gap-2 rounded-2xl bg-[#7f0bed] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#6a05d5]"
            >
              View All Projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-[#262038] bg-[#13111c] transition-all duration-300 hover:-translate-y-1 hover:border-[#7f0bed] hover:bg-[#191626]"
            >
              <Link href="/portfolio" className="block">
                <div className="relative h-[280px] w-full overflow-hidden bg-[#0b0912] sm:h-[320px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-[#262038] bg-[#13111c] p-6 transition-colors duration-300 group-hover:bg-[#191626]">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#c084fc]">
                      {project.category}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-white transition-colors group-hover:text-[#c084fc]">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#32294d] bg-[#1c172b] text-[#a855f7] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#7f0bed] group-hover:text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
