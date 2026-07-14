import React from "react";
import Container from "@/components/common/Container";

export default function ContactDetailsSections() {
  return (
    <Container>
      <div className="w-full space-y-16 py-16">
        {/* --- ESCALATION MATRIX SECTION --- */}
        <div className="space-y-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center  ">
            Escalation Matrix
          </h2>
          <div className="overflow-x-auto border border-border rounded-sm  bg-white">
            <table className="w-full min-w-[800px] border-collapse text-left text-base">
              <thead>
                <tr className="bg-muted border-b border-border text-foreground ">
                  <th className="p-4 border-r border-border">Details of</th>
                  <th className="p-4 border-r border-border">Contact Person</th>
                  <th className="p-4 border-r border-border">Address</th>
                  <th className="p-4 border-r border-border">Contact No.</th>
                  <th className="p-4 border-r border-border">Email Id</th>
                  <th className="p-4">Working Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-base text-muted-foreground [&>tr:nth-child(even)]:bg-muted/50">
                <tr>
                  <td className="p-4 border-r border-border  ">
                    Customer care
                  </td>
                  <td className="p-4 border-r border-border">
                    Prerna Prajapati
                  </td>
                  <td className="p-4 border-r border-border leading-relaxed">
                    304, Sankalp Square II,
                    <br />
                    Nr. Jalaram Mandir Crossing,
                    <br />
                    Ellisbridge, Paldi,
                    <br />
                    Ahmedabad - 380006
                  </td>
                  <td className="p-4 border-r border-border">
                    079 - 4900 5200
                  </td>
                  <td className="p-4 border-r border-border">
                    <a
                      href="mailto:helpdesk@ratnakarsecurities.com"
                      className="text-secondary hover:underline"
                    >
                      helpdesk@ratnakarsecurities.com
                    </a>
                  </td>
                  <td className="p-4 whitespace-nowrap">9:00 to 5:00 PM</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-border  ">
                    Head of Customer care
                  </td>
                  <td className="p-4 border-r border-border">
                    Jagdish Chaudhari
                  </td>
                  <td className="p-4 border-r border-border leading-relaxed">
                    304, Sankalp Square II,
                    <br />
                    Nr. Jalaram Mandir Crossing,
                    <br />
                    Ellisbridge, Paldi,
                    <br />
                    Ahmedabad - 380006
                  </td>
                  <td className="p-4 border-r border-border">
                    079 - 4900 5200 (Ext. 218)
                  </td>
                  <td className="p-4 border-r border-border">
                    <a
                      href="mailto:jagdish@ratnakarsecurities.com"
                      className="text-secondary hover:underline"
                    >
                      jagdish@ratnakarsecurities.com
                    </a>
                  </td>
                  <td className="p-4 whitespace-nowrap">10:00 to 6:00 PM</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-border  ">
                    Compliance Officer
                  </td>
                  <td className="p-4 border-r border-border">Kushal Shah</td>
                  <td className="p-4 border-r border-border leading-relaxed">
                    304, Sankalp Square II,
                    <br />
                    Nr. Jalaram Mandir Crossing,
                    <br />
                    Ellisbridge, Paldi,
                    <br />
                    Ahmedabad - 380006
                  </td>
                  <td className="p-4 border-r border-border">
                    079 - 4900 5200 (Ext. 201)
                  </td>
                  <td className="p-4 border-r border-border leading-relaxed">
                    <a
                      href="mailto:kushal@ratnakarsecurities.com"
                      className="text-secondary hover:underline block"
                    >
                      kushal@ratnakarsecurities.com
                    </a>
                    <a
                      href="mailto:compliance@ratnakarsecurities.com"
                      className="text-secondary hover:underline block"
                    >
                      compliance@ratnakarsecurities.com
                    </a>
                  </td>
                  <td className="p-4 whitespace-nowrap">10:00 to 6:00 PM</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-border  ">CEO</td>
                  <td className="p-4 border-r border-border">Ajay Shah</td>
                  <td className="p-4 border-r border-border leading-relaxed">
                    304, Sankalp Square II,
                    <br />
                    Nr. Jalaram Mandir Crossing,
                    <br />
                    Ellisbridge, Paldi,
                    <br />
                    Ahmedabad - 380006
                  </td>
                  <td className="p-4 border-r border-border">
                    079 - 4900 5200 (Ext. 202)
                  </td>
                  <td className="p-4 border-r border-border">
                    <a
                      href="mailto:ajay@ratnakarsecurities.com"
                      className="text-secondary hover:underline"
                    >
                      ajay@ratnakarsecurities.com
                    </a>
                  </td>
                  <td className="p-4 whitespace-nowrap">10:00 to 6:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Subtext info and Regulatory Badges */}
          <div className="space-y-4 pt-2">
            <p className="text-base  text-muted-foreground leading-relaxed">
              In absence of response/complaint not addressed to your
              satisfaction, you may lodge a complaint with SEBI at{" "}
              <a
                href="https://scores.gov.in/scores/Welcome.html"
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover:underline "
              >
                https://scores.gov.in/scores/Welcome.html
              </a>{" "}
              or Exchange/Depository at
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://investorhelpline.nseindia.com/NICEPLUS/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-secondary text-white text-base rounded-sm hover:bg-secondary-dark transition-colors font-semibold select-none shadow-sm"
              >
                NSE
              </a>
              <a
                href="https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-secondary text-white text-base rounded-sm hover:bg-secondary-dark transition-colors font-semibold select-none shadow-sm"
              >
                BSE
              </a>
              <a
                href="https://www.epass.nsdl.com/complaints/websx"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-secondary text-white text-base rounded-sm hover:bg-secondary-dark transition-colors font-semibold select-none shadow-sm"
              >
                NSDL
              </a>
            </div>
            <p className="text-base  text-muted-foreground ">
              Please quote your Service Ticket / Complaint Ref No. while raising
              your complaint at SEBI SCORES / Exchange/ Depository portal
            </p>
          </div>
        </div>

        {/* --- BASIC DETAILS SECTION --- */}
        <div className="space-y-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center  ">
            Basic Details
          </h2>
          <div className="overflow-x-auto border border-border rounded-sm  bg-white">
            <table className="w-full min-w-[800px] border-collapse text-left text-base">
              <thead>
                <tr className="bg-muted border-b border-border text-foreground ">
                  <th className="p-4 border-r border-border">
                    Stock Broker Name
                  </th>
                  <th className="p-4 border-r border-border">
                    Registration Number
                  </th>
                  <th className="p-4 border-r border-border">
                    Registered Address
                  </th>
                  <th className="p-4 border-r border-border">Contact Number</th>
                  <th className="p-4">Email id</th>
                </tr>
              </thead>
              <tbody className="text-base text-muted-foreground [&>tr:nth-child(even)]:bg-muted/50">
                <tr>
                  <td className="p-4 border-r border-border  ">
                    Ratnakar Securities Pvt. Ltd.
                  </td>
                  <td className="p-4 border-r border-border leading-relaxed">
                    SEBI Reg No.: INZ000191735 Depository SEBI Reg No.:
                    IN-DP-632-2021
                  </td>
                  <td className="p-4 border-r border-border leading-relaxed">
                    304, Sankalp Square II, Near Jalaram Mandir Crossing,
                    Ellisbridge, Ahmedabad - 380006 (Gujarat)
                  </td>
                  <td className="p-4 border-r border-border whitespace-nowrap">
                    079 49005200
                  </td>
                  <td className="p-4">
                    <a
                      href="mailto:helpdesk@ratnakarsecurities.com"
                      className="text-secondary hover:underline"
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
          <h2 className="text-2xl md:text-3xl font-bold text-center  ">
            Key Managerial Personnel
          </h2>
          <div className="overflow-x-auto border border-border rounded-sm  bg-white">
            <table className="w-full min-w-[800px] border-collapse text-left text-base">
              <thead>
                <tr className="bg-muted border-b border-border text-foreground ">
                  <th className="p-4 w-16 border-r border-border text-center">
                    Sr. No.
                  </th>
                  <th className="p-4 border-r border-border">
                    Name of the Individual
                  </th>
                  <th className="p-4 border-r border-border">Designation</th>
                  <th className="p-4 border-r border-border">Mobile Number</th>
                  <th className="p-4">Email id</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-base text-muted-foreground [&>tr:nth-child(even)]:bg-muted/50">
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
                    name: "MAYUR AJAY SHAH",
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
                    <td className="p-4 border-r border-border text-center ">
                      {row.id}
                    </td>
                    <td className="p-4 border-r border-border  ">{row.name}</td>
                    <td className="p-4 border-r border-border text-base   text-muted-foreground">
                      {row.role}
                    </td>
                    <td className="p-4 border-r border-border text-secondary whitespace-nowrap">
                      {row.phone}
                    </td>
                    <td className="p-4">
                      <a
                        href={`mailto:${row.email}`}
                        className="text-secondary hover:underline"
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
          <div className="bg-muted border border-border rounded-sm p-8 text-center space-y-4 ">
            <h2 className="text-2xl md:text-3xl font-bold text-center pb-3 ">
              RTA Details
            </h2>
            <div className="text-base text-muted-foreground space-y-1.5 leading-relaxed">
              <p className=" ">Cameo Corporate Services Limited</p>
              <p>#1, Subramanian Building,</p>
              <p>Club House Road, Chennai-600002.</p>
              <p className="text-secondary pt-1 ">044-40020731</p>
              <p>
                <a
                  href="mailto:rta@cameoindia.com"
                  className="text-secondary hover:underline"
                >
                  rta@cameoindia.com
                </a>
              </p>
            </div>
          </div>

          {/* Investor Details Block */}
          <div className="bg-muted border border-border rounded-sm p-8 text-center space-y-4 ">
            <h2 className="text-2xl md:text-3xl font-bold text-center pb-3 ">
              Investor Details
            </h2>

            <div className="text-base text-muted-foreground space-y-1.5 leading-relaxed">
              <p className=" ">Harshil Shah</p>
              <p className="text-base text-muted-foreground ">
                Company Secretary and Compliance Officer
              </p>
              <p>304, Sankalp Square II,</p>
              <p>Near Jalaram Mandir Crossing,</p>
              <p>Ellisbridge, Ahmedabad - 380006</p>
              <p className="text-secondary pt-1 ">079 49005200</p>
              <p>
                <a
                  href="mailto:cs@ratnakarsecurities.com"
                  className="text-secondary hover:underline"
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
