"use client";
import React, { useState, useEffect } from "react";
import Container from "@/components/common/Container";
import { Quote, Star } from "lucide-react";
import { getTestimonials } from "@/services/testimonials";
import { API_BASE_URL } from "@/services/config";

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
    <div className="flex gap-1">
      {Array.from({ length: validCount }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
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
    const baseUrl = API_BASE_URL.replace(/\/api$/, "");
    let imageUrl = profileImage.startsWith("http://") || profileImage.startsWith("https://")
      ? profileImage
      : `${baseUrl}/uploads/${profileImage}`;

    if (imageUrl.startsWith("http://api.ratnakarsecurities.com")) {
      imageUrl = imageUrl.replace("http://api.ratnakarsecurities.com", "https://api.ratnakarsecurities.com");
    }

    return (
      <img
        src={imageUrl}
        alt={name || "User"}
        onError={() => setImgError(true)}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-sm"
      />
    );
  }

  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 bg-gradient-to-br from-[#00aeee]/20 to-[#00aeee]/10 text-[#00aeee] border border-[#00aeee]/20 shadow-sm">
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
    <section className="py-12 bg-gradient-to-b from-slate-50 via-sky-50/40 to-slate-50 relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-sky-400/10 via-blue-500/10 to-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        {/* Header Section (Unchanged Text & Sizes) */}
        <div className="text-center mb-10 relative z-10 max-w-2xl mx-auto">
          <div className="text-[14px] font-black tracking-widest uppercase mb-3" style={{ color: "#ea2830" }}>
            Words of Trust
          </div>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight leading-tight text-[#011628] mb-3">
            Hear From Our Investors
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-normal max-w-lg mx-auto">
            Discover how our tailored research and financial expertise empower long-term growth.
          </p>
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
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-7 border border-slate-300 hover:border-[#00aeee]/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,174,238,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full relative group">

                  <div>
                    {/* Top Header inside Card: Small Quote Icon & Rating */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-9 h-9 rounded-xl bg-[#00aeee]/10 border border-[#00aeee]/20 flex items-center justify-center text-[#00aeee] shrink-0 group-hover:bg-[#00aeee] group-hover:text-white transition-colors duration-300">
                        <Quote className="w-4 h-4" />
                      </div>
                      <StarRating count={t.stars} />
                    </div>

                    {/* Testimonial Message */}
                    <p className="text-[15px] leading-relaxed text-slate-600 font-medium mb-8">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 relative z-10">
                    <Avatar name={t.name} initials={t.initials} profileImage={t.profile_image} />
                    <div className="overflow-hidden">
                      <p className="text-sm font-bold text-slate-900 group-hover:text-[#00aeee] transition-colors duration-300 truncate">
                        {t.name}
                      </p>
                      <p className="text-xs font-semibold text-slate-400 mt-0.5 tracking-wide truncate">
                        {t.role} {t.location && <><span className="text-slate-300 mx-1">•</span> {t.location}</>}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8 md:hidden relative z-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx
                ? "w-7 bg-[#00aeee]"
                : "w-2 bg-slate-300"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}