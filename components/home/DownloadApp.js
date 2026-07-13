import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function DownloadApp() {
  return (
    <section className="pt-12 px-4">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#ea2830] to-[#00aeee] rounded-3xl p-8 md:p-8  text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* લેફ્ટ સાઇડ: કન્ટેન્ટ */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Our App</h2>
            <p className="text-blue-100 text-lg mb-8">Trade seamlessly on the go with our professional mobile platform.</p>
            
            {/* Google Image QR Code */}
            <div className="bg-white p-3 rounded-2xl inline-block shadow-lg">
               <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                  alt="QR Code" 
                  className="w-32 h-32" 
               />
            </div>
          </div>

          {/* મિડલ સાઇડ: નવો સ્થાનિક ફોટો */}
          <div className="flex-shrink-0">
            <img
              src="/images/hero/Gemini_Generated_Image_karn1zkarn1zkarn.png"
              alt="Investment App"
              className="w-64 md:w-70 object-contain drop-shadow-2xl"
            />
          </div>

          {/* રાઈટ સાઇડ: બટન્સ */}
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a href="https://play.google.com/store/apps/details?id=com.wave.ratnakartradeexpress" className="flex items-center gap-4 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-all border border-gray-700">
              <FaApple className="w-10 h-10" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-gray-400">Download on the</p>
                <p className="text-xl font-semibold">App Store</p>
              </div>
            </a>

            <a href="https://play.google.com/store/apps/details?id=com.wave.ratnakartradeexpress" className="flex items-center gap-4 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-all border border-gray-700">
              <FaGooglePlay className="w-9 h-9 text-green-400" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-gray-400">Get it on</p>
                <p className="text-xl font-semibold">Google Play</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}