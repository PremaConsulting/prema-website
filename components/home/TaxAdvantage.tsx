import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { taxAdvantage } from "@/lib/site";

const visualOrder = [
  "Experienced Professionals",
  "Simplified Processes",
  "Timely Assistance",
  "Comprehensive Support",
  "Customised Services",
  "Fast Turnaround",
];

export default function TaxAdvantage() {
  const items = visualOrder
    .map((title) => taxAdvantage.find((item) => item.title === title))
    .filter((item): item is (typeof taxAdvantage)[number] => Boolean(item));

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <SectionHeading title="Experience The PREMA Tax Advantage" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="relative h-[250px] overflow-hidden rounded-[10px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#006699]/55" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-xs leading-5 text-white/95">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
