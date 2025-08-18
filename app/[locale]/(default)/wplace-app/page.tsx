import WplaceApp from "@/components/blocks/wplace-app";
import { getWplaceAppPage } from "@/services/page";
import { createMetadataWithBase } from "@/lib/metadata";

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getWplaceAppPage(locale);

  let canonicalUrl = "https://wplacepixel.art/wplace-app";
  if (locale !== "en") {
    canonicalUrl = `https://wplacepixel.art/${locale}/wplace-app`;
  }

  return createMetadataWithBase({
    title: page.wplace_app?.title || "Wplace App - Mobile Pixel Art Creation for WPlace.live",
    description: page.wplace_app?.description || "Experience WPlace.live on mobile with the official Wplace App. Create collaborative pixel art on the go with touch-optimized controls, real-time collaboration, and seamless synchronization.",
    keywords: "Wplace App, WPlace.live mobile app, mobile pixel art, collaborative pixel art app, touch controls, real-time collaboration, pixel art creation, mobile drawing app",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.wplace_app?.title || "Wplace App - Mobile Pixel Art Creation for WPlace.live",
      description: page.wplace_app?.description || "Experience WPlace.live on mobile with the official Wplace App. Create collaborative pixel art on the go with touch-optimized controls, real-time collaboration, and seamless synchronization.",
      url: canonicalUrl,
      siteName: "WPlace Pixel",
      images: [
        {
          url: "/imgs/wplace-app-hero.png",
          width: 1200,
          height: 630,
          alt: "Wplace App - Mobile Pixel Art Creation",
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.wplace_app?.title || "Wplace App - Mobile Pixel Art Creation for WPlace.live",
      description: page.wplace_app?.description || "Experience WPlace.live on mobile with the official Wplace App. Create collaborative pixel art on the go with touch-optimized controls, real-time collaboration, and seamless synchronization.",
      images: ["/imgs/wplace-app-hero.png"],
    },
  });
}

export default async function WplaceAppPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getWplaceAppPage(locale);

  return (
    <>
      {page.wplace_app && <WplaceApp section={page.wplace_app} />}
    </>
  );
}
