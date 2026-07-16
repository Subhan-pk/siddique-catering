import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle, light = false, align = "center" }) {
  const alignCls = align === "left" ? "text-left items-start" : "text-center items-center mx-auto";
  return (
    <Reveal className={`mb-12 flex max-w-2xl flex-col ${alignCls}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          {eyebrow}
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
        </span>
      )}
      <h2 className={`font-display text-3xl font-bold sm:text-4xl lg:text-[2.6rem] ${light ? "text-white" : "text-maroon-deep"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-sm leading-relaxed sm:text-base ${light ? "text-white/75" : "text-charcoal/70"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
