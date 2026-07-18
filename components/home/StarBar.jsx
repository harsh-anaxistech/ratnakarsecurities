"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { id: 1, num: 25, suffix: "", label: "Years of Market Expertise" },
  { id: 2, num: 25000, suffix: "+", label: "Investors Served" },
  { id: 3, num: 30, suffix: "+", label: "Cities Across India" },
  { id: 4, num: 200, suffix: "+", label: "Outlets & Dedicated Staff" },
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
      { threshold: 0.2 }
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
  const totalItems = stats.length;

  return (
    <section className="py-8 md:py-12 bg-white w-full border-t border-b border-gray-100">
      <div className="mx-auto max-w-[1360px] px-4 md:px-6">
        
        {/* મોબાઈલમાં 2 કોલમ ગ્રીડ (grid-cols-2) અને ડેસ્કટોપ પર ફ્લેક્સ રો */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:flex md:flex-wrap md:justify-between md:items-center md:gap-10">
          {stats.map((s, index) => {
            const isLast = index === totalItems - 1;
            const isOddTotal = totalItems % 2 !== 0;
            
            // જો કુલ ડેટા એકી સંખ્યામાં હોય તો છેલ્લું સેન્ટર થશે
            const isCenteredMobile = isLast && isOddTotal;
            // બીજું અને ચોથું બોક્સ રાઈટ સાઈડ જશે
            const isRightMobile = !isCenteredMobile && index % 2 !== 0;

            return (
              <div
                key={s.id}
                className={`flex items-center gap-3 md:gap-4 md:flex-1 md:min-w-[220px] w-full
                  ${isCenteredMobile ? "col-span-2 justify-center text-center flex-row" : ""}
                  ${isRightMobile ? "justify-start flex-row-reverse text-right" : "justify-start flex-row text-left"}
                  md:justify-start md:text-left md:flex-row`}
              >
                
                <div className="w-[3px] h-10 md:h-14 bg-[#ea2830] rounded-full flex-shrink-0" />
                
<div className={`flex flex-col justify-center
  ${isRightMobile ? "items-end" : isCenteredMobile ? "items-center" : "items-start"} 
  md:items-start`}
>
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#ea2830] tracking-tight">
    <CountUp target={s.num} suffix={s.suffix} />
  </h3>
  
  <p className="text-xs sm:text-sm md:text-lg font-light text-slate-500 mt-0.5 md:mt-1 tracking-tight leading-tight md:whitespace-nowrap">
    {s.label}
  </p>
</div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}