import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
  href,
  image,
  title,
  dateLabel,
  excerpt,
}: {
  href: string;
  image: string;
  title: string;
  dateLabel: string;
  excerpt: string;
}) {
  return (
    <article className="overflow-hidden border border-border bg-white shadow-sm">
      <Link href={href} className="relative block aspect-[3/2] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">
          {dateLabel}
        </p>
        <h3 className="mt-2 text-lg font-bold text-heading">
          <Link href={href} className="hover:text-brand">
            {title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">{excerpt}</p>
        <Link
          href={href}
          className="mt-4 inline-block text-sm font-semibold text-brand"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
