import Link from "next/link";
import Container from "@/components/common/Container";

const APP_FEATURES = [
  "Live market watch",
  "One-tap IPO applications",
  "SIP setup & tracking",
  "Instant fund transfer",
  "Portfolio & P&L reports",
  "Research alerts from our desk",
];

export default function DownloadApp() {
  return (
    <section className="py-20 overflow-hidden" style={{ background: "linear-gradient(120deg, #f0f7fe 55%, #e0f0fd 100%)" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — Text */}
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Trade & Track on the Go</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-dark-navy leading-tight">
              Your portfolio,<br />in your pocket.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Buy, sell, invest in IPOs and monitor your wealth from anywhere — with the same trusted advice behind every tap.
            </p>

            {/* Feature checklist */}
            <div className="mt-6 grid grid-cols-2 gap-2">
              {APP_FEATURES.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm font-semibold text-dark-blue">
                  <span className="text-primary font-black">✓</span> {f}
                </div>
              ))}
            </div>

            {/* Store buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg min-w-[190px]"
                style={{ background: "#011628", color: "#fff" }}
              >
                <span className="text-2xl">▶</span>
                <span>
                  <small className="block text-[0.6rem] tracking-widest uppercase" style={{ color: "#00aeee" }}>Get it on</small>
                  <b className="font-bold text-sm">Google Play</b>
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg min-w-[190px]"
                style={{ background: "#011628", color: "#fff" }}
              >
                <span className="text-2xl">🍎</span>
                <span>
                  <small className="block text-[0.6rem] tracking-widest uppercase" style={{ color: "#00aeee" }}>Download on</small>
                  <b className="font-bold text-sm">App Store</b>
                </span>
              </Link>
            </div>
          </div>

          {/* Right — CSS Phone Mockup */}
          <div className="flex justify-center">
            <div
              className="w-[280px] rounded-[38px] p-3.5 shadow-2xl"
              style={{ background: "#011628" }}
            >
              <div className="rounded-[26px] overflow-hidden bg-white">
                {/* Phone header */}
                <div className="px-4 pt-5 pb-3.5" style={{ background: "#ea2830" }}>
                  <small className="block text-[0.62rem] tracking-widest uppercase" style={{ color: "#ffc8ca" }}>Good morning, Investor</small>
                  <b className="block font-bold text-white text-base mt-0.5">
                    Portfolio ₹12,48,300{" "}
                    <span className="text-xs font-bold" style={{ color: "#9fe0b5" }}>▲ 14.2%</span>
                  </b>
                </div>

                {/* Market rows */}
                {[
                  { name: "NIFTY 50", change: "▲ 0.86%", up: true },
                  { name: "SENSEX", change: "▲ 0.72%", up: true },
                  { name: "GOLD (MCX)", change: "▲ 0.31%", up: true },
                  { name: "USD/INR", change: "▼ 0.12%", up: false },
                ].map((row) => (
                  <div
                    key={row.name}
                    className="flex justify-between items-center px-4 py-3 border-b text-sm"
                    style={{ borderColor: "#e5e7eb" }}
                  >
                    <span className="font-bold text-dark-navy">{row.name}</span>
                    <span className="font-bold" style={{ color: row.up ? "#1d7a45" : "#b3362a" }}>
                      {row.change}
                    </span>
                  </div>
                ))}

                {/* CTA */}
                <div
                  className="mx-4 my-4 py-3 rounded-lg text-center font-black text-sm cursor-pointer transition hover:opacity-90"
                  style={{ background: "#00aeee", color: "#fff" }}
                >
                  Invest Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
