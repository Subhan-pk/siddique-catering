import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { SITE } from "../data/site";

const SECTIONS = [
  {
    h: "Bookings & Quotations",
    p: "All quotations are prepared based on the event details you provide (date, guest count, menu, and location). Quotations are valid for a limited period and may be revised if event details change. A booking is confirmed once agreed between you and our team.",
  },
  {
    h: "Payments",
    p: "Payment terms, including any advance or deposit requirements, will be communicated with your quotation. Final guest counts and menu selections must be confirmed by the agreed deadline before your event.",
  },
  {
    h: "Changes & Cancellations",
    p: "We understand plans change. Please notify us as early as possible of any changes to your event. Cancellation terms, including any applicable charges for preparations already made, will be outlined in your booking confirmation.",
  },
  {
    h: "Food Safety & Allergies",
    p: "All food is prepared in a hygienic kitchen following food safety standards, using 100% halal ingredients. Please inform us in advance of any allergies or dietary requirements so we can accommodate them safely.",
  },
  {
    h: "Liability",
    p: "While we take every care in preparing and serving your event, our liability is limited to the value of the catering services provided. We are not responsible for delays or failures caused by circumstances beyond our reasonable control.",
  },
  {
    h: "Contact",
    p: `For any questions about these terms, contact us at ${SITE.email} or ${SITE.phone}.`,
  },
];

export default function Terms() {
  return (
    <>
      <PageHero title="Terms & Conditions" crumbs={[{ label: "Terms & Conditions" }]} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
          <Reveal>
            <p className="text-sm leading-relaxed text-charcoal/70">
              These terms govern bookings and services provided by {SITE.name}.
              By booking with us, you agree to the terms below.
            </p>
          </Reveal>
          {SECTIONS.map((s, i) => (
            <Reveal key={s.h} delay={i * 0.05}>
              <h2 className="font-display text-xl font-bold text-maroon-deep">{s.h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{s.p}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
