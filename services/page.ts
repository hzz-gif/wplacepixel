import { LandingPage, ShowcasePage, SourcesPage, BlogPage } from "@/types/pages/landing";

export async function getLandingPage(locale: string): Promise<LandingPage> {
  return (await getPage("landing", locale)) as LandingPage;
}

export async function getShowcasePage(locale: string): Promise<ShowcasePage> {
  return (await getPage("showcase", locale)) as ShowcasePage;
}

export async function getSourcesPage(locale: string): Promise<SourcesPage> {
  return (await getPage("sources", locale)) as SourcesPage;
}

export async function getBlogPage(locale: string): Promise<BlogPage> {
  return (await getPage("blog", locale)) as BlogPage;
}

export async function getPage(
  name: string,
  locale: string
): Promise<LandingPage | ShowcasePage | SourcesPage | BlogPage> {
  try {
    if (locale === "zh-CN") {
      locale = "zh";
    }

    return await import(
      `@/i18n/pages/${name}/${locale.toLowerCase()}.json`
    ).then((module) => module.default);
  } catch (error) {
    console.warn(`Failed to load ${locale}.json, falling back to en.json`);

    return await import(`@/i18n/pages/${name}/en.json`).then(
      (module) => module.default
    );
  }
}
