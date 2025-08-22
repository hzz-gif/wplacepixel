import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://wplacepixel.art'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/blue-marble-wplace',
          '/wplace-overlay',
          '/wplace-app',
          '/wplace-bot',
          '/is-wplace-down',
          '/grass-wonder',
          '/sources',
          '/blog',
          '/favicon.ico',
          '/favicon.svg',
          '/manifest.json',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/_vercel/',
          '/*?*q=', // Disallow search query parameters
        ],
      },
      // AI bots are now allowed to crawl the site
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
