import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { blogPosts, site } from "@/lib/site";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export default function Footer() {
  const recent = blogPosts.slice(0, 3);

  return (
    <footer className="mt-auto bg-[#0f1c2e] text-white/80">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Link href="/" className="mb-5 inline-block">
            <Image
              src="/images/logo-desktop.png.webp"
              alt="Prema Consulting"
              width={150}
              height={64}
              className="h-14 w-auto"
            />
          </Link>
          <p className="text-sm leading-6">
            Expert advisory and compliance services in finance, taxation, audit,
            and digital transformation across the UAE.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Recent Posts
          </h3>
          <ul className="space-y-4 text-sm">
            {recent.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="hover:text-white">
                  {post.title}
                </Link>
                <p className="mt-1 text-xs text-white/50">{post.dateLabel}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li>{site.address}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        Copyright 2026 {site.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
