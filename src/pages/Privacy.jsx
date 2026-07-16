import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { SITE } from "../data/site";

const SECTIONS = [
  {
    h: "Information We Collect",
    p: "When you contact us or submit a booking inquiry, we collect the information you provide — such as your name, phone number, email address, event details, and any message you send us. We use this information solely to respond to your inquiry and provide our catering services.",
  },
  {
    h: "How We Use Your Information",
    p: "Your information is used to prepare quotations, coordinate your event, communicate with you about your booking, and improve our services. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
  },
  {
    h: "Data Security",
    p: "We take reasonable measures to protect the information you share with us. Access to your details is limited to team members who need it to serve your event.",
  },
  {
    h: "Cookies & Analytics",
    p: "Our website may use basic cookies or analytics to understand how visitors use the site and improve the experience. No personally identifying information is collected through these tools without your consent.",
  },
  {
    h: "Your Rights",
    p: "You may request access to, correction of, or deletion of your personal information at any time by contacting us using the details on our Contact page.",
  },
  {
    h: "Contact",
    p: `If you have any questions about this Privacy Policy, please call us at ${SITE.phone} or reach out via WhatsApp.`,
  },
];

export default function Privacy() {
  return (
    <>
      <PageHero title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
          <Reveal>
            <p className="text-sm leading-relaxed text-charcoal/70">
              {SITE.name} respects your privacy. This policy explains what information
              we collect through this website and how we use it.
            </p>
          </Reveal>
          {SECTIONS.map((s, i) => (
            <Reveal key={s.h} delay={i * 0.05}>
              <h2 className="font-display text-xl font-bold text-maroon-deep">{s.h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{s.p}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
