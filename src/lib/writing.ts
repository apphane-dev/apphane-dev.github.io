import { getCollection, type CollectionEntry } from 'astro:content';
import { SHOW_EXAMPLES } from './flags';

export type WritingEntry = CollectionEntry<'writing'>;

/**
 * All non-draft writing, newest first. Drafts are dropped in production, and
 * example/seed posts are dropped unless the SHOW_EXAMPLES build flag is set.
 * This is the single choke point where example content is filtered out.
 */
export async function getPublishedWriting(): Promise<WritingEntry[]> {
  const entries = await getCollection('writing', ({ data }) => {
    if (import.meta.env.PROD && data.draft) return false;
    if (!SHOW_EXAMPLES && data.example) return false;
    return true;
  });
  return entries.sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );
}

const dateFmt = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

export function formatDate(date: Date): string {
  return dateFmt.format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
