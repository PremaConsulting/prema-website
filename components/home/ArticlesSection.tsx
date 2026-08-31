import BlogCard from "@/components/ui/BlogCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/lib/site";

export default function ArticlesSection() {
  return (
    <section className="bg-[#f7f8fa] py-16 md:py-20">
      <Container>
        <SectionHeading title="Useful Articles" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 6).map((post) => (
            <BlogCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              image={post.image}
              title={post.title}
              dateLabel={post.dateLabel}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
