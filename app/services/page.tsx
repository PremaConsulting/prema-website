import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import { serviceLabel, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Accounting, VAT, corporate tax, audit, AML, ERP, PRO, and company formation services in the UAE.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" crumbs={[{ label: "Services" }]} />
      <Container className="grid gap-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            href={`/services/${service.slug}`}
            image={service.image}
            title={serviceLabel(service)}
            excerpt={service.excerpt}
          />
        ))}
      </Container>
    </>
  );
}
