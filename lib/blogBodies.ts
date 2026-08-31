import { blogPosts } from "@/lib/site";

const bodies: Record<string, string[]> = {
  "how-to-manage-audit-timelines-and-deadlines-in-the-uae": [
    "Managing audit timelines in the UAE requires planning, coordination, and regulatory awareness. Businesses must meet statutory deadlines set by authorities such as the UAE Ministry of Economy, the Federal Tax Authority, and various free zone regulators.",
    "Start by confirming your specific audit deadline. Requirements vary depending on whether you operate on the mainland or in a free zone such as DMCC, JAFZA, DIFC, or ADGM.",
    "Do not wait until year-end to engage your auditor. Confirm scope, agree timelines, assign internal owners, and set document submission dates.",
    "Keep records organised: monthly bank reconciliations, an updated general ledger, invoices, contracts, and payroll documentation. Clean records shorten the audit.",
    "Align the audit with corporate tax and VAT deadlines, and track licence renewal requirements that depend on audited financials. Build a buffer for unexpected delays.",
    "A typical structure is: Month 1 closing and reconciliations, Month 2 planning and document preparation, Month 3 fieldwork, Month 4 finalisation and submission.",
  ],
  "common-vat-mistakes-dubai-smes-make": [
    "Dubai SMEs operate in one of the world’s most dynamic markets, yet many still lose money over simple VAT errors. Since 5% VAT began in 2018, businesses have faced penalties, delayed refunds, and unnecessary audits.",
    "Common issues include invoices that fail FTA standards (missing TRN, VAT breakdown, or sequential numbering), misclassifying supplies as standard-rated, zero-rated, or exempt, and claiming input tax on non-business expenses.",
    "Poor records, mishandling reverse charge, and reporting transactions in the wrong tax period also trigger corrections and scrutiny.",
    "Fix these with standard invoice templates, a VAT rate matrix, separate business accounts, cloud record-keeping, and monthly ledger reconciliations before the return deadline.",
    "When you eliminate these mistakes you save penalties, reclaim eligible input tax, speed cash flow, and pass audits with more confidence. Contact PREMA Consulting for a VAT health check.",
  ],
};

export function getPostBody(slug: string): string[] {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return [];
  return bodies[slug] ?? [
    post.excerpt,
    "PREMA Consulting helps UAE businesses stay compliant and make clearer financial decisions. Speak with our team if you would like practical support on this topic.",
  ];
}
