import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import GalleryGrid from "../components/GalleryGrid";
import CTASection from "../components/CTASection";

const HERO = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=70";

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Our Gallery"
        subtitle="Buffets, table settings, live stations, desserts, and celebrations we've brought to life."
        image={HERO}
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Moments We've Catered"
            subtitle="Filter by category and click any image to view it in full size."
          />
          <GalleryGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
