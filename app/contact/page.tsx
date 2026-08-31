import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact PREMA Consulting in Downtown Dubai.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" crumbs={[{ label: "Contact" }]} />
      <Container className="grid gap-12 py-14 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-navy">Contact Info</h2>
          <dl className="mt-6 space-y-6 text-sm">
            <div>
              <dt className="font-semibold uppercase tracking-wide text-brand">
                Office
              </dt>
              <dd className="mt-1 leading-6 text-muted">{site.address}</dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-wide text-brand">
                Phone
              </dt>
              <dd className="mt-1">
                <a href={site.phoneHref} className="text-heading hover:text-brand">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-wide text-brand">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="text-heading hover:text-brand"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-bold text-navy">Contact Form</h2>
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
