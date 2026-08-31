import Container from "@/components/ui/Container";

export default function BlogArticle({
  title,
  dateLabel,
  paragraphs,
}: {
  title: string;
  dateLabel: string;
  paragraphs: string[];
}) {
  return (
    <Container className="max-w-3xl py-14">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">
        {dateLabel}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">{title}</h2>
      <div className="mt-8 space-y-5 text-[15px] leading-8 text-muted">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </Container>
  );
}
