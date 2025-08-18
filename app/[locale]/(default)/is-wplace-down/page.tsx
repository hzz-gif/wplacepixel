import IsWplaceDown from "@/components/blocks/is-wplace-down";
import { getIsWplaceDownPage } from "@/services/page";
import { createMetadataWithBase } from "@/lib/metadata";

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getIsWplaceDownPage(locale);

  let canonicalUrl = "https://wplacepixel.art/is-wplace-down";
  if (locale !== "en") {
    canonicalUrl = `https://wplacepixel.art/${locale}/is-wplace-down`;
  }

  return createMetadataWithBase({
    title: page.is_wplace_down?.title || "🔍 Is WPlace Down? Check Live Status Now!",
    description: page.is_wplace_down?.description || "Instantly check if WPlace.live is working! Real-time status updates, uptime stats & instant alerts. Never miss a pixel again! ✨",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.is_wplace_down?.title || "🔍 Is WPlace Down? Check Live Status Now!",
      description: page.is_wplace_down?.description || "Instantly check if WPlace.live is working! Real-time status updates, uptime stats & instant alerts.",
      images: [
        {
          url: "/imgs/wplace-status-monitor.png",
          width: 1200,
          height: 630,
          alt: "WPlace.live status monitoring dashboard",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.is_wplace_down?.title || "🔍 Is WPlace Down? Check Live Status Now!",
      description: page.is_wplace_down?.description || "Instantly check if WPlace.live is working! Real-time status updates, uptime stats & instant alerts.",
      images: ["/imgs/wplace-status-monitor.png"],
    },
  });
}

export default async function IsWplaceDownPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getIsWplaceDownPage(locale);

  return (
    <>
      {page.is_wplace_down && <IsWplaceDown section={page.is_wplace_down} />}
    </>
  );
}
