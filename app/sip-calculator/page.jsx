"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";

// ==========================================
// Provided Legacy Calculator Logic
// ==========================================
function formatNumber(number) {
  var x = number.toString();
  var splitNo = x.split('.');
  var lastThree = splitNo[0].substring(splitNo[0].length - 3);
  var otherNumbers = splitNo[0].substring(0, splitNo[0].length - 3);

  if (splitNo.length > 1) {
    if (otherNumbers !== '') lastThree = ',' + lastThree + '.' + splitNo[1];
  } else {
    if (otherNumbers !== '') lastThree = ',' + lastThree;
  }

  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return res;
}

function formatKLC(e) {
  e = String(e).replace(/\,/g, '');
  e = parseInt(e, 10);
  if (isNaN(e)) return "0";
  var ret = 999 < e && e < 99999 ? (e / 1e3).toFixed(1) + " K" : 99999 < e && e < 9999999 ? (e / 1e5).toFixed(1) + " Lac" : 9999999 < e ? (e / 1e7).toFixed(1) + " Cr" : e;
  return ret;
}

function formatKLCFull(e) {
  e = String(e).replace(/\,/g, '');
  e = parseInt(e, 10);
  if (isNaN(e)) return "0";
  var ret = 999 < e && e < 99999 ? (e / 1e3).toFixed(1) + " Thousand" : 99999 < e && e < 9999999 ? (e / 1e5).toFixed(1) + " Lakhs" : 9999999 < e ? (e / 1e7).toFixed(1) + " Crore" : e;
  return ret;
}

function calculateInvestmentDuration(installmentCount, frequencyValue) {
  var selectedValue = String(frequencyValue || "2");
  var instaldurmnth = 0;
  var instalduryear = 0;

  if (selectedValue === "1") {
    var totomnth = Math.round(parseFloat(installmentCount) * 0.230137);
    instalduryear = Math.round(parseFloat(totomnth) / 12);
    instaldurmnth = Math.round(parseFloat(totomnth) % 12);
    if (parseFloat(installmentCount) <= 4) {
      instalduryear = 0;
      instaldurmnth = 1;
    }
  } else if (selectedValue === "2") {
    instalduryear = parseInt(parseInt(installmentCount) / 12);
    instaldurmnth = parseFloat(parseInt(installmentCount) % 12);
  } else if (selectedValue === "3") {
    instalduryear = parseInt((parseInt(installmentCount) * 3) / 12);
    instaldurmnth = parseFloat((parseInt(installmentCount) * 3) % 12);
  } else if (selectedValue === "4") {
    instalduryear = parseInt((parseInt(installmentCount) * 6) / 12);
    instaldurmnth = parseFloat((parseInt(installmentCount) * 6) % 12);
  }

  return {
    years: parseInt(instalduryear),
    months: parseFloat(instaldurmnth)
  };
}

function calculateSIP(params) {
  var sipAmount = parseFloat(params.sipAmount || params.sipamnttxt || 0);
  var frequency = String(params.sipFrequency || params.sip_frequency || params.frequency || "2");
  var expectedReturn = parseFloat(params.expectedReturn || params.expctintresttxt || 0);
  var installmentCount = parseFloat(params.installments || params.noofinsalltxt || 0);
  var duration = calculateInvestmentDuration(installmentCount, frequency);

  var result = {};
  var res = 0;
  var finalres = 0;
  var totinstallment = 0;

  switch (frequency) {
    case "1":
      totinstallment = parseFloat(installmentCount);
      for (var i = 1; i <= parseInt(totinstallment); i++) {
        var n2 = Math.pow((1 + parseFloat(expectedReturn) / 1200), (parseInt(totinstallment) * 0.2307 - (i - 1) * 0.2307));
        res = parseFloat(sipAmount) * n2;
        finalres = finalres + res;
      }
      result.futurevalue = finalres;
      break;

    case "2":
      totinstallment = installmentCount * 12;
      for (var j = 1; j <= parseInt(totinstallment); j++) {
        var n3 = Math.pow((1 + parseFloat(expectedReturn) / 1200), (parseInt(installmentCount) * 12 - (j - 1) * 1));
        res = parseFloat(sipAmount) * n3;
        finalres = finalres + res;
      }
      result.futurevalue = finalres;
      break;

    case "3":
      totinstallment = parseFloat(installmentCount);
      for (var k = 1; k <= parseInt(totinstallment); k++) {
        var n4 = Math.pow((1 + parseFloat(expectedReturn) / 1200), (parseInt(totinstallment) * 3 - (k - 1) * 3));
        res = parseFloat(sipAmount) * n4;
        finalres = finalres + res;
      }
      result.futurevalue = finalres;
      break;

    case "4":
      totinstallment = parseFloat(installmentCount);
      for (var m = 1; m <= parseInt(totinstallment); m++) {
        var n5 = Math.pow((1 + parseFloat(expectedReturn) / 1200), (parseInt(totinstallment) * 6 - (m - 1) * 6));
        res = parseFloat(sipAmount) * n5;
        finalres = finalres + res;
      }
      result.futurevalue = finalres;
      break;

    default:
      result.futurevalue = 0;
      break;
  }

  var futurevalue = Math.round(result.futurevalue.toFixed(2));
  var investment = Math.round((sipAmount * totinstallment).toFixed(2));
  var earnings = Math.round((futurevalue - investment).toFixed(2));

  return {
    futureValue: formatNumber(futurevalue),
    investment: formatNumber(investment),
    earnings: formatNumber(earnings),
    futureValueRaw: futurevalue,
    investmentRaw: investment,
    earningsRaw: earnings,
    years: duration.years,
    months: duration.months,
    installments: totinstallment,
    graph: [
      { title: 'Investment', value: investment, color: '#00aeee' },
      { title: 'Earnings', value: earnings, color: '#ea2830' }
    ]
  };
}

function buildFutureValueTable(params) {
  var rows = [];
  var durations = [params.installments || 1, 5, 8, 10, 12, 15, 18, 20, 22, 25, 28, 30, 35];
  var sipAmount = parseFloat(params.sipAmount || params.sipamnttxt || 0);
  var expectedReturn = parseFloat(params.expectedReturn || params.expctintresttxt || 0);

  // deduplicate durations
  var uniqueDurations = Array.from(new Set(durations)).sort((a, b) => a - b);

  for (var j = 0; j < uniqueDurations.length; j++) {
    var finalres = 0;
    for (var i = 1; i <= parseInt(uniqueDurations[j] * 12); i++) {
      var n2 = Math.pow((1 + parseFloat(expectedReturn) / 1200), (parseInt(uniqueDurations[j]) * 12 - (i - 1) * 1));
      finalres = finalres + (sipAmount * n2);
    }
    rows.push({
      duration: uniqueDurations[j],
      sipAmount: sipAmount,
      futureValue: formatKLCFull(formatNumber(Math.round(finalres)))
    });
  }

  return rows;
}

export default function SipCalculatorPage() {
  const [sipAmount, setSipAmount] = useState(25000);
  const [timeHorizon, setTimeHorizon] = useState(15);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [frequency, setFrequency] = useState("2"); // 1=Weekly, 2=Monthly, 3=Quarterly, 4=Half-Yearly

  // Calculated parameters store
  const [calcParams, setCalcParams] = useState({
    sipAmount: 25000,
    timeHorizon: 15,
    expectedReturn: 12,
    frequency: "2"
  });

  const [results, setResults] = useState(null);
  const [futureTable, setFutureTable] = useState([]);

  // Calculate values
  const runCalculations = () => {
    setCalcParams({
      sipAmount,
      timeHorizon,
      expectedReturn,
      frequency
    });
  };

  // Run calculation only when calcParams changes
  useEffect(() => {
    const calcResult = calculateSIP({
      sipAmount: calcParams.sipAmount,
      installments: calcParams.timeHorizon,
      expectedReturn: calcParams.expectedReturn,
      frequency: calcParams.frequency
    });
    setResults(calcResult);

    const tableRows = buildFutureValueTable({
      installments: calcParams.timeHorizon,
      sipAmount: calcParams.sipAmount,
      expectedReturn: calcParams.expectedReturn
    });
    setFutureTable(tableRows);
  }, [calcParams]);

  // SVG Donut Chart Calculation
  const getDonutChartData = () => {
    if (!results) return { strokeDasharray: "0 100", offset: 0, invPercent: 50, earnPercent: 50 };
    const total = results.investmentRaw + results.earningsRaw;
    if (total === 0) return { strokeDasharray: "0 100", offset: 0, invPercent: 50, earnPercent: 50 };
    
    const invPercent = (results.investmentRaw / total) * 100;
    const earnPercent = (results.earningsRaw / total) * 100;
    
    // Donut SVG parameters (radius = 35 -> Circumference = 2 * PI * 35 = 219.91)
    const circ = 2 * Math.PI * 35;
    const strokeDasharray = `${(invPercent / 100) * circ} ${circ}`;
    const offset = circ * 0.25; // start from top (12 o'clock)
    
    return {
      strokeDasharray,
      offset,
      invPercent: invPercent.toFixed(2),
      earnPercent: earnPercent.toFixed(2)
    };
  };

  const donut = getDonutChartData();

  return (
    <div className="bg-[#f7f9fc] min-h-screen pb-16">
      {/* Banner */}
      <HeroSection
        title="SIP Calculator"
        breadcrumbs={[
          { label: "Markets", href: "/products/overview" },
          { label: "Mutual Fund", href: "/products/mutual-funds" },
          { label: "SIP Calculator" }
        ]}
        image="/images/photorealistic-money-with-plant.jpg"
        height="h-[260px] md:h-[320px]"
      />

      <Container className="mt-8 md:mt-12">
        <div className="bg-white rounded-3xl shadow-xl border border-black/5 p-6 md:p-10">
          {/* Header Description */}
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#012e54] mb-3">
              Wealth Projection & SIP Estimator
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Calculate the future value of your Systematic Investment Plan (SIP) instantly. Choose your frequency, set the horizon, adjust expected annual return rates, and visualize your wealth growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ==========================================
                LEFT COLUMN: INPUT CONTROLS
            ========================================== */}
            <div className="lg:col-span-6 space-y-6 bg-slate-50/80 p-6 md:p-8 rounded-2xl border border-gray-100">
              
              {/* Frequency */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2.5">
                  Investment Frequency
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "Weekly", val: "1" },
                    { label: "Monthly", val: "2" },
                    { label: "Quarterly", val: "3" },
                    { label: "Half-Year", val: "4" }
                  ].map((freq) => (
                    <button
                      key={freq.val}
                      type="button"
                      onClick={() => setFrequency(freq.val)}
                      className={`py-2 px-1 text-xs md:text-sm font-bold rounded-lg border transition-all ${
                        frequency === freq.val
                          ? "bg-[#ea2830] border-[#ea2830] text-white shadow-md"
                          : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                      }`}
                    >
                      {freq.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* SIP Amount */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">
                    {frequency === "1" ? "Weekly" : frequency === "3" ? "Quarterly" : frequency === "4" ? "Half-Yearly" : "Monthly"} Investment (₹)
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400 font-medium">₹</span>
                    <input
                      type="number"
                      value={sipAmount}
                      onChange={(e) => setSipAmount(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-28 text-right font-bold text-gray-900 border border-gray-300 rounded-lg px-2.5 py-1 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>
                <div className="relative pt-2">
                  <input
                    type="range"
                    min="500"
                    max="1000000"
                    step="500"
                    value={sipAmount}
                    onChange={(e) => setSipAmount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ea2830]"
                  />
                  <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                    <span>₹ 500</span>
                    <span className="font-semibold text-primary">{formatKLC(sipAmount)}</span>
                    <span>₹ 10 Lac</span>
                  </div>
                </div>
              </div>

              {/* Time Horizon */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">Time Horizon (Years)</span>
                  <input
                    type="number"
                    value={timeHorizon}
                    min="1"
                    max="35"
                    onChange={(e) => setTimeHorizon(Math.min(35, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="w-16 text-right font-bold text-gray-900 border border-gray-300 rounded-lg px-2.5 py-1 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div className="relative pt-2">
                  <input
                    type="range"
                    min="1"
                    max="35"
                    step="1"
                    value={timeHorizon}
                    onChange={(e) => setTimeHorizon(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ea2830]"
                  />
                  <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                    <span>1 Yr</span>
                    <span className="font-semibold text-primary">{timeHorizon} Yrs</span>
                    <span>35 Yrs</span>
                  </div>
                </div>
              </div>

              {/* Expected Return */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">Expected Return (p.a. %)</span>
                  <input
                    type="number"
                    step="0.1"
                    value={expectedReturn}
                    min="1"
                    max="25"
                    onChange={(e) => setExpectedReturn(Math.min(25, Math.max(1, parseFloat(e.target.value) || 1)))}
                    className="w-16 text-right font-bold text-gray-900 border border-gray-300 rounded-lg px-2.5 py-1 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div className="relative pt-2">
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="0.5"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ea2830]"
                  />
                  <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                    <span>1 %</span>
                    <span className="font-semibold text-primary">{expectedReturn}%</span>
                    <span>25 %</span>
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={runCalculations}
                  className="px-8 py-3 bg-[#00aeee] hover:bg-[#0090c8] text-white font-bold rounded-xl shadow hover:shadow-md transition-all duration-300 transform active:scale-[0.98] uppercase text-xs tracking-wider cursor-pointer"
                >
                  Calculate SIP
                </button>
              </div>

            </div>

            {/* ==========================================
                RIGHT COLUMN: OUTPUT & GRAPH
            ========================================== */}
            {results && (
              <div className="lg:col-span-6 space-y-8">
                
                {/* Visual Cards */}
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {/* Card 1: Investment */}
                  <div className="bg-[#00aeed1f] border border-[#00aeee]/10 rounded-2xl p-4 text-center shadow-sm">
                    <span className="text-[11px] md:text-xs font-bold text-[#00aeee] uppercase tracking-wide block mb-1">
                      Invested Amount
                    </span>
                    <h4 className="text-sm md:text-lg font-bold text-[#012e54] break-all">
                      ₹{results.investment}
                    </h4>
                    <span className="text-[10px] md:text-xs font-semibold text-gray-500 block mt-1">
                      ({formatKLC(results.investmentRaw)})
                    </span>
                  </div>

                  {/* Card 2: Wealth Gain */}
                  <div className="bg-[#ea28301f] border border-[#ea2830]/10 rounded-2xl p-4 text-center shadow-sm">
                    <span className="text-[11px] md:text-xs font-bold text-[#ea2830] uppercase tracking-wide block mb-1">
                      Wealth Gain
                    </span>
                    <h4 className="text-sm md:text-lg font-bold text-[#ea2830] break-all">
                      ₹{results.earnings}
                    </h4>
                    <span className="text-[10px] md:text-xs font-semibold text-gray-500 block mt-1">
                      ({formatKLC(results.earningsRaw)})
                    </span>
                  </div>

                  {/* Card 3: Future Value */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-center shadow-sm">
                    <span className="text-[11px] md:text-xs font-bold text-emerald-600 uppercase tracking-wide block mb-1">
                      Expected Value
                    </span>
                    <h4 className="text-sm md:text-lg font-bold text-[#012e54] break-all">
                      ₹{results.futureValue}
                    </h4>
                    <span className="text-[10px] md:text-xs font-semibold text-gray-500 block mt-1">
                      ({formatKLC(results.futureValueRaw)})
                    </span>
                  </div>
                </div>

                {/* Donut Chart and Legend */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 bg-slate-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
                  {/* SVG Donut */}
                  <div className="relative w-40 h-40 shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                      {/* Gray Background Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="35"
                        fill="transparent"
                        stroke="#f3f4f6"
                        strokeWidth="15"
                      />
                      {/* Earnings Circle (Red, base layer) */}
                      <circle
                        cx="50"
                        cy="50"
                        r="35"
                        fill="transparent"
                        stroke="#ea2830"
                        strokeWidth="15"
                      />
                      {/* Investment Circle (Blue, overlay segment) */}
                      <circle
                        cx="50"
                        cy="50"
                        r="35"
                        fill="transparent"
                        stroke="#00aeee"
                        strokeWidth="15"
                        strokeDasharray={donut.strokeDasharray}
                        strokeDashoffset={0}
                      />
                    </svg>
                    {/* Inner Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Total Value
                      </span>
                      <span className="text-base font-bold text-[#012e54]">
                        {formatKLC(results.futureValueRaw)}
                      </span>
                    </div>
                  </div>

                  {/* Donut Legend */}
                  <div className="space-y-4 w-full max-w-[200px]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#00aeee] block"></span>
                        <span className="text-sm font-bold text-[#012e54]">Investment</span>
                      </div>
                      <span className="text-sm font-bold text-[#012e54]">{donut.invPercent}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#ea2830] block"></span>
                        <span className="text-sm font-bold text-[#012e54]">Earnings</span>
                      </div>
                      <span className="text-sm font-bold text-[#012e54]">{donut.earnPercent}%</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* ==========================================
              BOTTOM: PROJECTION TABLE
          ========================================== */}
          {futureTable.length > 0 && (
            <div className="mt-12 pt-10 border-t border-gray-100">
              <h3 className="text-xl font-bold font-serif text-[#012e54] mb-6">
                Future Value Projections Over Time
              </h3>
              <div tabIndex="0" role="region" aria-label="Future Value Projections Table" className="overflow-x-auto rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:outline-none">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-gray-200 text-xs md:text-sm font-bold text-[#012e54]">
                      <th scope="col" className="p-4">Duration</th>
                      <th scope="col" className="p-4">SIP Amount</th>
                      <th scope="col" className="p-4">Future Value (Proj.)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs md:text-sm text-gray-700">
                    {futureTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`hover:bg-slate-50/50 transition-colors ${
                          row.duration === calcParams.timeHorizon ? "bg-primary/5 font-semibold text-primary animate-pulse-subtle" : ""
                        }`}
                      >
                        <td className="p-4 flex items-center gap-1.5">
                          {row.duration} Years
                          {row.duration === calcParams.timeHorizon && (
                            <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase">
                              Current
                            </span>
                          )}
                        </td>
                        <td className="p-4">
                          ₹{formatNumber(calcParams.sipAmount)}
                        </td>
                        <td className="p-4 font-bold text-gray-900">
                          {row.futureValue}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </Container>
    </div>
  );
}
