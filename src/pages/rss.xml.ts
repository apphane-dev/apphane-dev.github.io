import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedWriting } from '../lib/writing';
import { kinds } from '../data/topics';

export async function GET(context: APIContext) {
  const entries = await getPublishedWriting();
  return rss({
    title: 'apphane — writing',
    description:
      'Updates from the projects, opinion articles, and organized notes from the apphane house.',
    site: context.site ?? 'https://apphane.dev',
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.publishedAt,
      link: `/writing/${entry.id}/`,
      categories: [
        kinds[entry.data.kind as keyof typeof kinds].label,
        ...entry.data.topics,
      ],
    })),
    customData: '<language>en</language>',
  });
}
