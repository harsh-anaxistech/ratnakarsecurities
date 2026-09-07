"use client";

import React, { useState, useEffect } from "react";
import { Volume2, RefreshCw, HelpCircle } from "lucide-react";
import Input from "@/components/common/Input";

/**
 * Accessible CAPTCHA Component
 * Satisfies GIGW 3.0 5.2.1 & WCAG 2.2 1.1.1 (Non-Text Content - Audio mode for CAPTCHA)
 */
export default function AccessibleCaptcha({
  value,
  onChange,
  error,
  id = "form-captcha",
  name = "captcha",
  onCaptchaChange,
}) {
  const [captchaCode, setCaptchaCode] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [mounted, setMounted] = useState(false);

  const generateCode = () => {
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // Removed ambiguous 0, O, 1, I
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    if (onCaptchaChange) onCaptchaChange(code);
    return code;
  };

  useEffect(() => {
    setMounted(true);
    generateCode();
  }, []);

  const playAudioCaptcha = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Speech synthesis is not supported on this browser. Your captcha code is: " + captchaCode);
      return;
    }

    window.speechSynthesis.cancel();

    // Enunciate each character clearly with pause
    const chars = captchaCode.split("");
    const speechText = `Captcha code is: ${chars.map((c) => isNaN(c) ? `Capital letter ${c}` : `Number ${c}`).join(", ")}. I repeat: ${chars.join(", ")}.`;

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 0.85; // Slightly slower for clarity
    utterance.pitch = 1.0;
    utterance.lang = "en-IN";

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Captcha Input */}
        <div className="flex-1 flex flex-col gap-1">
          <label htmlFor={id} className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Verification Code (CAPTCHA) <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <div className="relative flex items-center">
            <div className="absolute left-4 text-slate-600 pointer-events-none z-10" aria-hidden="true">
              <HelpCircle className="w-5 h-5" />
            </div>
            <Input
              id={id}
              type="text"
              name={name}
              autoComplete="off"
              placeholder="Enter 6-character code"
              value={value}
              onChange={onChange}
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ? `${id}-error` : `${id}-hint`}
              className="h-12 pl-12 rounded-xl bg-slate-50/70 border border-[#767676] text-[15px] uppercase font-mono tracking-widest placeholder:normal-case placeholder:tracking-normal placeholder:font-sans focus:border-[#004b87] focus:ring-2 focus:ring-[#004b87]/40"
            />
          </div>
          <p id={`${id}-hint`} className="sr-only">
            Case insensitive 6-character security code shown in the image or available via the audio button.
          </p>
        </div>

        {/* Captcha Display Box & Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto sm:mt-5">
          {/* Visual Captcha Canvas / Box */}
          <div
            className="w-36 h-12 bg-slate-100 border-2 border-[#595959] rounded-xl flex items-center justify-center select-none shadow-inner tracking-[0.3em] font-mono font-black text-xl text-slate-800 relative overflow-hidden bg-[repeating-linear-gradient(45deg,#f8fafc,#f8fafc_6px,#e2e8f0_6px,#e2e8f0_12px)]"
            aria-label={`Visual Captcha: ${mounted ? captchaCode : "Loading"}`}
            role="img"
          >
            <span className="relative z-10 select-none italic transform -skew-x-6 text-[#012e54]">
              {mounted ? captchaCode : "------"}
            </span>
            <div className="absolute inset-0 opacity-20 flex flex-col justify-around pointer-events-none" aria-hidden="true">
              <div className="w-full h-[2px] bg-slate-900 -rotate-3"></div>
              <div className="w-full h-[2px] bg-slate-900 rotate-3"></div>
            </div>
          </div>

          {/* Audio Captcha Button */}
          <button
            type="button"
            onClick={playAudioCaptcha}
            aria-label={isSpeaking ? "Audio Captcha is playing" : "Listen to Audio CAPTCHA"}
            title="Listen to Audio CAPTCHA"
            className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-200 shrink-0 focus:ring-2 focus:ring-primary ${
              isSpeaking
                ? "bg-primary text-white border-primary animate-pulse"
                : "bg-slate-100 hover:bg-slate-200 border-[#767676] text-slate-700"
            }`}
          >
            <Volume2 className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Refresh Captcha Button */}
          <button
            type="button"
            onClick={generateCode}
            aria-label="Generate new Captcha code"
            title="Refresh Captcha"
            className="w-12 h-12 bg-slate-100 hover:bg-slate-200 border border-[#767676] text-slate-700 rounded-xl flex items-center justify-center transition-all duration-200 group shrink-0 focus:ring-2 focus:ring-[#004b87]"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Error Message with Suggestion */}
      {error && (
        <span
          id={`${id}-error`}
          role="alert"
          className="text-red-600 text-xs font-bold pl-1 flex items-center gap-1 animate-fade-in"
        >
          <span aria-hidden="true">⚠️</span> {error}
        </span>
      )}
    </div>
  );
}
