"use client";

const TICKERS = [
  { label: "NIFTY 50", text: "Long-term wealth is built on patience" },
  { label: "SENSEX", text: "Buy right, hold tight" },
  { label: "MCX", text: "Diversify across asset classes" },
  { label: "SIP", text: "Start small, stay consistent" },
  { label: "IPO", text: "3-click investing via UPI" },
  { label: "NIFTY 50", text: "Long-term wealth is built on patience" },
  { label: "SENSEX", text: "Buy right, hold tight" },
  { label: "MCX", text: "Diversify across asset classes" },
  { label: "SIP", text: "Start small, stay consistent" },
  { label: "IPO", text: "3-click investing via UPI" },
];

export default function Ticker() {
  return (
    <div
      className="overflow-hidden whitespace-nowrap border-t"
      style={{ background: "#011628", borderColor: "rgba(0,174,238,0.2)", color: "#c8dff0" }}
      aria-hidden="true"
    >
      <div
        className="inline-block py-2.5 text-sm"
        style={{ animation: "ticker-scroll 30s linear infinite" }}
      >
        {TICKERS.map((t, i) => (
          <span key={i} className="mx-7">
            <b className="text-secondary font-bold">{t.label}</b>
            {" — "}
            {t.text}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
