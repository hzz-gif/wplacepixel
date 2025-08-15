import { LandingPage, ShowcasePage, SourcesPage, BlogPage, WplaceOverlayPage, WplaceBotPage, IsWplaceDownPage } from "@/types/pages/landing";

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

export async function getWplaceOverlayPage(locale: string): Promise<WplaceOverlayPage> {
  return (await getPage("wplace-overlay", locale)) as WplaceOverlayPage;
}

export async function getWplaceBotPage(locale: string): Promise<WplaceBotPage> {
  return (await getPage("wplace-bot", locale)) as WplaceBotPage;
}

export async function getIsWplaceDownPage(locale: string): Promise<IsWplaceDownPage> {
  return (await getPage("is-wplace-down", locale)) as IsWplaceDownPage;
}

export async function getPage(
  name: string,
  locale: string
): Promise<LandingPage | ShowcasePage | SourcesPage | BlogPage | WplaceOverlayPage | WplaceBotPage | IsWplaceDownPage> {
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
