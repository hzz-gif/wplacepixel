import { MetadataRoute } from 'next'
import { locales } from '@/i18n/locale'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://wplacepixel.art'
  const currentDate = new Date().toISOString()

  // Blog post slugs from generateStaticParams
  const blogSlugs = [
    'wplace-void',
    'how-to-import-pixel-arts-or-images-into-wplace-live',
    'how-to-search-cities-in-wplace-live',
    'wplace-live-down'
  ]

  // Static pages that support internationalization
  const internationalPages = [
    {
      url: '',
      priority: 1.0,
      changeFreq: 'weekly' as const,
    },
    {
      url: '/sources',
      priority: 0.7,
      changeFreq: 'monthly' as const,
    },
    {
      url: '/showcase',
      priority: 0.7,
      changeFreq: 'weekly' as const,
    },
    {
      url: '/blue-marble',
      priority: 0.6,
      changeFreq: 'monthly' as const,
    },
    {
      url: '/blog',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
  ]

  // Legal pages (no internationalization)
  const legalPages = [
    {
      url: '/privacy-policy',
      priority: 0.6,
      changeFreq: 'monthly' as const,
    },
    {
      url: '/terms-of-service',
      priority: 0.6,
      changeFreq: 'monthly' as const,
    },
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add international pages for each locale
  internationalPages.forEach(page => {
    locales.forEach(locale => {
      const isDefault = locale === 'en'
      const localizedUrl = isDefault ? page.url : `/${locale}${page.url}`
      
      sitemap.push({
        url: `${baseUrl}${localizedUrl}`,
        lastModified: currentDate,
        changeFrequency: page.changeFreq,
        priority: isDefault ? page.priority : page.priority * 0.9,
        alternates: {
          languages: Object.fromEntries(
            locales.map(loc => [
              loc === 'en' ? 'x-default' : loc,
              `${baseUrl}${loc === 'en' ? page.url : `/${loc}${page.url}`}`
            ])
          )
        }
      })
    })
  })

  // Add legal pages (no internationalization)
  legalPages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.changeFreq,
      priority: page.priority,
    })
  })

  // Add blog posts for each locale
  blogSlugs.forEach(slug => {
    locales.forEach(locale => {
      const isDefault = locale === 'en'
      const localizedUrl = isDefault ? `/blog/${slug}` : `/${locale}/blog/${slug}`

      sitemap.push({
        url: `${baseUrl}${localizedUrl}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: isDefault ? 0.7 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map(loc => [
              loc === 'en' ? 'x-default' : loc,
              `${baseUrl}${loc === 'en' ? `/blog/${slug}` : `/${loc}/blog/${slug}`}`
            ])
          )
        }
      })
    })
  })

  return sitemap
}
