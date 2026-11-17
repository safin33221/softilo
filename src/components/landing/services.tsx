import Link from "next/link";
import {
  Building2,
  GraduationCap,
  Monitor,
  Palette,
  ShoppingBag,
  Share2,
  Video,
  Cpu,
  Film,
  Compass,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Monitor,
    title: "Custom Software Development",
    slug: "custom-software-development",
    desc: "Scalable web applications, ERP, POS, CRM, and business management systems.",
    className: "md:col-span-2",
  },
  {
    icon: Cpu,
    title: "AI Automation",
    slug: "ai-automation",
    desc: "Automate workflows, customer support, lead generation, and operations.",
    className: "md:col-span-2",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    desc: "Modern, intuitive, and conversion-focused digital experiences.",
    className: "",
  },
  {
    icon: Share2,
    title: "Digital Marketing",
    slug: "digital-marketing",
    desc: "Strategic campaigns to increase visibility, leads, and revenue.",
    className: "",
  },
  {
    icon: ShoppingBag,
    title: "Website & E-Commerce",
    slug: "website-e-commerce",
    desc: "Business websites, online stores, and high-converting landing pages.",
    className: "md:col-span-2",
  },
  {
    icon: Video,
    title: "Video Editing",
    slug: "video-editing",
    desc: "Professional short-form and promotional videos for brands.",
    className: "",
  },
  {
    icon: Film,
    title: "Motion Graphics",
    slug: "motion-graphics",
    desc: "Creative animations and visual storytelling for businesses.",
    className: "",
  },
  {
    icon: Building2,
    title: "Business Automation",
    slug: "business-automation",
    desc: "CRM, inventory, HR, and operational process automation solutions.",
    className: "",
  },
  {
    icon: GraduationCap,
    title: "Educational Solutions",
    slug: "educational-solutions",
    desc: "School, coaching center, and learning management platforms.",
    className: "",
  },
  {
    icon: Compass,
    title: "Travel Agency Solutions",
    slug: "travel-solutions",
    desc: "Tour, Hajj/Umrah booking portals, visa tracking, and agent ledger ERP.",
    className: "md:col-span-2",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-[#0b0912] py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#32294d] bg-[#161224] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#c084fc]">
            What We Build
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display mb-5 text-4xl font-bold text-white md:text-6xl"
          >
            Premium <span className="text-[#a855f7]">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            Comprehensive digital solutions tailored for modern businesses
            aiming for growth, automation, and market dominance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-[#262038] bg-[#13111c] p-8 min-h-[250px] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#7f0bed] hover:bg-[#191626] ${service.className}`}
            >
              <Link href={`/services/${service.slug}`} className="block h-full">
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl border border-[#32294d] bg-[#1c172b] text-[#a855f7] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#7f0bed] group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-display mb-3 text-2xl font-bold text-white transition-colors group-hover:text-[#c084fc]">
                    {service.title}
                  </h3>

                  <p className="text-base leading-relaxed text-slate-300">
                    {service.desc}
                  </p>

                  <div className="mt-auto pt-6 flex items-center gap-1.5 text-sm font-semibold text-[#a855f7] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#c084fc]">
                    <span>Explore Service</span>
                    <ArrowRight className="h-4 w-4" />
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
