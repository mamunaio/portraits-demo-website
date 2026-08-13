"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Sessions", href: "/sessions" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-6"
      >
        <div className={`transition-all duration-500 ease-out flex items-center justify-between px-8 py-4 rounded-full ${scrolled ? 'glass-dark' : 'bg-transparent'}`}>
          <Link href="/" className="font-serif text-xl tracking-widest text-brand-cream hover:text-brand-brown transition-colors">
            W&W
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-brand-cream/80 hover:text-brand-cream transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-brand-cream group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-brand-cream"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-brand-background/80 flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-8 right-8 text-brand-cream/70 hover:text-brand-cream transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-4xl text-brand-cream hover:text-brand-brown transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
