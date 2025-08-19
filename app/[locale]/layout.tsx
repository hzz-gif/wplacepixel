import "@/app/globals.css";

import { getMessages, getTranslations } from "next-intl/server";
import { locales } from "@/i18n/locale";

import { AppContextProvider } from "@/contexts/app";
import { Inter as FontSans } from "next/font/google";
import { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/providers/theme";
import { cn } from "@/lib/utils";
import { createMetadataWithBase } from "@/lib/metadata";
import SideAds from "@/components/blocks/hero/side-ads";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const t = await getTranslations();

  return createMetadataWithBase({
    title: {
      template: `%s`,
      default: t("metadata.title") || "",
    },
    description: t("metadata.description") || "",
    keywords: t("metadata.keywords") || "",
    icons: {
      icon: [
        '/favicon.ico',
        { url: '/favicon.svg', sizes: 'any' },
      ],
      shortcut: '/favicon.ico',
      apple: '/favicon.svg',
    },
  });
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  const webUrl = process.env.NEXT_PUBLIC_WEB_URL || "https://wplacepixel.art";
  const googleAdsenseCode = process.env.NEXT_PUBLIC_GOOGLE_ADCODE || "";

  return (
    <html lang={locale} suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />



        {googleAdsenseCode && (
          <meta name="google-adsense-account" content={googleAdsenseCode} />
        )}

        {/* Favicon and Icons - Simplified but effective */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />

        {/* Explicit favicon.ico reference for better crawling */}
        <link rel="shortcut icon" href="/favicon.ico" />





        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5148478102061529"
          crossOrigin="anonymous"
          suppressHydrationWarning
        />

        {/* Plausible Analytics */}
        <script
          defer
          data-domain="wplacepixel.art"
          src="https://plausible.io/js/script.js"
          suppressHydrationWarning
        />

        {/* Structured Data for Search Engines */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "WPlace Pixel",
              "alternateName": "WPlace Pixel Art Converter",
              "url": "https://wplacepixel.art",
              "description": "Transform images into pixel art for WPlace.live. Professional pixel art converter, tools, and guides for collaborative pixel art creation.",
              "publisher": {
                "@type": "Organization",
                "name": "WPlace Pixel",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://wplacepixel.art/favicon.svg"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://wplacepixel.art/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }, null, 0)
          }}
        />

        {locales &&
          locales.map((loc) => (
            <link
              key={loc}
              rel="alternate"
              hrefLang={loc}
              href={`${webUrl}${loc === "en" ? "" : `/${loc}`}/`}
            />
          ))}
        <link rel="alternate" hrefLang="x-default" href={webUrl} />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <AppContextProvider>
            <ThemeProvider attribute="class" disableTransitionOnChange>
              <SideAds />
              {children}
            </ThemeProvider>
          </AppContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
