"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const images = [
  "https://picsum.photos/id/1011/800/1000",
  "https://picsum.photos/id/1012/800/1000",
  "https://picsum.photos/id/1027/800/1000",
  "https://picsum.photos/id/1025/800/1000",
  "https://picsum.photos/id/1062/800/1000",
  "https://picsum.photos/id/1068/800/1000",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function FeaturedGallery() {
  return (
    <section className="py-32 bg-brand-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="font-serif text-[var(--text-h2)] md:text-[var(--text-h2--md)] text-center mb-16 text-brand-cream">Recent Work</h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]"
        >
          {images.map((src, i) => {
            let bentoClass = "md:col-span-1 md:row-span-1";
            
            if (i === 0) bentoClass = "md:col-span-2 md:row-span-2"; // Big feature
            else if (i === 3) bentoClass = "md:col-span-2 md:row-span-1"; // Wide feature

            return (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                className={`relative group overflow-hidden bg-brand-surface rounded-3xl ${bentoClass}`}
              >
                <Image
                  src={src}
                  alt="Featured portrait photography"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Premium Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-background/80 via-brand-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-8">
                  <span className="text-white uppercase tracking-[0.2em] text-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 font-medium">
                    Explore Session
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <div className="mt-20 text-center">
          <Link
            href="/portfolio"
            className="inline-block border border-brand-cream/30 text-brand-cream px-10 py-4 text-sm uppercase tracking-widest hover:bg-brand-cream hover:text-brand-background transition-colors duration-300 rounded-full"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
