"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Mail, Phone, Calendar, MapPin, Briefcase } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import AccessibleCaptcha from "@/components/common/AccessibleCaptcha";
import { submitPartnerForm } from "@/services/contact";

/**
 * PartnerForm Component (WCAG 2.2 AA & GIGW 3.0 Compliant)
 */
export default function PartnerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    timeslot: "",
    city: "",
    interested: "Sub-Broker",
    captcha: "",
  });

  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [timeslotInputType, setTimeslotInputType] = useState("text");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let filteredValue = value;

    if (name === "phone") {
      filteredValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "fullName") {
      filteredValue = value.slice(0, 100);
    }

    if (type === "radio" || type === "checkbox") {
      if (checked) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: filteredValue }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const formatSubmissionDateTime = (dtStr) => {
    if (!dtStr) return "";
    if (!dtStr.includes("T")) return dtStr;
    try {
      const d = new Date(dtStr);
      if (isNaN(d.getTime())) return dtStr;
      const datePart = d.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      const timePart = d.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      return `${datePart} ${timePart}`;
    } catch {
      return dtStr;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);

    const newErrors = {};

    // 1. Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name (e.g., Rajesh Sharma).";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name is too short. Please enter at least 2 characters.";
    }

    // 2. Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address (e.g., partner@example.com).";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Invalid email format. Please check for missing '@' or domain (e.g., user@domain.com).";
    }

    // 3. Phone
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone) {
      newErrors.phone = "Please enter your 10-digit mobile number.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid mobile number. Please enter a 10-digit Indian mobile number starting with 6, 7, 8, or 9 (e.g., 9876543210).";
    }

    // 4. Timeslot
    if (!formData.timeslot.trim()) {
      newErrors.timeslot = "Please select a preferred date and time slot for our partnership discussion call.";
    }

    // 5. City
    if (!formData.city.trim()) {
      newErrors.city = "Please enter your city name (e.g., Ahmedabad, Surat, Mumbai).";
    }

    // 6. Captcha
    if (!formData.captcha.trim()) {
      newErrors.captcha = "Please enter the 6-character security code shown in the image or use the audio button.";
    } else if (formData.captcha.trim().toUpperCase() !== captchaAnswer.toUpperCase()) {
      newErrors.captcha = "The entered captcha code does not match. Please verify the characters or click the audio icon.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      // Shift focus to the first invalid field
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(`partner-${firstErrorField.toLowerCase()}`);
      if (element) {
        element.focus();
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const formattedTimeslot = formatSubmissionDateTime(formData.timeslot);
      await submitPartnerForm({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        suitable_timeslot: formattedTimeslot,
        city: formData.city,
        interested_to_become: formData.interested,
      });

      setStatusMessage("Thank you! Your partnership inquiry has been received. Our institutional business team will connect with you at your chosen time slot.");
      setStatusType("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        timeslot: "",
        city: "",
        interested: "Sub-Broker",
        captcha: "",
      });
      setErrors({});
    } catch (err) {
      setStatusMessage("Submission failed. Please check your internet connection and try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full bg-slate-50 py-10 sm:py-16">
      <Container>
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Left Column: Image Banner */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-gradient-to-br from-[#011628] to-[#012e54] p-8 sm:p-12 flex flex-col justify-between text-white">
              <div>
                <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-2">
                  Institutional Growth
                </span>
                <h2 className="text-3xl font-serif font-bold text-white mb-4">
                  Partner With Ratnakar
                </h2>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Expand your financial business with Gujarat&apos;s leading brokerage and wealth distribution firm. Get robust trading technology, dedicated research backoffice, and attractive revenue sharing models.
                </p>
              </div>

              <div className="relative w-full h-48 sm:h-64 mt-4">
                <Image
                  src="/images/about/2444.png"
                  alt="Ratnakar trading terminal and mobile application"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12">
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#011628]">
                  Partner With Us
                </h1>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Fields marked with <span className="text-red-500 font-bold" aria-hidden="true">*</span> are required.
                </p>
              </div>

              {/* Status Message Announcement (WCAG 4.1.3) */}
              {statusMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`p-4 rounded-xl text-sm font-semibold mb-6 ${
                    statusType === "success"
                      ? "bg-green-50 text-green-800 border-2 border-green-300"
                      : "bg-red-50 text-red-800 border-2 border-red-300"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="partner-fullname" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 text-slate-400 flex items-center justify-center pointer-events-none z-10" aria-hidden="true">
                        <User className="w-4 h-4" />
                      </div>
                      <Input
                        id="partner-fullname"
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        placeholder="e.g. Amit Patel"
                        value={formData.fullName}
                        onChange={handleChange}
                        maxLength={100}
                        aria-required="true"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "partner-fullname-error" : undefined}
                        className="pl-10 h-12 rounded-xl bg-slate-50/70 border border-slate-300 text-[15px] focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    {errors.fullName && (
                      <span id="partner-fullname-error" role="alert" className="text-red-600 text-xs font-bold pl-1 animate-fade-in flex items-center gap-1">
                        <span aria-hidden="true">⚠️</span> {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="partner-email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Email Address <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 text-slate-400 flex items-center justify-center pointer-events-none z-10" aria-hidden="true">
                        <Mail className="w-4 h-4" />
                      </div>
                      <Input
                        id="partner-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="e.g. amit@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "partner-email-error" : undefined}
                        className="pl-10 h-12 rounded-xl bg-slate-50/70 border border-slate-300 text-[15px] focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    {errors.email && (
                      <span id="partner-email-error" role="alert" className="text-red-600 text-xs font-bold pl-1 animate-fade-in flex items-center gap-1">
                        <span aria-hidden="true">⚠️</span> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone & Timeslot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="partner-phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Mobile Number <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 text-slate-400 flex items-center justify-center pointer-events-none z-10" aria-hidden="true">
                        <Phone className="w-4 h-4" />
                      </div>
                      <Input
                        id="partner-phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="10-digit number e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "partner-phone-error" : undefined}
                        className="pl-10 h-12 rounded-xl bg-slate-50/70 border border-slate-300 text-[15px] focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    {errors.phone && (
                      <span id="partner-phone-error" role="alert" className="text-red-600 text-xs font-bold pl-1 animate-fade-in flex items-center gap-1">
                        <span aria-hidden="true">⚠️</span> {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="partner-timeslot" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Suitable Time Slot <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 text-slate-400 flex items-center justify-center pointer-events-none z-10" aria-hidden="true">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <Input
                        id="partner-timeslot"
                        type={timeslotInputType || (formData.timeslot ? "datetime-local" : "text")}
                        name="timeslot"
                        placeholder="Select Date & Time"
                        value={formData.timeslot}
                        onFocus={() => setTimeslotInputType("datetime-local")}
                        onBlur={(e) => {
                          if (!e.target.value) setTimeslotInputType("text");
                        }}
                        onChange={handleChange}
                        min={new Date().toISOString().slice(0, 16)}
                        aria-required="true"
                        aria-invalid={!!errors.timeslot}
                        aria-describedby={errors.timeslot ? "partner-timeslot-error" : undefined}
                        className="pl-10 h-12 rounded-xl bg-slate-50/70 border border-slate-300 text-[15px] cursor-pointer focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    {errors.timeslot && (
                      <span id="partner-timeslot-error" role="alert" className="text-red-600 text-xs font-bold pl-1 animate-fade-in flex items-center gap-1">
                        <span aria-hidden="true">⚠️</span> {errors.timeslot}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 3: City */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="partner-city" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    City / Town <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 text-slate-400 flex items-center justify-center pointer-events-none z-10" aria-hidden="true">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <Input
                      id="partner-city"
                      type="text"
                      name="city"
                      autoComplete="address-level2"
                      placeholder="e.g. Ahmedabad, Surat, Rajkot, Vadodara"
                      value={formData.city}
                      onChange={handleChange}
                      maxLength={100}
                      aria-required="true"
                      aria-invalid={!!errors.city}
                      aria-describedby={errors.city ? "partner-city-error" : undefined}
                      className="pl-10 h-12 rounded-xl bg-slate-50/70 border border-slate-300 text-[15px] focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  {errors.city && (
                    <span id="partner-city-error" role="alert" className="text-red-600 text-xs font-bold pl-1 animate-fade-in flex items-center gap-1">
                      <span aria-hidden="true">⚠️</span> {errors.city}
                    </span>
                  )}
                </div>

                {/* Interested Option Group */}
                <fieldset className="space-y-2 pt-1 border-t border-slate-200">
                  <legend className="block text-xs font-bold text-slate-700 uppercase tracking-wider pt-2">
                    Interested to become:
                  </legend>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                    <label className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg border transition-colors ${formData.interested === "Sub-Broker" ? "border-primary bg-red-50/50 text-slate-900 font-bold" : "border-slate-200 text-slate-700"}`}>
                      <input
                        type="radio"
                        name="interested"
                        value="Sub-Broker"
                        checked={formData.interested === "Sub-Broker"}
                        onChange={handleChange}
                        className="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>Sub Broker / AP</span>
                    </label>

                    <label className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg border transition-colors ${formData.interested === "Business associate" ? "border-primary bg-red-50/50 text-slate-900 font-bold" : "border-slate-200 text-slate-700"}`}>
                      <input
                        type="radio"
                        name="interested"
                        value="Business associate"
                        checked={formData.interested === "Business associate"}
                        onChange={handleChange}
                        className="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>Business Associate</span>
                    </label>

                    <label className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg border transition-colors ${formData.interested === "Authorized person" ? "border-primary bg-red-50/50 text-slate-900 font-bold" : "border-slate-200 text-slate-700"}`}>
                      <input
                        type="radio"
                        name="interested"
                        value="Authorized person"
                        checked={formData.interested === "Authorized person"}
                        onChange={handleChange}
                        className="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>Authorized Person</span>
                    </label>
                  </div>
                </fieldset>

                {/* Accessible Audio CAPTCHA (WCAG 1.1.1 & GIGW 5.2.1) */}
                <AccessibleCaptcha
                  id="partner-captcha"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                  error={errors.captcha}
                  onCaptchaChange={(code) => setCaptchaAnswer(code)}
                />

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    as="button"
                    type="submit"
                    loading={loading}
                    className="inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 select-none h-12 bg-gradient-to-br from-[#00aeee] to-[#0088c2] hover:opacity-95 text-white text-base font-bold rounded-xl px-8 py-3 shadow-lg"
                  >
                    Submit Partnership Request
                  </Button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}
