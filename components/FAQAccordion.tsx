"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="glass px-8 py-2 rounded-2xl mb-4 group/accordion">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left focus:outline-none py-6"
      >
        <h3 className="font-serif text-xl text-brand-cream group-hover/accordion:text-brand-brown transition-colors">
          {question}
        </h3>
        <span className="text-brand-cream/50 ml-4 shrink-0 transition-colors group-hover/accordion:text-brand-brown">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-cream/60 font-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqs = [
  {
    question: "What is your editing style?",
    answer: "I edit with a moody, film-inspired aesthetic. My colors are earthy and warm, focusing on rich skin tones, deep contrast, and natural grain. I do not do heavy skin retouching or body alteration because I believe you are beautiful exactly as you are."
  },
  {
    question: "What should I wear?",
    answer: "Upon booking, I'll send over a comprehensive styling guide! Generally, I recommend earthy neutrals, muted tones, and lots of texture (linen, knits, corduroy). Avoid heavy logos, neon colors, and perfectly matching family outfits."
  },
  {
    question: "What is the turnaround time for galleries?",
    answer: "For standard portrait sessions (individuals, families, seniors, branding), your fully edited high-resolution gallery will be delivered via a private online link within 2 to 3 weeks of our shoot date."
  },
  {
    question: "Do you travel for sessions?",
    answer: "Absolutely. While I'm based in Portland, OR, I love traveling for editorial and branding sessions. Travel fees apply for locations over 60 miles outside of my home base."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <FAQItem
          key={i}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === i}
          onClick={() => handleClick(i)}
        />
      ))}
    </div>
  );
}
