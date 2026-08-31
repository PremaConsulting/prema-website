import Container from "@/components/ui/Container";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { homeFaqs } from "@/lib/site";

export default function HomeFaqs() {
  return (
    <section className="py-20 md:py-24">
      <Container className="max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-navy md:text-[40px]">
          FAQs
        </h2>
        <div className="mt-10">
          <FaqAccordion items={homeFaqs} size="lg" />
        </div>
      </Container>
    </section>
  );
}
