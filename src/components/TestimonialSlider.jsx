import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TESTIMONIALS } from "../data/testimonials";

const initials = (name) => name.split(" ").map((w) => w[0]).join("").slice(0, 2);

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next) => {
    setDir(next > index ? 1 : -1);
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const item = TESTIMONIALS[index];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative min-h-[300px] overflow-hidden rounded-3xl bg-white p-8 shadow-xl sm:p-12">
        <FaQuoteLeft className="absolute left-8 top-8 text-4xl text-gold/25" aria-hidden="true" />
        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col items-center pt-6 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-maroon to-maroon-dark font-display text-xl font-bold text-gold shadow-md">
              {initials(item.name)}
            </div>
            <div className="mt-4 flex gap-1 text-gold" aria-label={`${item.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className={i < item.rating ? "" : "text-charcoal/15"} aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-5 max-w-xl text-sm leading-relaxed text-charcoal/80 sm:text-base">
              “{item.text}”
            </blockquote>
            <figcaption className="mt-5">
              <p className="font-display text-lg font-bold text-maroon-deep">{item.name}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{item.location}</p>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button
        onClick={() => go(index - 1)}
        aria-label="Previous testimonial"
        className="absolute -left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-maroon text-white shadow-lg transition-colors hover:bg-gold hover:text-maroon sm:-left-6"
      >
        <FaChevronLeft aria-hidden="true" />
      </button>
      <button
        onClick={() => go(index + 1)}
        aria-label="Next testimonial"
        className="absolute -right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-maroon text-white shadow-lg transition-colors hover:bg-gold hover:text-maroon sm:-right-6"
      >
        <FaChevronRight aria-hidden="true" />
      </button>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-gold" : "w-2.5 bg-maroon/25 hover:bg-maroon/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
