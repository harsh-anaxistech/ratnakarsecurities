import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

/**
 * Mobile App Download Banner Component
 * 
 * Showcases the "Ratnakar TradeExpress" mobile trading application:
 * - Scannable QR code for instant mobile device installation.
 * - Direct download links for Apple App Store (iOS) and Google Play Store (Android).
 */
export default function DownloadApp() {
  return (
    <section className="pt-12 px-4" aria-label="Mobile App Download Section">
      <div 
        className="max-w-6xl mx-auto rounded-3xl p-8 md:p-8 text-white shadow-2xl overflow-hidden bg-[#012e54]"
        style={{ 
          backgroundColor: "#012e54",
          backgroundImage: "linear-gradient(135deg, #a7181e 0%, #004b87 45%, #012e54 100%)",
          color: "#ffffff"
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* લેફ્ટ સાઇડ: કન્ટેન્ટ */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ color: "#ffffff" }}>Download Our App</h2>
            <p className="text-cyan-100 text-lg mb-8 font-medium" style={{ color: "#cffafe" }}>Trade seamlessly on the go with our professional mobile platform.</p>

            {/* Google Image QR Code */}
            <div className="bg-white p-3 rounded-2xl inline-block shadow-lg">
              <img
                src={encodeURI("/images/about/image (28).png")}
                alt="QR Code to download Ratnakar TradeExpress mobile trading app"
                className="w-32 h-32"
              />
            </div>
          </div>
          {/* મિડલ સાઇડ: નવો સ્થાનિક ફોટો */}
          <div className="flex-shrink-0">
            <img
              src={encodeURI("/images/about/Stock trading on sleek iPhones.png")}
              alt="Ratnakar TradeExpress mobile trading app displayed on iPhones"
              className="w-64 md:w-70 object-contain drop-shadow-2xl"
            />
          </div>

          {/* રાઈટ સાઇડ: બટન્સ */}
          <div className="flex flex-col items-center md:items-stretch gap-4 w-full md:w-auto">
            <a 
              href="https://apps.apple.com/in/app/ratnakar-tradeexpress/id1281205603" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Ratnakar TradeExpress on the Apple App Store"
              className="flex items-center gap-4 text-white px-6 py-4 rounded-2xl hover:bg-slate-900 transition-all border border-slate-700 w-[250px] md:w-auto shadow-lg"
              style={{ backgroundColor: "#000000", color: "#ffffff" }}
            >
              <FaApple className="w-10 h-10 text-white shrink-0" aria-hidden="true" />
              <div className="text-left">
                <span className="text-xs uppercase font-bold text-white tracking-wider block" style={{ color: "#ffffff" }}>Download on the</span>
                <span className="text-xl font-bold text-white block" style={{ color: "#ffffff" }}>App Store</span>
              </div>
            </a>

            <a 
              href="https://play.google.com/store/apps/details?id=com.wave.ratnakartradeexpress" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Ratnakar TradeExpress on Google Play Store"
              className="flex items-center gap-4 text-white px-6 py-4 rounded-2xl hover:bg-slate-900 transition-all border border-slate-700 w-[250px] md:w-auto shadow-lg"
              style={{ backgroundColor: "#000000", color: "#ffffff" }}
            >
              <FaGooglePlay className="w-9 h-9 text-green-400 shrink-0" aria-hidden="true" />
              <div className="text-left">
                <span className="text-xs uppercase font-bold text-white tracking-wider block" style={{ color: "#ffffff" }}>Get it on</span>
                <span className="text-xl font-bold text-white block" style={{ color: "#ffffff" }}>Google Play</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}