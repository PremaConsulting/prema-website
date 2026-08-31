"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { navLinks, serviceLabel, services, site } from "@/lib/site";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M6.5 9H3.7v11.2h2.8V9zM5.1 3.8C4.1 3.8 3.3 4.6 3.3 5.6s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zM20.3 13.1c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V9H10.4c0 1.8 0 11.2 0 11.2h2.8v-6.3c0-.3 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6v6.1h2.8V13.1z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M17.5 4h2.7l-5.9 6.7L21.7 20h-5.2l-4.1-5.3L7.7 20H5l6.3-7.2L2.5 4h5.3l3.7 4.9L17.5 4zm-.9 14.4h1.5L7.5 5.5H5.9l10.7 12.9z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="hidden border-b border-border bg-topbar md:block">
        <Container className="flex items-center justify-between py-2 text-xs text-muted">
          <div className="flex items-center gap-2">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook page opens in new window"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-muted hover:text-brand"
            >
              <FacebookIcon />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn page opens in new window"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-muted hover:text-brand"
            >
              <LinkedInIcon />
            </a>
            <a
              href={site.social.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X page opens in new window"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-muted hover:text-brand"
            >
              <XIcon />
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="hover:text-brand">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-brand">
              {site.email}
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between gap-4 py-3">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-desktop.png.webp"
            alt="Prema Consulting"
            width={150}
            height={64}
            className="h-12 w-auto md:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {navLinks.map((link) =>
            "children" in link && link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1 py-5 text-[13px] font-semibold uppercase tracking-wide ${
                    isActive(link.href) ? "text-brand" : "text-navy hover:text-brand"
                  }`}
                >
                  {link.label}
                  <span className="text-[10px]">▾</span>
                </Link>
                <div className="invisible absolute left-0 top-full z-40 grid w-[520px] grid-cols-2 gap-x-4 bg-white py-4 pl-5 pr-4 opacity-0 shadow-lg ring-1 ring-border transition group-hover:visible group-hover:opacity-100">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="py-1.5 text-sm text-heading hover:text-brand"
                    >
                      {serviceLabel(service)}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-5 text-[13px] font-semibold uppercase tracking-wide ${
                  isActive(link.href) ? "text-brand" : "text-navy hover:text-brand"
                }`}
              >
                {link.label}
                {isActive(link.href) ? (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 bg-brand" />
                ) : null}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden bg-brand px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-brand-dark sm:inline-flex"
          >
            Get Appointment
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-border lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            <span className="text-xl text-navy">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border bg-white lg:hidden">
          <Container className="flex flex-col py-3">
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <div key={link.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-sm font-semibold uppercase text-navy"
                    onClick={() => setServicesOpen((value) => !value)}
                  >
                    {link.label}
                    <span>{servicesOpen ? "−" : "+"}</span>
                  </button>
                  {servicesOpen
                    ? services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block py-2 pl-3 text-sm text-muted"
                          onClick={() => setOpen(false)}
                        >
                          {serviceLabel(service)}
                        </Link>
                      ))
                    : null}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-sm font-semibold uppercase text-navy"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              className="mt-2 bg-brand px-4 py-3 text-center text-xs font-semibold uppercase text-white"
              onClick={() => setOpen(false)}
            >
              Get Appointment
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
