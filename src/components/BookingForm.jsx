import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { SERVICES } from "../data/services";
import { whatsappLink } from "../data/site";

const EVENT_TYPES = [
  "Wedding", "Corporate Event", "Birthday Party", "Family Function", "BBQ Party",
  "School / College Event", "Religious Gathering", "Private Party", "Office Lunch",
  "Community Event", "Other",
];

const inputCls =
  "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";

function Field({ label, error, children, htmlFor }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-maroon-deep">
        {label}
      </label>
      {children}
      {error && <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">{error.message}</p>}
    </div>
  );
}

const buildInquiryMessage = (data) =>
  `Booking inquiry:\nName: ${data.name}\nPhone: ${data.phone}\nEvent: ${data.eventType} on ${data.eventDate}\nGuests: ${data.guests}\nLocation: ${data.location}\nCatering type: ${data.cateringType}\nBudget: ${data.budget || "—"}\nMessage: ${data.message || "—"}`;

export default function BookingForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(null);

  const onSubmit = async (data) => {
    // No backend yet — open WhatsApp with the details pre-filled immediately, while
    // this still counts as part of the user's click (otherwise browsers block the popup).
    window.open(whatsappLink(buildInquiryMessage(data)), "_blank", "noopener,noreferrer");
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(data);
    reset();
  };

  if (submitted) {
    const msg = buildInquiryMessage(submitted);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-xl"
        role="status"
      >
        <FaCheckCircle className="text-6xl text-green-500" aria-hidden="true" />
        <h3 className="mt-5 font-display text-2xl font-bold text-maroon-deep">Thank You, {submitted.name}!</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/70">
          We've opened WhatsApp with your event details pre-filled — just hit{" "}
          <strong>Send</strong> there to reach our team instantly. We'll get back to you
          at <strong>{submitted.phone}</strong> with a customized quotation.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink(msg)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
          >
            WhatsApp Didn't Open? Tap Here
          </a>
          <button
            onClick={() => setSubmitted(null)}
            className="rounded-full border-2 border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors hover:bg-maroon hover:text-white"
          >
            Submit Another Inquiry
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="rounded-3xl bg-white p-6 shadow-xl sm:p-10"
        aria-label="Catering booking form"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full Name *" htmlFor="name" error={errors.name}>
            <input id="name" type="text" placeholder="Your full name" className={inputCls}
              {...register("name", { required: "Please enter your name", minLength: { value: 2, message: "Name is too short" } })} />
          </Field>
          <Field label="Phone Number *" htmlFor="phone" error={errors.phone}>
            <input id="phone" type="tel" placeholder="+92 3xx xxxxxxx" className={inputCls}
              {...register("phone", {
                required: "Please enter your phone number",
                pattern: { value: /^[+\d][\d\s()-]{8,17}$/, message: "Please enter a valid phone number" },
              })} />
          </Field>
          <Field label="Email" htmlFor="email" error={errors.email}>
            <input id="email" type="email" placeholder="you@example.com" className={inputCls}
              {...register("email", {
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email" },
              })} />
          </Field>
          <Field label="Event Type *" htmlFor="eventType" error={errors.eventType}>
            <select id="eventType" className={inputCls} defaultValue=""
              {...register("eventType", { required: "Please select an event type" })}>
              <option value="" disabled>Select event type</option>
              {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </Field>
          <Field label="Event Date *" htmlFor="eventDate" error={errors.eventDate}>
            <input id="eventDate" type="date" className={inputCls}
              {...register("eventDate", { required: "Please choose your event date" })} />
          </Field>
          <Field label="Number of Guests *" htmlFor="guests" error={errors.guests}>
            <input id="guests" type="number" min="1" placeholder="e.g. 250" className={inputCls}
              {...register("guests", {
                required: "Please enter your guest count",
                min: { value: 1, message: "Guest count must be at least 1" },
              })} />
          </Field>
          <Field label="Event Location *" htmlFor="location" error={errors.location}>
            <input id="location" type="text" placeholder="Venue or area" className={inputCls}
              {...register("location", { required: "Please enter your event location" })} />
          </Field>
          <Field label="Preferred Catering Type *" htmlFor="cateringType" error={errors.cateringType}>
            <select id="cateringType" className={inputCls} defaultValue=""
              {...register("cateringType", { required: "Please select a catering type" })}>
              <option value="" disabled>Select catering type</option>
              {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            </select>
          </Field>
          <Field label="Estimated Budget" htmlFor="budget" error={errors.budget}>
            <input id="budget" type="text" placeholder="e.g. PKR 150,000" className={inputCls}
              {...register("budget")} />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Message" htmlFor="message" error={errors.message}>
              <textarea id="message" rows="4" placeholder="Tell us more about your event, menu preferences, or special requirements..."
                className={inputCls} {...register("message")} />
            </Field>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-maroon px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-maroon-dark hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : (<><FaPaperPlane aria-hidden="true" /> Request a Quote</>)}
        </button>
        <p className="mt-4 text-xs text-charcoal/50">
          * Required fields. We'll respond with a detailed quotation — no obligation.
        </p>
      </motion.form>
    </AnimatePresence>
  );
}
