import { Link } from "react-router-dom";
import {
  FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt,
  FaFacebookF, FaInstagram,
} from "react-icons/fa";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { SITE, whatsappLink, mapEmbedSrc, mapDirectionsLink } from "../data/site";

const HERO = "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=70";

const CARDS = [
  { icon: FaPhoneAlt, title: "Phone", value: SITE.phone, href: SITE.phoneHref, note: "Call us anytime" },
  { icon: FaWhatsapp, title: "WhatsApp", value: "Message us instantly", href: whatsappLink(), note: "Fastest way to reach our team" },
  { icon: FaMapMarkerAlt, title: "Address", value: SITE.address, href: mapDirectionsLink, note: "Get directions" },
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
            subtitle="Reach us by phone or WhatsApp — or drop by for a tasting."
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

          {/* Map */}
          <Reveal className="mt-14">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <iframe
                title="Siddique Sons Catering Services location"
                src={mapEmbedSrc}
                className="h-[380px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-center text-sm text-charcoal/60">
              {SITE.address} —{" "}
              <a href={mapDirectionsLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-maroon hover:text-gold hover:underline">
                Get Directions
              </a>
            </p>
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
