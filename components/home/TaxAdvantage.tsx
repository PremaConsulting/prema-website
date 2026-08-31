import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { taxAdvantage } from "@/lib/site";

export default function TaxAdvantage() {
  return (
    <section className="bg-[#f7f8fa] py-16 md:py-20">
      <Container>
        <SectionHeading title="Experience The PREMA Tax Advantage" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {taxAdvantage.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden border border-border bg-white text-center shadow-sm"
            >
              <div className="relative aspect-[10/7]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
