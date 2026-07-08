/**
 * Site-wide constants for Ratnakar Securities
 */
export const SITE = {
  name: "Ratnakar Securities",
  shortName: "Ratnakar",
  tagline: "Your Trusted Partner in Wealth Creation",
  description:
    "Ratnakar Securities is a SEBI-registered stockbroker offering equity trading, derivatives, mutual funds, IPO investing, bonds, and portfolio management services.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ratnakar.com",
  email: "info@ratnakar.com",
  phone: "+91 22 4890 1234",
  phoneAlt: "+91 98765 43210",
  address: {
    street: "14th Floor, Ratnakar House, Nariman Point",
    city: "Mumbai",
    state: "Maharashtra",
    zip: "400021",
    country: "India",
    full: "14th Floor, Ratnakar House, Nariman Point, Mumbai, Maharashtra 400021, India",
  },
  founded: 1995,
  registrationNo: "INZ000123456",
  sebiNo: "INH000007890",
  cin: "U65990MH1995PLC123456",

  // Social
  twitter: "@RatnakarSec",
  linkedin: "ratnakar-securities",
  facebook: "ratnakar.securities",
  youtube: "RatnakarSecurities",
  instagram: "ratnakar.securities",

  // Hours
  workingHours: {
    weekdays: "Monday – Friday: 9:00 AM – 6:00 PM",
    saturday: "Saturday: 10:00 AM – 2:00 PM",
    sunday: "Sunday: Closed",
    market: "Market Hours: 9:15 AM – 3:30 PM (IST)",
  },
};
