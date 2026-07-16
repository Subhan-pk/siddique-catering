import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GALLERY, GALLERY_CATEGORIES } from "../data/gallery";
import SmartImage from "./SmartImage";

export default function GalleryGrid({ limit }) {
  const [category, setCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null); // index into filtered list

  const filtered = GALLERY.filter((g) => category === "All" || g.category === category).slice(
    0,
    limit ?? GALLERY.length
  );

  // Keyboard navigation for the lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i + 1) % filtered.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, filtered.length]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Gallery categories">
        {GALLERY_CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={category === c}
            onClick={() => { setCategory(c); setLightbox(null); }}
            className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              category === c
                ? "bg-maroon text-gold shadow-md"
                : "bg-white text-charcoal/70 shadow-sm hover:bg-gold-soft hover:text-maroon"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry columns */}
      <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        <AnimatePresence>
          {filtered.map((g, i) => (
            <motion.button
              key={g.src}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
              onClick={() => setLightbox(i)}
              aria-label={`View image: ${g.alt}`}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-md"
            >
              <SmartImage
                src={g.src}
                alt={g.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                }`}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-maroon-deep/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {g.category}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-gold hover:text-maroon"
            >
              <FaTimes />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + filtered.length) % filtered.length); }}
              aria-label="Previous image"
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-maroon sm:left-8"
            >
              <FaChevronLeft />
            </button>
            <motion.figure
              key={filtered[lightbox].src}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-4xl"
            >
              <SmartImage
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                className="max-h-[75vh] w-full rounded-xl object-contain"
              />
              <figcaption className="mt-4 text-center text-sm text-white/80">
                {filtered[lightbox].alt}
                <span className="ml-3 text-xs uppercase tracking-widest text-gold">
                  {filtered[lightbox].category}
                </span>
              </figcaption>
            </motion.figure>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % filtered.length); }}
              aria-label="Next image"
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-maroon sm:right-8"
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
