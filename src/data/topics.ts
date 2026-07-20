/**
 * Controlled topic vocabulary. Writing and recommendations tag themselves with
 * these slugs only — free-form tags are not allowed, so archives stay small and
 * every topic earns its place by being used more than once.
 */
export const topics = {
  accessibility: 'Accessibility',
  testing: 'Testing',
  'frontend-architecture': 'Frontend architecture',
  'developer-tools': 'Developer tools',
  macos: 'macOS',
  'window-management': 'Window management',
  'open-source': 'Open source',
  'software-design': 'Software design',
  internationalization: 'Internationalization',
  'project-stewardship': 'Project stewardship',
} as const;

export type TopicId = keyof typeof topics;
export const TOPIC_IDS = Object.keys(topics) as TopicId[];

export function topicLabel(id: TopicId): string {
  return topics[id];
}

/**
 * The three kinds of writing that share one chronological archive. Each is a
 * different register of the same voice — see content.config.ts for the schema.
 */
export const kinds = {
  update: {
    label: 'Update',
    plural: 'Updates',
    blurb: 'News from the projects — releases, milestones, what changed and where to try it.',
  },
  article: {
    label: 'Article',
    plural: 'Articles',
    blurb: 'Developed opinion and explanation with a thesis that outlives any one release.',
  },
  note: {
    label: 'Note',
    plural: 'Notes',
    blurb: 'Organized working knowledge — references, recipes, and field notes that keep growing.',
  },
} as const;

export type Kind = keyof typeof kinds;
export const KIND_IDS = Object.keys(kinds) as Kind[];
