import { MetadataRoute } from 'next'
import { locales } from '@/i18n/locale'
import { getPostsByLocale, PostStatus } from '@/models/post'

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
      url: '/posts',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      url: '/pricing',
      priority: 0.8,
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

  // Add blog posts for each locale
  try {
    for (const locale of locales) {
      const posts = await getPostsByLocale(locale, 1, 100) // Get up to 100 posts per locale

      posts.forEach(post => {
        const isDefault = locale === 'en'
        const postUrl = isDefault ? `/posts/${post.slug}` : `/${locale}/posts/${post.slug}`

        sitemap.push({
          url: `${baseUrl}${postUrl}`,
          lastModified: post.updated_at || post.created_at || currentDate,
          changeFrequency: 'monthly',
          priority: 0.6,
          alternates: {
            languages: Object.fromEntries(
              locales.map(loc => [
                loc === 'en' ? 'x-default' : loc,
                `${baseUrl}${loc === 'en' ? `/posts/${post.slug}` : `/${loc}/posts/${post.slug}`}`
              ])
            )
          }
        })
      })
    }
  } catch (error) {
    console.warn('Failed to fetch posts for sitemap:', error)
  }

  return sitemap
}
