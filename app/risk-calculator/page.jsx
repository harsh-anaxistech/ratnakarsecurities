"use client";

import React, { useState } from "react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import { Check, X, Shield, TrendingUp, AlertTriangle } from "lucide-react";

// ==========================================
// Provided Legacy Risk Profiling Logic
// ==========================================
function calculateRiskProfile(points) {
  var totalPoints = 0;
  for (var i = 0; i < points.length; i++) {
    totalPoints += parseInt(points[i], 10) || 0;
  }

  var riskCapacity = "";
  if (totalPoints >= 25 && totalPoints <= 35) {
    riskCapacity = "Low";
  } else if (totalPoints >= 40 && totalPoints <= 55) {
    riskCapacity = "Moderate";
  } else if (totalPoints >= 60 && totalPoints <= 75) {
    riskCapacity = "High";
  }

  return {
    totalPoints: totalPoints,
    riskCapacity: riskCapacity
  };
}

function evaluateRiskProfile(options) {
  var q1points = parseInt(options.q1points, 10) || 0;
  var q2points = parseInt(options.q2points, 10) || 0;
  var q3points = parseInt(options.q3points, 10) || 0;
  var q4points = parseInt(options.q4points, 10) || 0;
  var q5points = parseInt(options.q5points, 10) || 0;
  var riskTolerance = options.riskTolerance || "";

  var result = calculateRiskProfile([q1points, q2points, q3points, q4points, q5points]);
  return {
    totalPoints: result.totalPoints,
    riskCapacity: result.riskCapacity,
    riskTolerance: riskTolerance
  };
}

// ==========================================
// Questions Definition
// ==========================================
const QUESTIONS = [
  {
    id: 1,
    title: "1. What is your age group?",
    key: "q1",
    options: [
      { text: "Above 50 yrs", points: 5 },
      { text: "Between 40yrs - 50yrs", points: 10 },
      { text: "Below 40 yrs", points: 15 }
    ]
  },
  {
    id: 2,
    title: "2. What is your annual income?",
    key: "q2",
    options: [
      { text: "Below Rs. 5,00,000/-", points: 5 },
      { text: "Rs. 5,00,000 - Rs. 10,00,000/-", points: 10 },
      { text: "Over Rs. 10,00,000/-", points: 15 }
    ]
  },
  {
    id: 3,
    title: "3. For how many years do you expect to have others dependent on you for financial support?",
    key: "q3",
    options: [
      { text: "More than 10 years.", points: 5 },
      { text: "Upto 10 years.", points: 10 },
      { text: "I don't have any Dependent", points: 15 }
    ]
  },
  {
    id: 4,
    title: "4. My current and future income sources (Example: salary, business income, etc.) are?",
    key: "q4",
    options: [
      { text: "Unstable.", points: 5 },
      { text: "Stable.", points: 10 },
      { text: "Very Stable.", points: 15 }
    ]
  },
  {
    id: 5,
    title: "5. What is the level of savings and other assets do you have now?",
    key: "q5",
    options: [
      { text: "Very Low.", points: 5 },
      { text: "On Track.", points: 10 },
      { text: "High.", points: 15 }
    ]
  },
  {
    id: 6,
    title: "6. Which of the following best describes you?",
    key: "q6",
    options: [
      { text: "I am Conservative & worry about money.", tolerance: "Low" },
      { text: "I like things to go according to my plans.", tolerance: "Moderate" },
      { text: "I am comfortable in taking a calculated risk with money.", tolerance: "High" }
    ]
  }
];

export default function RiskCalculatorPage() {
  const [answers, setAnswers] = useState({
    q1: null, // will store points
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null  // will store tolerance string ("Low", "Moderate", "High")
  });

  const [validationError, setValidationError] = useState("");
  const [result, setResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle Option Select
  const handleSelectOption = (key, value) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value
    }));
    setValidationError("");
  };

  // Perform Profiling Calculation
  const handleCalculate = (e) => {
    e.preventDefault();
    
    // Check if all questions are answered
    if (
      answers.q1 === null ||
      answers.q2 === null ||
      answers.q3 === null ||
      answers.q4 === null ||
      answers.q5 === null ||
      answers.q6 === null
    ) {
      setValidationError("Please answer all 6 questions to calculate your risk profile.");
      return;
    }

    const evaluation = evaluateRiskProfile({
      q1points: answers.q1,
      q2points: answers.q2,
      q3points: answers.q3,
      q4points: answers.q4,
      q5points: answers.q5,
      riskTolerance: answers.q6
    });

    setResult(evaluation);
    setIsModalOpen(true);
  };

  // Helper for Suggested Asset Allocation
  const getAssetAllocation = (capacity, tolerance) => {
    // Combine capacity & tolerance for guidance
    if (capacity === "High" && tolerance === "High") {
      return {
        type: "Aggressive Growth",
        equity: "80%",
        debt: "15%",
        gold: "5%",
        desc: "Designed for maximum capital appreciation. You have a strong buffer for volatility and are comfortable with market dips in pursuit of high long-term gains."
      };
    } else if (capacity === "Low" || tolerance === "Low") {
      return {
        type: "Conservative Preservation",
        equity: "25%",
        debt: "65%",
        gold: "10%",
        desc: "Designed to preserve capital and provide steady, low-risk income. Ideal for preserving wealth with minimal exposure to equity market swings."
      };
    } else {
      return {
        type: "Balanced / Moderate",
        equity: "50%",
        debt: "40%",
        gold: "10%",
        desc: "Designed to balance growth and capital stability. A classic middle-ground strategy suited for moderate wealth building with moderate risk tolerance."
      };
    }
  };

  const allocation = result ? getAssetAllocation(result.riskCapacity, result.riskTolerance) : null;

  return (
    <div className="bg-[#f7f9fc] min-h-screen pb-16">
      {/* Banner */}
      <HeroSection
        title="Risk Profile"
        breadcrumbs={[
          { label: "Markets", href: "/products/overview" },
          { label: "Mutual Fund", href: "/products/mutual-funds" },
          { label: "MF Tools", href: "/sip-calculator" },
          { label: "Risk Profile" }
        ]}
        image="/images/about/AboutUs-Ratnakarsec.png"
        height="h-[260px] md:h-[320px]"
      />

      <Container className="mt-8 md:mt-12">
        <div className="bg-white rounded-3xl shadow-xl border border-black/5 p-6 md:p-10">
          
          {/* Header Description */}
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#012e54] mb-3">
              Understand Your Investor Persona
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Every successful investment journey begins by understanding your risk appetite. Answer the 6 questions below to evaluate both your financial **Risk Capacity** and psychological **Risk Tolerance**.
            </p>
          </div>

          {/* Questionnaire Form */}
          <form onSubmit={handleCalculate} className="space-y-8">
            
            {/* Grid of Questions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {QUESTIONS.map((q) => {
                const isSelected = answers[q.key] !== null;
                return (
                  <div
                    key={q.id}
                    className={`bg-slate-50/70 border rounded-2xl p-5 md:p-6 transition-all duration-300 ${
                      isSelected
                        ? "border-[#ea2830]/20 shadow-[0_4px_20px_rgba(234,40,48,0.02)] bg-white"
                        : "border-black/5"
                    }`}
                  >
                    {/* Question Title */}
                    <h3 className="text-[15px] md:text-[16px] font-bold text-[#012e54] leading-snug mb-5 min-h-[48px]">
                      {q.title}
                    </h3>

                    {/* Options Stack */}
                    <div className="space-y-3">
                      {q.options.map((opt, oIdx) => {
                        const optValue = q.key === "q6" ? opt.tolerance : opt.points;
                        const active = answers[q.key] === optValue;
                        return (
                          <button
                            key={oIdx}
                            type="button"
                            onClick={() => handleSelectOption(q.key, optValue)}
                            className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left text-xs md:text-sm font-medium transition-all duration-300 ${
                              active
                                ? "bg-[#ea2830]/5 border-[#ea2830] text-[#ea2830] font-semibold"
                                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                            }`}
                          >
                            <span className="pr-2">{opt.text}</span>
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                                active
                                  ? "border-[#ea2830] bg-[#ea2830]"
                                  : "border-gray-300 bg-white"
                              }`}
                            >
                              {active && <Check className="w-3.5 h-3.5 text-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Error Message */}
            {validationError && (
              <div className="flex items-center gap-2 text-danger bg-danger/5 border border-danger/10 rounded-xl p-4 max-w-xl mx-auto text-sm font-semibold">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-[#ea2830] hover:bg-[#c41f26] text-white font-bold text-[16px] py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 uppercase tracking-wide cursor-pointer"
              >
                Calculate Risk Profile
              </button>
            </div>

          </form>

        </div>
      </Container>

      {/* ==========================================
          MODAL: RESULTS VIEW
      ========================================== */}
      {isModalOpen && result && allocation && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-black/5 overflow-hidden animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="bg-[#012e54] text-white px-6 py-5 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <Shield className="w-6 h-6 text-[#00aeee]" />
                <h3 className="text-lg md:text-xl font-bold font-serif">
                  Your Risk Profile Analysis
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              
              <div className="text-center pb-4 border-b border-gray-100">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                  Analysis Score
                </span>
                <h4 className="text-3xl font-extrabold text-[#012e54]">
                  {result.totalPoints} / 75 Points
                </h4>
              </div>

              {/* Status Columns */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#00aeed1f]/20 border border-[#00aeee]/15 rounded-2xl p-4 text-center">
                  <span className="text-xs font-bold text-[#00aeee] uppercase tracking-wide block mb-1">
                    Risk Capacity
                  </span>
                  <h5 className={`text-xl font-extrabold ${
                    result.riskCapacity === "High" ? "text-emerald-600" : result.riskCapacity === "Low" ? "text-[#ea2830]" : "text-[#012e54]"
                  }`}>
                    {result.riskCapacity}
                  </h5>
                  <p className="text-[10px] text-gray-500 mt-1">
                    Financial ability to take risk
                  </p>
                </div>

                <div className="bg-[#ea28301f]/20 border border-[#ea2830]/15 rounded-2xl p-4 text-center">
                  <span className="text-xs font-bold text-[#ea2830] uppercase tracking-wide block mb-1">
                    Risk Tolerance
                  </span>
                  <h5 className={`text-xl font-extrabold ${
                    result.riskTolerance === "High" ? "text-emerald-600" : result.riskTolerance === "Low" ? "text-[#ea2830]" : "text-[#012e54]"
                  }`}>
                    {result.riskTolerance}
                  </h5>
                  <p className="text-[10px] text-gray-500 mt-1">
                    Psychological readiness for risk
                  </p>
                </div>
              </div>

              {/* Suggested Asset Allocation Section */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-gray-100 space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#ea2830]" />
                  <h6 className="text-base font-bold text-[#012e54] font-serif">
                    Suggested Asset Allocation ({allocation.type})
                  </h6>
                </div>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {allocation.desc}
                </p>

                {/* Progress Indicators */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                      <span>Equity Mutual Funds</span>
                      <span>{allocation.equity}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#ea2830] h-full rounded-full" style={{ width: allocation.equity }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                      <span>Debt Mutual Funds / Fixed Income</span>
                      <span>{allocation.debt}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#00aeee] h-full rounded-full" style={{ width: allocation.debt }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                      <span>Gold / Liquid Funds</span>
                      <span>{allocation.gold}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-yellow-500 h-full rounded-full" style={{ width: allocation.gold }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#012e54] hover:bg-[#012441] text-white text-sm font-bold py-3 px-8 rounded-xl transition-all uppercase tracking-wide cursor-pointer"
                >
                  Close & Continue
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
