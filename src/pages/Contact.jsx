import { Link } from "react-router-dom";
import {
  FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaFacebookF, FaInstagram,
} from "react-icons/fa";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { SITE, whatsappLink } from "../data/site";

const HERO = "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=70";

const CARDS = [
  { icon: FaPhoneAlt, title: "Phone", value: SITE.phone, href: SITE.phoneHref, note: "Call us anytime during working hours" },
  { icon: FaWhatsapp, title: "WhatsApp", value: "Message us instantly", href: whatsappLink(), note: "Fastest way to reach our team" },
  { icon: FaEnvelope, title: "Email", value: SITE.email, href: `mailto:${SITE.email}`, note: "We reply within 24 hours" },
  { icon: FaMapMarkerAlt, title: "Address", value: SITE.address, note: "Visit us for a menu tasting" },
  { icon: FaClock, title: "Working Hours", value: SITE.hours, note: "Open all week for your events" },
];

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Questions, quotes, or menu tastings — our team is one call away."
        image={HERO}
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="We'd Love to Hear From You"
            subtitle="Reach us by phone, WhatsApp, or email — or drop by for a tasting."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CARDS.map((c, i) => {
              const Icon = c.icon;
              const content = (
                <>
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-maroon text-xl text-gold shadow-md">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-maroon-deep">{c.title}</h3>
                  <p className="mt-1.5 text-sm font-medium text-charcoal">{c.value}</p>
                  <p className="mt-1 text-xs text-charcoal/50">{c.note}</p>
                </>
              );
              return (
                <Reveal key={c.title} delay={(i % 3) * 0.1}>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="block rounded-2xl bg-white p-8 text-center shadow-md transition-all hover:-translate-y-1.5 hover:shadow-xl">
                      {content}
                    </a>
                  ) : (
                    <div className="rounded-2xl bg-white p-8 text-center shadow-md">{content}</div>
                  )}
                </Reveal>
              );
            })}

            {/* Social card */}
            <Reveal delay={0.2}>
              <div className="rounded-2xl bg-maroon p-8 text-center shadow-md">
                <h3 className="font-display text-lg font-bold text-gold">Follow Us</h3>
                <p className="mt-1.5 text-xs text-white/70">{SITE.instagramHandle}</p>
                <div className="mt-5 flex justify-center gap-3">
                  <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-1 hover:bg-gold hover:text-maroon">
                    <FaFacebookF />
                  </a>
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-1 hover:bg-gold hover:text-maroon">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Map placeholder */}
          <Reveal className="mt-14">
            <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-maroon/25 bg-white/60 p-10 text-center">
              <FaMapMarkerAlt className="text-5xl text-maroon/40" aria-hidden="true" />
              <p className="mt-4 font-display text-xl font-bold text-maroon-deep">Google Map</p>
              <p className="mt-2 max-w-md text-sm text-charcoal/60">
                Map embed placeholder — add your Google Maps embed once the business
                address is confirmed.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14 text-center">
            <Link
              to="/book"
              className="inline-block rounded-full bg-maroon px-10 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-maroon-dark"
            >
              Book Catering Now
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
