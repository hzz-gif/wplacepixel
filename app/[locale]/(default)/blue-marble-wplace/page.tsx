import { Metadata } from "next";
import BlueMarble from "@/components/blocks/blue-marble";
import { getBlueMarblePage } from "@/services/page";
import { createMetadataWithBase } from "@/lib/metadata";

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const page = await getBlueMarblePage(locale);

  let canonicalUrl = "https://wplacepixel.art/blue-marble-wplace";
  if (locale !== "en") {
    canonicalUrl = `https://wplacepixel.art/${locale}/blue-marble-wplace`;
  }

  return createMetadataWithBase({
    title: page.blue_marble?.title || "Blue Marble Wplace - Advanced Pixel Art Tool for WPlace.live",
    description: page.blue_marble?.description || "Discover Blue Marble Wplace, the revolutionary userscript that transforms your WPlace.live pixel art experience. Advanced template overlay, precise coordinates, and professional tools for collaborative pixel art creation.",
    keywords: "Blue Marble Wplace, WPlace.live, pixel art tool, userscript, template overlay, collaborative art, pixel art creation, WPlace Pixel",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.blue_marble?.title || "Blue Marble Wplace - Advanced Pixel Art Tool for WPlace.live",
      description: page.blue_marble?.description || "Discover Blue Marble Wplace, the revolutionary userscript that transforms your WPlace.live pixel art experience. Advanced template overlay, precise coordinates, and professional tools for collaborative pixel art creation.",
      images: ["/imgs/blue-marble-hero.png"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.blue_marble?.title || "Blue Marble Wplace - Advanced Pixel Art Tool for WPlace.live",
      description: page.blue_marble?.description || "Discover Blue Marble Wplace, the revolutionary userscript that transforms your WPlace.live pixel art experience. Advanced template overlay, precise coordinates, and professional tools for collaborative pixel art creation.",
      images: ["/imgs/blue-marble-hero.png"],
    },
  });
}

export default async function BlueMarbleWplacePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getBlueMarblePage(locale);
  return (
    <>
      {page.blue_marble && <BlueMarble section={page.blue_marble} />}
    </>
  );
}
