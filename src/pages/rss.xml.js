import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getSortedAndFilteredPosts } from '../lib/blog-posts.js'

export const GET = async () => {
    // Obtener y filtrar proyectos que no sean borradores
    const projects = await getCollection('projects');
    const filteredProjects = projects.filter((project) => project.data.draft === false);

    // Obtener y filtrar publicaciones de blog que no sean borradores
    const filteredBlogPosts = getSortedAndFilteredPosts();

    // Unir los proyectos y las publicaciones de blog en un solo array
    const allItems = [...filteredProjects, ...filteredBlogPosts];

    // Mapear los elementos combinados para el feed RSS
    const rssItems = allItems.map((item) => ({
        title: item.data.title,
        description: item.data.description,
        link: `/${item.collection}/${item.slug}/`, // Esta línea crea la URL de forma dinámica
        pubDate: item.data.pub_date,
    }));

    // Ordenar los elementos por fecha de publicación, de más reciente a más antigua
    rssItems.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

    return rss({
        title: 'Mi Portfolio - Mikel Cantero',
        description: 'Últimas publicaciones y proyectos',
        site: 'https://mikelcantero.dev',
        items: rssItems,
    });
};
