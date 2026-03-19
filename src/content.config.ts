import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    price: z.string().optional(),
    duration: z.string().optional(),
    description: z.string(),
    image: z.string(),
    category: z.enum(['brows', 'lashes', 'threading', 'other']),
    order: z.number().default(0),
  }),
});

export const collections = {
  services,
};
