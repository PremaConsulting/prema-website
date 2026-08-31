import type { Metadata } from "next";
import PrivacyContent from "@/components/privacy/PrivacyContent";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
      <PrivacyContent />
    </>
  );
}
