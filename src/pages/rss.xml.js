import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get() {
  const projects = await getCollection('projects');
  return rss({
    title: 'Mi Portfolio - Proyectos - Mikel Cantero',
    description: 'Listado de proyectos',
    site: 'https://mikelcantero.dev',
    items: projects.map((project) => ({
      title: project.data.title,
      description: project.data.description,
      link: `/projects/${project.slug}/`,
      pubDate: project.data.date,
    })),
  });
}