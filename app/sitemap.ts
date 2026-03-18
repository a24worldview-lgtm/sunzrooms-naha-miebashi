import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sunzrooms.com'

  const pages = [
    { path: '', priority: 1.0 },
    { path: '/rooms', priority: 0.9 },
    { path: '/booking', priority: 0.9 },
    { path: '/access', priority: 0.8 },
    { path: '/faq', priority: 0.8 },
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page.priority,
  }))
}
