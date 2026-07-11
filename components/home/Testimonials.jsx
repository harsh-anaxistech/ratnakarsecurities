"use client";

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
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
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
      className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
      style={{ background: "linear-gradient(135deg, #ea2830, #c41f26)" }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20" style={{ background: "#f7f9fc" }}>
      <Container>
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#ea2830" }}
          >
            Client Testimonials
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4"
            style={{ color: "#011628" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#555" }}>
            Real stories from investors who trust Ratnakar Securities with their wealth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top: Quote icon + stars */}
              <div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, #ea2830, #c41f26)" }}
                >
                  <Quote className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <StarRating count={t.stars} />
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "#444" }}
                >
                  "{t.quote}"
                </p>
              </div>

              {/* Bottom: Avatar + name */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <Avatar name={t.name} />
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#011628" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#888" }}>
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
