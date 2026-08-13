"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Alex has a way of making you forget the camera is even there. The photos felt so true to who we are. Absolutely magical.",
    name: "Sarah & Mark",
    session: "Family Session"
  },
  {
    quote: "These are the first portraits I've ever had taken where I genuinely recognized myself. The light, the mood—everything was perfect.",
    name: "Elena R.",
    session: "Portrait Session"
  },
  {
    quote: "An incredible eye for detail. The branding photos elevated my business instantly. Worth every penny.",
    name: "David K.",
    session: "Editorial Branding"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-brand-surface relative overflow-hidden border-y border-white/5">
      {/* Decorative grain */}
      <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <span className="eyebrow mb-12 block">Kind Words</span>
        
        <div className="h-[250px] md:h-[200px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] text-brand-cream leading-snug mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <strong className="block text-brand-cream text-sm uppercase tracking-widest mb-1">{testimonials[currentIndex].name}</strong>
                <span className="text-brand-cream/50 text-xs uppercase tracking-widest">{testimonials[currentIndex].session}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentIndex ? "w-8 bg-brand-brown" : "w-2 bg-brand-cream/20 hover:bg-brand-cream/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
