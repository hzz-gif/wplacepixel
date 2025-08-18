import WplaceBot from "@/components/blocks/wplace-bot";
import { getWplaceBotPage } from "@/services/page";
import { createMetadataWithBase } from "@/lib/metadata";

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getWplaceBotPage(locale);

  let canonicalUrl = "https://wplacepixel.art/wplace-bot";
  if (locale !== "en") {
    canonicalUrl = `https://wplacepixel.art/${locale}/wplace-bot`;
  }

  return createMetadataWithBase({
    title: page.wplace_bot?.title || "Wplace Bot - Automated Pixel Art Creation for WPlace.live",
    description: page.wplace_bot?.description || "Automate your WPlace.live pixel art creation with Wplace Bot - a powerful browser-based automation tool for efficient and precise collaborative pixel art projects.",
    keywords: "Wplace Bot, WPlace.live automation, pixel art bot, browser automation, pixel art creation, automated pixel placement, WPlace.live tools, pixel art scripts",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.wplace_bot?.title || "Wplace Bot - Automated Pixel Art Creation for WPlace.live",
      description: page.wplace_bot?.description || "Automate your WPlace.live pixel art creation with Wplace Bot",
      images: [
        {
          url: "/imgs/wplace-bot-hero.png",
          width: 1200,
          height: 630,
          alt: "Wplace Bot automation interface",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.wplace_bot?.title || "Wplace Bot - Automated Pixel Art Creation for WPlace.live",
      description: page.wplace_bot?.description || "Automate your WPlace.live pixel art creation with Wplace Bot",
      images: ["/imgs/wplace-bot-hero.png"],
    },
  });
}

export default async function WplaceBotPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getWplaceBotPage(locale);

  return (
    <>
      {page.wplace_bot && <WplaceBot section={page.wplace_bot} />}
    </>
  );
}
