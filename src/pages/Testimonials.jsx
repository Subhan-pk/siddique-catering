import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import TestimonialSlider from "../components/TestimonialSlider";
import CTASection from "../components/CTASection";
import { TESTIMONIALS } from "../data/testimonials";

const HERO = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=70";
const initials = (name) => name.split(" ").map((w) => w[0]).join("").slice(0, 2);

export default function Testimonials() {
  return (
    <>
      <PageHero
        title="Client Testimonials"
        subtitle="The kindest words come from the tables we've served."
        image={HERO}
        crumbs={[{ label: "Testimonials" }]}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Review"
            title="What Our Clients Say"
          />
          <TestimonialSlider />
        </div>
      </section>

      <section className="bg-gold-soft/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="All Reviews" title="Every Event, A Happy Host" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="flex flex-col rounded-2xl bg-white p-7 shadow-md transition-all hover:-translate-y-1.5 hover:shadow-xl"
              >
                <FaQuoteLeft className="text-2xl text-gold/40" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/75">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-charcoal/10 pt-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-maroon to-maroon-dark font-display font-bold text-gold">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="font-display font-bold text-maroon-deep">{t.name}</p>
                    <p className="text-xs text-charcoal/50">{t.location}</p>
                    <div className="mt-1 flex gap-0.5 text-xs text-gold" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, k) => (
                        <FaStar key={k} className={k < t.rating ? "" : "text-charcoal/15"} aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
