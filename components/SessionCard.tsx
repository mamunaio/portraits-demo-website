"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface SessionCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  delay: number;
}

export default function SessionCard({ title, price, description, features, delay }: SessionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="glass p-8 md:p-12 shadow-sm flex flex-col h-full rounded-3xl"
    >
      <h2 className="font-serif text-3xl mb-2 text-brand-cream">{title}</h2>
      <p className="font-serif text-xl text-brand-brown mb-6">{price}</p>
      <p className="text-brand-cream/70 mb-8 font-light leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-10 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm text-brand-cream/80">
            <span className="text-brand-brown mr-3">•</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link
        href="/contact"
        className="block text-center border border-brand-cream/30 text-brand-cream px-6 py-3 text-sm uppercase tracking-widest hover:bg-brand-cream hover:text-brand-background transition-colors duration-300 rounded-full"
      >
        Inquire
      </Link>
    </motion.div>
  );
}
