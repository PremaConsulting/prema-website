export const site = {
  name: "PREMA Consulting",
  phoneDisplay: "+971 52 676 9524",
  phoneHref: "tel:+971526769524",
  email: "contactprema@prema-consulting.com",
  hrEmail: "prema-hr@prema-consulting.com",
  address: "14 Floor, Tower 1, Boulevard Plaza, Downtown Dubai, Dubai, UAE",
  whatsapp: "https://wa.me/971526769524",
  googleReviewsUrl:
    "https://www.google.com/maps?cid=828006259416874469&hl=en",
  googleWriteReviewUrl:
    "https://search.google.com/local/writereview?cid=828006259416874469",
  social: {
    facebook: "https://www.facebook.com/premaconsulting/",
    linkedin: "https://www.linkedin.com/company/75530930/",
    x: "https://x.com/ConsultingPrema",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", children: true },
  { href: "/career", label: "Career" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "accounting-bookkeeping",
    title: "Accounting and Bookkeeping",
    cardTitle: "Accounting & Bookkeeping",
    excerpt:
      "Accurate financial records and guidance for every stage of your business journey.",
    image: "/images/Accounting-and-Bookkeeping.jpg.webp",
    featured: true,
  },
  {
    slug: "financial-modelling",
    title: "Financial Modelling",
    excerpt:
      "Build reliable financial models for forecasting, valuation, and investment decisions aligned with your UAE growth plans.",
    image: "/images/Experienced-Professionals.jpg.webp",
  },
  {
    slug: "due-diligence-services",
    title: "Due Diligence Services",
    excerpt:
      "Assess financial, legal, and operational risks before investments, acquisitions, or partnerships to protect your capital.",
    image: "/images/Comprehensive-Support.jpg.webp",
  },
  {
    slug: "fractional-cfo-services",
    title: "Fractional CFO Services",
    excerpt:
      "Access strategic CFO expertise part-time to improve cash flow, reporting, and financial strategy without full-time costs.",
    image: "/images/Customized-Services.jpg.webp",
  },
  {
    slug: "value-added-tax-vat",
    title: "Value Added Tax (VAT)",
    cardTitle: "VAT Compliance",
    excerpt:
      "Seamless VAT compliance for hassle-free transactions and tax filings.",
    image: "/images/VAT-Compliance.jpg.webp",
    featured: true,
  },
  {
    slug: "corporate-tax",
    title: "Corporate Tax",
    excerpt:
      "Plan, register, and file UAE corporate tax correctly while structuring your business to manage long-term tax impact.",
    image: "/images/Timely-Assistance.jpg.webp",
  },
  {
    slug: "e-invoicing",
    title: "E-Invoicing",
    excerpt:
      "Implement compliant e-invoicing processes and integrations that streamline billing, reporting, and tax visibility.",
    image: "/images/Simplified-Process.jpg.webp",
  },
  {
    slug: "erp-solutions",
    title: "ERP Solutions",
    excerpt:
      "Optimize your business with Odoo ERP solutions that integrate finance, sales, inventory, HR, and operations.",
    image: "/images/Fast-Turnaround.jpg.webp",
  },
  {
    slug: "transfer-pricing",
    title: "Transfer Pricing",
    excerpt:
      "Set and document intercompany pricing that meets arm’s length standards and UAE transfer pricing rules.",
    image: "/images/Comprehensive-Support.jpg.webp",
  },
  {
    slug: "internal-audit",
    title: "Internal Audit",
    excerpt:
      "Objective internal audits to strengthen controls and business practices.",
    image: "/images/Internal-Audit.jpg.webp",
    featured: true,
  },
  {
    slug: "external-audit",
    title: "External Audit",
    excerpt:
      "Obtain independent assurance on your financial statements, building trust with banks, investors, and regulators.",
    image: "/images/External-Audits-in-UAE-1-768x512.jpg",
  },
  {
    slug: "excise-tax",
    title: "Excise Tax",
    excerpt:
      "Expert compliance and advisory for excise tax and regulated goods.",
    image: "/images/Excise-Tax.jpg.webp",
    featured: true,
  },
  {
    slug: "customs-duty",
    title: "Customs Duty",
    excerpt:
      "Classify goods, calculate duty, and manage declarations so imports and exports clear UAE customs smoothly.",
    image: "/images/Timely-Assistance.jpg.webp",
  },
  {
    slug: "business-consulting",
    title: "Business Consulting",
    excerpt:
      "Improve strategy, performance, and processes with practical, finance-led consulting tailored to UAE businesses.",
    image: "/images/Experienced-Professionals.jpg.webp",
  },
  {
    slug: "aml-compliance",
    title: "AML Compliance",
    excerpt:
      "Practical AML strategies and compliance to protect against financial crime.",
    image: "/images/AML-Compliance.jpg.webp",
    featured: true,
  },
  {
    slug: "new-company-formation",
    title: "New Company Formation",
    excerpt:
      "Advisory and end-to-end support for setting up businesses in UAE free zones and mainland.",
    image: "/images/PRO-Services-in-Dubai-768x512.jpg",
  },
  {
    slug: "pro-services",
    title: "PRO Services",
    excerpt:
      "Government liaison for visas, licences, labour, and document clearing so you stay compliant.",
    image: "/images/PRO-Service-in-Dubai-768x512.jpg",
  },
] as const;

export const featuredServiceSlugs = [
  "accounting-bookkeeping",
  "value-added-tax-vat",
  "internal-audit",
  "excise-tax",
  "aml-compliance",
] as const;

export const stats = [
  { value: "55+", label: "Industries Served" },
  { value: "30+", label: "Services Offered" },
  { value: "8+", label: "Successful Years" },
  { value: "1,300+", label: "Projects Completed" },
];

export const whyChoose = [
  {
    title: "Industry-Specific Advisory",
    icon: "factory",
    text: "Real estate, trading, e-commerce, or manufacturing, we craft strategies that fit your world, not a template.",
  },
  {
    title: "End-to-End Partner",
    icon: "network",
    text: "From registration to audits, we guide choices, solve challenges, and keep you ahead of change.",
  },
  {
    title: "Proactive Advisory",
    icon: "chat",
    text: "Regulations evolve; we spot shifts before they impact you, turning uncertainty into opportunity.",
  },
  {
    title: "UAE Expertise",
    icon: "trophy",
    text: "Local knowledge and expertise, so every decision moves your business forward.",
  },
  {
    title: "Transparent & Ethical",
    icon: "thumb",
    text: "No hidden fees. Just clear guidance and honest advice you can trust.",
  },
  {
    title: "Technology-Driven Audits",
    icon: "diamond",
    text: "Smart tools, faster processes, and results you can rely on with confidence.",
  },
] as const;

export const taxAdvantage = [
  {
    title: "Experienced Professionals",
    text: "Certified accountants and VAT specialists.",
    image: "/images/Experienced-Professionals.jpg.webp",
  },
  {
    title: "Comprehensive Support",
    text: "From registration to compliance and beyond.",
    image: "/images/Comprehensive-Support.jpg.webp",
  },
  {
    title: "Simplified Processes",
    text: "No more paperwork headaches.",
    image: "/images/Simplified-Process.jpg.webp",
  },
  {
    title: "Customised Services",
    text: "Solutions customised to your needs.",
    image: "/images/Customized-Services.jpg.webp",
  },
  {
    title: "Timely Assistance",
    text: "Stay ahead of deadlines.",
    image: "/images/Timely-Assistance.jpg.webp",
  },
  {
    title: "Fast Turnaround",
    text: "Quick processing for VAT registration and filings.",
    image: "/images/Fast-Turnaround.jpg.webp",
  },
];

export const homeFaqs = [
  {
    q: "What industries does PREMA Consulting serve?",
    a: "We serve a wide range of industries, including finance, manufacturing, services, and government entities.",
  },
  {
    q: "Can you provide CFO services for small businesses?",
    a: "Absolutely, we offer scalable CFO and financial consulting services tailored for businesses of all sizes.",
  },
  {
    q: "Is AML advisory part of your services?",
    a: "Yes, we help assess risks, train your team, and implement screening processes to comply with AML regulations.",
  },
  {
    q: "Do you assist with new company formation?",
    a: "Yes, we provide advisory and end-to-end support for setting up businesses in UAE free zones and mainland.",
  },
  {
    q: "Why should I outsource my accounting to PREMA?",
    a: "Outsourcing ensures accuracy, regulatory compliance, and frees your time to focus on growing your business.",
  },
];

export const heroSlides = [
  {
    title: "Strategic Accounting",
    highlight: "For Confident Growth",
    text: "Gain clear, reliable financial records that support smarter business decisions and ongoing UAE compliance.",
    links: [
      { href: "/services/accounting-bookkeeping", label: "Know More" },
      { href: "/contact", label: "Contact Us" },
    ],
    image:
      "https://prema-consulting.com/wp-content/uploads/Accounting-Services-in-UAE.jpg.webp",
  },
  {
    title: "Insightful Audits,",
    highlight: "Stronger Governance",
    text: "Strengthen controls, validate your numbers, and build stakeholder confidence through tailored audit support.",
    links: [
      { href: "/services/internal-audit", label: "Internal Audit" },
      { href: "/services/external-audit", label: "External Audit" },
    ],
    image:
      "https://prema-consulting.com/wp-content/uploads/Audit-Services-in-UAE.jpg.webp",
  },
  {
    title: "End-To-End",
    highlight: "UAE Tax Compliance",
    text: "Manage VAT, Excise Tax and Corporate Tax efficiently with structured advice on registration, filing, and compliance.",
    links: [
      { href: "/services/value-added-tax-vat", label: "Value Added Tax" },
      { href: "/services/corporate-tax", label: "Corporate Tax" },
    ],
    image:
      "https://prema-consulting.com/wp-content/uploads/Tax-Consultancy-in-UAE.jpg.webp",
  },
];

export const blogPosts = [
  {
    slug: "common-vat-mistakes-dubai-smes-make",
    title: "Common VAT Mistakes Dubai SMEs Make",
    date: "2026-03-02",
    dateLabel: "March 2, 2026",
    excerpt:
      "Common VAT mistakes Dubai SMEs make and how to fix them. Prema Consulting shares tips to avoid penalties and stay compliant.",
    image: "/images/Common-VAT-Mistakes-768x512.jpeg",
  },
  {
    slug: "choosing-the-best-pro-service-in-dubai",
    title: "Choosing the Best PRO Service in Dubai",
    date: "2026-03-01",
    dateLabel: "March 1, 2026",
    excerpt:
      "Discover how to choose the best PRO Service in Dubai. Spot red flags, check must-have features, and enjoy smooth compliance.",
    image: "/images/PRO-Service-in-Dubai-768x512.jpg",
  },
  {
    slug: "how-does-bookkeeping-drive-uae-business-growth",
    title: "How Does Bookkeeping Drive UAE Business Growth?",
    date: "2026-02-28",
    dateLabel: "February 28, 2026",
    excerpt:
      "Discover how bookkeeping drives UAE business growth. Prema Consulting reveals key benefits like cash flow mastery and compliance for success.",
    image: "/images/Bookkeeping-for-Business-Growth-768x512.jpg",
  },
  {
    slug: "how-to-manage-audit-timelines-and-deadlines-in-the-uae",
    title: "How to Manage Audit Timelines and Deadlines in the UAE?",
    date: "2026-02-27",
    dateLabel: "February 27, 2026",
    excerpt:
      "Manage UAE audit timelines effectively with planning, documentation & compliance steps to avoid penalties and delays.",
    image: "/images/Audit-Timelines-and-Deadlines-in-the-UAE-768x512.jpg",
  },
  {
    slug: "why-every-business-in-dubai-needs-pro-services",
    title: "Why Every Business in Dubai Needs PRO Services?",
    date: "2026-02-26",
    dateLabel: "February 26, 2026",
    excerpt:
      "Discover why every business in Dubai needs expert PRO Services. Know how a PRO handles visas, licenses & compliance so you save time.",
    image: "/images/PRO-Services-in-Dubai-768x512.jpg",
  },
  {
    slug: "how-do-external-audits-boost-uae-business-credibility",
    title: "How Do External Audits Boost UAE Business Credibility?",
    date: "2026-02-26",
    dateLabel: "February 26, 2026",
    excerpt:
      "Discover how external audits boost UAE business credibility through transparency, compliance & stronger investor confidence.",
    image: "/images/External-Audits-in-UAE-1-768x512.jpg",
  },
  {
    slug: "which-businesses-need-statutory-audits-in-uae",
    title: "Which Businesses Need Statutory Audits in UAE?",
    date: "2026-02-20",
    dateLabel: "February 20, 2026",
    excerpt:
      "Discover which UAE businesses require statutory audits: Mainland LLCs, companies over AED 3M revenue, financial sectors.",
    image: "/images/External-Audits-in-UAE-1-768x512.jpg",
  },
  {
    slug: "how-to-reserve-trade-name-and-get-licence-in-the-uae",
    title: "How to Reserve Trade Name and Get Licence in the UAE?",
    date: "2026-02-18",
    dateLabel: "February 18, 2026",
    excerpt:
      "Learn how to reserve a trade name and obtain a business licence in the UAE. Step-by-step guide for Dubai & mainland setup.",
    image: "/images/PRO-Services-in-Dubai-768x512.jpg",
  },
  {
    slug: "how-to-select-the-best-external-audit-firm-in-the-uae",
    title: "How to Select the Best External Audit Firm in the UAE?",
    date: "2026-02-15",
    dateLabel: "February 15, 2026",
    excerpt:
      "Select top external audit firms in UAE with clear criteria on expertise, compliance, industry knowledge & transparency.",
    image: "/images/Internal-Audit.jpg.webp",
  },
  {
    slug: "what-are-best-practices-for-uae-bookkeeping",
    title: "What Are Best Practices for UAE Bookkeeping?",
    date: "2026-02-12",
    dateLabel: "February 12, 2026",
    excerpt:
      "Discover UAE bookkeeping best practices: VAT compliance, daily reconciliations, Xero tools & FTA filings from Prema Consulting.",
    image: "/images/Bookkeeping-for-Business-Growth-768x512.jpg",
  },
  {
    slug: "tips-for-choosing-the-right-due-diligence-company-in-dubai",
    title: "Tips for Choosing the Right Due Diligence Company in Dubai",
    date: "2026-02-10",
    dateLabel: "February 10, 2026",
    excerpt:
      "Looking for a due diligence company in Dubai? Learn how to choose the right partner to protect your investments and ensure compliance.",
    image: "/images/Comprehensive-Support.jpg.webp",
  },
  {
    slug: "key-signs-your-business-needs-professional-bookkeeping",
    title: "Key Signs Your Business Needs Professional Bookkeeping",
    date: "2026-02-08",
    dateLabel: "February 8, 2026",
    excerpt:
      "Struggling with messy books? Discover key signs your business needs professional bookkeeping. Reclaim your time and gain financial clarity.",
    image: "/images/Accounting-and-Bookkeeping.jpg.webp",
  },
  {
    slug: "choosing-the-right-e-invoicing-solution",
    title:
      "Choosing the Right E-Invoicing Solution: In-House vs. Cloud-Based vs. Integrated ERP",
    date: "2026-02-05",
    dateLabel: "February 5, 2026",
    excerpt:
      "Confused between In-House, Cloud, or ERP E-Invoicing Solutions? Prema Consulting guides you to the right choice for compliance & efficiency.",
    image: "/images/Simplified-Process.jpg.webp",
  },
  {
    slug: "mastering-e-invoicing-and-vat-compliance-in-the-uae",
    title: "Mastering E-Invoicing and VAT Compliance in the UAE",
    date: "2026-02-03",
    dateLabel: "February 3, 2026",
    excerpt:
      "Master UAE E-Invoicing and VAT Compliance. Avoid common pitfalls, ensure seamless FTA integration, and streamline your tax processes.",
    image: "/images/VAT-Compliance.jpg.webp",
  },
  {
    slug: "uae-transfer-pricing-rules-ensuring-arms-length-compliance",
    title: "UAE Transfer Pricing Rules: Ensuring Arm’s Length Compliance",
    date: "2026-02-01",
    dateLabel: "February 1, 2026",
    excerpt:
      "Master UAE Transfer Pricing Rules: Ensure arm’s length compliance, avoid penalties, and optimize taxes for multinationals & SMEs.",
    image: "/images/Customized-Services.jpg.webp",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function serviceLabel(service: (typeof services)[number]) {
  return "cardTitle" in service ? service.cardTitle : service.title;
}

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export const googleReviews = {
  rating: 5,
  count: 9,
  items: [
    {
      name: "Heath B.",
      role: "Local Guide",
      when: "7 months ago",
      text: "We’ve used Prema for all our company accounting, invoicing and tax returns for the last 4 years or so. Just brilliant service every single time. Completely taken away the stress of managing these things directly and allowing us to focus on the business. Highly recommended, exceptional service. Thanks guys.",
    },
    {
      name: "Tanvir Shah",
      role: "Local Guide",
      when: "3 months ago",
      text: "Prema Consulting is surely one of the most respected finance & accounting solution providers in the country. Having working with them for almost a decade, highly recommend them for their depth of knowledge and insightful financial planning wisdom.",
    },
    {
      name: "Nikita Harrison",
      role: "Google reviewer",
      when: "9 months ago",
      text: "PREMA have been invaluable help in setting up my business, as well as for accounting services and general advice. A great team, highly reccomend!",
    },
    {
      name: "Thouraya Sayess",
      role: "Local Guide",
      when: "3 months ago",
      text: "Responsive, reliable, accessible. Thank you!",
    },
    {
      name: "Ranj",
      role: "Local Guide",
      when: "2 weeks ago",
      text: "Friendly & reliable staff with prompt services!",
    },
    {
      name: "Daniel Morris",
      role: "Google reviewer",
      when: "3 weeks ago",
      text: "I was referred to Prema for their accountancy services and for the last 2 years they've been handling my end of year accounts & tax reporting. They've been fantastic throughout, I've never experienced a single problem and they've made the whole process stress free and seamless. The team are fantastic and in particular May has been excellent as my point of contact.",
    },
    {
      name: "Alisha Harris",
      role: "Google reviewer",
      when: "a month ago",
      text: "Danissa and the rest of the team were incredibly helpful throughout the accounting training session. They explained everything clearly, answered all of our questions, and made the learning experience engaging and enjoyable. Their professionalism, patience, and support made a real difference. Thank you to Danissa and the entire team for such a great training session!",
    },
    {
      name: "Sail Publishing",
      role: "Google reviewer",
      when: "3 months ago",
      text: "5-star rating on Google.",
    },
    {
      name: "Aadil Datta",
      role: "Local Guide",
      when: "9 months ago",
      text: "5-star rating on Google.",
    },
  ],
};
