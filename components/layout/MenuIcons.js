/**
 * Creative dual-tone SVG icons for navigation dropdown menus.
 * Uses a combination of fills and strokes with brand colors
 * for a premium, polished look.
 */

const MenuIcons = {
    // ── Products ──
    overview: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="8" height="8" rx="2" fill="#00aeee" opacity="0.15" stroke="#00aeee" strokeWidth="1.5" />
            <rect x="13" y="3" width="8" height="8" rx="2" fill="#ea2830" opacity="0.15" stroke="#ea2830" strokeWidth="1.5" />
            <rect x="3" y="13" width="8" height="8" rx="2" fill="#ea2830" opacity="0.15" stroke="#ea2830" strokeWidth="1.5" />
            <rect x="13" y="13" width="8" height="8" rx="2" fill="#00aeee" opacity="0.15" stroke="#00aeee" strokeWidth="1.5" />
        </svg>
    ),

    equity: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#00aeee" opacity="0.08" />
            <path d="M7 17l4-5 3 3 5-7" stroke="#00aeee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="7" cy="17" r="1.5" fill="#ea2830" />
            <circle cx="11" cy="12" r="1.5" fill="#ea2830" />
            <circle cx="14" cy="15" r="1.5" fill="#ea2830" />
            <circle cx="19" cy="8" r="1.5" fill="#ea2830" />
            <path d="M16 7h3.5v3.5" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    derivatives: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l10 5v4l-10 5L2 11V7l10-5z" fill="#00aeee" opacity="0.15" stroke="#00aeee" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M2 11v4l10 5 10-5v-4" stroke="#ea2830" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M2 15v4l10 5 10-5v-4" stroke="#00aeee" strokeWidth="1.5" strokeLinejoin="round" opacity="0.5" />
        </svg>
    ),

    "mutual-funds": (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M22 12A10 10 0 0 0 12 2v10h10z" fill="#ea2830" opacity="0.2" stroke="#ea2830" strokeWidth="1.5" />
            <path d="M12 2a10 10 0 1 0 9.17 14" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="3" fill="#00aeee" opacity="0.15" stroke="#00aeee" strokeWidth="1" />
        </svg>
    ),

    commodities: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l3.5 6H22l-4.5 4.5L19 20l-7-3.5L5 20l1.5-7.5L2 8h6.5L12 2z" fill="#ea2830" opacity="0.12" stroke="#ea2830" strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="12" cy="11" r="3" fill="#00aeee" opacity="0.2" stroke="#00aeee" strokeWidth="1.2" />
        </svg>
    ),

    "wealth-management": (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="6" width="20" height="14" rx="3" fill="#00aeee" opacity="0.1" stroke="#00aeee" strokeWidth="1.5" />
            <circle cx="12" cy="13" r="3.5" fill="#ea2830" opacity="0.15" stroke="#ea2830" strokeWidth="1.5" />
            <path d="M12 11v4M10.5 12.5h3" stroke="#ea2830" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M6 6V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),

    nri: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#00aeee" opacity="0.08" stroke="#00aeee" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#00aeee" strokeWidth="1.2" opacity="0.5" />
            <line x1="2" y1="12" x2="22" y2="12" stroke="#00aeee" strokeWidth="1.2" opacity="0.5" />
            <path d="M15 5.5a8 8 0 0 1 0 13" stroke="#ea2830" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="8" cy="9" r="1.2" fill="#ea2830" />
        </svg>
    ),

    slbs: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="8" height="6" rx="1.5" fill="#00aeee" opacity="0.15" stroke="#00aeee" strokeWidth="1.5" />
            <rect x="14" y="14" width="8" height="6" rx="1.5" fill="#ea2830" opacity="0.15" stroke="#ea2830" strokeWidth="1.5" />
            <path d="M13 7h4.5a2 2 0 0 1 2 2v2" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" />
            <polyline points="17 7 20 7 17 10" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M11 17H6.5a2 2 0 0 1-2-2v-2" stroke="#ea2830" strokeWidth="1.5" strokeLinecap="round" />
            <polyline points="7 17 4 17 7 14" stroke="#ea2830" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
    ),

    bonds: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#00aeee" opacity="0.1" stroke="#00aeee" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M9 12l2 2 4-4" stroke="#ea2830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    "investment-advisory": (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="7" width="18" height="13" rx="2" fill="#00aeee" opacity="0.1" stroke="#00aeee" strokeWidth="1.5" />
            <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="14" r="2.5" fill="#ea2830" opacity="0.15" stroke="#ea2830" strokeWidth="1.3" />
            <line x1="12" y1="12.5" x2="12" y2="15.5" stroke="#ea2830" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="10.5" y1="14" x2="13.5" y2="14" stroke="#ea2830" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
    ),

    // ── Research ──
    company: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="6" width="10" height="16" rx="1.5" fill="#00aeee" opacity="0.1" stroke="#00aeee" strokeWidth="1.5" />
            <rect x="13" y="10" width="8" height="12" rx="1.5" fill="#ea2830" opacity="0.1" stroke="#ea2830" strokeWidth="1.5" />
            <line x1="6" y1="10" x2="10" y2="10" stroke="#00aeee" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="6" y1="13" x2="10" y2="13" stroke="#00aeee" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="6" y1="16" x2="10" y2="16" stroke="#00aeee" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="16" y1="14" x2="18" y2="14" stroke="#ea2830" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="16" y1="17" x2="18" y2="17" stroke="#ea2830" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M6 6l2-4 2 4" stroke="#00aeee" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    ipos: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 22V8" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 8l-4 4.5h2.5V22h3V12.5H16L12 8z" fill="#ea2830" opacity="0.15" stroke="#ea2830" strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="12" cy="4" r="2.5" fill="#00aeee" opacity="0.15" stroke="#00aeee" strokeWidth="1.5" />
            <path d="M12 4l.8 1.5 1.7.3-1.2 1.2.3 1.7L12 7.8l-1.6.9.3-1.7L9.5 5.8l1.7-.3z" fill="#ea2830" opacity="0.6" />
            <line x1="5" y1="22" x2="19" y2="22" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),

    news: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="2" width="16" height="20" rx="2" fill="#00aeee" opacity="0.08" stroke="#00aeee" strokeWidth="1.5" />
            <rect x="8" y="5" width="7" height="5" rx="1" fill="#ea2830" opacity="0.2" stroke="#ea2830" strokeWidth="1" />
            <line x1="8" y1="13" x2="18" y2="13" stroke="#00aeee" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="8" y1="16" x2="18" y2="16" stroke="#00aeee" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            <line x1="8" y1="19" x2="14" y2="19" stroke="#00aeee" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            <path d="M5 20V8H3.5A1.5 1.5 0 0 0 2 9.5V20a2 2 0 0 0 2 2h.5" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    announcements: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M19 7v10l-7-2.5-7.5.5V9l7.5.5L19 7z" fill="#ea2830" opacity="0.12" stroke="#ea2830" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M4.5 9v6a1 1 0 0 0 1 1h2l1.5 5h2l-1-5" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="20" cy="12" r="1.5" fill="#ea2830" opacity="0.4" />
            <path d="M21.5 8.5l1-1M21.5 15.5l1 1M22.5 12h1.5" stroke="#ea2830" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        </svg>
    ),

    // ── Investors ──
    "board-of-directors": (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="6" r="3.5" fill="#00aeee" opacity="0.15" stroke="#00aeee" strokeWidth="1.5" />
            <path d="M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" fill="#00aeee" opacity="0.08" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="4" cy="9" r="2" fill="#ea2830" opacity="0.12" stroke="#ea2830" strokeWidth="1.2" />
            <circle cx="20" cy="9" r="2" fill="#ea2830" opacity="0.12" stroke="#ea2830" strokeWidth="1.2" />
            <path d="M1 21v-1a3 3 0 0 1 3-3" stroke="#ea2830" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M23 21v-1a3 3 0 0 0-3-3" stroke="#ea2830" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        </svg>
    ),

    "contact-details": (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="3" fill="#00aeee" opacity="0.08" stroke="#00aeee" strokeWidth="1.5" />
            <circle cx="12" cy="10" r="3" fill="#ea2830" opacity="0.15" stroke="#ea2830" strokeWidth="1.3" />
            <path d="M7 18c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="#ea2830" strokeWidth="1.3" strokeLinecap="round" />
            <line x1="17" y1="7" x2="19" y2="7" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="17" y1="10" x2="19" y2="10" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        </svg>
    ),

    statutory: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#00aeee" opacity="0.08" stroke="#00aeee" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M14 2v6h6" fill="#00aeee" opacity="0.15" stroke="#00aeee" strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="12" cy="15" r="3" fill="#ea2830" opacity="0.12" stroke="#ea2830" strokeWidth="1.3" />
            <path d="M12 13.5v3M10.5 15h3" stroke="#ea2830" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
    ),

    policies: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="4" width="16" height="18" rx="2" fill="#00aeee" opacity="0.08" stroke="#00aeee" strokeWidth="1.5" />
            <rect x="8" y="1" width="8" height="5" rx="1.5" fill="#ea2830" opacity="0.12" stroke="#ea2830" strokeWidth="1.3" />
            <path d="M9 12l2 2 4-4" stroke="#ea2830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="9" y1="18" x2="15" y2="18" stroke="#00aeee" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        </svg>
    ),

    "financial-info": (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#00aeee" opacity="0.06" />
            <rect x="4" y="13" width="3.5" height="7" rx="1" fill="#00aeee" opacity="0.3" stroke="#00aeee" strokeWidth="1" />
            <rect x="10" y="9" width="3.5" height="11" rx="1" fill="#ea2830" opacity="0.25" stroke="#ea2830" strokeWidth="1" />
            <rect x="16" y="5" width="3.5" height="15" rx="1" fill="#00aeee" opacity="0.3" stroke="#00aeee" strokeWidth="1" />
            <path d="M4 7l5.5-2 5.5 1L21 3" stroke="#ea2830" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="4" cy="7" r="1" fill="#ea2830" />
            <circle cx="21" cy="3" r="1" fill="#ea2830" />
        </svg>
    ),

    "shareholding-pattern": (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" fill="#00aeee" opacity="0.06" stroke="#00aeee" strokeWidth="1.5" />
            <path d="M12 3a9 9 0 0 1 7.8 4.5L12 12V3z" fill="#ea2830" opacity="0.25" stroke="#ea2830" strokeWidth="1.3" />
            <path d="M19.8 7.5A9 9 0 0 1 12 21V12l7.8-4.5z" fill="#00aeee" opacity="0.2" stroke="#00aeee" strokeWidth="1.3" />
            <circle cx="12" cy="12" r="2.5" fill="white" stroke="#00aeee" strokeWidth="1" />
        </svg>
    ),

    "newspaper-publication": (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="2" width="16" height="20" rx="2" fill="#00aeee" opacity="0.08" stroke="#00aeee" strokeWidth="1.5" />
            <rect x="8" y="5" width="10" height="5" rx="1" fill="#ea2830" opacity="0.15" stroke="#ea2830" strokeWidth="1" />
            <line x1="8" y1="13" x2="18" y2="13" stroke="#00aeee" strokeWidth="1.3" strokeLinecap="round" />
            <line x1="8" y1="16" x2="18" y2="16" stroke="#00aeee" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
            <line x1="8" y1="19" x2="13" y2="19" stroke="#00aeee" strokeWidth="1.3" strokeLinecap="round" opacity="0.3" />
            <path d="M5 20V8H3a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    "annual-return": (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="18" rx="2.5" fill="#00aeee" opacity="0.08" stroke="#00aeee" strokeWidth="1.5" />
            <line x1="8" y1="2" x2="8" y2="6" stroke="#ea2830" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="2" x2="16" y2="6" stroke="#ea2830" strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="10" x2="21" y2="10" stroke="#00aeee" strokeWidth="1.2" />
            <rect x="7" y="13" width="4" height="3" rx="0.5" fill="#ea2830" opacity="0.2" stroke="#ea2830" strokeWidth="1" />
            <rect x="13" y="13" width="4" height="3" rx="0.5" fill="#00aeee" opacity="0.15" stroke="#00aeee" strokeWidth="1" />
            <rect x="7" y="17.5" width="4" height="2.5" rx="0.5" fill="#00aeee" opacity="0.12" stroke="#00aeee" strokeWidth="0.8" />
        </svg>
    ),

    "material-events": (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#ea2830" opacity="0.08" stroke="#ea2830" strokeWidth="1.5" />
            <path d="M12 7v5" stroke="#ea2830" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="12" cy="16" r="1.5" fill="#ea2830" />
            <path d="M4.93 4.93l1.41 1.41M17.66 6.34l1.41-1.41M2 12h1.5M20.5 12H22" stroke="#00aeee" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        </svg>
    ),

    // ── About ──
    leadership: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="9" r="4" fill="#00aeee" opacity="0.12" stroke="#00aeee" strokeWidth="1.5" />
            <path d="M4 21v-1.5a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6V21" fill="#00aeee" opacity="0.06" stroke="#00aeee" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 2l1.2 2.4 2.6.4-1.9 1.8.4 2.6L12 8l-2.3 1.2.4-2.6-1.9-1.8 2.6-.4L12 2z" fill="#ea2830" opacity="0.3" stroke="#ea2830" strokeWidth="0.8" />
        </svg>
    ),

    milestone: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <line x1="5" y1="3" x2="5" y2="22" stroke="#00aeee" strokeWidth="2" strokeLinecap="round" />
            <path d="M5 4h12l-3 4.5 3 4.5H5" fill="#ea2830" opacity="0.15" stroke="#ea2830" strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="5" cy="22" r="1.5" fill="#00aeee" />
            <circle cx="17" cy="4" r="1.2" fill="#ea2830" opacity="0.4" />
        </svg>
    ),
};

export default MenuIcons;
