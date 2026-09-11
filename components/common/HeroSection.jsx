import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import Container from "@/components/common/Container";

export default function HeroSection({
  title,
  breadcrumbs = [],
  image = "/images/about/our product 1.jpg",
  mobileImage,
  height = "h-[400px]",
}) {
  return (
    <section 
      className={`relative ${height} flex items-center overflow-hidden bg-[#011628] text-white`}
      style={{ backgroundColor: "#011628", color: "#ffffff" }}
    >
      <div className="absolute inset-0">
        {mobileImage ? (
          <>
            <div className="block md:hidden absolute inset-0">
              <Image src={encodeURI(mobileImage)} alt={`${title} Banner`} fill priority className="object-cover" />
            </div>
            <div className="hidden md:block absolute inset-0">
              <Image src={encodeURI(image)} alt={`${title} Banner`} fill priority className="object-cover" />
            </div>
          </>
        ) : (
          <Image src={encodeURI(image)} alt={`${title} Banner`} fill priority className="object-cover" />
        )}
        {/* High-contrast dark overlay scrim to guarantee WCAG 1.4.3 Level AA (4.5:1 / 3:1) text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#011628] via-[#011628]/85 to-[#011628]/75" aria-hidden="true" />
      </div>

      <Container className="relative z-20 mt-auto pb-12">
        <nav aria-label="Breadcrumbs" className="mb-4">
          <ol className="flex items-center gap-2 text-sm text-white font-medium">
            <li>
              <Link href="/" className="flex items-center gap-1.5 text-white hover:text-[#7dd3fc] transition drop-shadow-sm">
                <Home size={16} aria-hidden="true" /> <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={i}>
                <span className="text-white font-bold select-none" aria-hidden="true">/</span>
                {b.href ? (
                  <li className="font-semibold text-white drop-shadow-sm">
                    <Link href={b.href} className="text-white hover:text-[#7dd3fc] transition">{b.label}</Link>
                  </li>
                ) : (
                  <li className="font-semibold text-white drop-shadow-sm" aria-current="page">{b.label}</li>
                )}
              </React.Fragment>
            ))}
          </ol>
        </nav>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight drop-shadow-md" style={{ color: "#ffffff" }}>{title}</h1>
      </Container>
    </section>
  );
}
