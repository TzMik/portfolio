import { getCollection } from 'astro:content';
import { getSortedAndFilteredPosts } from '../lib/blog-posts.js'

export async function get() {
    const projects = await getCollection('projects');
    const blogPosts = await getCollection('blog');

    // Filtramos los proyectos que no tienen draft=true
    const filteredProjects = projects.filter(
        (project) => project.data.draft === false
    );

    // Filtramos las publicaciones del blog que no tienen draft=true
    const filteredBlogPosts = await getSortedAndFilteredPosts();
    const urls = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        ...filteredProjects.map((project) => ({
            url: `/projects/${project.slug}/`,
            lastmod: project.data.pub_date,
        })),
        ...filteredBlogPosts.map((post) => ({
            url: `/blog/${post.slug}/`,
            lastmod: post.data.pub_date,
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
