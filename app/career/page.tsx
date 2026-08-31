import type { Metadata } from "next";
import ResumeForm from "@/components/career/ResumeForm";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Career",
  description: "Career opportunities at PREMA Consulting.",
};

export default function CareerPage() {
  return (
    <>
      <PageHero title="Career" crumbs={[{ label: "Career" }]} />
      <Container className="max-w-3xl py-14">
        <h2 className="text-2xl font-bold text-navy">
          Join Our Team at PREMA Consulting
        </h2>
        <p className="mt-4 text-[15px] leading-8 text-muted">
          At PREMA Consulting, we believe our people are our greatest asset. We
          foster a dynamic and inclusive work environment where innovation,
          integrity, and professional growth thrive. If you are passionate about
          driving impactful solutions in consulting, compliance, and finance, we
          invite you to explore career opportunities with us.
        </p>
        <p className="mt-4 text-[15px] leading-8 text-muted">
          We offer challenging projects, continuous learning, and a culture that
          values collaboration and excellence.
        </p>
        <h3 className="mt-10 text-lg font-bold uppercase tracking-wide text-navy">
          Current Openings
        </h3>
        <p className="mt-3 text-[15px] leading-8 text-muted">
          Sales Professionals required in our Chennai Office. For details,
          contact HR at{" "}
          <a href={`mailto:${site.hrEmail}`} className="text-brand">
            {site.hrEmail}
          </a>
          .
        </p>
        <ResumeForm />
      </Container>
    </>
  );
}
