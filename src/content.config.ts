import { defineCollection, type SchemaContext } from "astro:content";
import { z } from "astro/zod";
import { glob } from 'astro/loaders';

// --- SCHEMAS ---

const projectSchema = ({ image }: SchemaContext) => z.object({
  title: z.string(),
  description: z.string(),
  image: image().optional(),
  url: z.string().optional(),
  tags: z.array(z.string()).optional(),
  pub_date: z.date(),
  start_date: z.date(),
  end_date: z.date().optional(),
  top_project: z.boolean().default(false),
  draft: z.boolean().default(true),
});

const testimonialSchema = ({ image }: SchemaContext) => z.object({
  name: z.string(),
  role: z.string(),
  company: z.string().optional(),
  testimonial: z.string(),
  img: image().optional(),
  service: z.string().optional(),
  companyImg: image().optional(),
});

const blogPostSchema = ({ image }: SchemaContext) => z.object({
  title: z.string(),
  description: z.string(),
  pub_date: z.date(),
  draft: z.boolean().default(true),
  tags: z.array(z.string()).optional(),
  image: image().optional(),
});

const serviceSchema = ({ image }: SchemaContext) => z.object({
  title: z.string(),
  description: z.string(),
  cta: z.string(),
  image: image().optional(),
});

// --- COLLECTIONS ---

const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/services" }),
  schema: serviceSchema,
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: projectSchema,
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/testimonials" }),
  schema: testimonialSchema,
});

const blogPosts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: blogPostSchema,
});

// --- TYPES & EXPORTS ---

export type ProjectSchema = z.infer<ReturnType<typeof projectSchema>>;
export type TestimonialSchema = z.infer<ReturnType<typeof testimonialSchema>>;
export type BlogPostSchema = z.infer<ReturnType<typeof blogPostSchema>>;
export type ServiceSchema = z.infer<ReturnType<typeof serviceSchema>>;

export const collections = {
  projects: projectsCollection,
  testimonials,
  blogPosts,
  services: servicesCollection,
};
