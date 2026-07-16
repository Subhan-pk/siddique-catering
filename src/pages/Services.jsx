import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import { SERVICES } from "../data/services";

const HERO = "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=70";

export default function Services() {
  const [query, setQuery] = useState("");
  const filtered = SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.short.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <PageHero
        title="Our Catering Services"
        subtitle="Fifteen specialized catering services — one standard of excellence."
        image={HERO}
        crumbs={[{ label: "Services" }]}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Find the Perfect Service for Your Event"
            subtitle="Search or browse our complete range of professional catering services."
          />

          {/* Search */}
          <div className="mx-auto mb-14 max-w-xl">
            <div className="relative">
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-maroon/40" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services... e.g. wedding, BBQ, corporate"
                aria-label="Search services"
                className="w-full rounded-full border border-charcoal/15 bg-white py-4 pl-12 pr-5 text-sm shadow-md transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((s, i) => (
                <ServiceCard key={s.slug} service={s} index={i} />
              ))}
            </div>
          ) : (
            <p className="text-center text-charcoal/60">
              No services match “{query}”. Try a different keyword, or{" "}
              <a href="/contact" className="font-semibold text-maroon underline">contact us</a> —
              we love custom requests.
            </p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
