"use client";

import React from "react";
import InvestorCharterDP from "@/components/investors/InvestorCharterDP";

/**
 * Depository Participant Investor Charter Page Route
 * 
 * Renders `InvestorCharterDP` pre-selected to the "charter-details" tab.
 */
export default function InvestorCharterPage() {
  return <InvestorCharterDP defaultTab="charter-details" />;
}
