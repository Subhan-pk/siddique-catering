import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCheckCircle, FaArrowRight, FaChevronDown, FaPhoneAlt, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import ServiceCard from "../components/ServiceCard";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedEvents from "../components/FeaturedEvents";
import GalleryGrid from "../components/GalleryGrid";
import TestimonialSlider from "../components/TestimonialSlider";
import ProcessTimeline from "../components/ProcessTimeline";
import FAQAccordion from "../components/FAQAccordion";
import BookingForm from "../components/BookingForm";
import CTASection from "../components/CTASection";
import Counter from "../components/Counter";
import { SERVICES } from "../data/services";
import { FAQS } from "../data/faqs";
import { STATS, SITE, whatsappLink } from "../data/site";

const HERO_IMG =
  "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1920&q=75";
const ABOUT_IMG =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=70";

const BADGES = ["Professional Staff", "Fresh Ingredients", "Hygienic Preparation", "Customized Menus"];

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 180]); // parallax

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <SmartImage
            src={HERO_IMG}
            alt="Luxury catering spread prepared by professional chefs"
            className="h-[120%] w-full object-cover"
            loading="eager"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-maroon-deep/60 to-maroon-deep/90" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs font-semibold uppercase tracking-[0.4em] text-gold"
          >
            Siddique Sons Catering Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
          >
            Exceptional Catering for <span className="gold-gradient-text italic">Every Occasion</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-lg"
          >
            From weddings to corporate events, Siddique Sons Catering Services delivers
            unforgettable food experiences with exceptional service.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-gold hover:text-gold"
            >
              <FaPhoneAlt aria-hidden="true" /> Call Now
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-[#25D366] hover:text-[#25D366]"
            >
              <FaWhatsapp aria-hidden="true" /> WhatsApp Us
            </a>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-sm font-bold uppercase tracking-wider text-maroon-deep shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <FaCalendarAlt aria-hidden="true" /> Book Catering
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {BADGES.map((b) => (
              <li key={b} className="flex items-center gap-2 text-xs font-medium text-white/85 sm:text-sm">
                <FaCheckCircle className="text-gold" aria-hidden="true" /> {b}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold"
          aria-hidden="true"
        >
          <FaChevronDown className="text-xl" />
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24" aria-labelledby="about-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative">
              <SmartImage
                src={ABOUT_IMG}
                alt="Elegant fine-dining table prepared by Siddique Sons"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-maroon px-8 py-6 text-center shadow-xl sm:block">
                <p className="font-display text-4xl font-bold text-gold">500+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/80">Events Served</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="A Legacy of Flavor, Hospitality & Trust"
            />
            <Reveal delay={0.1}>
              <p className="text-sm leading-relaxed text-charcoal/75 sm:text-base">
                Siddique Sons Catering Services has proudly served families, businesses,
                and communities with a passion for authentic flavor and flawless hospitality.
                What began as a family commitment to great food has grown into a full-service
                catering company trusted for weddings, corporate events, and celebrations of every scale.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/75 sm:text-base">
                <strong className="text-maroon">Our Mission:</strong> to make every event
                unforgettable through fresh ingredients, hygienic preparation, and warm,
                professional service. <strong className="text-maroon">Our Vision:</strong> to
                be the region's most trusted name in premium catering.
              </p>
              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-maroon px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-maroon-dark"
              >
                Discover Our Story <FaArrowRight aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-maroon py-16" aria-label="Our achievements">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {STATS.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Catering Crafted for Every Celebration"
            subtitle="From grand weddings to intimate dinners — explore our full range of professional catering services."
          />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-maroon px-8 py-3.5 text-sm font-bold text-maroon transition-all hover:bg-maroon hover:text-white"
            >
              View All {SERVICES.length} Services <FaArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gold-soft/50 py-24" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Siddique Sons Difference"
            subtitle="Ten reasons hundreds of hosts trust us with their most important moments."
          />
          <WhyChooseUs />
        </div>
      </section>

      {/* ================= FEATURED EVENTS ================= */}
      <section className="py-24" aria-labelledby="events-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Events"
            title="Events We Bring to Life"
            subtitle="Whatever the occasion, we cater it with elegance, flavor, and precision."
          />
          <FeaturedEvents />
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-cream py-24" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Simple Catering Process"
            subtitle="From your first call to the final toast — six easy steps to a perfect event."
          />
          <ProcessTimeline />
        </div>
      </section>

      {/* ================= GALLERY PREVIEW ================= */}
      <section className="py-24" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments We've Catered"
            subtitle="A glimpse of our buffets, table settings, live stations, and happy celebrations."
          />
          <GalleryGrid limit={6} />
          <Reveal className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border-2 border-maroon px-8 py-3.5 text-sm font-bold text-maroon transition-all hover:bg-maroon hover:text-white"
            >
              View Full Gallery <FaArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-gold-soft/50 py-24" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            subtitle="Real words from real hosts who trusted us with their special days."
          />
          <TestimonialSlider />
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently Asked Questions"
            subtitle="Quick answers to the questions we hear most often."
          />
          <FAQAccordion faqs={FAQS.slice(0, 5)} />
          <Reveal className="mt-10 text-center">
            <Link to="/faq" className="text-sm font-semibold text-maroon underline-offset-4 hover:text-gold hover:underline">
              See all FAQs →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= BOOKING ================= */}
      <section className="bg-maroon-deep py-24" aria-labelledby="booking-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light
            eyebrow="Book Now"
            title="Request Your Free Quotation"
            subtitle="Tell us about your event and we'll craft a customized menu and quote — no obligation."
          />
          <BookingForm />
        </div>
      </section>

      <CTASection />
    </>
  );
}
