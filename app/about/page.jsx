"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Home, Target, Laptop, BarChart3 } from "lucide-react";
import Container from "@/components/common/Container";
import HeroSection from "@/components/common/HeroSection";

export default function AboutPage() {
  const router = useRouter();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router.asPath]);
  const [active, setActive] = useState(0);

  const milestones = [
    {
      year: "2005",
      title: "IPO Finance Scheme (Bank of India)",
      desc: "Started IPO Finance Scheme with Bank of India.",
      image: "https://images.unsplash.com/photo-1590283603385-fc77b09919f2?w=800&q=80"
    },
    {
      year: "2001",
      title: "Started NSE Future & Option Segment",
      desc: "Launched Future & Option trading at NSE.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
    },
    {
      year: "1998",
      title: "Launch Depository services under NSDL",
      desc: "Introduced secure depository services under NSDL.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
      year: "1995",
      title: "Become a Corporate Member of NSE",
      desc: "Achieved corporate membership of NSE.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      year: "1994",
      title: "Ratnakar Securities was incorporated",
      desc: "The year we began our journey.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    },
  ];

  return (
    <main className="bg-background min-h-screen">
      <HeroSection
        title="About Ratnakar"
        breadcrumbs={[{ label: "About Ratnakar" }]}
        image="/images/about/AboutUs-Ratnakarsec.png"
        height="h-[300px] md:h-[400px]" />

      {/* Overview Section */}
      <section id="overview" className="py-12 bg-[#f7f9fc]">
        <Container>
          <div className="mb-12 text-center">
            <div className="text-[14px] font-black tracking-widest uppercase mb-3" style={{ color: "rgb(234, 40, 48)" }}>
              About Ratnakar
            </div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight mb-4">Overview</h2>
            <p className="text-[16px] text-gray-700 max-w-3xl mx-auto font-medium">
              Emerging as one of the leading broking houses and investment advisors in India,
              Ratnakar Securities offers 20 years of expertise in financial planning solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: "One-stop shop", desc: "Comprehensive products across equities, derivatives, and more." },
              { icon: Target, title: "Interest Priority", desc: "360-degree financial planning tailored to your specific life goals." },
              { icon: Laptop, title: "Seamless Trading", desc: "Trade via online, mobile, telephone, or associate branches." },
              { icon: BarChart3, title: "Track like Pro", desc: "Optimize returns with our portfolio tracker and SMS alerts." }
            ].map((item, index) => (
              <div key={index} className="group p-6 border border-gray-100 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-gray-200">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-red-600 mb-4 transition-all duration-300 group-hover:bg-[#EA2830] group-hover:text-white">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-[16px] text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-12 bg-white">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-4xl text-black mb-4">Leadership</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              { name: "Shri. Ajay Shah", role: "Founder, Chairman and Managing Director", image: "/images/about/human-2 (1).png", desc: "A recognized leader in financial services and capital markets." },
              { name: "Kushal Shah", role: "Chief Operations Officer (COO)", image: "/images/about/human-2 (1).png", desc: "Kushal takes the legacy of Ratnakar Securities forward with his sharp business acumen." }
            ].map((leader, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center bg-white border border-gray-100 p-4 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative w-full md:w-[280px] h-[380px] shrink-0 overflow-hidden rounded-3xl rounded-tr-[80px] shadow-md transition-all duration-300">
                  <div className="absolute inset-0 bg-[#e0e8f9]"></div>
                  <Image src={leader.image} alt={leader.name} fill className="object-cover object-top p-2" />
                </div>
                <div className="p-8 w-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-black mb-1">{leader.name}</h3>
                  <p className="text-[#EA2830] font-semibold text-sm uppercase tracking-wider mb-4">{leader.role}</p>
                  <p className="text-gray-600 leading-relaxed text-[15px] italic">"{leader.desc}"</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Milestones Section */}
      <section id="journey" className="py-12 bg-[#f7f9fc]">
        <Container>
          <h2 className="text-4xl text-center text-gray-900 mb-10">Our Journey</h2>
          <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-3xl shadow-xl border border-blue-50">

            {/* Left Image Box - Dynamic Image */}
            <div className="flex-1 relative h-[450px] rounded-3xl overflow-hidden p-8 flex flex-col justify-end text-white">
              <Image
                src="/images/about/1.jpg"
                alt="Milestone"
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-6xl font-black mb-2">{milestones[active].year}</h3>
                <h4 className="text-2xl font-bold mb-4">{milestones[active].title}</h4>
                <p className="text-white/90 text-lg">{milestones[active].desc}</p>
              </div>
            </div>

            {/* Right Tab List */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
              {milestones.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`p-4 rounded-xl border-l-4 transition-all duration-300 cursor-pointer ${active === index ? "bg-blue-50 border-red-600 shadow-md" : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                    }`}
                >
                  <div className={`font-black text-lg ${active === index ? "text-red-600" : "text-gray-500"}`}>{item.year}</div>
                  <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}