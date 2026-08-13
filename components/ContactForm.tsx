"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-8 text-center rounded-3xl"
      >
        <h3 className="font-serif text-2xl mb-4 text-brand-brown">Thank you!</h3>
        <p className="text-brand-cream/80">Your message has been received. I will be in touch within 48 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 glass p-8 rounded-3xl">
      <div>
        <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2 text-brand-brown">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-transparent border-b border-brand-cream/20 py-3 text-brand-cream focus:outline-none focus:border-brand-brown transition-colors placeholder:text-brand-cream/20"
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2 text-brand-brown">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-transparent border-b border-brand-cream/20 py-3 text-brand-cream focus:outline-none focus:border-brand-brown transition-colors placeholder:text-brand-cream/20"
          placeholder="hello@example.com"
        />
      </div>

      <div>
        <label htmlFor="sessionType" className="block text-sm uppercase tracking-widest mb-2 text-brand-brown">Session Type</label>
        <select
          id="sessionType"
          name="sessionType"
          required
          className="w-full bg-brand-surface border-b border-brand-cream/20 py-3 text-brand-cream focus:outline-none focus:border-brand-brown transition-colors appearance-none cursor-pointer"
        >
          <option value="" disabled defaultValue="">Select a session</option>
          <option value="portrait">Individual Portrait / Senior</option>
          <option value="family">Family / Lifestyle</option>
          <option value="branding">Brand / Editorial</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="date" className="block text-sm uppercase tracking-widest mb-2 text-brand-brown">Preferred Date / Season</label>
        <input
          type="text"
          id="date"
          name="date"
          className="w-full bg-transparent border-b border-brand-cream/20 py-3 text-brand-cream focus:outline-none focus:border-brand-brown transition-colors placeholder:text-brand-cream/20"
          placeholder="e.g., Early Fall"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2 text-brand-brown">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full bg-transparent border-b border-brand-cream/20 py-3 text-brand-cream focus:outline-none focus:border-brand-brown transition-colors resize-none placeholder:text-brand-cream/20"
          placeholder="Tell me a bit about what you're envisioning..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-brand-cream text-brand-background uppercase tracking-widest text-sm font-bold py-4 hover:bg-brand-brown transition-colors disabled:opacity-50 rounded-full"
      >
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>

      {status === "error" && (
        <p className="text-red-500 text-sm mt-4 text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
