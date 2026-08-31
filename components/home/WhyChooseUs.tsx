import Container from "@/components/ui/Container";
import { whyChoose } from "@/lib/site";

function WhyIcon({ name }: { name: (typeof whyChoose)[number]["icon"] }) {
  const common = "h-6 w-6 fill-none stroke-current stroke-[1.6]";
  switch (name) {
    case "factory":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path d="M3 20V10l5 3V10l5 3V8l8-3v15H3z" />
          <path d="M7 20v-3M12 20v-3M17 20v-3" />
        </svg>
      );
    case "network":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <circle cx="6" cy="12" r="2.2" />
          <circle cx="18" cy="6" r="2.2" />
          <circle cx="18" cy="18" r="2.2" />
          <path d="M8 12h8M16.2 7.6 8.8 11.2M16.2 16.4 8.8 12.8" />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path d="M5 6h10a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H10l-4 3v-3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z" />
          <path d="M9 9h9a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1v2l-3-2" />
        </svg>
      );
    case "trophy":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path d="M8 5h8v4a4 4 0 0 1-8 0V5z" />
          <path d="M8 7H5a3 3 0 0 0 3 3M16 7h3a3 3 0 0 1-3 3M12 13v3M9 20h6M10 16h4v4h-4z" />
        </svg>
      );
    case "thumb":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path d="M8 11v9H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3z" />
          <path d="M8 11 11 4h1.5a2 2 0 0 1 2 2.3L14 9h5.2a2 2 0 0 1 1.95 2.5l-1.2 5A2 2 0 0 1 18 18H8" />
        </svg>
      );
    case "diamond":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path d="M12 3 4 10l8 11 8-11-8-7z" />
          <path d="M4 10h16M12 3 8 10l4 11 4-11-4-7" />
        </svg>
      );
  }
}

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <h2 className="text-center text-2xl font-bold text-heading md:text-[32px]">
          Why Choose Us?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-7 text-muted">
          We deliver expert, tailored solutions that drive compliance, growth,
          and lasting business success.
        </p>
        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => (
            <article key={item.title} className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <WhyIcon name={item.icon} />
              </span>
              <div>
                <h3 className="text-base font-bold text-heading">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
