import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/components/blocks/blog-post";
import { getBlogPost } from "@/services/blog";
import { createMetadataWithBase } from "@/lib/metadata";

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const slug = "wplace-void";
  const post = await getBlogPost(slug, locale);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  let canonicalUrl = `https://wplacepixel.art/blog/${slug}`;
  if (locale !== "en") {
    canonicalUrl = `https://wplacepixel.art/${locale}/blog/${slug}`;
  }

  return createMetadataWithBase({
    title: post.title,
    description: post.description,
    keywords: "WPlace blog, pixel art guides, WPlace.live news, pixel art tutorials, collaborative art updates, WPlace community",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [{ url: post.image.src, alt: post.image.alt }] : [],
      type: "article",
      publishedTime: post.date,
      authors: ["WplacePixel.art"],
    },
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const slug = "wplace-void";
  const post = await getBlogPost(slug, locale);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}
