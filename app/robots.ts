import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://wplacepixel.art'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
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
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
