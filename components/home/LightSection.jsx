"use client";

import Container from "@/components/common/Container";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function LightSection() {
  return (
    <section className="py-20" style={{ background: "#f7f9fc" }}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-dark-navy mb-4">
            Empower Your Financial Future
          </h2>
          <p className="text-base text-muted-foreground mx-auto max-w-2xl" style={{ color: "#555" }}>
            Discover tailored solutions, expert guidance, and a seamless investing experience designed for every stage of your journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <MessageSquare className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 text-dark-navy">Personalized Plans</h3>
            <p className="text-sm text-muted-foreground mb-4" style={{ color: "#666" }}>
              Build a roadmap that fits your goals, risk appetite, and timeline.
            </p>
            <a href="/plans" className="inline-flex items-center gap-1 text-primary font-medium hover:underline">
              Learn more <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex flex-col items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <MessageSquare className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 text-dark-navy">Expert Insights</h3>
            <p className="text-sm text-muted-foreground mb-4" style={{ color: "#666" }}>
              Stay ahead with market analysis, research reports, and timely alerts.
            </p>
            <a href="/insights" className="inline-flex items-center gap-1 text-primary font-medium hover:underline">
              Explore insights <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
