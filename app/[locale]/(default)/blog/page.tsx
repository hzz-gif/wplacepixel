import { Metadata } from "next";
import Blog from "@/components/blocks/blog";
import { getBlogPage } from "@/services/page";
import { createMetadataWithBase } from "@/lib/metadata";

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  let canonicalUrl = `https://wplacepixel.art/blog`;

  if (locale !== "en") {
    canonicalUrl = `https://wplacepixel.art/${locale}/blog`;
  }

  return createMetadataWithBase({
    title: "WPlace Pixel Blog - Latest News, Guides & Updates",
    description: "Stay updated with the latest WPlace.live news, pixel art guides, tutorials, and community updates. Learn tips, tricks, and best practices for collaborative pixel art creation.",
    keywords: "WPlace blog, pixel art guides, WPlace.live news, pixel art tutorials, collaborative art updates, WPlace community",
    alternates: {
      canonical: canonicalUrl,
    },
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getBlogPage(locale);

  return <>{page.blog && <Blog section={page.blog} />}</>;
}
