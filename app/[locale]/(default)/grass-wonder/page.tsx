import GrassWonder from "@/components/blocks/grass-wonder";
import { getGrassWonderPage } from "@/services/page";

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getGrassWonderPage(locale);

  let canonicalUrl = "https://wplacepixel.art/grass-wonder";
  if (locale !== "en") {
    canonicalUrl = `https://wplacepixel.art/${locale}/grass-wonder`;
  }

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    keywords: page.metadata.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.metadata.title,
      description: page.metadata.description,
      url: canonicalUrl,
      siteName: "WPlace Pixel",
      locale: locale,
      type: "website",
      images: [
        {
          url: "https://wplacepixel.art/imgs/grass-wonder-hero.png",
          width: 1200,
          height: 630,
          alt: "Grass Wonder Memorial in WPlace",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadata.title,
      description: page.metadata.description,
      images: ["https://wplacepixel.art/imgs/grass-wonder-hero.png"],
    },
  };
}

export default async function GrassWonderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getGrassWonderPage(locale);

  return <GrassWonder />;
}
