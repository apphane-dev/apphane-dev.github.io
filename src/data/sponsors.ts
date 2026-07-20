import { SHOW_EXAMPLES } from '../lib/flags';

export type Tier = 'resident' | 'patron' | 'supporter';

export interface TierInfo {
  id: Tier;
  label: string;
  /**
   * Indicative monthly figure in USD, or null for "any amount". Deliberately a
   * suggestion, not a fixed price — set whatever you like on GitHub.
   */
  amount: number | null;
  /** One-line pitch in the house voice. */
  blurb: string;
  /**
   * Where a sponsor at this tier is thanked, most prominent first. Higher tiers
   * reach further: beyond this page into the project READMEs and the apps'
   * own about/credits screens.
   */
  placement: string[];
}

/** Indicative amount as display text, or the open-ended label. */
export function tierAmount(tier: TierInfo): string {
  return tier.amount === null ? 'Any amount' : `~$${tier.amount}/mo`;
}

export interface Sponsor {
  name: string;
  url: string;
  tier: Tier;
  since: string;
  blurb?: string;
  placeholder?: boolean;
}

/**
 * Ways to help, ordered most-committed first. Placement escalates with the
 * tier: everyone can appear on this page; patrons also reach the project
 * READMEs; residents are additionally credited inside the apps themselves.
 * Placement is thanks and disclosure — never an endorsement, and never a say in
 * what the house writes or recommends.
 */
export const tiers: TierInfo[] = [
  {
    id: 'resident',
    label: 'Resident',
    amount: 64,
    blurb: 'A room of your own — the most visible thanks the house offers.',
    placement: [
      'Top billing on the wall below.',
      'Listed in the README of every apphane project.',
      "Credited on the about screen inside the apps themselves.",
    ],
  },
  {
    id: 'patron',
    label: 'Patron',
    amount: 16,
    blurb: 'Backs a room over time, with a short line about who you are or what you build.',
    placement: [
      'Named on the wall below.',
      'Listed in the README of every apphane project.',
    ],
  },
  {
    id: 'supporter',
    label: 'Supporter',
    amount: null,
    blurb: 'One-off or recurring, whatever suits — every bit keeps a light on.',
    placement: [
      "Named on the wall below, if you'd like — anonymity is always fine.",
    ],
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

/**
 * The choke point for the sponsors wall. Placeholder seed entries are dropped
 * unless the SHOW_EXAMPLES build flag is set. `showSeedNote` gates the "Seed
 * placeholder" banner so it only appears alongside a visible placeholder.
 */
export const visibleSponsors: Sponsor[] = SHOW_EXAMPLES
  ? sponsors
  : sponsors.filter((s) => !s.placeholder);

export const showSeedNote = SHOW_EXAMPLES;
