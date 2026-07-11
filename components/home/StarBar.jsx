"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 25, suffix: "", label: "Years of Market Expertise" },
  { num: 25000, suffix: "+", label: "Investors Served" },
  { num: 30, suffix: "+", label: "Cities Across India" },
  { num: 200, suffix: "+", label: "Outlets & Dedicated Staff" },
];

function CountUp({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const dur = 1400;
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {val.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-white py-16 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="border-l-4 border-primary pl-5">
              <div className="text-4xl font-black text-primary tracking-tight">
                <CountUp target={s.num} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm font-semibold text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}