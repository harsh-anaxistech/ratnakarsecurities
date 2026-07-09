import Container from "@/components/common/Container";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Disclosure of Contact Details of Key Managerial Personnel :: Ratnakar Securities Limited.",
  description:
    "Invest with confidence. Ratnakar Securities offers equity trading, derivatives, mutual funds, IPO, bonds, and portfolio management.",
  path: "/investors/disclosure-of-contact-details-of-key-managerial-personnel",
});

export default function KeyManagerialPersonnelPage() {
  return (
    <Container>
      <div className="space-y-10 py-10">
        <h2 className="text-2xl md:text-3xl font-bold  text-foreground ">
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
            <tbody className="divide-y divide-gray-200 text-base  text-muted-foreground">
              {[
                {
                  id: 1,
                  name: "AJAY JAYANTILAL SHAH",
                  role: "DIRECTORS",
                  phone: "98980 18951",
                  email: "ajay@ratnakarsecurities.com",
                },
                {
                  id: 2,
                  name: "MAYURI AJAY SHAH",
                  role: "DIRECTORS",
                  phone: "98980 18951",
                  email: "kushal@ratnakarsecurities.com",
                },
                {
                  id: 3,
                  name: "KUSHAL AJAY SHAH",
                  role: "COMPLIANCE OFFICER",
                  phone: "98980 04988",
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
    </Container>
  );
}
