import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blog/BlogArticle";
import PageHero from "@/components/ui/PageHero";
import { getPostBody } from "@/lib/blogBodies";
import { blogPosts, getPost } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        title={post.title}
        crumbs={[{ href: "/blog", label: "Blog" }, { label: post.title }]}
      />
      <BlogArticle
        title={post.title}
        dateLabel={post.dateLabel}
        paragraphs={getPostBody(post.slug)}
      />
    </>
  );
}
