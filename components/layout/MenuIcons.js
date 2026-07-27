import Image from "next/image";

const getIcon = (src, alt) => (
    <Image src={src} alt={alt} width={32} height={32} className="object-contain" />
);

const MenuIcons = {
    // ── Products ──
    overview: getIcon("/images/icon/menu/overview 1.svg", "Overview"),
    equity: getIcon("/images/icon/menu/Equity 1.svg", "Equity"),
    derivatives: getIcon("/images/icon/menu/derivatives 1.svg", "Derivatives"),
    "mutual-funds": getIcon("/images/icon/menu/mutual funds 1.svg", "Mutual Funds"),
    commodities: getIcon("/images/icon/menu/commodities 1.svg", "Commodities"),
    "wealth-management": getIcon("/images/icon/menu/wealth managment 1.svg", "Wealth Management"),
    nri: getIcon("/images/icon/menu/NRIs 1.svg", "NRIs"),
    slbs: getIcon("/images/icon/menu/SLBM 1.svg", "SLBM"),
    bonds: getIcon("/images/icon/menu/Bonds 1.svg", "Bonds"),
    users: getIcon("/images/icon/menu/board of directors 1.svg", "HNIs"),
    "investment-advisory": getIcon("/images/icon/menu/invesment 1.svg", "Investment Advisory"),

    // ── Research ──
    company: getIcon("/images/icon/menu/company 1.svg", "Company"),
    ipos: getIcon("/images/icon/menu/IPOs 1.svg", "IPOs"),
    news: getIcon("/images/icon/menu/news 1.svg", "News"),
    announcements: getIcon("/images/icon/menu/announcement 1.svg", "Announcements"),

    // ── Investors ──
    "board-of-directors": getIcon("/images/icon/menu/board of directors 1.svg", "Board of Directors"),
    "contact-details": getIcon("/images/icon/menu/discloser of contact details 1.svg", "Contact Details"),
    statutory: getIcon("/images/icon/menu/statutory 1.svg", "Statutory"),
    policies: getIcon("/images/icon/menu/policies 1.svg", "Policies"),
    "financial-info": getIcon("/images/icon/menu/financial info 1.svg", "Financial Info"),
    "shareholding-pattern": getIcon("/images/icon/menu/stakeholder 1.svg", "Shareholding Pattern"),
    "newspaper-publication": getIcon("/images/icon/menu/newspaper publication 1.svg", "Newspaper Publication"),
    "annual-return": getIcon("/images/icon/menu/annual return 1.svg", "Annual Return"),
    "material-events": getIcon("/images/icon/menu/discloser of material events 1.svg", "Material Events"),

    // ── About ──
    leadership: getIcon("/images/icon/menu/leadership 1.svg", "Leadership"),
    milestone: getIcon("/images/icon/menu/milestone 1.svg", "Milestone"),
};

export default MenuIcons;
