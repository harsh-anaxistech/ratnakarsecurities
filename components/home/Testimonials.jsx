"use client";
import React, { useState, useEffect } from "react";
import Container from "@/components/common/Container";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Ratnakar Securities helped me build a disciplined portfolio over 10 years. Their research team gives actionable advice — not just noise.",
    name: "Arun Patel",
    role: "Investor",
    location: "Ahmedabad",
    stars: 5,
  },
  {
    quote:
      "Their relationship managers are always a call away. I feel like a priority client, not just an account number.",
    name: "Neha Sharma",
    role: "HNI Investor",
    location: "Surat",
    stars: 5,
  },
  {
    quote:
      "I started SIPs through Ratnakar 5 years ago. Today my corpus is 2x. The guidance was patient, clear and very goal-focused.",
    name: "Mansi Vora",
    role: "First-time Investor",
    location: "Vadodara",
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#ea2830] text-[#ea2830]" />
      ))}
    </div>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 bg-[#00aeee]/10 text-[#011628] border border-[#00aeee]/20"
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // મોબાઈલ સ્લાઇડર માટે ઓટો-પ્લે ઇફેક્ટ (દર 3.5 સેકન્ડે સ્લાઇડ બદલાશે)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-white overflow-hidden">
      <Container>
        
        {/* Header Section — સેન્ટર અંડરલાઈન ઇફેક્ટ */}
        <div className="text-center mb-10">
          <div
            className="text-[14px] font-black tracking-widest uppercase mb-3"
            style={{ color: "#ea2830" }}
          >
            Words of Trust
          </div>
          <h2
            className="text-3xl md:text-4xl font-serif tracking-tight leading-tight text-[#011628]"
          >
            Hear From Our{" "}
            <span className="relative inline-block">
              Investors
            </span>
          </h2>
        </div>

        {/* સ્લાઇડર કન્ટેનર: મોબાઈલમાં લિમિટેડ વિડ્થ અને ડેસ્કટોપ પર નોર્મલ */}
        <div className="relative w-full overflow-hidden md:overflow-visible">
          <div
            className="flex transition-transform duration-500 ease-in-out md:grid md:grid-cols-3 md:gap-6 md:!transform-none"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="w-full shrink-0 px-2 md:w-auto md:shrink md:px-0"
              >
                <div
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#00aeee]/40 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border border-[#00aeee]/20"
                      style={{ background: "rgba(0, 174, 238, 0.08)" }}
                    >
                      <Quote className="w-4 h-4 text-[#00aeee]" fill="#00aeee" strokeWidth={1} />
                    </div>

                    <StarRating count={t.stars} />

                    <p className="text-[16px] leading-relaxed text-slate-700 font-medium italic mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <Avatar name={t.name} />
                    <div>
                      <p className="text-base font-bold text-slate-900 group-hover:text-[#00aeee] transition-colors duration-300">
                        {t.name}
                      </p>
                      <p className="text-xs font-semibold text-slate-400 mt-0.5">
                        {t.role} · {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ડોટ્સ ઇન્ડિકેટર્સ: માત્ર મોબાઈલ વ્યુમાં જ નીચે દેખાશે */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-6 bg-[#00aeee]" : "w-2 bg-slate-200"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
      </Container>
    </section>
  );
}