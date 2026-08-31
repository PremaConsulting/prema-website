import Container from "@/components/ui/Container";
import CtaBanner from "@/components/ui/CtaBanner";
import FaqAccordion from "@/components/ui/FaqAccordion";
import PageHero from "@/components/ui/PageHero";
import type { ServiceDetail } from "@/lib/serviceDetails";

export default function ServiceDetailView({
  service,
}: {
  service: ServiceDetail;
}) {
  return (
    <>
      <PageHero
        title={service.title}
        crumbs={[
          { href: "/services", label: "Services" },
          { label: service.title },
        ]}
      />
      <Container className="max-w-4xl py-14">
        {service.intro.map((paragraph) => (
          <p key={paragraph} className="mb-5 text-[15px] leading-8 text-muted">
            {paragraph}
          </p>
        ))}
        {service.offeringsTitle ? (
          <h2 className="mt-10 text-2xl font-bold text-navy">
            {service.offeringsTitle}
          </h2>
        ) : null}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {service.offerings.map((item) => (
            <article key={item.title} className="border border-border p-5">
              <h3 className="font-bold text-heading">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
        {service.bullets?.length ? (
          <ul className="mt-8 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
            {service.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
        {service.faqs?.length ? (
          <div className="mt-12">
            <h2 className="mb-5 text-2xl font-bold text-navy">FAQs</h2>
            <FaqAccordion items={service.faqs} />
          </div>
        ) : null}
      </Container>
      <CtaBanner
        title="Get Started Today!"
        text="Talk to PREMA Consulting about a solution tailored to your UAE business."
      />
    </>
  );
}
