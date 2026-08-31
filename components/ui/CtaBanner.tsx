import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function CtaBanner({
  title,
  text,
  href = "/contact",
  label = "Get Started Today!",
}: {
  title: string;
  text: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="bg-brand text-white">
      <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-20">
        <div>
          <h2 className="text-3xl font-bold leading-tight md:text-[40px]">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/95 md:text-lg">
            {text}
          </p>
          <Link
            href={href}
            className="mt-8 inline-flex items-center gap-3 border border-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-brand"
          >
            {label}
            <span aria-hidden className="text-lg leading-none">
              ▷
            </span>
          </Link>
        </div>
        <div className="relative mx-auto aspect-[698/507] w-full max-w-[520px]">
          <Image
            src="/images/call.png.webp"
            alt=""
            fill
            className="object-contain object-center mix-blend-screen"
            sizes="(max-width: 768px) 90vw, 520px"
          />
        </div>
      </Container>
    </section>
  );
}
