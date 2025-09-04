import { getCollection } from 'astro:content';

export async function get() {
  const projects = await getCollection('projects');

  const urls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    ...projects.map((project) => ({
      url: `/projects/${project.slug}/`,
      lastmod: 'weekly',
      priority: project.data.pub_date.toISOString(),
    })),
  ];

  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
      .map(
        (u) => `
        <sitemap>
            <loc>${'https://mikelcantero.dev' + u.url}</loc>
            <lastmod>${u.lastmod}</lastmod>
        </sitemap>`
      )
      .join('')}\n</sitemapindex>`,
    headers: {
      'Content-Type': 'application/xml',
    },
  };
}
