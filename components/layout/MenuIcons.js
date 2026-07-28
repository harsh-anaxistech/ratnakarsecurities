import Image from "next/image";

const getIcon = (src) => (
    <Image src={src} alt="" width={32} height={32} className="object-contain" aria-hidden="true" />
);

const MenuIcons = {
    // ── Products ──
    overview: getIcon("/images/icon/menu/overview 1.svg"),
    equity: getIcon("/images/icon/menu/Equity 1.svg"),
    derivatives: getIcon("/images/icon/menu/derivatives 1.svg"),
    "mutual-funds": getIcon("/images/icon/menu/mutual funds 1.svg"),
    commodities: getIcon("/images/icon/menu/commodities 1.svg"),
    "wealth-management": getIcon("/images/icon/menu/wealth managment 1.svg"),
    nri: getIcon("/images/icon/menu/NRIs 1.svg"),
    slbm: getIcon("/images/icon/menu/SLBM 1.svg"),
    bonds: getIcon("/images/icon/menu/Bonds 1.svg"),
    users: getIcon("/images/icon/menu/board of directors 1.svg"),
    "investment-advisory": getIcon("/images/icon/menu/invesment 1.svg"),

    // ── Research ──
    company: getIcon("/images/icon/menu/company 1.svg"),
    ipos: getIcon("/images/icon/menu/IPOs 1.svg"),
    news: getIcon("/images/icon/menu/news 1.svg"),
    announcements: getIcon("/images/icon/menu/announcement 1.svg"),

    // ── Investors ──
    "board-of-directors": getIcon("/images/icon/menu/board of directors 1.svg"),
    "contact-details": getIcon("/images/icon/menu/discloser of contact details 1.svg"),
    statutory: getIcon("/images/icon/menu/statutory 1.svg"),
    policies: getIcon("/images/icon/menu/policies 1.svg"),
    "financial-info": getIcon("/images/icon/menu/financial info 1.svg"),
    "shareholding-pattern": getIcon("/images/icon/menu/stakeholder 1.svg"),
    "newspaper-publication": getIcon("/images/icon/menu/newspaper publication 1.svg"),
    "annual-return": getIcon("/images/icon/menu/annual return 1.svg"),
    "material-events": getIcon("/images/icon/menu/discloser of material events 1.svg"),

    // ── About ──
    leadership: getIcon("/images/icon/menu/leadership 1.svg"),
    milestone: getIcon("/images/icon/menu/milestone 1.svg"),
};

export default MenuIcons;
