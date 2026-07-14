import Container from "@/components/common/Container";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Disclosure of Contact Details of Key Managerial Personnel :: Ratnakar Securities Limited.",
  description:
    "Invest with confidence. Ratnakar Securities offers equity trading, derivatives, mutual funds, IPO, bonds, and portfolio management.",
  path: "/investors/disclosure-of-contact-details-of-key-managerial-personnel",
});

const personnel = [
  {
    id: 1,
    name: "Ajay Jayantilal Shah",
    designation: "Chairman and Managing Director",
    phone: "079 4900 5200",
    email: "ajay@ratnakarsecurities.com",
  },
  {
    id: 2,
    name: "Kushal Ajay Shah",
    designation: "Whole Time Director",
    phone: "079 4900 5200",
    email: "kushal@ratnakarsecurities.com",
  },
  {
    id: 3,
    name: "Ajay Nagindas Gandhi",
    designation: "Chief Financial Officer",
    phone: "079 4900 5200",
    email: "gandhi@ratnakarsecurities.com",
  },
  {
    id: 4,
    name: "Aditya Pancholi",
    designation: "Company Secretary",
    phone: "079 4900 5200",
    email: "cs@ratnakarsecurities.com",
  },
];

export default function KeyManagerialPersonnelPage() {
  return (
    <Container>
      <div className="space-y-10 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Key Managerial Personnel
        </h2>
        <div className="overflow-x-auto border border-border rounded-sm bg-white">
          <table className="w-full min-w-[800px] border-collapse text-left text-base">
            <thead>
              <tr className="bg-muted border-b border-border text-foreground">
                <th className="p-4 w-16 border-r border-border text-center">
                  Sr. No.
                </th>
                <th className="p-4 border-r border-border">
                  Name of the Individual
                </th>
                <th className="p-4 border-r border-border">Designation</th>
                <th className="p-4 border-r border-border">Contact No.</th>
                <th className="p-4">Email id</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-base text-muted-foreground">
              {personnel.map((row) => (
                <tr key={row.id} className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-r border-border text-center">
                    {row.id}
                  </td>
                  <td className="p-4 border-r border-border text-secondary font-medium">
                    {row.name}
                  </td>
                  <td className="p-4 border-r border-border">
                    {row.designation}
                  </td>
                  <td className="p-4 border-r border-border text-secondary whitespace-nowrap">
                    <a href={`tel:${row.phone.replace(/\s/g, "")}`} className="hover:underline">
                      {row.phone}
                    </a>
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
