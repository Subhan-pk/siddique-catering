import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUtensils } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-maroon-deep px-4 pt-24 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaUtensils className="mx-auto text-6xl text-gold/50" aria-hidden="true" />
        <h1 className="mt-6 font-display text-7xl font-bold text-gold sm:text-8xl">404</h1>
        <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
          This Page Isn't on the Menu
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to something delicious.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-maroon-deep shadow-lg transition-all hover:-translate-y-0.5"
          >
            Back to Home
          </Link>
          <Link
            to="/services"
            className="rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
          >
            Browse Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
