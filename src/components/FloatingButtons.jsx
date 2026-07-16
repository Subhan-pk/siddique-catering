import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { whatsappLink } from "../data/site";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp float */}
      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
        className="fixed bottom-20 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
      >
        <FaWhatsapp />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" aria-hidden="true" />
      </motion.a>

      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="fixed bottom-20 left-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-maroon text-white shadow-lg transition-colors hover:bg-gold hover:text-maroon sm:bottom-6 sm:left-6"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sticky Book Now bar (mobile only) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-white/95 p-3 backdrop-blur-md sm:hidden">
        <Link
          to="/book"
          className="block rounded-full bg-maroon py-3 text-center text-sm font-semibold text-white shadow-md"
        >
          Book Now — Get a Free Quote
        </Link>
      </div>
    </>
  );
}
