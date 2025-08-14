import { MetadataRoute } from 'next'
import { locales } from '@/i18n/locale'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://wplacepixel.art'
  const currentDate = new Date().toISOString()

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

  // Blog posts section removed as database is not used

  return sitemap
}
