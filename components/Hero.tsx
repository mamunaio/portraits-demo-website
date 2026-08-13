"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MouseEvent } from "react";

interface HeroProps {
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  title = "The Wild & Authentic",
  eyebrow = "Documenting",
  subtitle = "Cinematic portraiture for those who live boldly and love deeply.",
  imageSrc = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1920",
  imageAlt = "Moody portrait photography background",
}: HeroProps = {}) {
  // 3D Tilt Effect Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  return (
    <section 
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-background via-brand-background/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-background/30 via-transparent to-brand-background/50" />
      </motion.div>
      
      {/* Film Grain */}
      <div className="bg-grain" />

      {/* 3D Interactive Content */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 mt-16 max-w-7xl w-full flex flex-col items-center"
      >
        <motion.h1 
          variants={textVariants}
          style={{ translateZ: "50px" }}
          className="font-serif text-[clamp(3rem,8vw,8rem)] text-brand-cream leading-[0.9] tracking-tight mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        >
          {eyebrow && <span className="block text-brand-brown/80 italic font-light text-2xl md:text-4xl mb-4 tracking-normal">{eyebrow}</span>}
          {title}
        </motion.h1>
        
        <motion.div variants={textVariants} style={{ translateZ: "30px" }}>
          <p className="text-lg md:text-xl text-brand-cream/70 font-light max-w-xl mx-auto tracking-wide leading-relaxed glass px-8 py-4 rounded-2xl">
            {subtitle}
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 z-10 text-brand-brown flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-70">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
