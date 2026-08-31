import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "PREMA Consulting is a management consulting firm founded in 2018 in Downtown Dubai.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About" crumbs={[{ label: "About" }]} />
      <AboutContent />
    </>
  );
}
