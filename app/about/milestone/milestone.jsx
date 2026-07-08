"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/common/Container";

const milestones = [
  {
    date: "OCT 1994",
    title: "Ratnakar Securities was incorporated",
    top: true,
  },
  { date: "SEP 1995", title: "Become a Corporate Member of NSE", top: false },
  {
    date: "DEC 1998",
    title: "Launch Depository services under NSDL",
    top: true,
  },
  {
    date: "JAN 2001",
    title: "Started NSE Future & Option Segment",
    top: false,
  },
  { date: "SEP 2005", title: "IPO Finance Scheme (Bank of India)", top: true },
  {
    date: "DEC 2005",
    title: "Become a Corporate Member MCX and NCDEX",
    top: false,
  },
  { date: "JAN 2007", title: "Launched ONLINE TRADING Platform", top: true },
  { date: "JUN 2008", title: "Become a Corporate Member of BSE", top: false },
  {
    date: "AUG 2009",
    title: "Started Currency Derivatives Segment",
    top: true,
  },
  { date: "JUL 2010", title: "Launched Online Mutual Funds", top: false },
  { date: "2016", title: "NSDL Star Performer in Active Accounts", top: true },
  { date: "2018", title: "New NSE SLB Segment", top: false },
  { date: "2018", title: "New NSE Commodities Segment", top: true },
];

export default function AboutOverview() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      if (width < 768) {
        setVisibleCount(1);
      } else if (width < 1200) {
        setVisibleCount(3);
      } else if (width < 1600) {
        setVisibleCount(4);
      } else {
        setVisibleCount(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = isMobile ? 300 : 340;
  const maxIndex = Math.max(0, milestones.length - visibleCount);

  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [maxIndex, index]);

  return (
    <Container>
      <div className="py-10">
        {/* Banner */}
        <div className="relative h-64 md:h-80 rounded-sm overflow-hidden flex items-center p-8 md:p-12">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage:
                "url('/images/about/Milestones-Ratnakarsec.jpg')",
            }}
          />
          <div className="relative z-10 border-l-4 border-primary pl-5">
            <h1 className="text-white text-2xl md:text-4xl font-medium">
              The one who turns over most rocks finds
              <br />
              the gem
            </h1>
          </div>
        </div>

        <div className="py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Milestones
          </h2>
        </div>

        {/* Responsive Timeline Slider Container */}
        <div className="relative w-full max-w-full mx-auto px-4 md:px-12">
          <div className="absolute left-0 right-0 top-1/2 h-[4px] bg-muted -translate-y-1/2 z-0"></div>

          <button
            onClick={() => setIndex(Math.max(index - 1, 0))}
            disabled={index === 0}
            className="cursor-pointer group absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-muted transition-all duration-300 hover:bg-foreground disabled:cursor-not-allowed "
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-foreground transition-colors duration-300 group-hover:text-background" />
          </button>

          <button
            onClick={() => setIndex(Math.min(index + 1, maxIndex))}
            disabled={index === maxIndex}
            className="cursor-pointer group absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-muted transition-all duration-300 hover:bg-foreground disabled:cursor-not-allowed "
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-foreground transition-colors duration-300 group-hover:text-background" />
          </button>

          <div
            className="overflow-hidden mx-auto w-full"
            style={{ maxWidth: `${cardWidth * visibleCount}px` }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * cardWidth}px)`,
              }}
            >
              {milestones.map((item, i) => (
                <TimelineCard key={i} item={item} cardWidth={cardWidth} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function TimelineCard({ item, cardWidth }) {
  return (
    <div
      className="relative shrink-0 flex items-center justify-center"
      style={{
        width: cardWidth,
        height: 400,
      }}
    >
      {item.top ? (
        <>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[260px] md:w-72 h-28 bg-secondary-light border border-secondary flex items-center justify-center text-center px-4 md:px-6 text-sm md:text-lg text-foreground rounded-sm">
            {item.title}
          </div>
          <div className="absolute top-32 left-1/2 -translate-x-1/2 w-px h-12 bg-secondary"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-secondary text-white rounded-full px-5 py-2 text-sm md:text-base font-medium whitespace-nowrap min-w-[120px] text-center">
            {item.date}
          </div>
        </>
      ) : (
        <>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-white rounded-full px-5 py-2 text-sm md:text-base font-medium whitespace-nowrap min-w-[120px] text-center">
            {item.date}
          </div>
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-px h-12 bg-primary"></div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[260px] md:w-72 h-28 bg-primary-light border border-primary flex items-center justify-center text-center px-4 md:px-6 text-sm md:text-lg text-foreground rounded-sm">
            {item.title}
          </div>
        </>
      )}
    </div>
  );
}
