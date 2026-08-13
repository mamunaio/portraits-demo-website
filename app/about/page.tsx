import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "About | Wild & Wilder Portraits",
  description: "Meet the photographer behind Wild & Wilder Portraits.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-brand-background">
      {/* Bio Section */}
      <section className="container mx-auto px-6 max-w-6xl mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] w-full group overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=800"
              alt="Photographer holding a camera"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="eyebrow mb-4">Behind the Lens</span>
            <h1 className="font-serif text-[var(--text-h2)] md:text-[var(--text-h2--md)] text-brand-cream mb-6 leading-tight">Hello, I'm Alex.</h1>
            <div className="space-y-6 text-brand-cream/70 font-light leading-relaxed text-[var(--text-body)] md:text-[var(--text-body--md)]">
              <p>
                I've always been drawn to the in-between moments. Not the stiff, posed smiles, but the laughter right after, the quiet contemplation, the messy hair blowing in the wind. That's where the magic lives.
              </p>
              <p>
                My approach to photography is simple: make you feel comfortable enough to be entirely yourself. Whether we're wandering through a sun-drenched field for your senior photos, exploring the city streets for your personal branding, or rolling around on a living room rug with your kids, I am there to document the raw, unfiltered truth of who you are.
              </p>
              <p>
                My style is deeply inspired by analog film—warm, emotive, and a little bit moody. I chase good light and genuine connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Strip */}
      <section className="bg-brand-surface py-20 mb-32 border-y border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-center uppercase tracking-[0.2em] text-xs font-semibold text-brand-cream/40 mb-10">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale font-serif text-2xl tracking-wider text-brand-cream">
            <span>VOGUE</span>
            <span>KINFOLK</span>
            <span>CEREAL</span>
            <span>IGNANT</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-serif text-[var(--text-h3)] md:text-[var(--text-h3--md)] text-center mb-16 text-brand-cream">Frequently Asked Questions</h2>
        <FAQAccordion />
      </section>
    </div>
  );
}
