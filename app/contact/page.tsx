import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export const metadata = {
  title: "Contact | Wild & Wilder Portraits",
  description: "Get in touch to book your portrait session.",
};

export default function ContactPage() {
  return (
    <div className="pt-40 pb-32 bg-brand-background min-h-screen">
      <header className="container mx-auto px-6 max-w-4xl text-center mb-24">
        <span className="eyebrow mb-6 block">Inquire</span>
        <h1 className="font-serif text-[var(--text-h1)] md:text-[var(--text-h1--md)] text-brand-cream mb-8 leading-tight">Let's Connect</h1>
        <p className="text-brand-cream/80 text-[var(--text-body)] md:text-[var(--text-body--md)] font-light text-balance mx-auto">
          I would love to hear from you. Fill out the form below to start planning your session.
        </p>
      </header>

      <section className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <div>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="relative aspect-[4/3] w-full mb-12 overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?auto=format&fit=crop&q=80&w=800"
                alt="Camera equipment on table"
                fill
                className="object-cover opacity-80"
              />
            </div>
            
            <div className="glass p-8 rounded-3xl">
              <h3 className="font-serif text-2xl text-brand-cream mb-6">Studio Info</h3>
              
              <div className="space-y-4 text-brand-cream/70 font-light text-sm">
                <div>
                  <strong className="block font-medium uppercase tracking-widest text-xs mb-1 text-brand-brown">Email</strong>
                  hello@wildandwilder.placeholder
                </div>
                <div>
                  <strong className="block font-medium uppercase tracking-widest text-xs mb-1 text-brand-brown">Hours</strong>
                  Mon-Fri, 9am - 5pm PST
                </div>
                <div>
                  <strong className="block font-medium uppercase tracking-widest text-xs mb-1 text-brand-brown">Location</strong>
                  Based in Portland, Oregon.<br />
                  Available for travel worldwide.
                </div>
              </div>
              
              <p className="mt-8 text-xs text-brand-cream/40 uppercase tracking-widest">
                Please allow 48-72 hours for a response during normal business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
