export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-2xl font-bold text-navy md:text-[32px]">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-base font-semibold text-brand">{subtitle}</p>
      ) : null}
    </div>
  );
}
