import SessionCard from "@/components/SessionCard";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

export const metadata = {
  title: "Investment & Sessions | Wild & Wilder Portraits",
  description: "Session packages, pricing, and the booking process.",
};

const sessions = [
  {
    title: "Portrait & Senior",
    price: "From $450",
    description: "Celebrate a milestone or simply capture who you are in this exact season of life. Perfect for high school seniors, creatives, or anyone wanting a soulful portrait session.",
    features: [
      "1-2 hour session on location",
      "2-3 outfit changes",
      "Styling consultation",
      "50+ edited high-res images"
    ]
  },
  {
    title: "Family & Lifestyle",
    price: "From $550",
    description: "Embrace the beautiful chaos. These sessions are unposed, playful, and focused on the deep connection between you and your loved ones, either at home or outdoors.",
    features: [
      "1-2 hour relaxed session",
      "Location of choice (home/outdoor)",
      "Focus on authentic interaction",
      "75+ edited high-res images"
    ]
  },
  {
    title: "Brand & Editorial",
    price: "Custom Quote",
    description: "Elevate your business with intentional, magazine-quality imagery. We'll work together to craft visual stories that communicate your brand's unique ethos and aesthetic.",
    features: [
      "Pre-shoot strategy call",
      "Moodboard creation",
      "Half-day or full-day coverage",
      "Commercial usage rights"
    ]
  }
];

export default function SessionsPage() {
  return (
    <div className="bg-brand-background min-h-screen">
      <Hero
        title="Investment"
        eyebrow="Services"
        subtitle="Every session is thoughtfully curated to reflect your unique story, combining editorial direction with documentary-style moments."
        imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1920"
        imageAlt="Sessions hero background"
      />

      {/* Services Grid */}
      <section className="container mx-auto px-6 max-w-7xl mt-32 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sessions.map((session, i) => (
            <SessionCard
              key={i}
              title={session.title}
              price={session.price}
              description={session.description}
              features={session.features}
              delay={i * 0.1}
            />
          ))}
        </div>
      </section>

      {/* The Process */}
      <section className="bg-brand-surface py-32 border-y border-white/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-grain opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h2 className="font-serif text-[var(--text-h2)] md:text-[var(--text-h2--md)] text-center mb-20 text-brand-cream">The Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            
            <div className="text-center glass p-8 rounded-3xl">
              <div className="font-serif text-5xl text-brand-brown mb-4 opacity-50">01</div>
              <h3 className="font-serif text-xl mb-2 text-brand-cream">Inquire</h3>
              <p className="text-sm font-light text-brand-cream/60">Reach out via the contact form. We'll make sure our visions align and secure a date on the calendar.</p>
            </div>
            
            <div className="text-center glass p-8 rounded-3xl md:translate-y-8">
              <div className="font-serif text-5xl text-brand-brown mb-4 opacity-50">02</div>
              <h3 className="font-serif text-xl mb-2 text-brand-cream">Plan</h3>
              <p className="text-sm font-light text-brand-cream/60">I'll send over a styling guide and questionnaire so we can craft a session that feels authentic to you.</p>
            </div>
            
            <div className="text-center glass p-8 rounded-3xl">
              <div className="font-serif text-5xl text-brand-brown mb-4 opacity-50">03</div>
              <h3 className="font-serif text-xl mb-2 text-brand-cream">Shoot</h3>
              <p className="text-sm font-light text-brand-cream/60">The fun part! No awkward posing—just a relaxed, directed session focusing on movement and connection.</p>
            </div>
            
            <div className="text-center glass p-8 rounded-3xl md:translate-y-8">
              <div className="font-serif text-5xl text-brand-brown mb-4 opacity-50">04</div>
              <h3 className="font-serif text-xl mb-2 text-brand-cream">Deliver</h3>
              <p className="text-sm font-light text-brand-cream/60">Within 2-3 weeks, you'll receive a beautiful online gallery of high-resolution images ready to download.</p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 max-w-4xl py-32">
        <h2 className="font-serif text-[var(--text-h2)] md:text-[var(--text-h2--md)] text-center mb-16 text-brand-cream">Common Questions</h2>
        <FAQAccordion />
      </section>

      {/* CTA Section */}
      <section className="relative py-32 text-center px-6 bg-brand-background overflow-hidden border-t border-white/5">
        <div className="bg-grain opacity-20 pointer-events-none absolute inset-0 z-0" />
        <div className="relative z-10 container mx-auto max-w-2xl flex flex-col items-center glass p-12 md:p-16 rounded-[3rem]">
          <span className="eyebrow mb-6 text-brand-brown">Ready to book?</span>
          <h2 className="font-serif text-[var(--text-h2)] md:text-[var(--text-h2--md)] text-brand-cream mb-6 leading-tight">
            Let's create magic.
          </h2>
          <p className="font-light text-brand-cream/70 mb-12 text-[var(--text-body)] md:text-[var(--text-body--md)] text-balance">
            I'm currently accepting a limited number of sessions for the upcoming season. Reach out to secure your spot.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-cream text-brand-background px-10 py-4 text-sm font-bold uppercase tracking-widest hover:scale-105 hover:bg-brand-brown hover:text-brand-cream shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full"
          >
            Inquire Now
          </Link>
        </div>
      </section>
    </div>
  );
}
