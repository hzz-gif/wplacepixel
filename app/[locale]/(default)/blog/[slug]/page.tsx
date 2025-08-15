import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/components/blocks/blog-post";
import { getBlogPost } from "@/services/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
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

  return {
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
  };
}

export async function generateStaticParams() {
  const slugs = [
    "wplace-void",
    "how-to-import-pixel-arts-or-images-into-wplace-live",
    "how-to-search-cities-in-wplace-live",
    "wplace-live-down"
  ];

  const locales = ["en", "zh"];

  return locales.flatMap(locale =>
    slugs.map(slug => ({
      locale,
      slug
    }))
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getBlogPost(slug, locale);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}
