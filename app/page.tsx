import ArticlesSection from "@/components/home/ArticlesSection";
import GoogleReviews from "@/components/home/GoogleReviews";
import HeroSlider from "@/components/home/HeroSlider";
import HomeFaqs from "@/components/home/HomeFaqs";
import KeyServices from "@/components/home/KeyServices";
import TaxAdvantage from "@/components/home/TaxAdvantage";
import WelcomeSection from "@/components/home/WelcomeSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CtaBanner from "@/components/ui/CtaBanner";
import { googleReviews, site } from "@/lib/site";

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "PREMA CONSULTING LLC",
  url: "https://prema-consulting.com/",
  telephone: site.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 Floor, Tower 1, Boulevard Plaza",
    addressLocality: "Downtown Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: googleReviews.rating,
    reviewCount: googleReviews.count,
    bestRating: 5,
  },
  review: googleReviews.items.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.name },
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <HeroSlider />
      <WelcomeSection />
      <KeyServices />
      <WhyChooseUs />
      <TaxAdvantage />
      <CtaBanner
        title="Let's take the weight of finance off your plate."
        text="Bookkeeping, tax prep, and financial guidance — handled properly, and never in a rush."
      />
      <GoogleReviews />
      <HomeFaqs />
      <ArticlesSection />
    </>
  );
}
