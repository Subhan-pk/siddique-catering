import { motion } from "framer-motion";
import {
  FaCarrot, FaUserTie, FaWallet, FaClipboardList, FaClock,
  FaCrown, FaPalette, FaUsers, FaPumpSoap, FaSmile,
} from "react-icons/fa";

const REASONS = [
  { icon: FaCarrot, title: "Fresh Ingredients", desc: "Locally sourced, market-fresh produce and premium halal meats every day." },
  { icon: FaUserTie, title: "Professional Chefs", desc: "Experienced culinary specialists across Pakistani, BBQ, and continental cuisine." },
  { icon: FaWallet, title: "Affordable Packages", desc: "Transparent per-head pricing designed to fit every budget without cutting quality." },
  { icon: FaClipboardList, title: "Customized Menus", desc: "Every menu is tailored to your event, guest profile, and taste preferences." },
  { icon: FaClock, title: "On-Time Delivery", desc: "Punctuality is a promise — your food arrives fresh, hot, and exactly on schedule." },
  { icon: FaCrown, title: "Premium Service", desc: "Five-star hospitality standards from the first call to the final cleanup." },
  { icon: FaPalette, title: "Elegant Presentation", desc: "Stunning buffet displays, garnishing, and table styling that impress every guest." },
  { icon: FaUsers, title: "Experienced Staff", desc: "Trained, uniformed, and courteous service teams for events of every scale." },
  { icon: FaPumpSoap, title: "Hygienic Kitchen", desc: "Strict food safety protocols, clean handling, and proper temperature control." },
  { icon: FaSmile, title: "Customer Satisfaction", desc: "Hundreds of happy hosts and glowing reviews — your satisfaction is our recipe." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
    >
      {REASONS.map((r) => {
        const Icon = r.icon;
        return (
          <motion.div
            key={r.title}
            variants={item}
            className="group rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-maroon hover:shadow-2xl"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-soft text-xl text-maroon transition-colors group-hover:bg-gold">
              <Icon aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-base font-bold text-maroon-deep transition-colors group-hover:text-gold">
              {r.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-charcoal/65 transition-colors group-hover:text-white/80">
              {r.desc}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
