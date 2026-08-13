"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "./Lightbox";

const categories = ["All", "Portraits", "Family", "Seniors", "Lifestyle"];

const portfolioImages = [
  { id: 1, category: "Portraits", src: "https://picsum.photos/id/1011/800/1000" },
  { id: 2, category: "Portraits", src: "https://picsum.photos/id/1012/800/1000" },
  { id: 3, category: "Family", src: "https://picsum.photos/id/1027/800/1000" },
  { id: 4, category: "Family", src: "https://picsum.photos/id/1025/800/1000" },
  { id: 5, category: "Seniors", src: "https://picsum.photos/id/1062/800/1000" },
  { id: 6, category: "Seniors", src: "https://picsum.photos/id/1068/800/1000" },
  { id: 7, category: "Lifestyle", src: "https://picsum.photos/id/1074/800/1000" },
  { id: 8, category: "Lifestyle", src: "https://picsum.photos/id/1084/800/1000" },
  { id: 9, category: "Lifestyle", src: "https://picsum.photos/id/1093/800/1000" },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = portfolioImages.filter(
    (img) => activeCategory === "All" || img.category === activeCategory
  );

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative text-sm uppercase tracking-widest px-2 py-2 transition-colors ${
              activeCategory === cat ? "text-brand-cream" : "text-brand-cream/50 hover:text-brand-cream"
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <motion.div
                layoutId="activeFilter"
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-cream"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[350px]"
      >
        <AnimatePresence>
          {filteredImages.map((img, i) => {
            // Pseudo-random bento sizing based on index for the full gallery
            let bentoClass = "md:col-span-1 md:row-span-1";
            if (i % 7 === 0) bentoClass = "md:col-span-2 md:row-span-2";
            else if (i % 5 === 0) bentoClass = "md:col-span-2 md:row-span-1";

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                key={img.id}
                className={`relative cursor-zoom-in group overflow-hidden bg-brand-surface rounded-2xl md:rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-brand-cream/5 transition-all duration-500 ${bentoClass}`}
                onClick={() => setSelectedImageIndex(filteredImages.indexOf(img))}
              >
                <Image
                  src={img.src}
                  alt={`${img.category} portrait photography`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Cinematic Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-start justify-end p-6">
                  <span className="text-white uppercase tracking-[0.2em] text-xs font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <Lightbox 
        images={filteredImages.map(img => img.src)} 
        currentIndex={selectedImageIndex} 
        onClose={() => setSelectedImageIndex(null)}
        setIndex={setSelectedImageIndex}
      />
    </div>
  );
}
