import { getCollection, type CollectionEntry } from 'astro:content';

export type WritingEntry = CollectionEntry<'writing'>;

/** All non-draft writing, newest first. Drafts are dropped in production. */
export async function getPublishedWriting(): Promise<WritingEntry[]> {
  const entries = await getCollection('writing', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
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
