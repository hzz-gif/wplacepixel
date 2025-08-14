import Sources from "@/components/blocks/sources";
import { getSourcesPage } from "@/services/page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let canonicalUrl = `https://wplacepixel.art/sources`;

  if (locale !== "en") {
    canonicalUrl = `https://wplacepixel.art/${locale}/sources`;
  }

  return {
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function SourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = await getSourcesPage(locale);

  return <>{page.sources && <Sources section={page.sources} />}</>;
}
