import type { Metadata } from "next";
import BlogCard from "@/components/ui/BlogCard";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "VAT, accounting, and UAE compliance insights from PREMA Consulting.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" crumbs={[{ label: "Blog" }]} />
      <Container className="grid gap-6 py-14 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.slug}
            href={`/blog/${post.slug}`}
            image={post.image}
            title={post.title}
            dateLabel={post.dateLabel}
            excerpt={post.excerpt}
          />
        ))}
      </Container>
    </>
  );
}
