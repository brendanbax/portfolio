import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(), // z.date(),
        assets: z.string(),
        summary: z.string(),
        projectDate: z.string(),
        technology: z.array(z.string()),
        roles: z.array(z.string()),
    }),
});

export const collections = {
  'projects': projectCollection,
};