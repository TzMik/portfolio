// src/lib/projects.js
import { getCollection } from "astro:content";

export async function getSortedProjects() {
  const allProjects = await getCollection("projects", ({ data }) => !data.draft);

  allProjects.sort((a, b) => {
    // Proyectos destacados primero
    if (a.data.top_project && !b.data.top_project) return -1;
    if (!a.data.top_project && b.data.top_project) return 1;

    // Luego, ordenar por fecha
    return b.data.start_date.getTime() - a.data.start_date.getTime();
  });

  return allProjects;
}
