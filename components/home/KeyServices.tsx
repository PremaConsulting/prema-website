import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { featuredServiceSlugs, serviceLabel, services } from "@/lib/site";

export default function KeyServices() {
  const featured = featuredServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <section className="bg-[#f7f8fa] py-16 md:py-20">
      <Container>
        <SectionHeading title="Key Services Offered" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <ServiceCard
              key={service.slug}
              href={`/services/${service.slug}`}
              image={service.image}
              title={serviceLabel(service)}
              excerpt={service.excerpt}
            />
          ))}
          <article className="flex min-h-[280px] flex-col items-center justify-center border border-border bg-white p-8 text-center shadow-sm">
            <h3 className="text-xl font-bold text-navy">
              To Know more about our services
            </h3>
            <ButtonLink href="/services" className="mt-6">
              Click Here
            </ButtonLink>
          </article>
        </div>
      </Container>
    </section>
  );
}
