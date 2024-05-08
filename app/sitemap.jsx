export default function sitemap() {
  return [
    {
      url: 'https://SploshEssenceAgency.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://SploshEssenceAgency.com/authentication/login',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: 'https://SploshEssenceAgency.com/authentication/signin',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: 'https://SploshEssenceAgency.com/home',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },

    {
      url: 'https://SploshEssenceAgency.com/not-found',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
  ]
}