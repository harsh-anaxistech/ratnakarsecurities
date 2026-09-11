"use client";

import React, { useState, useEffect, useRef } from "react";
import Container from "@/components/common/Container";
import { Quote, Star, Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { getTestimonials } from "@/services/testimonials";
import { API_BASE_URL } from "@/services/config";

/**
 * Client Testimonials Carousel Component
 * 
 * Displays verified client feedback and star ratings:
 * - Fetches live testimonials dynamically via `getTestimonials` API with fallback default reviews.
 * - Carousel with auto-advance, responsive multi-slide breakpoints, and keyboard controls.
 * - Pause/Play toggle to satisfy accessibility standards for moving content.
 */
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
    <div className="flex gap-1" aria-label={`Rating: ${validCount} out of 5 stars`}>
      {Array.from({ length: validCount }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-600" aria-hidden="true" />
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
    let imageUrl =
      profileImage.startsWith("http://") || profileImage.startsWith("https://")
        ? profileImage
        : `${baseUrl}/uploads/${profileImage}`;

    if (imageUrl.startsWith("http://api.ratnakarsecurities.com")) {
      imageUrl = imageUrl.replace("http://api.ratnakarsecurities.com", "https://api.ratnakarsecurities.com");
    }

    return (
      <img
        src={imageUrl}
        alt={`Profile picture of ${name || "Client"}`}
        onError={() => setImgError(true)}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-sm"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      style={{ backgroundColor: "#012e54" }}
      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 bg-[#012e54] bg-gradient-to-br from-[#004f7a] to-[#012e54] text-white border border-[#012e54]/20 shadow-sm"
    >
      {displayInitials}
    </div>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(FALLBACK_TESTIMONIALS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  // Autoplay effect that pauses on user action, hover, or focus (WCAG 2.2.2 / GIGW 5.2.25)
  useEffect(() => {
    if (testimonials.length === 0 || isPaused || isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length, isPaused, isHovered]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      className="py-12 bg-gradient-to-b from-slate-50 via-sky-50/40 to-slate-50 relative overflow-hidden"
      aria-label="Client Testimonials Section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-sky-400/10 via-blue-500/10 to-indigo-500/10 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />

      <Container>
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 relative z-10 max-w-full">
          <div className="max-w-2xl">
            <span className="text-[14px] font-black tracking-widest uppercase mb-2 block text-primary-dark">
              Words of Trust
            </span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight leading-tight text-[#011628] mb-2">
              Hear From Our Investors
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-normal max-w-lg">
              Discover how our tailored research and financial expertise empower long-term growth.
            </p>
          </div>

          {/* Carousel Controls (Play/Pause, Prev, Next) - WCAG 2.2.2 */}
          <div className="flex items-center gap-2 mt-4 sm:mt-0" role="toolbar" aria-label="Testimonial carousel controls">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Play testimonial slideshow" : "Pause testimonial slideshow"}
              title={isPaused ? "Play slideshow" : "Pause slideshow"}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-sm focus:ring-2 focus:ring-primary min-h-[36px]"
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  <span>Play</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
                  <span>Pause</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 shadow-sm focus:ring-2 focus:ring-primary min-w-[36px] min-h-[36px]"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 shadow-sm focus:ring-2 focus:ring-primary min-w-[36px] min-h-[36px]"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div
          className="relative w-full overflow-hidden md:overflow-visible z-10"
          aria-live="polite"
        >
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
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-7 border border-slate-300 hover:border-[#006da0]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full relative group">
                  <div>
                    {/* Top Header inside Card */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-9 h-9 rounded-xl bg-[#006da0]/10 border border-[#006da0]/20 flex items-center justify-center text-secondary shrink-0 group-hover:bg-[#006da0] group-hover:text-white transition-colors duration-300">
                        <Quote className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <StarRating count={t.stars} />
                    </div>

                    {/* Testimonial Message */}
                    <p className="text-[15px] leading-relaxed text-slate-700 font-medium mb-8">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 relative z-10">
                    <Avatar name={t.name} initials={t.initials} profileImage={t.profile_image} />
                    <div className="overflow-hidden">
                      <p className="text-sm font-bold text-slate-900 group-hover:text-[#005a9c] transition-colors duration-300 truncate">
                        {t.name}
                      </p>
                      <p className="text-xs font-semibold text-slate-600 mt-0.5 tracking-wide truncate">
                        {t.role} {t.location && <><span className="text-slate-500 mx-1" aria-hidden="true">•</span> {t.location}</>}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8 md:hidden relative z-10" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={activeIndex === idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 min-h-[24px] min-w-[24px] flex items-center justify-center`}
              aria-label={`Go to testimonial slide ${idx + 1}`}
            >
              <span className={`block h-2 rounded-full transition-all ${
                activeIndex === idx ? "w-7 bg-[#0088c2]" : "w-2 bg-slate-300"
              }`} />
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}