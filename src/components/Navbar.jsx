import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { SITE } from "../data/site";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const solid = scrolled || open;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/90 shadow-lg backdrop-blur-md py-2.5"
          : "bg-gradient-to-b from-black/60 to-transparent py-4"
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Siddique Sons Catering Services — Home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon font-display text-2xl font-bold text-gold shadow-md">
            S
          </span>
          <span className="leading-tight">
            <span className={`block font-display text-lg font-bold tracking-wide ${solid ? "text-maroon" : "text-white"}`}>
              Siddique Sons
            </span>
            <span className={`block text-[11px] uppercase tracking-[0.28em] ${solid ? "text-gold" : "text-gold-light"}`}>
              Catering Services
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 hover:text-gold ${
                    isActive ? "text-gold" : solid ? "text-charcoal" : "text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={SITE.phoneHref}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors hover:text-gold ${
                solid ? "text-maroon" : "text-white"
              }`}
            >
              <FaPhoneAlt className="text-gold" aria-hidden="true" /> {SITE.phone}
            </a>
          </li>
          <li>
            <Link
              to="/book"
              className="rounded-full bg-maroon px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-maroon-dark hover:shadow-xl"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile: Call Now + menu toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={SITE.phoneHref}
            aria-label={`Call us at ${SITE.phone}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon text-white shadow-md"
          >
            <FaPhoneAlt aria-hidden="true" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`text-2xl ${solid ? "text-maroon" : "text-white"}`}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white/95 backdrop-blur-md lg:hidden"
          >
            <ul className="space-y-1 px-6 py-4">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2.5 text-sm font-medium ${
                        isActive ? "bg-gold-soft text-maroon" : "text-charcoal hover:bg-cream"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="flex gap-3 pt-2">
                <a
                  href={SITE.phoneHref}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-maroon px-4 py-3 text-center text-sm font-semibold text-maroon"
                >
                  <FaPhoneAlt aria-hidden="true" /> Call Now
                </a>
                <Link
                  to="/book"
                  className="flex-1 rounded-full bg-maroon px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
