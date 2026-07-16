import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import SmartImage from "./SmartImage";

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;

const EVENTS = [
  { title: "Wedding Events", image: img("photo-1519225421980-715cb0215aed"), to: "/services/wedding-catering",
    desc: "Grand buffets, live stations, and elegant presentation for mehndi, barat, and walima." },
  { title: "Corporate Events", image: img("photo-1511578314322-379afb476865"), to: "/services/corporate-catering",
    desc: "Polished, punctual catering for conferences, seminars, and annual dinners." },
  { title: "Birthday Parties", image: img("photo-1464349095431-e9a21285b5f3"), to: "/services/childrens-catering",
    desc: "Fun menus, themed dessert tables, and stress-free celebrations for all ages." },
  { title: "Outdoor BBQ", image: img("photo-1544025162-d76694265947"), to: "/services/bbq-catering",
    desc: "Live charcoal grilling with signature marinades — tikka, kebabs, and more." },
  { title: "Private Events", image: img("photo-1511795409834-ef04bbd61622"), to: "/services/event-catering",
    desc: "Intimate dinners and exclusive gatherings with personalized fine-dining service." },
  { title: "Religious Gatherings", image: img("photo-1414235077428-338989a2e8c0"), to: "/services/buffet-catering",
    desc: "Respectful, generous catering for milads, iftars, and community events." },
];

export default function FeaturedEvents() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {EVENTS.map((e, i) => (
        <motion.article
          key={e.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
          className="group relative h-80 overflow-hidden rounded-2xl shadow-lg"
        >
          <SmartImage
            src={e.image}
            alt={e.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/95 via-maroon-deep/40 to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="font-display text-xl font-bold text-white">{e.title}</h3>
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/75">{e.desc}</p>
            <Link
              to={e.to}
              className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
              aria-label={`Learn more about ${e.title}`}
            >
              Learn More <FaArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
