import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  url: z.string().optional(),
  tags: z.array(z.string()).optional(),
  pub_date: z.date(),
  start_date: z.date(),
  end_date: z.date().optional(),
  top_project: z.boolean().default(false),
});

const projectsCollection = defineCollection({
  schema: projectSchema,
});

const testimonialSchema = z.object({
  name: z.string(),
  role: z.string(),
  company: z.string().optional(),
  testimonial: z.string(),
  avatar: z.string().optional(),
});

const testimonials = defineCollection({
  schema: testimonialSchema,
});

export type ProjectSchema = z.infer<typeof projectSchema>;
export type TestimonialSchema = z.infer<typeof testimonialSchema>;

export const collections = {
  projects: projectsCollection,
  testimonials: testimonials,
};
