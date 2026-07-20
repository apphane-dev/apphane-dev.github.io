import type { TopicId } from './topics';
import { SHOW_EXAMPLES } from '../lib/flags';

export type RecCategory =
  | 'software'
  | 'library'
  | 'book'
  | 'article'
  | 'website'
  | 'service';

export interface Recommendation {
  title: string;
  url: string;
  category: RecCategory;
  /** What it is, in one line. */
  summary: string;
  /** Why it earns a place here — the part that matters. */
  why: string;
  topics: TopicId[];
  /** When we last looked at it, so staleness is visible. */
  reviewedAt: string;
  /** How we're related to it — disclosed on the card. */
  relationship: 'none' | 'used-by-us' | 'contributor' | 'sponsor' | 'affiliate';
  /** Marks seed placeholders while the list is being furnished. */
  placeholder?: boolean;
}

export const categoryLabels: Record<RecCategory, string> = {
  software: 'Software',
  library: 'Library',
  book: 'Book',
  article: 'Article',
  website: 'Website',
  service: 'Service',
};

/**
 * A short, opinionated shelf. Every entry says WHY, not just what, and carries a
 * reviewed date so a stale pick is obvious. Relationships are disclosed on the
 * card. The entries below are clearly-marked placeholders.
 */
export const recommendations: Recommendation[] = [
  {
    title: 'Example: a build tool we reach for',
    url: 'https://example.com/build-tool',
    category: 'software',
    summary: 'Placeholder for a tool the house actually uses day to day.',
    why: 'A real entry would say what problem it removed for us and what we tried first. This is a seed placeholder.',
    topics: ['developer-tools', 'frontend-architecture'],
    reviewedAt: '2026-07-15',
    relationship: 'used-by-us',
    placeholder: true,
  },
  {
    title: 'Example: an essay worth re-reading',
    url: 'https://example.com/essay',
    category: 'article',
    summary: 'Placeholder for a piece of writing that changed how we work.',
    why: 'A real entry would name the one idea we carried away from it. This is a seed placeholder.',
    topics: ['software-design', 'open-source'],
    reviewedAt: '2026-07-02',
    relationship: 'none',
    placeholder: true,
  },
  {
    title: 'Example: a library we contribute to',
    url: 'https://example.com/library',
    category: 'library',
    summary: 'Placeholder for a dependency we both use and help maintain.',
    why: 'A real entry would disclose our involvement plainly, as this one does. This is a seed placeholder.',
    topics: ['testing', 'accessibility'],
    reviewedAt: '2026-06-28',
    relationship: 'contributor',
    placeholder: true,
  },
];

/**
 * The choke point for the recommendations page. Placeholder seed entries are
 * dropped unless the SHOW_EXAMPLES build flag is set. `showSeedNote` gates the
 * "Seed placeholders" banner so it only appears alongside visible placeholders.
 */
export const visibleRecommendations: Recommendation[] = SHOW_EXAMPLES
  ? recommendations
  : recommendations.filter((r) => !r.placeholder);

export const showSeedNote = SHOW_EXAMPLES;

export const relationshipLabels: Record<Recommendation['relationship'], string> = {
  none: '',
  'used-by-us': 'We use this',
  contributor: 'We contribute',
  sponsor: 'Sponsor',
  affiliate: 'Affiliate link',
};
