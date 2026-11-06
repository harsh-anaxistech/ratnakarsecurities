/**
 * Regulatory & Investor Awareness Popups Master Constants & Schedule Resolver
 * 
 * Regulated under SEBI circular SEBI/HO/MIRSD/MIRSD-PoD-1/P/CIR/2023/73 (Clause 3.2: minimum 50% screen coverage)
 * and compliance directive for alternating day-of-week bilingual advisories.
 */

export const REGULATORY_POPUP_TYPES = {
  RISK_DISCLOSURE: "RISK_DISCLOSURE",
  INVESTOR_AWARENESS: "INVESTOR_AWARENESS",
};

export const REGULATORY_POPUPS_DATA = {
  [REGULATORY_POPUP_TYPES.RISK_DISCLOSURE]: {
    id: "risk-disclosure",
    type: REGULATORY_POPUP_TYPES.RISK_DISCLOSURE,
    days: [2, 4, 6], // Tuesday (2), Thursday (4), Saturday (6)
    daysLabel: "Tuesday, Thursday & Saturday",
    categoryLabel: "Mandatory Regulatory Disclosure",
    categoryLabelHi: "अनिवार्य विनियामक प्रकटीकरण",
    badgeTheme: "rose", // visual theme styling
    en: {
      tag: "SEBI Risk Disclosure",
      title: "Risk Disclosures on Derivatives",
      subtitle: "Mandatory disclosure with respect to trading in Equity Futures & Options (F&O) segment",
      points: [
        "9 out of 10 individual traders in the equity Futures and Options (F&O) segment incurred net losses.",
        "On average, loss-makers registered a net trading loss close to ₹50,000.",
        "Over and above the net trading losses incurred, loss-makers expended an additional 28% of net trading losses as transaction costs.",
        "Those making net trading profits incurred between 15% to 50% of such profits as transaction costs.",
      ],
      sourceLabel: "Source",
      source: "SEBI study dated January 25, 2023 on 'Analysis of Profit and Loss of Individual Traders dealing in equity Futures and Options (F&O) Segment', wherein aggregate level findings are based on annual Profit/Loss incurred by individual traders in equity F&O during FY 2021-22.",
      acknowledgeBtn: "I Understand & Acknowledge",
    },
    hi: {
      tag: "सेबी जोखिम प्रकटीकरण",
      title: "इक्विटी डेरिवेटिव्स पर जोखिम प्रकटीकरण",
      subtitle: "इक्विटी फ्यूचर्स और ऑप्शंस (F&O) सेगमेंट में ट्रेडिंग के संबंध में अनिवार्य प्रकटीकरण",
      points: [
        "इक्विटी फ्यूचर्स और ऑप्शंस (F&O) सेगमेंट में ट्रेडिंग करने वाले प्रत्येक 10 व्यक्तिगत ट्रेडर्स में से 9 को शुद्ध रूप से नुकसान हुआ।",
        "नुकसान उठाने वाले ट्रेडर्स को औसतन लगभग ₹50,000 का शुद्ध ट्रेडिंग नुकसान हुआ।",
        "ट्रेडिंग में हुए नुकसान के अलावा, नुकसान उठाने वाले ट्रेडर्स को शुद्ध ट्रेडिंग नुकसान का अतिरिक्त 28% लेन-देन शुल्क (Transaction Costs) के रूप में देना पड़ा।",
        "जिन ट्रेडर्स ने ट्रेडिंग से शुद्ध लाभ कमाया, उन्हें अपने लाभ का 15% से 50% तक हिस्सा लेन-देन शुल्क (Transaction Costs) के रूप में खर्च करना पड़ा।",
      ],
      sourceLabel: "स्रोत",
      source: "25 जनवरी 2023 का सेबी अध्ययन - 'इक्विटी फ्यूचर्स एंड ऑप्शंस (F&O) सेगमेंट में व्यक्तिगत ट्रेडर्स के लाभ और हानि का विश्लेषण' (वित्त वर्ष 2021-22)।",
      acknowledgeBtn: "मैंने समझ लिया है और स्वीकार करता हूँ",
    },
  },

  [REGULATORY_POPUP_TYPES.INVESTOR_AWARENESS]: {
    id: "investor-awareness",
    type: REGULATORY_POPUP_TYPES.INVESTOR_AWARENESS,
    days: [0, 1, 3, 5], // Sunday (0), Monday (1), Wednesday (3), Friday (5)
    daysLabel: "Monday, Wednesday, Friday & Sunday",
    categoryLabel: "Investor Awareness Initiative",
    categoryLabelHi: "निवेशक जागरूकता पहल",
    badgeTheme: "sky", // visual theme styling
    en: {
      tag: "Under Project Jagrook",
      title: "SEBI presents Samajh Se Investing Simple",
      subtitle: "Empowering every investor with essential principles for safe, secure, and disciplined investing",
      points: [
        "Understand Before You Invest",
        "Choose Regulated Investment Products",
        "Start Early, Stay Invested",
        "Beware of Investment Frauds",
      ],
      sourceLabel: "Initiative",
      source: "SEBI Investor Education and Awareness Initiative under Project Jagrook to empower investors with financial prudence.",
      acknowledgeBtn: "I Understand & Proceed",
    },
    hi: {
      tag: "प्रोजेक्ट जागरूक के अंतर्गत",
      title: "SEBI प्रस्तुत करता है – समझदारी से निवेश करें",
      subtitle: "सुरक्षित, सजग और अनुशासित निवेश के लिए हर निवेशक को आवश्यक वित्तीय ज्ञान से सशक्त बनाना",
      points: [
        "निवेश करने से पहले उसे अच्छी तरह समझें।",
        "केवल विनियमित (Regulated) निवेश उत्पादों में ही निवेश करें।",
        "निवेश की शुरुआत जल्दी करें और लंबे समय तक निवेश बनाए रखें।",
        "निवेश से जुड़ी धोखाधड़ी और फर्जी योजनाओं से सावधान रहें।",
      ],
      sourceLabel: "पहल",
      source: "प्रोजेक्ट जागरूक के अंतर्गत सेबी (SEBI) की निवेशक शिक्षा एवं जागरूकता पहल।",
      acknowledgeBtn: "मैंने समझ लिया है - आगे बढ़ें",
    },
  },
};

/**
 * Resolves current day of week and date in Indian Standard Time (IST - UTC+05:30)
 * 
 * @param {Date} [customDate] - Optional override date for testing or simulation
 * @returns {{ dayOfWeek: number, dayName: string, dateKey: string }}
 */
export function getISTDateInfo(customDate = new Date()) {
  try {
    // Format to parts in Asia/Kolkata timezone
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const parts = formatter.formatToParts(customDate);
    const partMap = {};
    for (const p of parts) {
      partMap[p.type] = p.value;
    }

    const weekdayMap = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fri: 5,
      Sat: 6,
    };

    const dayOfWeek = weekdayMap[partMap.weekday] ?? customDate.getDay();
    const dateKey = `${partMap.year}-${partMap.month}-${partMap.day}`;

    return {
      dayOfWeek,
      dayName: partMap.weekday,
      dateKey,
    };
  } catch {
    // Fallback if Intl format fails
    return {
      dayOfWeek: customDate.getDay(),
      dayName: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][customDate.getDay()],
      dateKey: customDate.toISOString().slice(0, 10),
    };
  }
}

/**
 * Returns the active regulatory notice configuration for the specified or current day.
 * 
 * - Tuesday (2), Thursday (4), Saturday (6) => Risk Disclosure
 * - Sunday (0), Monday (1), Wednesday (3), Friday (5) => Investor Awareness
 * 
 * @param {Date} [customDate]
 * @returns {typeof REGULATORY_POPUPS_DATA[keyof typeof REGULATORY_POPUPS_DATA] & { dateInfo: ReturnType<typeof getISTDateInfo> }}
 */
export function getActiveRegulatoryNotice(customDate = new Date()) {
  const dateInfo = getISTDateInfo(customDate);
  const isRiskDay = [2, 4, 6].includes(dateInfo.dayOfWeek);

  const activeNotice = isRiskDay
    ? REGULATORY_POPUPS_DATA[REGULATORY_POPUP_TYPES.RISK_DISCLOSURE]
    : REGULATORY_POPUPS_DATA[REGULATORY_POPUP_TYPES.INVESTOR_AWARENESS];

  return {
    ...activeNotice,
    dateInfo,
  };
}

