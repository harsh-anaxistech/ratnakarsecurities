import React from "react";
import ResearchSectionClient from "./ResearchSectionClient";
import HeroSection from "@/components/common/HeroSection";

import { getResearchSections, getResearchReports } from "@/services/research";
import { generatePageMetadata } from "@/constants/metadata";

export async function generateMetadata({ params }) {
  const { section } = await params;
  // Decode URL segment and format it nicely
  const decoded = decodeURIComponent(section);
  const formattedTitle = decoded.charAt(0).toUpperCase() + decoded.slice(1);

  return generatePageMetadata({
    title: `${formattedTitle} Research :: Ratnakar Securities Limited.`,
    description: `Explore dynamic ${decoded} research papers, policy notes, and market documentation from Ratnakar Securities.`,
    path: `/research/${section}`,
  });
}

export default async function Page({ params }) {
  const { section } = await params;

  let sections = [];
  let reports = [];
  let matchedSectionName = section;

  // 1. Fetch research sections to map the URL parameter to the correct case-sensitive section name
  try {
    const sectionsResult = await getResearchSections();
    if (sectionsResult.success && Array.isArray(sectionsResult.data)) {
      sections = sectionsResult.data;
    }
  } catch (e) {
    console.error("Error fetching sections on research page server-side:", e);
  }

  // Find case-insensitive match
  const matchedSection = sections.find(
    s => s.section_name.toLowerCase() === decodeURIComponent(section).toLowerCase()
  );

  if (matchedSection) {
    matchedSectionName = matchedSection.section_name;
    // 2. Fetch reports for the matched section name
    try {
      const reportsResult = await getResearchReports(matchedSectionName);
      if (reportsResult.success && Array.isArray(reportsResult.data)) {
        reports = reportsResult.data;
      }
    } catch (e) {
      console.error(`Error fetching reports for section "${matchedSectionName}" server-side:`, e);
    }
  } else {
    // If no dynamic sections are fetched (e.g. backend down), try capitalized section string as fallback
    matchedSectionName = section.charAt(0).toUpperCase() + section.slice(1);
    try {
      const reportsResult = await getResearchReports(matchedSectionName);
      if (reportsResult.success && Array.isArray(reportsResult.data)) {
        reports = reportsResult.data;
      }
    } catch (e) {
      console.error(`Error fetching reports fallback for "${matchedSectionName}":`, e);
    }
  }

  return (
    <>
      <HeroSection
        title={matchedSectionName.charAt(0).toUpperCase() + matchedSectionName.slice(1) + " Research"}
        breadcrumbs={[{ label: "Research", href: "/research" }, { label: matchedSectionName, href: `/research/${section}` }]}
        image="/images/hero/2150970201.jpg"
        height="h-[300px] md:h-[400px]" />

      <ResearchSectionClient
        section={section}
        matchedSectionName={matchedSectionName}
        initialReports={reports}
        initialSections={sections}
      />
    </>
  );
}
