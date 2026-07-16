import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import SmartImage from "./SmartImage";

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-52 overflow-hidden">
        <SmartImage
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 to-transparent opacity-70 transition-opacity group-hover:opacity-90" aria-hidden="true" />
        <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-xl text-maroon shadow-lg">
          <Icon aria-hidden="true" />
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-maroon-deep">{service.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-charcoal/70">{service.short}</p>
        <Link
          to={`/services/${service.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-maroon transition-colors hover:text-gold"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
          <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
