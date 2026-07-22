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
    <section className={`relative ${height} flex items-center overflow-hidden`}>
      <div className="absolute inset-0">
        {mobileImage ? (
          <>
            <div className="block md:hidden absolute inset-0">
              <Image src={mobileImage} alt={`${title} Banner`} fill priority className="object-cover" />
            </div>
            <div className="hidden md:block absolute inset-0">
              <Image src={image} alt={`${title} Banner`} fill priority className="object-cover" />
            </div>
          </>
        ) : (
          <Image src={image} alt={`${title} Banner`} fill priority className="object-cover" />
        )}
      </div>

      <Container className="relative z-20 mt-auto pb-12">
        <nav aria-label="Breadcrumbs" className="mb-4">
          <ol className="flex items-center gap-2 text-sm text-white/90">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-white transition">
                <Home size={16} /> Home
              </Link>
            </li>
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={i}>
                <span className="text-white/50">/</span>
                {b.href ? (
                  <li className="font-semibold text-white">
                    <Link href={b.href}>{b.label}</Link>
                  </li>
                ) : (
                  <li className="font-semibold text-white">{b.label}</li>
                )}
              </React.Fragment>
            ))}
          </ol>
        </nav>
        <h1 className="text-3xl md:text-5xl text-white">{title}</h1>
      </Container>
    </section>
  );
}
