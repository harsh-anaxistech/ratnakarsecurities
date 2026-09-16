import React from "react";
import Container from "@/components/common/Container";

/**
 * Regulatory Contact Details & Escalation Matrix Tables Component
 * 
 * Renders SEBI-mandated compliance and grievance escalation hierarchy:
 * - Level 1: Customer Care
 * - Level 2: Head of Customer Care
 * - Level 3: Compliance Officer
 * - Level 4: CEO / Managing Director
 * - Depository Participant branch contact details and SCORES/SMARTODR resolution flow.
 */
export default function ContactDetailsSections() {
  return (
    <Container>
      <div className="w-full space-y-10 py-10">
        {/* --- ESCALATION MATRIX SECTION --- */}
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-[#011628]" style={{ color: "#011628" }}>
            Escalation Matrix
          </h2>
          <div tabIndex="0" role="region" aria-label="Escalation Matrix Table" className="overflow-x-auto border border-slate-200 rounded-sm bg-white focus:ring-2 focus:ring-[#005a9c]" style={{ backgroundColor: "#ffffff" }}>
            <table className="w-full min-w-[800px] border-collapse text-left text-sm">
              <caption className="sr-only">Internal and regulatory customer grievance escalation hierarchy</caption>
              <thead>
                <tr className="bg-[#011628] border-b border-slate-700/30 text-white" style={{ backgroundColor: "#011628", color: "#ffffff" }}>
                  <th scope="col" className="p-4 border-r border-slate-700/30">Details of</th>
                  <th scope="col" className="p-4 border-r border-slate-700/30">Contact Person</th>
                  <th scope="col" className="p-4 border-r border-slate-700/30">Address</th>
                  <th scope="col" className="p-4 border-r border-slate-700/30">Contact No.</th>
                  <th scope="col" className="p-4 border-r border-slate-700/30">Email Id</th>
                  <th scope="col" className="p-4">Working Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm text-slate-800 [&>tr:nth-child(even)]:bg-slate-50/60" style={{ backgroundColor: "#ffffff" }}>
                <tr>
                  <td className="p-4 border-r border-slate-200 font-bold text-slate-900" style={{ color: "#0f172a" }}>
                    Customer care
                  </td>
                  <td className="p-4 border-r border-slate-200 font-medium text-slate-800" style={{ color: "#1e293b" }}>
                    Rajeshwari
                  </td>
                  <td className="p-4 border-r border-slate-200 leading-relaxed text-slate-700" style={{ color: "#334155" }}>
                    304, Sankalp Square II,
                    <br />
                    Nr. Jalaram Mandir Crossing,
                    <br />
                    Ellisbridge, Paldi,
                    <br />
                    Ahmedabad - 380006
                  </td>
                  <td className="p-4 border-r border-slate-200 text-slate-800 font-medium whitespace-nowrap" style={{ color: "#1e293b" }}>
                    079 - 4900 5200
                  </td>
                  <td className="p-4 border-r border-slate-200">
                    <a
                      href="mailto:helpdesk@ratnakarsecurities.com"
                      className="text-[#005a9c] hover:underline font-semibold"
                    >
                      helpdesk@ratnakarsecurities.com
                    </a>
                  </td>
                  <td className="p-4 whitespace-nowrap text-slate-700" style={{ color: "#334155" }}>9:00 to 5:00 PM</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-slate-200 font-bold text-slate-900" style={{ color: "#0f172a" }}>
                    Head of Customer care
                  </td>
                  <td className="p-4 border-r border-slate-200 font-medium text-slate-800" style={{ color: "#1e293b" }}>
                    Jagdish Chaudhari
                  </td>
                  <td className="p-4 border-r border-slate-200 leading-relaxed text-slate-700" style={{ color: "#334155" }}>
                    304, Sankalp Square II,
                    <br />
                    Nr. Jalaram Mandir Crossing,
                    <br />
                    Ellisbridge, Paldi,
                    <br />
                    Ahmedabad - 380006
                  </td>
                  <td className="p-4 border-r border-slate-200 text-slate-800 font-medium whitespace-nowrap" style={{ color: "#1e293b" }}>
                    079 - 4900 5200 (Ext. 218)
                  </td>
                  <td className="p-4 border-r border-slate-200">
                    <a
                      href="mailto:jagdish@ratnakarsecurities.com"
                      className="text-[#005a9c] hover:underline font-semibold"
                    >
                      jagdish@ratnakarsecurities.com
                    </a>
                  </td>
                  <td className="p-4 whitespace-nowrap text-slate-700" style={{ color: "#334155" }}>10:00 to 6:00 PM</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-slate-200 font-bold text-slate-900" style={{ color: "#0f172a" }}>
                    Compliance Officer
                  </td>
                  <td className="p-4 border-r border-slate-200 font-medium text-slate-800" style={{ color: "#1e293b" }}>Kushal Shah</td>
                  <td className="p-4 border-r border-slate-200 leading-relaxed text-slate-700" style={{ color: "#334155" }}>
                    304, Sankalp Square II,
                    <br />
                    Nr. Jalaram Mandir Crossing,
                    <br />
                    Ellisbridge, Paldi,
                    <br />
                    Ahmedabad - 380006
                  </td>
                  <td className="p-4 border-r border-slate-200 text-slate-800 font-medium whitespace-nowrap" style={{ color: "#1e293b" }}>
                    079 - 4900 5200 (Ext. 201)
                  </td>
                  <td className="p-4 border-r border-slate-200 leading-relaxed">
                    <a
                      href="mailto:kushal@ratnakarsecurities.com"
                      className="text-[#005a9c] hover:underline font-semibold block"
                    >
                      kushal@ratnakarsecurities.com
                    </a>
                    <a
                      href="mailto:compliance@ratnakarsecurities.com"
                      className="text-[#005a9c] hover:underline font-semibold block"
                    >
                      compliance@ratnakarsecurities.com
                    </a>
                  </td>
                  <td className="p-4 whitespace-nowrap text-slate-700" style={{ color: "#334155" }}>10:00 to 6:00 PM</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-slate-200 font-bold text-slate-900" style={{ color: "#0f172a" }}>CEO</td>
                  <td className="p-4 border-r border-slate-200 font-medium text-slate-800" style={{ color: "#1e293b" }}>Ajay Shah</td>
                  <td className="p-4 border-r border-slate-200 leading-relaxed text-slate-700" style={{ color: "#334155" }}>
                    304, Sankalp Square II,
                    <br />
                    Nr. Jalaram Mandir Crossing,
                    <br />
                    Ellisbridge, Paldi,
                    <br />
                    Ahmedabad - 380006
                  </td>
                  <td className="p-4 border-r border-slate-200 text-slate-800 font-medium whitespace-nowrap" style={{ color: "#1e293b" }}>
                    079 - 4900 5200 (Ext. 202)
                  </td>
                  <td className="p-4 border-r border-slate-200">
                    <a
                      href="mailto:ajay@ratnakarsecurities.com"
                      className="text-[#005a9c] hover:underline font-semibold"
                    >
                      ajay@ratnakarsecurities.com
                    </a>
                  </td>
                  <td className="p-4 whitespace-nowrap text-slate-700" style={{ color: "#334155" }}>10:00 to 6:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Subtext info and Regulatory Badges */}
          <div className="space-y-4 pt-2">
            <p className="text-sm text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
              In absence of response/complaint not addressed to your
              satisfaction, you may lodge a complaint with SEBI at{" "}
              <a
                href="https://scores.sebi.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SEBI SCORES 2.0 Portal (opens in new tab)"
                className="text-[#005a9c] hover:underline font-semibold"
              >
                https://scores.sebi.gov.in/
              </a>{" "}
              or Exchange/Depository at
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://investorhelpline.nseindia.com/NICEPLUS/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NSE Investor Helpline NICEPLUS (opens in new tab)"
                style={{ backgroundColor: "#004b87", color: "#ffffff" }}
                className="inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#004b87] select-none h-11 bg-gradient-to-br from-[#0070ba] to-[#004b87] hover:opacity-95 text-white text-sm font-bold rounded-lg px-5 py-2 shadow-sm"
              >
                NSE
              </a>
              <a
                href="https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BSE e-Complaint Portal (opens in new tab)"
                style={{ backgroundColor: "#004b87", color: "#ffffff" }}
                className="inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#004b87] select-none h-11 bg-gradient-to-br from-[#0070ba] to-[#004b87] hover:opacity-95 text-white text-sm font-bold rounded-lg px-5 py-2 shadow-sm"
              >
                BSE
              </a>
              <a
                href="https://nsdl.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NSDL Depository Portal (opens in new tab)"
                style={{ backgroundColor: "#004b87", color: "#ffffff" }}
                className="inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#004b87] select-none h-11 bg-gradient-to-br from-[#0070ba] to-[#004b87] hover:opacity-95 text-white text-sm font-bold rounded-lg px-5 py-2 shadow-sm"
              >
                NSDL
              </a>
            </div>
            <p className="text-sm text-slate-700" style={{ color: "#334155" }}>
              Please quote your Service Ticket / Complaint Ref No. while raising
              your complaint at SEBI SCORES / Exchange/ Depository portal.
            </p>
          </div>
        </div>

        {/* --- BASIC DETAILS SECTION --- */}
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-[#011628]" style={{ color: "#011628" }}>
            Basic Details
          </h2>
          <div tabIndex="0" role="region" aria-label="Basic Details Table" className="overflow-x-auto border border-slate-200 rounded-sm bg-white focus:ring-2 focus:ring-[#005a9c]" style={{ backgroundColor: "#ffffff" }}>
            <table className="w-full min-w-[800px] border-collapse text-left text-sm">
              <caption className="sr-only">Stock broker and depository participant statutory registration details</caption>
              <thead>
                <tr className="bg-[#011628] border-b border-slate-700/30 text-white" style={{ backgroundColor: "#011628", color: "#ffffff" }}>
                  <th scope="col" className="p-4 border-r border-slate-700/30">
                    Stock Broker Name
                  </th>
                  <th scope="col" className="p-4 border-r border-slate-700/30">
                    Registration Number
                  </th>
                  <th scope="col" className="p-4 border-r border-slate-700/30">
                    Registered Address
                  </th>
                  <th scope="col" className="p-4 border-r border-slate-700/30">Contact Number</th>
                  <th scope="col" className="p-4">Email id</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-800 [&>tr:nth-child(even)]:bg-slate-50/60" style={{ backgroundColor: "#ffffff" }}>
                <tr>
                  <td className="p-4 border-r border-slate-200 font-bold text-slate-900" style={{ color: "#0f172a" }}>
                    Ratnakar Securities Pvt. Ltd.
                  </td>
                  <td className="p-4 border-r border-slate-200 leading-relaxed text-slate-700" style={{ color: "#334155" }}>
                    SEBI Reg No.: INZ000191735 Depository SEBI Reg No.:
                    IN-DP-632-2021
                  </td>
                  <td className="p-4 border-r border-slate-200 leading-relaxed text-slate-700" style={{ color: "#334155" }}>
                    304, Sankalp Square II, Near Jalaram Mandir Crossing,
                    Ellisbridge, Ahmedabad - 380006 (Gujarat)
                  </td>
                  <td className="p-4 border-r border-slate-200 whitespace-nowrap text-slate-800 font-medium" style={{ color: "#1e293b" }}>
                    079 49005200
                  </td>
                  <td className="p-4">
                    <a
                      href="mailto:helpdesk@ratnakarsecurities.com"
                      className="text-[#005a9c] hover:underline font-semibold"
                    >
                      helpdesk@ratnakarsecurities.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* --- KEY MANAGERIAL PERSONNEL SECTION --- */}
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-[#011628]" style={{ color: "#011628" }}>
            Key Managerial Personnel
          </h2>
          <div tabIndex="0" role="region" aria-label="Key Managerial Personnel Table" className="overflow-x-auto border border-slate-200 rounded-sm bg-white focus:ring-2 focus:ring-[#005a9c]" style={{ backgroundColor: "#ffffff" }}>
            <table className="w-full min-w-[800px] border-collapse text-left text-sm">
              <caption className="sr-only">List of Key Managerial Personnel, Directors, and Compliance Officers</caption>
              <thead>
                <tr className="bg-[#011628] border-b border-slate-700/30 text-white" style={{ backgroundColor: "#011628", color: "#ffffff" }}>
                  <th scope="col" className="p-4 w-16 border-r border-slate-700/30 text-center">
                    Sr. No.
                  </th>
                  <th scope="col" className="p-4 border-r border-slate-700/30">
                    Name of the Individual
                  </th>
                  <th scope="col" className="p-4 border-r border-slate-700/30">Designation</th>
                  <th scope="col" className="p-4 border-r border-slate-700/30">Mobile Number</th>
                  <th scope="col" className="p-4">Email id</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm text-slate-800 [&>tr:nth-child(even)]:bg-slate-50/60" style={{ backgroundColor: "#ffffff" }}>
                {[
                  {
                    id: 1,
                    name: "AJAY JAYANTILAL SHAH",
                    role: "DIRECTORS",
                    phone: "98980 18851",
                    email: "ajay@ratnakarsecurities.com",
                  },
                  {
                    id: 2,
                    name: "MAYURI AJAY SHAH",
                    role: "DIRECTORS",
                    phone: "98980 18051",
                    email: "kushal@ratnakarsecurities.com",
                  },
                  {
                    id: 3,
                    name: "KUSHAL AJAY SHAH",
                    role: "COMPLIANCE OFFICER",
                    phone: "98980 04688",
                    email: "compliance@ratnakarsecurities.com",
                  },
                  {
                    id: 4,
                    name: "AJAY NAGINDAS GANDHI",
                    role: "CFO",
                    phone: "94281 23400",
                    email: "gandhi@ratnakarsecurities.com",
                  },
                ].map((row) => (
                  <tr key={row.id}>
                    <td className="p-4 border-r border-slate-200 text-center font-bold text-slate-700" style={{ color: "#334155" }}>
                      {row.id}
                    </td>
                    <td className="p-4 border-r border-slate-200 font-bold text-slate-900" style={{ color: "#0f172a" }}>{row.name}</td>
                    <td className="p-4 border-r border-slate-200 text-sm font-semibold text-slate-700" style={{ color: "#334155" }}>
                      {row.role}
                    </td>
                    <td className="p-4 border-r border-slate-200 text-slate-800 font-medium whitespace-nowrap" style={{ color: "#1e293b" }}>
                      {row.phone}
                    </td>
                    <td className="p-4">
                      <a
                        href={`mailto:${row.email}`}
                        className="text-[#005a9c] hover:underline font-semibold"
                      >
                        {row.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- BOTTOM SECTION: RTA DETAILS & INVESTOR DETAILS Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* RTA Details Block */}
          <div
            className="border border-slate-700 rounded-2xl p-6 md:p-8 text-center space-y-4 text-white shadow-xl bg-[#012e54]"
            style={{
              backgroundColor: "#012e54",
              backgroundImage: "radial-gradient(1200px 600px at 85% -10%, rgb(26, 110, 181) 0%, rgb(1, 46, 84) 45%, rgb(1, 22, 40) 100%)",
              color: "#ffffff"
            }}
          >
            <h2 className="text-2xl md:text-3xl text-center pb-2 font-bold text-white" style={{ color: "#ffffff" }}>
              RTA Details
            </h2>
            <div className="text-sm space-y-1.5 leading-relaxed font-medium" style={{ color: "#ffffff" }}>
              <p className="text-white font-bold" style={{ color: "#ffffff" }}>Cameo Corporate Services Limited</p>
              <p className="text-white" style={{ color: "#ffffff" }}>#1, Subramanian Building,</p>
              <p className="text-white" style={{ color: "#ffffff" }}>Club House Road, Chennai-600002.</p>
              <a
                href="tel:044-40020731"
                className="text-[#7dd3fc] hover:text-white hover:underline pt-1 block font-bold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7dd3fc]"
                style={{ color: "#7dd3fc" }}
                aria-label="Call Cameo Corporate Services at 044-40020731"
              >
                044-40020731
              </a>
              <p>
                <a
                  href="mailto:rta@cameoindia.com"
                  className="text-[#7dd3fc] hover:text-white hover:underline font-bold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7dd3fc]"
                  style={{ color: "#7dd3fc" }}
                  aria-label="Email Cameo Corporate Services at rta@cameoindia.com"
                >
                  rta@cameoindia.com
                </a>
              </p>
            </div>
          </div>

          {/* Investor Details Block */}
          <div
            className="border border-slate-700 rounded-2xl p-6 md:p-8 text-center space-y-4 text-white shadow-xl bg-[#012e54]"
            style={{
              backgroundColor: "#012e54",
              backgroundImage: "radial-gradient(1200px 600px at 85% -10%, rgb(26, 110, 181) 0%, rgb(1, 46, 84) 45%, rgb(1, 22, 40) 100%)",
              color: "#ffffff"
            }}
          >
            <h2 className="text-2xl md:text-3xl text-center pb-2 font-bold text-white" style={{ color: "#ffffff" }}>
              Investor Details
            </h2>

            <div className="text-sm space-y-1.5 leading-relaxed font-medium" style={{ color: "#ffffff" }}>
              <p className="text-white font-bold" style={{ color: "#ffffff" }}>Aditya Pancholi</p>
              <p className="text-[#bae6fd] font-semibold" style={{ color: "#bae6fd" }}>
                Company Secretary and Compliance Officer
              </p>
              <p className="text-white" style={{ color: "#ffffff" }}>304, Sankalp Square II,</p>
              <p className="text-white" style={{ color: "#ffffff" }}>Near Jalaram Mandir Crossing,</p>
              <p className="text-white" style={{ color: "#ffffff" }}>Ellisbridge, Ahmedabad - 380006</p>
              <a
                href="tel:07949005200"
                className="text-[#7dd3fc] hover:text-white hover:underline pt-1 block font-bold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7dd3fc]"
                style={{ color: "#7dd3fc" }}
                aria-label="Call Aditya Pancholi at 079 49005200"
              >
                079 49005200
              </a>
              <p>
                <a
                  href="mailto:cs@ratnakarsecurities.com"
                  className="text-[#7dd3fc] hover:text-white hover:underline font-bold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#7dd3fc]"
                  style={{ color: "#7dd3fc" }}
                  aria-label="Email Aditya Pancholi at cs@ratnakarsecurities.com"
                >
                  cs@ratnakarsecurities.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
