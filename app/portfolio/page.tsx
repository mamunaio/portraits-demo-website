import GalleryGrid from "@/components/GalleryGrid";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Portfolio | Wild & Wilder Portraits",
  description: "Explore the portrait photography portfolio.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-brand-background min-h-screen">
      <Hero
        title="Portfolio"
        eyebrow="Selected Work"
        subtitle="Stories told in natural light and genuine emotion."
        imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1920"
        imageAlt="Portfolio hero background"
      />

      <section className="container mx-auto px-6 max-w-7xl pt-32 pb-32">
        <GalleryGrid />
      </section>
    </div>
  );
}
