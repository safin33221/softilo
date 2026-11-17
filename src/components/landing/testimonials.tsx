import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CMO, Nova Schools",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    text: "Softilo completely transformed our digital presence. Enrollments are up 40% since they took over our branding and social campaigns.",
  },
  {
    name: "David Chen",
    role: "Founder, Aura Dining",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    text: "The commercial video content they produced for our restaurant launch went viral locally. Truly an agency that understands modern aesthetics.",
  },
  {
    name: "Elena Rodriguez",
    role: "Director, Elevate Real Estate",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    text: "Their structured approach to our property listings and brand identity helped us secure higher-end clients within months.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#0b0912] py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display mb-4 text-4xl font-bold text-white md:text-6xl"
          >
            Client <span className="text-[#a855f7]">Success</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative rounded-3xl border border-[#262038] bg-[#13111c] p-8 transition-all duration-300 hover:border-[#7f0bed] hover:bg-[#191626]"
            >
              <Quote className="absolute right-8 top-8 h-9 w-9 text-[#262038]" />

              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-4 w-4 fill-[#a855f7] text-[#a855f7]"
                  />
                ))}
              </div>

              <p className="relative z-10 mb-8 text-base leading-relaxed text-slate-200">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#32294d]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
