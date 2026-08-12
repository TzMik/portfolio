import { getCollection } from 'astro:content';
import { decisionSystems } from '../data/decisionSystems.js';

export const GET = async () => {
    const projects = await getCollection('projects');
    const blogPosts = await getCollection('blogPosts');

    // Filtramos los proyectos que no tienen draft=true
    const filteredProjects = projects.filter(
        (project) => project.data.draft === false
    );

    const urls = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/sistemas-de-decision/' },
        // Los sistemas se leen desde decisionSystems.js: al crear uno nuevo
        // basta con añadirlo ahí (además de su página) y aparecerá aquí solo.
        ...decisionSystems.map((system) => ({
            url: system.url,
            lastmod: system.lastmod,
        })),
        ...filteredProjects.map((project) => ({
            url: `/projects/${project.id}/`,
            lastmod: project.data.pub_date.toISOString().slice(0, 10),
        })),
        ...blogPosts.map((post) => ({
            url: `/blog/${post.id}/`,
            lastmod: post.data.pub_date.toISOString().slice(0, 10),
        })),
    ];

    const body = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
        .map(
            (u) => `
                    <sitemap>
                        <loc>${'https://mikelcantero.dev' + u.url}</loc>
                        ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
                    </sitemap>`
        )
        .join('')}\n</sitemapindex>`;

    return new Response(body, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'max-age=3600',
        },
    });
};