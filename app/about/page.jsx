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
        image="/images/about/about us.jpg"
        height="h-[300px] md:h-[400px]" />

      {/* Overview Section */}
      <section id="overview" className="py-12 bg-[#f7f9fc]">
        <Container>
          <div className="mb-10 text-center">
            <div className="text-[14px] font-black tracking-widest uppercase mb-3 text-[#EA2830]">
              About Ratnakar Securities
            </div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-black mb-6">
              Building Trust, Creating Wealth
            </h2>

            {/* Short & Punchy Content */}
            <div className="max-w-6xl mx-auto text-gray-700 space-y-6 text-[16px] leading-relaxed">
              <p>
                Ratnakar Securities is a trusted leader in India’s financial landscape. Since 1994, we have empowered thousands of investors by combining deep market expertise with a commitment to integrity, transparency, and long-term value creation.
              </p>
              <p>
                Whether you are a first-time investor, a seasoned trader, or an institution, we provide personalized financial solutions backed by advanced technology and in-depth research. Our mission is simple: to guide you toward informed decisions and sustainable financial success at every stage of your journey.
              </p>
            </div>
          </div>

          {/* Feature Grid remains the same */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: "One-stop shop", desc: "Comprehensive solutions across equities, derivatives, and more." },
              { icon: Target, title: "Client-Centric", desc: "Tailored financial planning designed for your specific life goals." },
              { icon: Laptop, title: "Seamless Trading", desc: "Trade effortlessly via web, mobile, or our support network." },
              { icon: BarChart3, title: "Pro Tracking", desc: "Optimize your portfolio with real-time analytics and alerts." }
            ].map((item, index) => (
              <div key={index} className="group p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-red-600 mb-4 group-hover:bg-[#EA2830] group-hover:text-white transition-all duration-300">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-12 bg-white">
        <Container>
          {/* Leadership Intro Text */}
          <div className="max-w-6xl mx-auto text-center mb-10 px-4">
            <h2 className="text-4xl text-black mb-6">About Our Leadership</h2>
            <div className="text-[#314158] text-[16px] leading-relaxed space-y-4">
              <p>
                At Ratnakar Securities, our Key Managerial Personnel (KMP) and Board of Directors play a vital role in ensuring strong corporate governance, regulatory compliance, and strategic decision-making.
              </p>
            </div>
          </div>

          {/* Leadership Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {[
              {
                name: "Ajay Jayantilal Shah",
                role: "Chairman & Managing Director | Director",
                image: "/images/about/AJAY_SHAH_PHOTO__MD___CHAIRMAN-removebg-preview.png",
                desc: "A recognized leader in financial services and capital markets, representing the third generation of a reputed business family in Ahmedabad. With 32+ years of experience, he leads the Board of Directors and strategic growth initiatives."
              },
              {
                name: "Kushal Ajay Shah",
                role: "COO | Whole-Time Director | Compliance Officer",
                image: "/images/about/khusal.png",
                desc: "Kushal takes the legacy forward with dynamic business acumen. A post-graduate in financial markets and CFA USA Level II cleared, he manages operations, compliance, and technological transformation."
              },
              {
                name: "Ajay Nagindas Gandhi",
                role: "Chief Financial Officer (CFO)",
                image: "/images/about/AJAY_GANDHI_CFO-removebg-preview.png",
                desc: "Shri. Ajay Gandhi brings extensive experience in financial management and strategic planning. He plays a crucial role in ensuring the company's financial health, audit compliance, and resource allocation."
              }
            ].map((leader, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center bg-white border border-gray-100 p-4 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2
            ${index === 2 ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto w-full' : ''}`}
              >
                {/* Image Box - Bottom 5px rounded added here */}
                <div className="relative w-full md:w-[280px] h-[380px] shrink-0 overflow-hidden rounded-3xl rounded-tr-[80px] rounded-b-[5px] shadow-md transition-all duration-300">
                  <div className="absolute inset-0 bg-[#e0e8f9]"></div>
                  <Image src={leader.image} alt={leader.name} fill className="object-cover object-top" />
                </div>

                {/* Text Content */}
                <div className="p-8 w-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-black mb-1">{leader.name}</h3>
                  <p className="text-[#EA2830] font-semibold text-sm uppercase tracking-wider mb-4">{leader.role}</p>
                  <div className="text-[#314158] leading-relaxed text-[15px] italic">
                    <p>“{leader.desc}”</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Milestones Section */}
      <section id="journey" className="py-12 bg-[#f7f9fc]">
        <Container>
          {/* Centered Introduction Text */}
          <div className="max-w-5xl mx-auto text-center mb-10">
            <h2 className="text-5xl  text-gray-900 mb-6">Our Journey</h2>
            <p className="text-[#314158] text-[16px] leading-relaxed">
              Ratnakar Securities has grown steadily through innovation, customer trust, and a commitment to excellence.
              Every milestone reflects our dedication to expanding financial opportunities, embracing new technologies,
              and adapting to the evolving needs of investors. Our journey is built on a foundation of trust,
              expertise, and continuous progress.
            </p>
          </div>

          {/* Milestone Interactive Grid */}
          <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-3xl shadow-xl border border-blue-50">

            {/* Left Image Box */}
            <div className="flex-1 relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden flex flex-col justify-end text-white">
              <Image
                src="/images/about/22.jpg"
                alt="Milestone"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="relative z-10 p-8">
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
                  className={`p-4 rounded-xl border-l-4 transition-all duration-300 cursor-pointer ${active === index
                    ? "bg-blue-50 border-red-600 shadow-md"
                    : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                    }`}
                >
                  <div className={`font-black text-lg ${active === index ? "text-red-600" : "text-gray-500"}`}>
                    {item.year}
                  </div>
                  <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Promise Section */}
      <section id="promise" className="py-12">
        <Container>
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Promise</h2>
              <p className="text-[#314158] leading-relaxed">
                At Ratnakar Securities, we believe successful investing is built on knowledge, trust, and disciplined decision-making.
              </p>
              <p className="font-semibold italic border-l-4 border-[#EA2830] pl-4">
                "Together, we strive to build lasting relationships and create sustainable financial success."
              </p>
            </div>
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-md">
              <Image src="/images/about/digital-partnership-trust-concept_1048363-21037.avif" alt="Promise" fill className="object-cover" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}