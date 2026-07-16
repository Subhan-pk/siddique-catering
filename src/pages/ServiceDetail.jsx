import { Link, useParams, Navigate } from "react-router-dom";
import { FaCheckCircle, FaCalendarCheck, FaArrowRight } from "react-icons/fa";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import { getService, relatedServices } from "../data/services";
import { GALLERY } from "../data/gallery";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <Navigate to="/404" replace />;

  const Icon = service.icon;
  const related = relatedServices(slug);
  const galleryPreview = GALLERY.slice(0, 3);

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.short}
        image={service.image}
        crumbs={[{ label: "Services", to: "/services" }, { label: service.title }]}
      />

      {/* Description + benefits */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <Reveal>
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-maroon text-2xl text-gold shadow-lg">
                <Icon aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold text-maroon-deep">
                About This Service
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-charcoal/75 sm:text-base">
                {service.description}
              </p>

              <h3 className="mt-10 font-display text-2xl font-bold text-maroon-deep">Key Benefits</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 rounded-xl bg-white p-4 text-sm shadow-sm">
                    <FaCheckCircle className="shrink-0 text-gold" aria-hidden="true" /> {b}
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 font-display text-2xl font-bold text-maroon-deep">Perfect For</h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {service.events.map((e) => (
                  <span key={e} className="rounded-full bg-gold-soft px-5 py-2 text-xs font-semibold text-maroon">
                    {e}
                  </span>
                ))}
              </div>

              {/* Mini gallery */}
              <h3 className="mt-10 font-display text-2xl font-bold text-maroon-deep">From Our Events</h3>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {galleryPreview.map((g) => (
                  <SmartImage
                    key={g.src}
                    src={g.src}
                    alt={g.alt}
                    className="aspect-square w-full rounded-xl object-cover shadow-md transition-transform duration-500 hover:scale-105"
                  />
                ))}
              </div>
              <Link to="/gallery" className="mt-4 inline-block text-sm font-semibold text-maroon hover:text-gold">
                View full gallery →
              </Link>
            </Reveal>
          </div>

          {/* Sidebar CTA */}
          <aside>
            <Reveal delay={0.15} className="sticky top-28 rounded-3xl bg-maroon p-8 text-center shadow-xl">
              <FaCalendarCheck className="mx-auto text-4xl text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                Book {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Get a free customized quotation for your event — quick, easy, and with no obligation.
              </p>
              <Link
                to="/book"
                className="mt-6 block rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-maroon-deep shadow-md transition-all hover:-translate-y-0.5"
              >
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="mt-3 block rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
              >
                Contact Us
              </Link>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-gold-soft/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-display text-3xl font-bold text-maroon-deep">Related Services</h2>
            <Link to="/services" className="hidden items-center gap-2 text-sm font-semibold text-maroon hover:text-gold sm:inline-flex">
              All services <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
