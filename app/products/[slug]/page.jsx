import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import ProductSidebar from "@/components/common/ProductSidebar";
import { PRODUCTS_DATA } from "../data";
import { generatePageMetadata } from "@/constants/metadata";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  if (!product) return {};
  return generatePageMetadata({
    title: `${product.title} | Ratnakar Securities`,
    description: product.shortDescription || product.description1,
    path: `/products/${slug}`,
  });
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

/**
 * Dynamic Product Details Page Component
 * 
 * Renders individual product marketing and onboarding pages for each investment category:
 * - Generates static routes at build time via `generateStaticParams`.
 * - Resolves dynamic SEO metadata via `generateMetadata`.
 * 
 * @param {Object} props
 * @param {{ slug: string }} props.params - Dynamic route slug parameter
 */
export default function ProductDetailsPage({ params }) {
  const { slug } = params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#f7f9fc] min-h-screen pb-20">
      {/* Top Banner Section with Niche Image */}
      <HeroSection
        title={product.title}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.title }
        ]}
        image={product.imageSrc}
        height="h-[400px]"
      />

      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ==========================================
              LEFT SIDE: TITLE & MAIN CONTENT BOX
          ========================================== */}
          <div className="w-full lg:w-[70%] bg-white rounded-2xl shadow-sm border border-black/5 p-4 md:p-8">

            {/* Top Title & Tagline */}
            <div className="mb-10 pb-8 border-b border-black/5">
              <span className="inline-block px-3 py-1 bg-[#ea2830]/10 text-[#7f1d1d] font-bold text-xs tracking-widest rounded-full uppercase mb-4">
                {product.tagline}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                {product.mainTitle}
              </h2>
            </div>

            {/* Niche Content */}
            <div className="prose prose-lg max-w-none text-slate-600 mb-12">
              <p className="text-xl leading-relaxed mb-8 font-medium text-slate-700">
                {product.description1}
              </p>

              {product.description2.split('\n').map((line, i) => (
                <p key={i} className="leading-relaxed mb-5">
                  {line}
                </p>
              ))}

              <div className="mt-12 bg-slate-50 rounded-2xl p-8 border border-black/5">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {product.featuresTitle}
                </h3>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-[#ea2830]/10 p-1.5 rounded-full text-[#ea2830] shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-slate-700 font-medium leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Button at the last */}
            <div className="pt-8 border-t border-black/5">
              <Link
                href="/contact"
                className="inline-flex bg-[#ea2830] hover:bg-[#c41f26] text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1 items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {product.buttonText}
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

          </div>

          {/* ==========================================
              RIGHT SIDE: ALL PRODUCTS SIDEBAR
          ========================================== */}
          <ProductSidebar currentSlug={slug} showContactCard={true} />

        </div>
      </Container>
    </div>
  );
}
