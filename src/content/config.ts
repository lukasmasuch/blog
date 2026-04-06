import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    years: z.string(),
    tags: z.array(z.string()),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
    featured: z.boolean().optional(),
    priority: z.number().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, projects };
