"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  User,
  Info,
  FileText,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import CustomSelect from "@/components/common/CustomSelect";
import AccessibleCaptcha from "@/components/common/AccessibleCaptcha";
import { submitContactForm } from "@/services/contact";

const departmentOptions = [
  { value: "Accounts", label: "Accounts" },
  { value: "Trading", label: "Trading" },
  { value: "Mutual Funds", label: "Mutual Funds" },
  { value: "Demat", label: "Demat" },
  { value: "New Account Opening", label: "New Account Opening" },
  { value: "Technical", label: "Technical Support" },
  { value: "Research", label: "Research & Advisory" },
  { value: "Others", label: "General Inquiry" },
];

/**
 * Contact Us Inquiry Form Component
 * 
 * Manages customer inquiries across multiple departments (Accounts, Trading, Demat, Research, etc.):
 * - Validates phone number length (10 digits), email syntax, and mandatory department selection.
 * - Dynamic autofocus on the first invalid field upon form submission failure.
 * - Audio and visual captcha validation.
 * - Submits payload to `submitContactForm` service.
 */
export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    email: "",
    phno: "",
    subject: "",
    details: "",
    captcha: "",
  });

  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);

  const fieldRefs = {
    department: useRef(null),
    name: useRef(null),
    email: useRef(null),
    phno: useRef(null),
    subject: useRef(null),
    details: useRef(null),
    captcha: useRef(null),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let filteredValue = value;
    if (name === "phno") {
      filteredValue = value.replace(/\D/g, "").slice(0, 10);
    }
    setFormData((prev) => ({ ...prev, [name]: filteredValue }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);

    const newErrors = {};

    // 1. Department
    if (!formData.department) {
      newErrors.department = "Please select a department from the dropdown list (e.g., Accounts, Trading, Demat).";
    }

    // 2. Name
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name (letters and spaces only).";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name is too short. Please enter at least 2 characters.";
    }

    // 3. Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address (e.g., yourname@example.com).";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Invalid email format. Please check for missing '@' or domain name (e.g., user@domain.com).";
    }

    // 4. Mobile Number
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phno) {
      newErrors.phno = "Please enter your 10-digit mobile number.";
    } else if (!phoneRegex.test(formData.phno)) {
      newErrors.phno = "Invalid mobile number. Please enter a 10-digit Indian mobile number starting with 6, 7, 8, or 9 (e.g., 9876543210).";
    }

    // 5. Subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter the subject or purpose of your inquiry.";
    }

    // 6. Details
    if (!formData.details.trim()) {
      newErrors.details = "Please enter your message details or specific requirement.";
    }

    // 7. Captcha
    if (!formData.captcha.trim()) {
      newErrors.captcha = "Please enter the 6-character security code shown in the image or use the audio button.";
    } else if (formData.captcha.trim().toUpperCase() !== captchaAnswer.toUpperCase()) {
      newErrors.captcha = "The entered captcha code does not match. Please verify the characters or click the audio icon.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      // Shift focus to the first invalid field (WCAG 3.3.1 / 3.3.3)
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(`contact-${firstErrorField}`);
      if (element) {
        element.focus();
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await submitContactForm({
        name: formData.name,
        department: formData.department,
        email: formData.email,
        phno: formData.phno,
        subject: formData.subject,
        details: formData.details,
      });

      setStatusMessage("Thank you! Your inquiry has been submitted successfully. Our team will contact you shortly.");
      setStatusType("success");
      setFormData({
        name: "",
        department: "",
        email: "",
        phno: "",
        subject: "",
        details: "",
        captcha: "",
      });
      setErrors({});
    } catch (err) {
      setStatusMessage("Failed to submit your inquiry. Please check your network connection and try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-10 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">

        {/* Left Side: Contact Information */}
        <div
          className="col-span-1 lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between"
          style={{
            background: "linear-gradient(145deg, #012e54 0%, #011628 100%)",
            color: "#fff",
          }}
        >
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-widest mb-3 border border-white/30 backdrop-blur-xs">
              Customer Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4 leading-tight">
              Reach Out to Ratnakar
            </h2>
            <p className="text-white text-sm sm:text-base leading-relaxed mb-8">
              Have questions about trading accounts, mutual funds, or depository services? Fill out the form, and our specialized relationship team will get back to you promptly.
            </p>

            <div className="space-y-6 pt-4 border-t border-white/25">
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 text-white border border-white/20 shrink-0" aria-hidden="true">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-xs font-bold text-white/90 uppercase tracking-wider">Phone Support</h3>
                  <a href="tel:+917949007900" className="text-white hover:text-cyan-300 font-bold text-base transition-colors underline-offset-4 hover:underline">
                    +91 (079) 4900 7900
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 text-white border border-white/20 shrink-0" aria-hidden="true">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-xs font-bold text-white/90 uppercase tracking-wider">Email Us</h3>
                  <a href="mailto:info@ratnakarsecurities.com" className="text-white hover:text-cyan-300 font-bold text-base transition-colors break-all underline-offset-4 hover:underline">
                    info@ratnakarsecurities.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Inputs */}
        <div className="col-span-1 lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#011628]">
              Send Us a Message
            </h3>
            <p className="text-slate-800 text-xs sm:text-sm mt-1">
              Fields marked with <span className="text-[#b91c1c] font-bold" aria-hidden="true">*</span> are required.
            </p>
          </div>

          {/* Status Message Announcement (WCAG 4.1.3) */}
          {statusMessage && (
            <div
              role="status"
              aria-live="polite"
              className={`p-4 rounded-xl text-sm font-semibold mb-6 ${
                statusType === "success"
                  ? "bg-green-50 text-green-900 border-2 border-green-400"
                  : "bg-red-50 text-red-900 border-2 border-red-400"
              }`}
            >
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Department Selector */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-department" className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Select Department <span className="text-[#b91c1c]" aria-hidden="true">*</span>
                </label>
                <CustomSelect
                  id="contact-department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  options={departmentOptions}
                  placeholder="Select Department"
                  icon={User}
                  error={errors.department}
                  ariaDescribedBy={errors.department ? "contact-department-error" : undefined}
                />
                {errors.department && (
                  <span id="contact-department-error" role="alert" className="text-[#b91c1c] text-xs font-bold pl-1 animate-fade-in flex items-center gap-1">
                    <span aria-hidden="true">⚠️</span> {errors.department}
                  </span>
                )}
              </div>

              {/* Name Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-name" className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Full Name <span className="text-[#b91c1c]" aria-hidden="true">*</span>
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-slate-700 pointer-events-none z-10" aria-hidden="true">
                    <User className="w-5 h-5" />
                  </div>
                  <Input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className="h-12 pl-12 rounded-xl bg-white border border-[#767676] text-[15px] text-slate-900 placeholder:text-slate-600 focus:border-[#004b87] focus:ring-2 focus:ring-[#004b87]/40"
                  />
                </div>
                {errors.name && (
                  <span id="contact-name-error" role="alert" className="text-[#b91c1c] text-xs font-bold pl-1 animate-fade-in flex items-center gap-1">
                    <span aria-hidden="true">⚠️</span> {errors.name}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Email Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-email" className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Email Address <span className="text-[#b91c1c]" aria-hidden="true">*</span>
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-slate-700 pointer-events-none z-10" aria-hidden="true">
                    <Mail className="w-5 h-5" />
                  </div>
                  <Input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="e.g. rajesh@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className="h-12 pl-12 rounded-xl bg-white border border-[#767676] text-[15px] text-slate-900 placeholder:text-slate-600 focus:border-[#004b87] focus:ring-2 focus:ring-[#004b87]/40"
                  />
                </div>
                {errors.email && (
                  <span id="contact-email-error" role="alert" className="text-[#b91c1c] text-xs font-bold pl-1 animate-fade-in flex items-center gap-1">
                    <span aria-hidden="true">⚠️</span> {errors.email}
                  </span>
                )}
              </div>

              {/* Mobile Number Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-phno" className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Mobile Number <span className="text-[#b91c1c]" aria-hidden="true">*</span>
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-slate-700 pointer-events-none z-10" aria-hidden="true">
                    <Phone className="w-5 h-5" />
                  </div>
                  <Input
                    id="contact-phno"
                    type="tel"
                    name="phno"
                    autoComplete="tel"
                    placeholder="10-digit number e.g. 9876543210"
                    value={formData.phno}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.phno}
                    aria-describedby={errors.phno ? "contact-phno-error" : undefined}
                    className="h-12 pl-12 rounded-xl bg-white border border-[#767676] text-[15px] text-slate-900 placeholder:text-slate-600 focus:border-[#004b87] focus:ring-2 focus:ring-[#004b87]/40"
                  />
                </div>
                {errors.phno && (
                  <span id="contact-phno-error" role="alert" className="text-[#b91c1c] text-xs font-bold pl-1 animate-fade-in flex items-center gap-1">
                    <span aria-hidden="true">⚠️</span> {errors.phno}
                  </span>
                )}
              </div>
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-1">
              <label htmlFor="contact-subject" className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Subject <span className="text-[#b91c1c]" aria-hidden="true">*</span>
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-slate-700 pointer-events-none z-10" aria-hidden="true">
                  <Info className="w-5 h-5" />
                </div>
                <Input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="e.g. Trading Account Opening Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                  className="h-12 pl-12 rounded-xl bg-white border border-[#767676] text-[15px] text-slate-900 placeholder:text-slate-600 focus:border-[#004b87] focus:ring-2 focus:ring-[#004b87]/40"
                />
              </div>
              {errors.subject && (
                <span id="contact-subject-error" role="alert" className="text-[#b91c1c] text-xs font-bold pl-1 animate-fade-in flex items-center gap-1">
                  <span aria-hidden="true">⚠️</span> {errors.subject}
                </span>
              )}
            </div>

            {/* Details Textarea */}
            <div className="flex flex-col gap-1">
              <label htmlFor="contact-details" className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Details & Specific Questions <span className="text-[#b91c1c]" aria-hidden="true">*</span>
              </label>
              <div className="relative flex items-start">
                <div className="absolute left-4 top-3.5 text-slate-700 pointer-events-none z-10" aria-hidden="true">
                  <FileText className="w-5 h-5" />
                </div>
                <textarea
                  id="contact-details"
                  name="details"
                  placeholder="Please describe your query in detail..."
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.details}
                  aria-describedby={errors.details ? "contact-details-error" : undefined}
                  className="w-full pl-12 pr-4 py-3 text-[15px] text-slate-900 bg-white border border-[#767676] focus:border-[#004b87] focus:ring-2 focus:ring-[#004b87]/40 rounded-xl outline-none resize-none font-medium placeholder:text-slate-600 transition-colors"
                />
              </div>
              {errors.details && (
                <span id="contact-details-error" role="alert" className="text-[#b91c1c] text-xs font-bold pl-1 animate-fade-in flex items-center gap-1">
                  <span aria-hidden="true">⚠️</span> {errors.details}
                </span>
              )}
            </div>

            {/* Accessible Audio CAPTCHA (WCAG 1.1.1 & GIGW 5.2.1) */}
            <AccessibleCaptcha
              id="contact-captcha"
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
                className="inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 select-none h-12 bg-[#007cb0] hover:bg-[#006692] text-white text-base font-bold rounded-xl px-8 py-3 shadow-lg"
              >
                Submit Inquiry
              </Button>
            </div>
          </form>
        </div>

      </div>
    </Container>
  );
}