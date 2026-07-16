import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SmartImage from "./SmartImage";

// Banner hero used on all inner pages.
export default function PageHero({ title, subtitle, image, crumbs = [] }) {
  return (
    <section className="relative flex min-h-[46vh] items-center justify-center overflow-hidden pt-24 pb-16 text-center">
      {image && (
        <SmartImage
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/85 via-maroon-deep/75 to-maroon-deep/90" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-bold text-white sm:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-gold-light"
        >
          <Link to="/" className="hover:text-gold">Home</Link>
          {crumbs.map((c, i) => (
            <span key={i}>
              <span className="mx-2 text-white/40">/</span>
              {c.to ? (
                <Link to={c.to} className="hover:text-gold">{c.label}</Link>
              ) : (
                <span className="text-white/80">{c.label}</span>
              )}
            </span>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}
