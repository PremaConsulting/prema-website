import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  href,
  image,
  title,
  excerpt,
}: {
  href: string;
  image: string;
  title: string;
  excerpt: string;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden border border-border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={href} className="relative block aspect-[10/7] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 text-center">
        <h3 className="text-lg font-bold text-heading">
          <Link href={href} className="hover:text-brand">
            {title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{excerpt}</p>
        <Link
          href={href}
          className="mt-5 text-sm font-semibold uppercase tracking-wide text-brand hover:text-brand-dark"
        >
          Know More
        </Link>
      </div>
    </article>
  );
}
