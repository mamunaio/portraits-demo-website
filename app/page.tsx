import Hero from "@/components/Hero";
import FeaturedGallery from "@/components/FeaturedGallery";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Intro Section - Asymmetric Layout in Dark Theme */}
      <section className="py-24 md:py-32 bg-brand-background px-6 border-b border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Image Col (7 columns) */}
            <div className="md:col-span-7 relative aspect-[4/3] w-full overflow-hidden shadow-sm rounded-3xl group">
              <Image
                src="https://picsum.photos/id/1025/1200/900"
                alt="Portrait session outdoors"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>

            {/* Text Col (4 columns, 1 col offset) */}
            <div className="md:col-start-9 md:col-span-4 flex flex-col justify-center glass p-8 md:p-10 rounded-3xl">
              <span className="eyebrow mb-4">Our Story</span>
              <h2 className="font-serif text-[var(--text-h2)] md:text-[var(--text-h2--md)] text-brand-cream mb-8 leading-tight">
                Authentic & unposed.
              </h2>
              <div className="text-[var(--text-body)] font-light text-brand-cream/70 leading-relaxed space-y-6 mb-10">
                <p>
                  I believe the best portraits happen when you drop the poses and just breathe. My approach is rooted in honesty—capturing the quiet strength, the genuine laughter, and the unique energy that makes you, you.
                </p>
                <p>
                  Whether we're shooting a creative branding session or a chaotic, beautiful family afternoon, my goal is to document it with an editorial eye and a warm heart.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center text-sm uppercase tracking-widest text-brand-cream hover:text-brand-brown transition-colors duration-300 group/link"
              >
                Get to know me
                <span className="ml-4 w-12 border-b border-brand-cream/50 group-hover/link:border-brand-brown group-hover/link:w-16 transition-all duration-300"></span>
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      <ServicesPreview />

      <FeaturedGallery />

      <Testimonials />

      {/* CTA Section - Dark Glass Theme */}
      <section className="relative py-32 md:py-48 text-center px-6 bg-brand-background overflow-hidden">
        {/* Subtle Grain Overlay */}
        <div className="bg-grain opacity-20 pointer-events-none absolute inset-0 z-0" />
        
        <div className="relative z-10 container mx-auto max-w-2xl flex flex-col items-center glass p-12 md:p-16 rounded-[3rem]">
          <span className="eyebrow mb-6 text-brand-brown">Bookings</span>
          <h2 className="font-serif text-[var(--text-h2)] md:text-[var(--text-h2--md)] text-brand-cream mb-6 leading-tight">
            Ready to tell your story?
          </h2>
          <p className="font-light text-brand-cream/70 mb-12 text-[var(--text-body)] md:text-[var(--text-body--md)] text-balance">
            Let's create something beautiful together. Booking limited sessions for the upcoming season.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-cream text-brand-background px-10 py-4 text-sm font-bold uppercase tracking-widest hover:scale-105 hover:bg-brand-brown hover:text-brand-cream shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </>
  );
}
