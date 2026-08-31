import Container from "@/components/ui/Container";
import { site } from "@/lib/site";

export default function PrivacyContent() {
  return (
    <Container className="max-w-4xl py-14 text-[15px] leading-8 text-muted">
      <p className="text-sm text-heading">Last updated: November 19, 2025</p>
      <p className="mt-4">
        PREMA Consulting (“we”, “us”, “our”) is committed to protecting your
        privacy and the security of your personal information. This policy
        outlines how we collect, use, share, and safeguard information gathered
        through our website and services.
      </p>
      {[
        {
          title: "1. Information We Collect",
          body: "We may collect name, email address, contact details, company name, job title, business information relevant to consulting and compliance services, information provided via forms or emails, and analytics data from website use.",
        },
        {
          title: "2. Use of Information",
          body: "Your information is used for providing consulting and advisory services, improving our website and experience, responding to inquiries, and sending service-related updates if you opt in.",
        },
        {
          title: "3. Data Sharing and Disclosure",
          body: "We may share data with trusted staff and partners for service delivery, vendors supporting operations, and authorities if required by UAE law — only when necessary and with confidentiality controls.",
        },
        {
          title: "4. Data Storage and Security",
          body: "Information is stored securely and retained only as long as necessary for business, legal, or regulatory reasons in line with UAE law.",
        },
        {
          title: "5. Your Rights",
          body: `Depending on UAE data protection law, you may access, correct, or delete personal information, withdraw consent, and receive information about how your data is used. Contact ${site.email} for requests.`,
        },
        {
          title: "6. Cookies and Tracking",
          body: "Our website may use cookies or similar technologies to improve experience and analyse traffic. You can manage preferences in your browser settings.",
        },
        {
          title: "7. Links to Other Sites",
          body: "This policy applies only to prema-consulting.com. We are not responsible for privacy practices of other websites linked from our site.",
        },
        {
          title: "8. Children’s Privacy",
          body: "Our site and services are not intended for individuals under 18, and we do not knowingly collect personal information from minors.",
        },
        {
          title: "9. Policy Updates",
          body: "We may update this Privacy Policy as laws or business practices change. Please review this page periodically.",
        },
      ].map((section) => (
        <section key={section.title} className="mt-8">
          <h2 className="text-lg font-bold text-navy">{section.title}</h2>
          <p className="mt-2">{section.body}</p>
        </section>
      ))}
    </Container>
  );
}
