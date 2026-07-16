import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SITE, whatsappLink, mapDirectionsLink } from "../data/site";
import { SERVICES } from "../data/services";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQs" },
  { to: "/book", label: "Book Catering" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-maroon-deep text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-display text-2xl font-bold text-maroon">
              S
            </span>
            <div>
              <p className="font-display text-lg font-bold text-white">Siddique Sons</p>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Catering Services</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Exceptional catering for every occasion — weddings, corporate events,
            birthdays, BBQ nights, and everything in between. Fresh ingredients,
            professional chefs, unforgettable experiences.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:-translate-y-1 hover:bg-gold hover:text-maroon">
              <FaFacebookF />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:-translate-y-1 hover:bg-gold hover:text-maroon">
              <FaInstagram />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:-translate-y-1 hover:bg-gold hover:text-maroon">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-lg font-semibold text-gold">Quick Links</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display text-lg font-semibold text-gold">Our Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="transition-colors hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-lg font-semibold text-gold">Contact Us</h3>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 shrink-0 text-gold" />
              <a href={SITE.phoneHref} className="hover:text-gold">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <FaWhatsapp className="mt-1 shrink-0 text-gold" />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-gold" />
              <a href={mapDirectionsLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {SITE.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
