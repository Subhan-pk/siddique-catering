import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaComments,
  FaClipboardList,
  FaFileInvoiceDollar,
  FaUtensils,
  FaGlassCheers,
} from "react-icons/fa";

const STEPS = [
  { icon: FaPhoneAlt, title: "Contact Us", desc: "Call, WhatsApp, or fill our booking form to get started." },
  { icon: FaComments, title: "Discuss Requirements", desc: "Tell us about your event, guest count, and preferences." },
  { icon: FaClipboardList, title: "Choose Menu", desc: "Pick from our menus or customize your own with our chefs." },
  { icon: FaFileInvoiceDollar, title: "Receive Quotation", desc: "Get a transparent, detailed quote with no hidden costs." },
  { icon: FaUtensils, title: "Event Preparation", desc: "Our team preps, cooks, and sets up everything on schedule." },
  { icon: FaGlassCheers, title: "Enjoy Your Event", desc: "Relax and celebrate while we take care of every plate." },
];

export default function ProcessTimeline() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Center line */}
      <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-gold via-maroon/30 to-gold sm:left-1/2 sm:-translate-x-px" aria-hidden="true" />
      <ol className="space-y-10">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const left = i % 2 === 0;
          return (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, x: left ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className={`relative flex items-start gap-6 pl-16 sm:w-1/2 sm:pl-0 ${
                left ? "sm:pr-14 sm:text-right" : "sm:ml-auto sm:pl-14"
              }`}
            >
              {/* Node */}
              <span
                className={`absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-gold shadow-lg ring-4 ring-gold/30 sm:left-auto ${
                  left ? "sm:-right-6" : "sm:-left-6"
                }`}
              >
                <Icon aria-hidden="true" />
              </span>
              <div className={`rounded-2xl bg-white p-5 shadow-md ${left ? "sm:ml-auto" : ""}`}>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold text-maroon-deep">{s.title}</h3>
                <p className="mt-1.5 text-sm text-charcoal/70">{s.desc}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
