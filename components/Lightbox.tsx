"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  setIndex: (index: number) => void;
}

export default function Lightbox({ images, currentIndex, onClose, setIndex }: LightboxProps) {
  
  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      setIndex((currentIndex + 1) % images.length);
    }
  }, [currentIndex, images.length, setIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      setIndex((currentIndex - 1 + images.length) % images.length);
    }
  }, [currentIndex, images.length, setIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onClose, handleNext, handlePrev]);

  // Lock body scroll
  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [currentIndex]);

  return (
    <AnimatePresence>
      {currentIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
        >
          {/* Controls */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
            aria-label="Close Lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-2"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-2"
            aria-label="Next Image"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full h-full max-w-5xl max-h-full cursor-default"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image
              src={images[currentIndex]}
              alt="Enlarged gallery view"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </motion.div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-serif tracking-widest text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
