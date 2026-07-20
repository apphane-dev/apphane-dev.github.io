import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { PROJECT_IDS } from './data/projects';
import { TOPIC_IDS, KIND_IDS } from './data/topics';

const projectId = z.enum(PROJECT_IDS as unknown as [string, ...string[]]);
const topicId = z.enum(TOPIC_IDS as unknown as [string, ...string[]]);

/**
 * writing — one chronological archive of everything we publish. A `kind`
 * discriminator (update / article / note) keeps the timeline unified while
 * letting each kind carry the metadata it actually needs.
 */
const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    kind: z.enum(KIND_IDS as unknown as [string, ...string[]]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    authors: z.array(reference('authors')).nonempty(),
    topics: z.array(topicId).default([]),
    projects: z.array(projectId).default([]),
    featured: z.boolean().default(false),
    /** Seed/example post — hidden unless the SHOW_EXAMPLES build flag is set. */
    example: z.boolean().default(false),
    // update-only
    changeType: z
      .enum(['launch', 'release', 'milestone', 'status', 'retrospective'])
      .optional(),
    release: z.string().optional(),
    // article-only
    thesis: z.string().optional(),
    // note-only
    noteType: z
      .enum(['reference', 'recipe', 'field-note', 'reading-note', 'index'])
      .optional(),
    series: z.string().optional(),
    status: z.enum(['seedling', 'growing', 'evergreen']).optional(),
  }),
});

const authors = defineCollection({
  loader: glob({ base: './src/content/authors', pattern: '**/*.json' }),
  schema: z.object({
    name: z.string(),
    bio: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { writing, authors };
