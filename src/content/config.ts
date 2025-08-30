import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    url: z.string().optional(),
    top_project: z.boolean().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
