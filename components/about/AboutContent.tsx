import Container from "@/components/ui/Container";
import CtaBanner from "@/components/ui/CtaBanner";

const values = [
  {
    title: "Integrity",
    text: "Upholding transparency and ethical practices in every engagement.",
  },
  {
    title: "Innovation",
    text: "Leveraging technology and creative problem-solving to redefine consulting.",
  },
  {
    title: "Excellence",
    text: "Delivering high-quality, tailored solutions that exceed client expectations.",
  },
  {
    title: "Commitment",
    text: "Prioritizing client success and sustained, long-term business growth.",
  },
];

export default function AboutContent() {
  return (
    <>
      <Container className="max-w-4xl py-14">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Company Profile
        </h2>
        <p className="mt-4 text-[15px] leading-8 text-muted">
          Prema Consulting is a management consulting firm founded in 2018. It
          is based out of Downtown Dubai, UAE. Our team possesses over 20+ years
          of experience serving different industries offering solutions in
          consulting and compliance space. We are constantly evolving our
          solutions to fit into reality of changes in the compliance landscape
          and business realities.
        </p>
        <p className="mt-4 text-[15px] leading-8 text-muted">
          Prema Consulting is a team of highly professional Chartered
          Accountants and Management Consultants. We derive our experience from
          a wide array of industries including consulting, manufacturing, F&amp;B,
          real estate, retail and e-commerce, financial services, and a broad
          range of service-based industries.
        </p>

        <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Our Mission
        </h3>
        <p className="mt-3 text-xl font-bold leading-8 text-navy">
          To empower businesses with innovative consulting and compliance
          solutions that drive clarity, efficiency, and sustainable growth while
          fostering an environment of learning and success for our employees.
        </p>

        <h3 className="mt-12 text-2xl font-bold text-navy">Our Vision</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-8 text-muted">
          <li>
            To be the leading trusted partner in management consulting and
            compliance solutions across the Middle East.
          </li>
          <li>
            To transform financial and operational frameworks of our clients
            through cutting-edge technology and expert advisory.
          </li>
          <li>
            To cultivate lasting relationships that enhance value for customers
            and stakeholders.
          </li>
          <li>
            To continuously evolve our services to anticipate and adapt to
            changing market and regulatory environments.
          </li>
        </ul>

        <h3 className="mt-12 text-2xl font-bold text-navy">
          What Sets Us Apart?
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-8 text-muted">
          <li>
            Deep industry expertise spanning finance, compliance, and technology
            sectors.
          </li>
          <li>
            A solution-based, client-centric approach that ensures practical and
            effective outcomes.
          </li>
          <li>
            A team of highly experienced Chartered Accountants and consultants
            with diverse backgrounds.
          </li>
          <li>
            Strong regional presence with knowledge of UAE business and
            regulatory landscapes.
          </li>
        </ul>

        <h3 className="mt-12 text-2xl font-bold text-navy">Core Values</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="border border-border p-5">
              <h4 className="font-bold uppercase tracking-wide text-brand">
                {value.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-muted">{value.text}</p>
            </article>
          ))}
        </div>
      </Container>
      <CtaBanner
        title="Get Started Today!"
        text="Take the first step toward transforming your business with expert consulting and compliance solutions tailored to your needs."
      />
    </>
  );
}
