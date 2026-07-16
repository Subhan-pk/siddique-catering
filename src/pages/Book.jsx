import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaClock } from "react-icons/fa";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import BookingForm from "../components/BookingForm";
import Reveal from "../components/Reveal";
import { SITE, whatsappLink } from "../data/site";

const HERO = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=70";

const CONTACTS = [
  { icon: FaPhoneAlt, label: "Call Us", value: SITE.phone, href: SITE.phoneHref },
  { icon: FaWhatsapp, label: "WhatsApp", value: "Chat with our team", href: whatsappLink() },
  { icon: FaEnvelope, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: FaClock, label: "Working Hours", value: SITE.hours },
];

export default function Book() {
  return (
    <>
      <PageHero
        title="Book Your Catering"
        subtitle="Tell us about your event and receive a free, customized quotation."
        image={HERO}
        crumbs={[{ label: "Book Catering" }]}
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get a Quote"
            title="Let's Plan Something Delicious"
            subtitle="Fill in your event details below — our team responds quickly with a tailored menu and quote."
          />
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
            <aside className="space-y-4">
              {CONTACTS.map((c, i) => {
                const Icon = c.icon;
                const inner = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-lg text-maroon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-gold">{c.label}</span>
                      <span className="mt-0.5 block text-sm font-medium text-charcoal">{c.value}</span>
                    </span>
                  </>
                );
                return (
                  <Reveal key={c.label} delay={i * 0.08}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md">{inner}</div>
                    )}
                  </Reveal>
                );
              })}
              <Reveal delay={0.4} className="rounded-2xl bg-maroon p-6 text-center">
                <p className="font-display text-lg font-bold text-gold">Booking Tip</p>
                <p className="mt-2 text-xs leading-relaxed text-white/80">
                  For weddings and large events, book 3–4 weeks in advance to secure your
                  preferred date — especially during peak wedding season.
                </p>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
