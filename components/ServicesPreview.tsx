"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Portrait & Senior",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    desc: "Soulful, authentic portraits capturing who you are in this exact moment."
  },
  {
    title: "Family & Lifestyle",
    image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?auto=format&fit=crop&q=80&w=800",
    desc: "Unposed, playful moments focused on your deep connections."
  },
  {
    title: "Brand & Editorial",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=800",
    desc: "Intentional imagery to elevate your business and story."
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-32 bg-brand-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <span className="eyebrow mb-4 block">Offerings</span>
          <h2 className="font-serif text-[var(--text-h2)] md:text-[var(--text-h2--md)] text-brand-cream">
            Ways we can work together
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer relative rounded-3xl overflow-hidden aspect-[3/4]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-background/90 via-brand-background/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-serif text-2xl text-brand-cream mb-2">{service.title}</h3>
                <p className="text-brand-cream/70 font-light text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                  {service.desc}
                </p>
                <div className="w-8 h-8 rounded-full border border-brand-cream/30 flex items-center justify-center text-brand-cream group-hover:bg-brand-cream group-hover:text-brand-background transition-colors duration-300">
                  →
                </div>
              </div>
              <Link href="/sessions" className="absolute inset-0" aria-label={`View ${service.title} session details`} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/sessions"
            className="inline-block border border-brand-cream/30 text-brand-cream px-10 py-4 text-sm uppercase tracking-widest hover:bg-brand-cream hover:text-brand-background transition-colors duration-300 rounded-full"
          >
            View All Investment Details
          </Link>
        </div>
      </div>
    </section>
  );
}
