import { getService, services } from "@/lib/site";

export type ServiceDetail = {
  slug: string;
  title: string;
  intro: string[];
  offeringsTitle: string;
  offerings: { title: string; text: string }[];
  bullets?: string[];
  faqs?: { q: string; a: string }[];
};

const details: Record<string, Omit<ServiceDetail, "slug" | "title">> = {
  "accounting-bookkeeping": {
    intro: [
      "At Prema Consulting, we believe reliable financial management is the foundation of every successful business. Our team blends experience with dedication to deliver accounting and bookkeeping solutions that support your growth, keep you compliant, and give you clarity over your finances.",
      "At Prema Consulting, we integrate the latest accounting software and cloud-based tools to streamline bookkeeping and reporting. This technology enhances accuracy, real-time data access, and collaboration, reducing manual effort and enabling faster closing cycles.",
    ],
    offeringsTitle: "Our Core Services",
    offerings: [
      { title: "Bookkeeping & Transaction Management", text: "Daily entries, reconciliations, and ledgers so your records stay accurate and up to date." },
      { title: "Financial Statement & Reporting", text: "Monthly, quarterly, and annual statements plus custom management reports." },
      { title: "Payroll Services", text: "Salary processing, WPS compliance, and employee records aligned with UAE labour law." },
      { title: "Compliance & Tax Preparation", text: "VAT and corporate tax return support, audit readiness, and ongoing monitoring." },
    ],
    faqs: [
      { q: "Why should I outsource accounting to PREMA?", a: "Outsourcing ensures accuracy, regulatory compliance, and frees your time to focus on growing your business." },
      { q: "Do you work with cloud accounting tools?", a: "Yes. We use modern cloud tools so you have real-time access to reports and a faster month-end close." },
    ],
  },
  "value-added-tax-vat": {
    intro: [
      "When your business is registered for VAT, every invoice, purchase, and return filing has a direct impact on cash flow, compliance, and profitability. Prema Consulting’s VAT services help you stay fully compliant while optimising how VAT flows through your business.",
      "Whether you are just crossing the registration threshold or dealing with complex indirect tax issues, we provide structured, practical VAT support tailored to your sector.",
    ],
    offeringsTitle: "Our VAT Services",
    offerings: [
      { title: "VAT Consulting", text: "Advice on structuring transactions and compliant VAT processes for your sector." },
      { title: "VAT Registration", text: "Entity registration and document preparation to meet FTA requirements on time." },
      { title: "VAT Return Filing", text: "Accurate monthly or quarterly filings through UAE FTA portals." },
      { title: "FTA Communication", text: "Correspondence and amendments with the Federal Tax Authority." },
      { title: "Penalty Appeals", text: "Support filing appeals and resolving VAT penalties or disputes." },
      { title: "VAT Audit & Review", text: "Review of VAT records and preparation for FTA audits." },
    ],
    faqs: [
      { q: "How can you help with VAT in the UAE?", a: "We support the full VAT lifecycle from registration to filings, reconciliations, and FTA queries." },
      { q: "Can you manage VAT registration and TRN issuance?", a: "Yes. We prepare and submit registration through EmaraTax and advise on mandatory versus voluntary registration." },
    ],
  },
  "corporate-tax": {
    intro: [
      "As the UAE corporate tax regime matures, tax affects how you structure entities, price transactions, plan cash flow, and report performance. Prema Consulting combines technical expertise with practical UAE-focused implementation.",
      "Whether you are a startup crossing the AED 375,000 profit threshold or a free zone entity evaluating qualifying income, we guide you from impact assessment through ongoing compliance.",
    ],
    offeringsTitle: "Our Corporate Tax Services",
    offerings: [
      { title: "Entity Registration", text: "Align setup with tax regulations from day one." },
      { title: "Tax Calculation & Filing", text: "Precise assessments, timely filings, and error-free submissions." },
      { title: "Reliefs & Exemptions", text: "Guidance on small business relief, free zone incentives, and dividend exemptions." },
      { title: "Strategic Tax Advisory", text: "Proactive insights to anticipate changes and optimise your position." },
      { title: "Audit & Regulatory Support", text: "Documentation and support when dealing with authorities." },
      { title: "Finance Team Enablement", text: "Training so tax compliance becomes routine for your team." },
    ],
  },
  "internal-audit": {
    intro: [
      "Internal audit gives you an independent view of how well processes work across finance, operations, and compliance. Prema Consulting’s internal audit services are designed for UAE businesses that want stronger governance without a large in-house audit function.",
      "The focus is on practical findings, clear priorities, and realistic action plans your team can execute.",
    ],
    offeringsTitle: "Our Internal Audit Services",
    offerings: [
      { title: "Risk-Based Internal Audit", text: "Reviews of high-risk areas such as revenue, purchasing, cash, inventory, and payroll." },
      { title: "Process & Controls Review", text: "Walkthroughs of order-to-cash, procure-to-pay, and record-to-report cycles." },
      { title: "Compliance Audits", text: "Checks over VAT, corporate tax readiness, AML/CTF, UBO and economic-substance processes." },
      { title: "IT and Systems Control Review", text: "Access rights, data integrity, backup practices, and ERP-dependent controls." },
      { title: "Internal Audit Function Set-Up", text: "Charters, annual plans, templates, and reporting lines." },
      { title: "Special Investigations", text: "Targeted reviews where you suspect control failures or need comfort before deals." },
    ],
  },
  "external-audit": {
    intro: [
      "External audit gives stakeholders independent assurance that your financial statements are accurate, transparent, and compliant. For UAE businesses, it also strengthens credibility with banks, investors, and regulators.",
    ],
    offeringsTitle: "Our External Audit Services",
    offerings: [
      { title: "Statutory Audit", text: "Independent audit of annual financial statements in line with IFRS and local rules." },
      { title: "Group Audits", text: "Holding companies and consolidations, including intercompany balances." },
      { title: "Compliance Audits", text: "Assurance tailored to regulator or licensing body requirements." },
      { title: "Special Audits", text: "Targeted audits for lenders, investors, joint ventures, or covenants." },
    ],
  },
  "excise-tax": {
    intro: [
      "Excise tax in the UAE is charged on goods considered harmful to health or the environment, such as tobacco, electronic smoking devices, energy drinks, and many sweetened beverages. It is administered by the FTA.",
      "Businesses that import, produce, stockpile, or release excise goods must register and meet strict filing obligations.",
    ],
    offeringsTitle: "Our Excise Tax Services",
    offerings: [
      { title: "Excise Registration", text: "Register and link your FTA and customs details correctly." },
      { title: "Product Assessment", text: "Identify which items qualify as excise goods and at what rates." },
      { title: "Return Filing", text: "Prepare and submit accurate returns with proper reconciliations." },
      { title: "Compliance Review", text: "Check processes, invoices, and stock movements against UAE rules." },
      { title: "Refund Support", text: "Claims for eligible refunds on exports, damaged stock, or incorrect assessments." },
      { title: "Audit Assistance", text: "Support during FTA reviews with documentation and responses." },
    ],
  },
  "aml-compliance": {
    intro: [
      "The UAE has one of the region’s most advanced AML/CFT regimes. Prema Consulting helps you navigate these rules with practical, risk-based solutions so you stay compliant, avoid penalties, and protect your reputation.",
      "AML compliance includes risk assessments, customer due diligence, transaction monitoring, sanctions screening, and reporting through goAML.",
    ],
    offeringsTitle: "Our AML Compliance Services",
    offerings: [
      { title: "AML Policy Design", text: "Policies, procedures, and manuals tailored to your regulator and risk profile." },
      { title: "Risk Assessment", text: "Enterprise-wide assessments across customers, products, geographies, and channels." },
      { title: "KYC and Due Diligence", text: "Onboarding, CDD, EDD, UBO identification, and ongoing reviews." },
      { title: "Transaction Monitoring", text: "Rules, alerts, and review processes for unusual patterns." },
      { title: "Screening and Sanctions", text: "PEP and sanctions screening and watchlist management." },
      { title: "Independent AML Review", text: "Gap assessments and inspection readiness reviews." },
    ],
  },
  "financial-modelling": {
    intro: [
      "We provide robust financial modelling services tailored for businesses in the UAE. Our models give you actionable insights for strategic decisions, investment evaluation, and future financial planning.",
    ],
    offeringsTitle: "Key Financial Modelling Services",
    offerings: [
      { title: "Business Valuation Models", text: "Valuation for M&A, investments, and fundraising using cash flows and market conditions." },
      { title: "Budgeting & Forecasting", text: "Revenue and expense forecasts aligned with cash flow and strategy." },
      { title: "Feasibility & Investment Analysis", text: "Returns, risks, costs, and funding needs for informed investment decisions." },
      { title: "Model Validation & Review", text: "Independent review of existing models for accuracy, logic, and reliability." },
    ],
  },
  "due-diligence-services": {
    intro: [
      "Thorough due diligence is essential before investment, acquisition, or partnership. Our services give you an unbiased view of financial, operational, and strategic status so you identify risks and proceed with confidence.",
    ],
    offeringsTitle: "Our Due Diligence Process",
    offerings: [
      { title: "Initial Planning", text: "Clarify objectives and define areas of focus." },
      { title: "Data Collection & Review", text: "Financial statements, contracts, legal records, and operational data." },
      { title: "Risk Assessment", text: "Financial health, compliance, market position, and operational strengths." },
      { title: "Reporting & Follow-Up", text: "Clear findings, implications, recommendations, and negotiation support." },
    ],
  },
  "fractional-cfo-services": {
    intro: [
      "When you need high-level financial expertise but are not ready for a full-time CFO, Fractional CFO Services deliver strategic leadership on a flexible basis — cash flow, risk, fundraising, and decisions without full-time cost.",
    ],
    offeringsTitle: "Our Fractional CFO Services",
    offerings: [
      { title: "Strategic Financial Planning", text: "Clear strategies to drive growth and profitability." },
      { title: "Budgeting & Forecasting", text: "Detailed plans to guide your financial future." },
      { title: "Cash Flow Optimization", text: "Liquidity management so the business stays resilient." },
      { title: "Fundraising Support", text: "Financial narratives that attract investors." },
      { title: "Risk Management", text: "Identify and mitigate financial and operational risks." },
      { title: "Interim CFO Leadership", text: "Executive support during transitions and growth phases." },
    ],
  },
  "e-invoicing": {
    intro: [
      "E-invoicing is becoming a core compliance requirement for VAT-registered businesses in the UAE. Prema Consulting translates technical rules into practical steps so you stay compliant without disrupting operations.",
    ],
    offeringsTitle: "How We Support Your E-Invoicing Journey",
    offerings: [
      { title: "Readiness Assessment", text: "Review invoicing, VAT treatment, and systems against upcoming rules." },
      { title: "Solution Design", text: "Choose ERP add-ons or accredited providers based on volume and budget." },
      { title: "Process Redesign", text: "Define how invoices are created, approved, transmitted, and archived." },
      { title: "Implementation Support", text: "Configure tax fields, mappings, numbering, and test end-to-end flows." },
      { title: "Training", text: "Checklists and training so staff feel confident with the new process." },
      { title: "Ongoing Optimisation", text: "Review exceptions and tax updates after go-live." },
    ],
  },
  "erp-solutions": {
    intro: [
      "We help businesses simplify operations with integrated ERP solutions that connect finance, sales, inventory, purchasing, HR, and other functions. Our Odoo ERP work improves visibility, automates routine processes, and gives management better information.",
    ],
    offeringsTitle: "ERP Implementation Services",
    offerings: [
      { title: "Business Process Assessment", text: "Identify inefficiencies, duplication, and automation opportunities." },
      { title: "ERP Strategy & Planning", text: "Modules, priorities, workflows, and a practical roadmap." },
      { title: "System Configuration", text: "Users, permissions, financial settings, products, customers, and vendors." },
      { title: "Data Migration", text: "Move data from spreadsheets or legacy systems with accuracy checks." },
      { title: "Testing & Go-Live", text: "Test workflows and support your team through the transition." },
      { title: "Training & Ongoing Support", text: "Role-based training plus troubleshooting and future improvements." },
    ],
  },
  "transfer-pricing": {
    intro: [
      "Transfer pricing rules expect intercompany charges for goods, services, financing, and IP to reflect arm’s length terms. Prema Consulting helps you design, document, and defend pricing so authorities understand your story.",
      "Businesses with revenue over AED 200M or related party transactions above AED 40M must maintain Master File, Local File, and Disclosure Form documentation.",
    ],
    offeringsTitle: "Our Transfer Pricing Approach",
    offerings: [
      { title: "Understand your Business Model", text: "Map entities, functions, assets, risks, and key intercompany flows." },
      { title: "Design Practical Pricing Policies", text: "Select methods and rules for mark-ups, licences, and shared services." },
      { title: "Benchmark and Validate", text: "Use comparables and analysis to support selected margins." },
      { title: "Document and Implement", text: "Business-friendly files, charge-out templates, and agreements." },
      { title: "Monitor and Update", text: "Annual reviews and support during queries or audits." },
    ],
  },
  "customs-duty": {
    intro: [
      "Customs duty affects every shipment that enters or leaves the UAE. Small errors in declarations, valuation, or HS classification can cause delays, penalties, and extra cost. We help importers, exporters, and traders stay aligned with UAE and GCC customs rules.",
    ],
    offeringsTitle: "Our Customs Duty Services",
    offerings: [
      { title: "Customs Registration", text: "Obtain or update your customs code and link tax registrations." },
      { title: "Tariff Classification", text: "Assign accurate HS codes to apply the right duty rates." },
      { title: "Duty Calculation", text: "Review invoices, Incoterms, and CIF values including exemptions." },
      { title: "Declaration Support", text: "Prepare and review declarations, documentation, and certificates of origin." },
      { title: "Refunds & Exemptions", text: "Industrial exemptions, Free Zone movements, and project reliefs." },
      { title: "Audit & Dispute Help", text: "Guidance during customs audits, queries, and disputes." },
    ],
  },
  "business-consulting": {
    intro: [
      "Prema Consulting supports UAE businesses with practical, data-driven advice across strategy, finance, and operations — improving profitability, strengthening governance, and preparing for the next stage of growth.",
    ],
    offeringsTitle: "Our Business Consulting Services",
    offerings: [
      { title: "Strategy & Growth", text: "Clarify the business model and plans for new markets or products." },
      { title: "Financial Performance", text: "Review margins, pricing, budgets, and cash flows." },
      { title: "Process Improvement", text: "Streamline sales, billing, finance, and operations." },
      { title: "Organisation & People", text: "Roles, reporting lines, KPIs, and accountability." },
      { title: "Digital & Systems", text: "Accounting, reporting, or HR tools that deliver quick wins." },
      { title: "Setup & Restructuring", text: "Group structuring aligned with legal, tax, and operations." },
    ],
  },
  "new-company-formation": {
    intro: [
      "Prema Consulting helps you set up in the UAE from choosing the right jurisdiction to getting your trade licence issued — with structures that support long-term tax and regulatory compliance.",
    ],
    offeringsTitle: "Our Company Formation Services",
    offerings: [
      { title: "Business Structure", text: "Mainland, free zone, or offshore — matched to activities and growth plans." },
      { title: "Name & Approvals", text: "Trade name reservation and initial approvals." },
      { title: "Licence Setup", text: "Commercial, professional, or industrial licences including specialist approvals." },
      { title: "Documents & MOA", text: "MoA, AoA, resolutions, powers of attorney, and UBO filings." },
      { title: "Immigration & Visas", text: "Establishment cards, investor and employee visas." },
      { title: "Banking & Compliance", text: "Bank introductions aligned with VAT, corporate tax, and AML where relevant." },
    ],
  },
  "pro-services": {
    intro: [
      "PRO services handle government-related paperwork so you do not queue at ministries or type centres. From visas and labour cards to licence renewals and attestation, we help you stay compliant while you run the business.",
    ],
    offeringsTitle: "Our PRO Services",
    offerings: [
      { title: "Company & Licence", text: "Formation, licence issuance, amendments, and renewals across mainland and free zones." },
      { title: "Visa & Immigration", text: "Investor, employee, and family visas, Emirates ID, renewals, and cancellations." },
      { title: "Labour & MOHRE", text: "Labour cards, contracts, WPS-linked updates, and labour office requirements." },
      { title: "Document Clearing", text: "Typing, submission, tracking, and collection with government bodies." },
      { title: "Attestation & Translation", text: "Notarisation, legal translation, MOFA, and embassy coordination." },
      { title: "Ongoing Compliance", text: "Reminders for licence, visa, and immigration renewals to avoid fines." },
    ],
  },
};

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  const service = getService(slug);
  const extra = details[slug];
  if (!service || !extra) return undefined;
  return {
    slug: service.slug,
    title: service.title,
    ...extra,
  };
}

export function allServiceSlugs() {
  return services.map((service) => service.slug);
}
