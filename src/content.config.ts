import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const postSchema = z.object({
	 title: z.string(),
	 published: z.date(),
	 updated: z.date().optional(),
	 draft: z.boolean().optional().default(false),
	 description: z.string().optional().default(""),
	 image: z.string().optional().default(""),
	 tags: z.array(z.string()).optional().default([]),
	 category: z.string().optional().nullable().default(""),
	 lang: z.string().optional().default(""),
	 prevTitle: z.string().default(""),
	 prevSlug: z.string().default(""),
	 nextTitle: z.string().default(""),
	 nextSlug: z.string().default(""),
});

const postsCollection = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
	schema: postSchema,
});

const specCollection = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/spec" }),
	schema: z.object({}),
});

export const collections = {
	posts: postsCollection,
	spec: specCollection,
};
