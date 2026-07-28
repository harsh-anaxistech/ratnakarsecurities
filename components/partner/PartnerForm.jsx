"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { User, Mail, Phone, Calendar, MapPin, HelpCircle, RefreshCw } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { submitPartnerForm } from "@/services/contact";

/**
 * PartnerForm Component
 *
 * Replicates the Partner With Us page layout matching reference design.
 * Features 2-column form grid, interactive Date & Time picker for Suitable Time Slot,
 * dynamic captcha verification, and REST API integration with detailed validation feedback.
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

  const [timeslotInputType, setTimeslotInputType] = useState("text");
  const [errors, setErrors] = useState({});
  const [captchaVal, setCaptchaVal] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null); // "success" | "error"

  // Helper to generate a random 6-character captcha string
  const getRandomCaptcha = () => {
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  useEffect(() => {
    setCaptchaVal(getRandomCaptcha());
    setIsMounted(true);
  }, []);

  const generateCaptcha = () => {
    setCaptchaVal(getRandomCaptcha());
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let filteredValue = value;

    if (name === "phone") {
      // Mobile number: digits only, max 10 digits
      filteredValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "fullName") {
      // Name: max 100 characters
      filteredValue = value.slice(0, 100);
    }

    if (type === "radio" || type === "checkbox") {
      if (checked) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: filteredValue }));
    }

    // Clear field error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Helper to format ISO datetime-local string to clean human readable format for backend submission
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

    // 1. Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (formData.fullName.length > 100) {
      newErrors.fullName = "Full Name cannot exceed 100 characters";
    }

    // 2. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email ID is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g. name@example.com)";
    }

    // 3. Mobile number validation (exactly 10 digits)
    if (!formData.phone) {
      newErrors.phone = "Mobile number is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number (e.g. 9876543210)";
    }

    // 4. Suitable Time Slot (Date & Time selection) validation
    if (!formData.timeslot.trim()) {
      newErrors.timeslot = "Please select a suitable date and time slot for our call";
    }

    // 5. City validation
    if (!formData.city.trim()) {
      newErrors.city = "City name is required (e.g. Ahmedabad)";
    }

    // 6. Interested option validation
    if (!formData.interested) {
      newErrors.interested = "Please select an interest option";
    }

    // 7. Captcha validation
    if (!formData.captcha.trim()) {
      newErrors.captcha = "Captcha code is required";
    } else if (formData.captcha.trim().toUpperCase() !== captchaVal.toUpperCase()) {
      newErrors.captcha = "Invalid captcha code. Please enter the 6-character code shown on the right.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      if (newErrors.captcha === "Invalid captcha code") {
        setFormData((prev) => ({ ...prev, captcha: "" }));
        generateCaptcha();
      }
      return;
    }

    setErrors({});
    setLoading(true);

    const formattedTimeSlot = formatSubmissionDateTime(formData.timeslot);

    try {
      await submitPartnerForm({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        timeslot: formattedTimeSlot,
        interseted: formData.interested,
      });

      setStatusMessage("Thank you! Your partner request has been submitted successfully. Our executive will contact you soon.");
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
      setTimeslotInputType("text");
      generateCaptcha();
    } catch (error) {
      console.error("Partner form submission error:", error);
      setStatusMessage(
        error.message || "Submission failed. Please check your details and try again."
      );
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="bg-white rounded-3xl border border-black/5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Image Banner */}
          <div className="col-span-1 lg:col-span-5 relative min-h-[350px] lg:min-h-[600px] bg-slate-100">
            <Image
              src="/images/partner_handshake.png"
              alt="Partner With Us - Handshake"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right Column: Content & Form */}
          <div className="col-span-1 lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Header Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
                Partner With Us
              </h2>

              {/* Subtitle */}
              <p className="text-[#00aeee] font-bold text-base sm:text-lg mb-4">
                Business through partners is a key part of success.
              </p>

              {/* Description Paragraphs */}
              <div className="text-gray-600 text-xs sm:text-sm leading-relaxed space-y-3 mb-8">
                <p>
                  Whatever your involvement in trading or the financial markets, you could benefit from a partnership with us. Partnership is a growing part of our business. Whether you are authorised to trade directly for your own clients or simply deliver educational advice, we could work with you to make your business more profitable, without straining your resources.
                </p>
                <p>
                  To find the right partnership model for your needs, just fill the below information & our executive will be in touch with you.
                </p>
              </div>

              {/* Partner Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Row 1: Name & Email ID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="partner-fullname" className="sr-only">Full Name</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 text-gray-400 flex items-center justify-center pointer-events-none z-10">
                        <User className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <Input
                        id="partner-fullname"
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        placeholder="Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        maxLength={100}
                        className="pl-10"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "partner-fullname-error" : undefined}
                      />
                    </div>
                    {errors.fullName && (
                      <span id="partner-fullname-error" className="text-red-500 text-xs font-semibold pl-1">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Email ID Input */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="partner-email" className="sr-only">Email ID</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 text-gray-400 flex items-center justify-center pointer-events-none z-10">
                        <Mail className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <Input
                        id="partner-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "partner-email-error" : undefined}
                      />
                    </div>
                    {errors.email && (
                      <span id="partner-email-error" className="text-red-500 text-xs font-semibold pl-1">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2: Mobile Number & Suitable Time Slot (Date & Time Picker) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Mobile Number Input */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="partner-phone" className="sr-only">Mobile Number</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 text-gray-400 flex items-center justify-center pointer-events-none z-10">
                        <Phone className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <Input
                        id="partner-phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        className="pl-10"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "partner-phone-error" : undefined}
                      />
                    </div>
                    {errors.phone && (
                      <span id="partner-phone-error" className="text-red-500 text-xs font-semibold pl-1">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Suitable Time Slot (Date & Time Selector) */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="partner-timeslot" className="sr-only">Suitable Time Slot</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 text-gray-400 flex items-center justify-center pointer-events-none z-10">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <Input
                        id="partner-timeslot"
                        type={timeslotInputType || (formData.timeslot ? "datetime-local" : "text")}
                        name="timeslot"
                        placeholder="Suitable Time Slot"
                        value={formData.timeslot}
                        onFocus={() => setTimeslotInputType("datetime-local")}
                        onBlur={(e) => {
                          if (!e.target.value) setTimeslotInputType("text");
                        }}
                        onChange={handleChange}
                        min={new Date().toISOString().slice(0, 16)}
                        className="pl-10 cursor-pointer"
                        aria-invalid={!!errors.timeslot}
                        aria-describedby={errors.timeslot ? "partner-timeslot-error" : undefined}
                      />
                    </div>
                    {errors.timeslot && (
                      <span id="partner-timeslot-error" className="text-red-500 text-xs font-semibold pl-1">
                        {errors.timeslot}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 3: City Input */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="partner-city" className="sr-only">City</label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 text-gray-400 flex items-center justify-center pointer-events-none z-10">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <Input
                      id="partner-city"
                      type="text"
                      name="city"
                      autoComplete="address-level2"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      maxLength={100}
                      className="pl-10"
                      aria-invalid={!!errors.city}
                      aria-describedby={errors.city ? "partner-city-error" : undefined}
                    />
                  </div>
                  {errors.city && (
                    <span id="partner-city-error" className="text-red-500 text-xs font-semibold pl-1">
                      {errors.city}
                    </span>
                  )}
                </div>

                {/* Interested to become Options */}
                <div className="space-y-2 pt-1">
                  <label className="block text-xs font-semibold text-gray-700">
                    Interested to become
                  </label>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                    <label className={`flex items-center gap-2 cursor-pointer ${formData.interested === "Sub-Broker" || formData.interested === "Sub broker" ? "text-slate-900 font-semibold" : "text-gray-600"}`}>
                      <input
                        type="radio"
                        name="interested"
                        value="Sub-Broker"
                        checked={formData.interested === "Sub-Broker" || formData.interested === "Sub broker"}
                        onChange={handleChange}
                        className="accent-black w-4 h-4 cursor-pointer"
                      />
                      <span>Sub broker</span>
                    </label>

                    <label className={`flex items-center gap-2 cursor-pointer ${formData.interested === "Business associate" ? "text-slate-900 font-semibold" : "text-gray-600"}`}>
                      <input
                        type="radio"
                        name="interested"
                        value="Business associate"
                        checked={formData.interested === "Business associate"}
                        onChange={handleChange}
                        className="accent-black w-4 h-4 cursor-pointer"
                      />
                      <span>Business associate</span>
                    </label>

                    <label className={`flex items-center gap-2 cursor-pointer ${formData.interested === "Authorized person" ? "text-slate-900 font-semibold" : "text-gray-600"}`}>
                      <input
                        type="radio"
                        name="interested"
                        value="Authorized person"
                        checked={formData.interested === "Authorized person"}
                        onChange={handleChange}
                        className="accent-black w-4 h-4 cursor-pointer"
                      />
                      <span>Authorized person</span>
                    </label>
                  </div>
                  {errors.interested && (
                    <span className="text-red-500 text-xs font-semibold pl-1">
                      {errors.interested}
                    </span>
                  )}
                </div>

                {/* Captcha Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center pt-2">
                  {/* Enter Captcha Input */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="partner-captcha" className="sr-only">Enter Captcha</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 text-gray-400 flex items-center justify-center pointer-events-none z-10">
                        <HelpCircle className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <Input
                        id="partner-captcha"
                        type="text"
                        name="captcha"
                        placeholder="Enter Captcha"
                        value={formData.captcha}
                        onChange={handleChange}
                        className="pl-10"
                        aria-invalid={!!errors.captcha}
                        aria-describedby={errors.captcha ? "partner-captcha-error" : undefined}
                      />
                    </div>
                    {errors.captcha && (
                      <span id="partner-captcha-error" className="text-red-500 text-xs font-semibold pl-1">
                        {errors.captcha}
                      </span>
                    )}
                  </div>

                  {/* Captcha Display & Refresh */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-100 border border-gray-300 rounded h-11 flex items-center justify-center select-none tracking-[0.3em] font-mono font-extrabold text-base text-gray-700 relative overflow-hidden bg-[repeating-linear-gradient(45deg,#f9fafb,#f9fafb_8px,#f3f4f6_8px,#f3f4f6_16px)]">
                      <span className="relative z-10 text-gray-800 italic select-none">
                        {isMounted ? captchaVal : "------"}
                      </span>
                      <div className="absolute inset-0 opacity-15 flex flex-col justify-around pointer-events-none">
                        <div className="w-full h-[2px] bg-gray-900 -rotate-3" />
                        <div className="w-full h-[2px] bg-gray-900 rotate-2" />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={generateCaptcha}
                      title="Refresh Captcha"
                      className="w-11 h-11 border border-gray-300 hover:bg-gray-50 text-[#00aeee] rounded flex items-center justify-center transition-colors group"
                    >
                      <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Alert Box for Status Messages */}
                {statusMessage && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`p-3.5 rounded text-xs sm:text-sm font-semibold ${statusType === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                  >
                    {statusMessage}
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-3">
                  <Button
                    as="button"
                    type="submit"
                    variant="contained"
                    loading={loading}
                    className="inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none hover:bg-primary-dark focus-visible:ring-primary h-11 bg-gradient-to-br from-[#00aeee] to-[#0088c2] hover:opacity-95 text-white text-sm font-bold rounded-lg px-5 py-2"
                  >
                    SUBMIT
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
