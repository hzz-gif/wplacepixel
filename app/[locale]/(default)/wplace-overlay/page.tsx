import WplaceOverlay from "@/components/blocks/wplace-overlay";
import { getWplaceOverlayPage } from "@/services/page";

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getWplaceOverlayPage(locale);

  let canonicalUrl = "https://wplacepixel.art/wplace-overlay";
  if (locale !== "en") {
    canonicalUrl = `https://wplacepixel.art/${locale}/wplace-overlay`;
  }

  return {
    title: page.wplace_overlay?.title || "Wplace Overlay Pro - Free TamperMonkey Script for WPlace.live",
    description: page.wplace_overlay?.description || "Get the best Wplace Overlay tool! Free TamperMonkey script with template overlays, color matching & team collaboration. Install in 2 minutes!",
    keywords: "Wplace Overlay, WPlace.live, userscript, template overlay, pixel art, Tampermonkey, Greasemonkey, collaborative art, color matching, pixel art tools",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.wplace_overlay?.title || "Wplace Overlay Pro - Free TamperMonkey Script for WPlace.live",
      description: page.wplace_overlay?.description || "Get the best Wplace Overlay tool! Free TamperMonkey script with template overlays, color matching & team collaboration.",
      images: [
        {
          url: "/imgs/wplace-overlay-hero.png",
          width: 1200,
          height: 630,
          alt: "Wplace Overlay Pro interface",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.wplace_overlay?.title || "Wplace Overlay Pro - Free TamperMonkey Script for WPlace.live",
      description: page.wplace_overlay?.description || "Get the best Wplace Overlay tool! Free TamperMonkey script with template overlays, color matching & team collaboration.",
      images: ["/imgs/wplace-overlay-hero.png"],
    },
  };
}

export default async function WplaceOverlayPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getWplaceOverlayPage(locale);

  return (
    <>
      {page.wplace_overlay && <WplaceOverlay section={page.wplace_overlay} />}
    </>
  );
}
