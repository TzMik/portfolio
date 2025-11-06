import { defineCollection, z } from "astro:content";

// SCHEMAS
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
  draft: z.boolean().default(true),
});

const testimonialSchema = z.object({
  name: z.string(),
  role: z.string(),
  company: z.string().optional(),
  testimonial: z.string(),
  img: z.string().optional(),
  service: z.string().optional(),
});

const blogPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  pub_date: z.date(),
  draft: z.boolean().default(true),
  tags: z.array(z.string()).optional(),
  image: z.string().optional()
})

// COLLECTIONS
const projectsCollection = defineCollection({
  schema: projectSchema,
});

const testimonials = defineCollection({
  schema: testimonialSchema,
});

const blogPosts = defineCollection({
  schema: blogPostSchema
})

export type ProjectSchema = z.infer<typeof projectSchema>;
export type TestimonialSchema = z.infer<typeof testimonialSchema>;
export type BlogPostSchema = z.infer<typeof blogPostSchema>;

export const collections = {
  projects: projectsCollection,
  testimonials,
  blogPosts
};
