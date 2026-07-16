import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";
import { SITE, whatsappLink } from "../data/site";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-maroon py-20">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
      <Reveal className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Ready to Plan Your <span className="gold-gradient-text">Perfect Event?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
          Get a free, no-obligation quotation today. Our team will help you design
          the perfect menu for your occasion and budget.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/book"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-maroon-deep shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            Book Catering
          </Link>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
          >
            <FaPhoneAlt aria-hidden="true" /> {SITE.phone}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-[#25D366] hover:text-[#25D366]"
          >
            <FaWhatsapp aria-hidden="true" /> WhatsApp Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
