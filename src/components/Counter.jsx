import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Counter({ value, suffix = "+", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-bold text-gold sm:text-5xl">
        {n.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80 sm:text-sm">
        {label}
      </p>
    </div>
  );
}
