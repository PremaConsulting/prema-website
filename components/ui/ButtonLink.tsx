import Link from "next/link";

type Variant = "primary" | "outline" | "white";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark border-brand",
  outline:
    "bg-transparent text-white border-white hover:bg-white hover:text-brand",
  white:
    "bg-white text-brand border-white hover:bg-brand hover:text-white",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center border px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
