import StatCounters from "@/components/home/StatCounters";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WelcomeSection() {
  return (
    <section className="py-16 md:py-20">
      <Container className="max-w-4xl text-center">
        <SectionHeading
          title="Welcome to PREMA Consulting"
          subtitle="Empowering Your Business Growth"
        />
        <p className="mt-6 text-[15px] leading-8 text-muted">
          PREMA Consulting offers expert advisory and compliance services
          designed to empower businesses in finance, taxation, audit, and digital
          transformation. We specialize in VAT, corporate tax, AML advisory,
          accounting, CFO, due diligence, and new company formation. Our
          tailored solutions ensure regulatory compliance, enhance financial
          performance, and support sustainable growth, making us your trusted
          partner for clarity, control, and confident decision-making.
        </p>
        <StatCounters />
      </Container>
    </section>
  );
}
