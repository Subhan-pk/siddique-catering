import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import FAQAccordion from "../components/FAQAccordion";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import { FAQS } from "../data/faqs";

const HERO = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=70";

export default function FAQ() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking your event with us."
        image={HERO}
        crumbs={[{ label: "FAQs" }]}
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Help Center"
            title="Your Questions, Answered"
            subtitle="Can't find what you're looking for? We're one message away."
          />
          <FAQAccordion faqs={FAQS} />
          <Reveal className="mt-14 text-center">
            <p className="text-sm text-charcoal/70">Still have questions?</p>
            <Link
              to="/contact"
              className="mt-4 inline-block rounded-full bg-maroon px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-maroon-dark"
            >
              Contact Our Team
            </Link>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
