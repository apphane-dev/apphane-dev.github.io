export type Tier = 'resident' | 'patron' | 'supporter';

export interface TierInfo {
  id: Tier;
  label: string;
  /** The suggested monthly figure, or null for "any amount". */
  blurb: string;
}

export interface Sponsor {
  name: string;
  url: string;
  tier: Tier;
  since: string;
  blurb?: string;
  placeholder?: boolean;
}

/** Where support actually goes. Ordered most-committed first. */
export const tiers: TierInfo[] = [
  {
    id: 'resident',
    label: 'Resident',
    blurb: 'Keeps a light on. Named on this page and in project READMEs, with a note on what your support funds.',
  },
  {
    id: 'patron',
    label: 'Patron',
    blurb: 'Backs a room over time. Named here with a short line about who you are or what you build.',
  },
  {
    id: 'supporter',
    label: 'Supporter',
    blurb: 'Any amount, one-off or recurring. Our thanks, and a name on the wall if you want one.',
  },
];

/** The GitHub Sponsors destination — a placeholder until the account is live. */
export const sponsorLink = 'https://github.com/sponsors/apphane-dev';

/**
 * Current supporters. Empty is the honest default; the seed entry below is a
 * clearly-marked placeholder showing how a sponsor renders.
 */
export const sponsors: Sponsor[] = [
  {
    name: 'Example Supporter',
    url: 'https://example.com',
    tier: 'supporter',
    since: '2026-07',
    blurb: 'A placeholder sponsor. Real names appear here once support arrives.',
    placeholder: true,
  },
];
