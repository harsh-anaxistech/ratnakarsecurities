"use client";

import { useState } from "react";
import { Phone, Mail, MapPinned } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    email: "",
    mobile: "",
    subject: "",
    details: "",
    captcha: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Form Data: ", formData);
  };

  return (
    <Container>
      <div className="flex flex-col lg:flex-row min-h-[550px] w-full font-sans bg-muted p-6 sm:p-10 my-10 rounded-sm overflow-hidden">
        <div className="w-full lg:w-[38%] rounded-md bg-secondary text-white p-8 md:p-12 flex flex-col space-y-8 relative overflow-hidden">
          <div className="z-10 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
            <p className="text-white/70 text-sm md:text-base  ">
              We'll create high-quality linkable content and build at least 40
              high-authority.
            </p>
          </div>

          <div className="z-10 space-y-8 my-10 lg:my-0">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-white/70 shrink-0" />
              <div className="flex flex-col text-sm md:text-base  ">
                <span>079 - 49005200</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-white/70 shrink-0" />
              <a
                href="mailto:info@ratnakarsecurities.com"
                className="text-white hover:underline break-all transition-all text-sm md:text-base "
              >
                info@ratnakarsecurities.com
              </a>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-5 h-5 shrink-0 flex items-center justify-center text-lg mt-0.5">
                <MapPinned className="w-5 h-5 text-white/70 shrink-0" />
              </div>
              <p className="text-white/70 text-sm md:text-base leading-relaxed ">
                304, Sankalp Square - 2, Near Jalaram Mandir Crossing,
                Ellisbridge, Ahmedabad - 380006
              </p>
            </div>
          </div>

          <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-white/30  pointer-events-none" />
        </div>

        <div className="w-full lg:w-[62%] p-4 sm:p-8 md:p-12 flex flex-col justify-center">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 sm:space-y-8 max-w-3xl w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex items-stretch border border-border focus-within:border-secondary focus-within:border-2 rounded-sm overflow-hidden bg-white h-12 relative transition-colors">
                <div className="relative flex-1 flex items-center">
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full h-full px-4 text-[15px] text-muted-foreground bg-transparent outline-none appearance-none cursor-pointer focus:text-foreground"
                    required
                  >
                    <option value="" disabled>
                      Department Name
                    </option>
                    <option value="accounts">Accounts</option>
                    <option value="trading">Trading</option>
                    <option value="mutual-funds">Mutual Funds</option>
                    <option value="demat">Demat</option>
                    <option value="new-account-opening">
                      New Account Opening
                    </option>
                    <option value="technical">Technical</option>
                    <option value="others">Others</option>
                    <option value="research">Research</option>
                  </select>
                  <div className="absolute right-4 pointer-events-none text-muted-foreground text-xs">
                    ▼
                  </div>
                </div>
              </div>

              <div className="flex items-stretch border border-border focus-within:border-secondary focus-within:border-2 rounded-sm overflow-hidden bg-white h-12 transition-colors">
                <div className="flex-1 flex items-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-full px-4 text-[15px] text-foreground bg-transparent outline-none placeholder-muted-foreground"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex items-stretch border border-border focus-within:border-secondary focus-within:border-2 rounded-sm overflow-hidden bg-white h-12 transition-colors">
                <div className="flex-1 flex items-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-full px-4 text-[15px] text-foreground bg-transparent outline-none placeholder-muted-foreground"
                    required
                  />
                </div>
              </div>

              <div className="flex items-stretch border border-border focus-within:border-secondary focus-within:border-2 rounded-sm overflow-hidden bg-white h-12 transition-colors">
                <div className="flex-1 flex items-center">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full h-full px-4 text-[15px] text-foreground bg-transparent outline-none placeholder-muted-foreground"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-stretch border border-border focus-within:border-secondary focus-within:border-2 rounded-sm overflow-hidden bg-white h-12 transition-colors">
              <div className="flex-1 flex items-center">
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-full px-4 text-[15px] text-foreground bg-transparent outline-none placeholder-muted-foreground"
                  required
                />
              </div>
            </div>

            <div className="flex items-stretch border border-border focus-within:border-secondary focus-within:border-2 rounded-sm overflow-hidden bg-white transition-colors">
              <div className="flex-1 flex items-start min-h-[100px]">
                <textarea
                  name="details"
                  placeholder="Write here your message"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full h-full p-4 text-[15px] text-foreground bg-transparent outline-none resize-none placeholder-muted-foreground"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end pt-2">
              <div className="flex items-stretch border border-border focus-within:border-secondary focus-within:border-2 rounded-sm overflow-hidden bg-white h-12 transition-colors">
                <div className="flex-1 flex items-center">
                  <input
                    type="text"
                    name="captcha"
                    placeholder="Enter Captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    className="w-full h-full px-4 text-[15px] text-foreground bg-transparent outline-none placeholder-muted-foreground"
                    required
                  />
                </div>
              </div>

              <div className="bg-gray-100 border border-border rounded-sm px-5 py-2 select-none   text-lg text-muted-foreground text-center font-bold shadow-inner h-12 flex items-center justify-center">
                IO3YLY
              </div>
            </div>

            <div className="pt-4">
              <Button
                as="button"
                type="submit"
                variant="contained"
                color="secondary"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
