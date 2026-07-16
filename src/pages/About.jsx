import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import Counter from "../components/Counter";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";
import { STATS } from "../data/site";

const HERO = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=70";
const STORY = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=70";
const CHEF = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=70";

export default function About() {
  return (
    <>
      <PageHero
        title="About Siddique Sons"
        subtitle="A family tradition of exceptional food, warm hospitality, and events done right."
        image={HERO}
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SmartImage
              src={STORY}
              alt="Siddique Sons chefs preparing fresh food in a professional kitchen"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
            />
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="Our Story" title="Born from a Passion for Great Food" />
            <Reveal delay={0.1}>
              <p className="text-sm leading-relaxed text-charcoal/75 sm:text-base">
                Siddique Sons Catering Services began as a family promise: that every guest
                at every event deserves food prepared with care, served with warmth, and
                presented with pride. Over years of serving weddings, corporate functions,
                and community gatherings, that promise has never changed.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/75 sm:text-base">
                Today, our team of professional chefs, coordinators, and service staff
                caters events of every scale — from intimate dinners of twenty to grand
                receptions of two thousand — always with the same obsession for freshness,
                hygiene, and hospitality.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-gold-soft/50 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="rounded-3xl bg-white p-10 shadow-lg">
            <h3 className="font-display text-2xl font-bold text-maroon">Our Mission</h3>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
              To make every event unforgettable through fresh ingredients, hygienic
              preparation, customized menus, and warm, professional service — delivered
              on time, every time, at a price our clients can trust.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="rounded-3xl bg-maroon p-10 shadow-lg">
            <h3 className="font-display text-2xl font-bold text-gold">Our Vision</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              To be the region's most trusted name in premium catering — the first call
              families and businesses make when they want their event to be extraordinary.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-maroon py-16" aria-label="Our achievements">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {STATS.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* Team / craft */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="order-2 lg:order-1">
            <SectionHeading align="left" eyebrow="Our Craft" title="Chefs Who Cook with Heart" />
            <Reveal delay={0.1}>
              <p className="text-sm leading-relaxed text-charcoal/75 sm:text-base">
                Our kitchen brings together specialists in Pakistani and Mughlai classics,
                live BBQ, continental cuisine, and patisserie. Every dish is prepared in a
                hygienic kitchen using market-fresh produce and 100% halal meats — then
                presented with the elegance your event deserves.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-charcoal/75">
                {["Multi-cuisine specialist chefs", "Strict hygiene & food safety protocols", "Fresh, locally sourced ingredients", "Elegant presentation on every plate"].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="order-1 lg:order-2">
            <SmartImage
              src={CHEF}
              alt="Professional chef carefully plating a gourmet dish"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-gold-soft/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="What Sets Us Apart" />
          <WhyChooseUs />
        </div>
      </section>

      <CTASection />
    </>
  );
}
