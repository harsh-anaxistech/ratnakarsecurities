import Form from "@/components/contact/form";
import Table from "@/components/contact/table";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Contact Us :: Ratnakar Securities Limited.",
  description:
    "Invest with confidence. Ratnakar Securities offers equity trading, derivatives, mutual funds, IPO, bonds, and portfolio management. SEBI-registered since 1995.",
  path: "/",
});

export default function ContactPage() {
  return (
    <div>
      <Form />
      <Table />
    </div>
  );
}
