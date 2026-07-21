"use client";
import React, { useState, useEffect } from "react";
import Container from "@/components/common/Container";
import { Quote, Star } from "lucide-react";
import { getTestimonials } from "@/services/testimonials";

const FALLBACK_TESTIMONIALS = [
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
  const validCount = Number(count) || 5;
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: validCount }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function Avatar({ name, initials, profileImage }) {
  const [imgError, setImgError] = useState(false);
  const displayInitials =
    initials ||
    (name
      ? name
          .split(" ")
          .filter(Boolean)
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : "RS");

  if (profileImage && !imgError) {
    const imageUrl = profileImage.startsWith("http")
      ? profileImage
      : `http://localhost:6010/uploads/${profileImage}`;
    return (
      <img
        src={imageUrl}
        alt={name || "User"}
        onError={() => setImgError(true)}
        className="w-10 h-10 rounded-md object-cover flex-shrink-0 border border-[#00aeee]/20"
      />
    );
  }

  return (
    <div className="w-10 h-10 rounded-md flex items-center justify-center font-bold text-xs flex-shrink-0 bg-[#00aeee]/10 text-[#00aeee] border border-[#00aeee]/20">
      {displayInitials}
    </div>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(FALLBACK_TESTIMONIALS);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const res = await getTestimonials();
        const items = res?.data || (Array.isArray(res) ? res : null);
        if (items && items.length > 0) {
          const mapped = items.map((item) => ({
            quote: item.message || item.quote || "",
            name: item.customer_name || item.name || "Valued Client",
            role: item.designation || item.role || "Investor",
            location: item.location || "",
            stars: item.rating || item.stars || 5,
            initials: item.initials,
            profile_image: item.profile_image,
          }));
          setTestimonials(mapped);
        }
      } catch (err) {
        // Silently fallback to default list if API fails
      }
    }
    loadTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-12 bg-white overflow-hidden relative">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-10 relative z-10 max-w-2xl mx-auto">
          <div className="text-[14px] font-black tracking-widest uppercase mb-3" style={{ color: "#ea2830" }}>
            Words of Trust
          </div>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight leading-tight text-[#011628]">
            Hear From Our Investors
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden md:overflow-visible z-10">
          <div
            className="flex transition-transform duration-500 ease-in-out md:grid md:grid-cols-3 md:gap-6 md:!transform-none"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-full shrink-0 px-3 md:w-auto md:shrink md:px-0"
              >
                <div className="bg-gradient-to-br from-white via-white to-blue-100 rounded-2xl p-8 border border-slate-100 hover:border-[#00aeee]/30 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between group h-full relative overflow-hidden">
                  
                  <Quote className="absolute right-6 top-6 w-24 h-24 text-[#00aeee]/10 group-hover:text-[#00aeee]/15 transition-colors duration-500 pointer-events-none -rotate-12" strokeWidth={1} />

                  <div className="relative z-10">
                    <StarRating count={t.stars} />
                    <p className="text-[15px] leading-relaxed text-slate-600 font-medium mb-8">
                      {t.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-5 border-t border-slate-200/60 relative z-10">
                    <Avatar name={t.name} initials={t.initials} profileImage={t.profile_image} />
                    <div>
                      <p className="text-base font-bold text-slate-900 group-hover:text-[#00aeee] transition-colors duration-300">
                        {t.name}
                      </p>
                      <p className="text-xs font-semibold text-slate-400 mt-0.5 tracking-wide">
                        {t.role} {t.location && <><span className="text-slate-300 mx-1">•</span> {t.location}</>}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2.5 mt-8 md:hidden relative z-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? "w-7 bg-[#00aeee]" 
                  : "w-2 bg-slate-200"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}