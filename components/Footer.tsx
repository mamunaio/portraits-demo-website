import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-background border-t border-white/5 pt-24 pb-12 mt-auto">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-3xl mb-4 block tracking-wide text-brand-cream">
              Wild & Wilder
            </Link>
            <p className="text-brand-cream/70 font-light max-w-sm mt-4 text-[var(--text-body)]">
              Soulful portrait and lifestyle photography for the wildly authentic. Based in Portland, OR.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-brown">Quick Links</h4>
            <div className="flex flex-col space-y-3 text-sm uppercase tracking-widest text-brand-cream/70">
              <Link href="/about" className="hover:text-brand-brown transition-colors flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                About
              </Link>
              <Link href="/portfolio" className="hover:text-brand-brown transition-colors flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                Portfolio
              </Link>
              <Link href="/sessions" className="hover:text-brand-brown transition-colors flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                Sessions
              </Link>
              <Link href="/contact" className="hover:text-brand-brown transition-colors flex items-center group">
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-brown">Connect</h4>
            <div className="flex flex-col space-y-4 text-sm tracking-widest text-brand-cream/70">
              <a href="#" className="hover:text-brand-brown transition-colors flex items-center uppercase group">
                <span className="w-6 border-b border-brand-cream/30 mr-3 group-hover:border-brand-brown group-hover:w-8 transition-all"></span>
                Instagram
              </a>
              <a href="#" className="hover:text-brand-brown transition-colors flex items-center uppercase group">
                <span className="w-6 border-b border-brand-cream/30 mr-3 group-hover:border-brand-brown group-hover:w-8 transition-all"></span>
                Facebook
              </a>
              <a href="mailto:hello@example.com" className="hover:text-brand-brown transition-colors flex items-center uppercase group">
                <span className="w-6 border-b border-brand-cream/30 mr-3 group-hover:border-brand-brown group-hover:w-8 transition-all"></span>
                <Mail className="w-4 h-4 mr-2" /> Email
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-brand-cream/30">
          <p>&copy; {new Date().getFullYear()} Wild & Wilder Portraits.</p>
          <p className="mt-2 md:mt-0">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
