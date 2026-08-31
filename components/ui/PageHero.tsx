import Link from "next/link";
import Container from "@/components/ui/Container";

export default function PageHero({
  title,
  crumbs,
}: {
  title: string;
  crumbs: { href?: string; label: string }[];
}) {
  return (
    <section className="border-b border-border bg-[#f7f8fa] py-12 md:py-16">
      <Container>
        <h1 className="text-3xl font-bold text-navy md:text-4xl">{title}</h1>
        <nav className="mt-3 text-sm text-muted" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-brand">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <span>/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-brand">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-heading">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </section>
  );
}
