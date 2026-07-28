"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  User,
  Info,
  FileText,
  HelpCircle,
  RefreshCw,
  ChevronDown
} from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import CustomSelect from "@/components/common/CustomSelect";
import { submitContactForm } from "@/services/contact";

const departmentOptions = [
  { value: "Accounts", label: "Accounts" },
  { value: "Trading", label: "Trading" },
  { value: "Mutual Funds", label: "Mutual Funds" },
  { value: "Demat", label: "Demat" },
  { value: "New Account Opening", label: "New Account Opening" },
  { value: "Technical", label: "Technical" },
  { value: "Others", label: "Others" },
  { value: "Research", label: "Research" },
];

/**
 * Contact Form Component
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

  const [errors, setErrors] = useState({});

  const getRandomCaptcha = () => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const [captchaVal, setCaptchaVal] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setCaptchaVal(getRandomCaptcha());
    setIsMounted(true);
  }, []);

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);

  const generateCaptcha = () => {
    setCaptchaVal(getRandomCaptcha());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let filteredValue = value;
    if (name === "phno") {
      filteredValue = value.replace(/\D/g, "").slice(0, 10);
    }
    setFormData({ ...formData, [name]: filteredValue });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);

    const newErrors = {};
    if (!formData.department) newErrors.department = "Department name is required";
    if (!formData.name.trim()) newErrors.name = "Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email ID is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phno) {
      newErrors.phno = "Mobile number is required";
    } else if (formData.phno.length !== 10) {
      newErrors.phno = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.details.trim()) newErrors.details = "Details are required";

    if (!formData.captcha.trim()) {
      newErrors.captcha = "Captcha code is required";
    } else if (formData.captcha.trim().toUpperCase() !== captchaVal.toUpperCase()) {
      newErrors.captcha = "Invalid captcha code";
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

    try {
      await submitContactForm({
        name: formData.name,
        department: formData.department,
        email: formData.email,
        phno: formData.phno,
        subject: formData.subject,
        details: formData.details,
      });

      setStatusMessage("Your inquiry has been submitted successfully! We will get back to you soon.");
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
      generateCaptcha();
    } catch (error) {
      console.error("API submission error: ", error);
      setStatusMessage("Failed to submit details. Please check if the backend API server is running at http://localhost:6010.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full font-sans bg-white border border-black/5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] rounded-3xl overflow-hidden mb-8 animate-fade-in">

        {/* Left Side: Address Details Panel */}
        <div
          className="col-span-1 lg:col-span-5 flex flex-col justify-center p-3.5 sm:p-12 min-h-[380px] lg:min-h-[550px] select-none text-white"
          style={{
            background: "radial-gradient(1200px 600px at 85% -10%, rgb(26, 110, 181) 0%, rgb(1, 46, 84) 45%, rgb(1, 22, 40) 100%)"
          }}
        >
          <div className="z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-8 shadow-xl max-w-sm w-full mx-auto space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-white/20 text-white font-bold text-xs tracking-widest rounded-full uppercase mb-3">
                Corporate Office
              </span>
              <h3 className="text-secondary text-xl sm:text-2xl font-bold font-sans tracking-tight">
                Ratnakar Securities Ltd.
              </h3>
            </div>

            <div className="text-white/95 text-sm sm:text-base space-y-2 font-medium leading-relaxed">
              <p>304, Sankalp Square - 2,</p>
              <p>Near Jalaram Mandir Crossing,</p>
              <p>Ellisbridge, Ahmedabad - 380006</p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/15">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white">
                  <Phone className="w-5 h-5" />
                </span>
                <a
                  href="tel:07949005200"
                  className="text-white hover:text-secondary font-bold text-sm sm:text-base transition-colors"
                >
                  079 - 49005200 / 01 / 02
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white">
                  <Mail className="w-5 h-5" />
                </span>
                <a
                  href="mailto:info@ratnakarsecurities.com"
                  className="text-white hover:text-secondary font-bold text-sm sm:text-base transition-colors break-all"
                >
                  info@ratnakarsecurities.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Inputs */}
        <div className="col-span-1 lg:col-span-7 p-4 sm:p-8 lg:p-12 flex flex-col justify-between bg-slate-50">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground font-sans tracking-tight">
              Get In Touch
            </h2>
          </div>

          {/* Status Message Announcement */}
          {statusMessage && (
            <div
              role="status"
              aria-live="polite"
              className={`p-4 rounded-xl text-sm font-semibold mb-4 ${
                statusType === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Department Selector */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-department" className="sr-only">Department Name</label>
                <CustomSelect
                  id="contact-department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  options={departmentOptions}
                  placeholder="Department Name"
                  icon={User}
                  error={errors.department}
                  ariaDescribedBy={errors.department ? "contact-department-error" : undefined}
                />
                {errors.department && (
                  <span id="contact-department-error" className="text-red-500 text-xs font-semibold pl-1 animate-fade-in">
                    {errors.department}
                  </span>
                )}
              </div>

              {/* Name Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-name" className="sr-only">Full Name</label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-slate-400 pointer-events-none z-10">
                    <User className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <Input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className="h-12 pl-12 rounded-xl bg-slate-50/50 text-[15px]"
                  />
                </div>
                {errors.name && (
                  <span id="contact-name-error" className="text-red-500 text-xs font-semibold pl-1 animate-fade-in">
                    {errors.name}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Email Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-email" className="sr-only">Email Address</label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-slate-400 pointer-events-none z-10">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <Input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className="h-12 pl-12 rounded-xl bg-slate-50/50 text-[15px]"
                  />
                </div>
                {errors.email && (
                  <span id="contact-email-error" className="text-red-500 text-xs font-semibold pl-1 animate-fade-in">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Mobile Number Input */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-phno" className="sr-only">Mobile Number</label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-slate-400 pointer-events-none z-10">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <Input
                    id="contact-phno"
                    type="tel"
                    name="phno"
                    autoComplete="tel"
                    placeholder="Mobile Number"
                    value={formData.phno}
                    onChange={handleChange}
                    aria-invalid={!!errors.phno}
                    aria-describedby={errors.phno ? "contact-phno-error" : undefined}
                    className="h-12 pl-12 rounded-xl bg-slate-50/50 text-[15px]"
                  />
                </div>
                {errors.phno && (
                  <span id="contact-phno-error" className="text-red-500 text-xs font-semibold pl-1 animate-fade-in">
                    {errors.phno}
                  </span>
                )}
              </div>
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-1">
              <div className="relative flex items-center">
                <div className="absolute left-4 text-slate-400 pointer-events-none z-10">
                  <Info className="w-5 h-5" />
                </div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="h-12 pl-12 rounded-xl bg-slate-50/50 text-[15px]"
                />
              </div>
              {errors.subject && (
                <span className="text-red-500 text-xs font-semibold pl-1 animate-fade-in">
                  {errors.subject}
                </span>
              )}
            </div>

            {/* Details Textarea */}
            <div className="flex flex-col gap-1">
              <div className="relative flex items-start">
                <div className="absolute left-4 top-3.5 text-slate-400 pointer-events-none z-10">
                  <FileText className="w-5 h-5" />
                </div>
                <textarea
                  name="details"
                  placeholder="Details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 text-[15px] text-slate-800 bg-slate-50/50 border border-slate-200 focus:border-[#00aeee] rounded-xl outline-none focus:outline-none focus:ring-0 resize-none font-medium placeholder:text-slate-400 transition-colors"
                />
              </div>
              {errors.details && (
                <span className="text-red-500 text-xs font-semibold pl-1 animate-fade-in">
                  {errors.details}
                </span>
              )}
            </div>

            {/* Captcha Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
              <div className="flex flex-col gap-1">
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-slate-400 pointer-events-none z-10">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <Input
                    type="text"
                    name="captcha"
                    placeholder="Enter Captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    className="h-12 pl-12 rounded-xl bg-slate-50/50 text-[15px] uppercase placeholder:normal-case"
                  />
                </div>
                {errors.captcha && (
                  <span className="text-red-500 text-xs font-semibold pl-1 animate-fade-in">
                    {errors.captcha}
                  </span>
                )}
              </div>

              {/* Captcha Display & Refresh */}
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-muted border border-border rounded-xl h-12 flex items-center justify-center select-none shadow-inner tracking-[0.3em] font-mono font-extrabold text-lg text-muted-foreground text-center relative overflow-hidden bg-[repeating-linear-gradient(45deg,#f9fafb,#f9fafb_8px,#f3f4f6_8px,#f3f4f6_16px)]">
                  <span className="relative z-10 text-gray-700 italic select-none">
                    {isMounted ? captchaVal : "------"}
                  </span>
                  <div className="absolute inset-0 opacity-10 flex flex-col justify-around pointer-events-none">
                    <div className="w-full h-[2px] bg-gray-900 -rotate-2"></div>
                    <div className="w-full h-[2px] bg-gray-900 rotate-3"></div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={generateCaptcha}
                  title="Refresh Captcha"
                  className="w-12 h-12 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center transition-colors group shrink-0"
                >
                  <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Alert Box */}
            {statusMessage && (
              <div
                className={`p-4 rounded-xl text-sm font-semibold ${statusType === "success"
                  ? "bg-green-50 text-success border border-success/20 animate-fade-in"
                  : "bg-red-50 text-danger border border-danger/20 animate-fade-in"
                  }`}
              >
                {statusMessage}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                as="button"
                type="submit"
                loading={loading}
                className="inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none hover:bg-primary-dark focus-visible:ring-primary h-11 bg-gradient-to-br from-[#00aeee] to-[#0088c2] hover:opacity-95 text-white text-sm font-bold rounded-lg px-5 py-2"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>

      </div>
    </Container>
  );
}