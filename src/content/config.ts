import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  url: z.string().optional(),
  tags: z.array(z.string()).optional(),
  pub_date: z.date(),
  top_project: z.boolean().default(false),
});

const projectsCollection = defineCollection({
  schema: projectSchema,
});

export type ProjectSchema = z.infer<typeof projectSchema>;

export const collections = {
  projects: projectsCollection,
};
