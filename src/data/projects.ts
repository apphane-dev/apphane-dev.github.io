export interface Project {
  /** Slug, also used as the section anchor. */
  id: string;
  name: string;
  /** Turkish word the project is named after and its meaning. */
  turkish: { word: string; meaning: string };
  tagline: string;
  description: string;
  features: string[];
  install?: { label: string; command: string };
  license: string;
  platform: string;
  language: string;
  links: { label: string; href: string }[];
}

/**
 * Projects currently living in the house. Planned projects get a dark
 * window in the strip but are not listed here until they exist publicly.
 */
export const projects: Project[] = [
  {
    id: 'nehir',
    name: 'nehir',
    turkish: { word: 'nehir', meaning: 'river' },
    tagline: 'Windows flow in columns, scrolling across your screen.',
    description:
      'A scrolling tiling window manager for macOS, built on the Niri column paradigm. Columns scroll horizontally instead of shrinking to fit — your windows keep their size, and you move the river.',
    features: [
      'Niri-style scrolling columns',
      'Workspaces with hotkey switching',
      'Multi-monitor support',
      'Overview mode',
      'Command palette',
      'IPC control via nehirctl',
      'Split TOML configuration',
    ],
    install: {
      label: 'Install with Homebrew',
      command: 'brew install --cask guria/tap/nehir',
    },
    license: 'GPL-2.0-only',
    platform: 'macOS',
    language: 'Swift',
    links: [
      { label: 'GitHub', href: 'https://github.com/apphane-dev/nehir' },
      { label: 'Discussions', href: 'https://github.com/apphane-dev/nehir/discussions' },
      { label: 'Releases', href: 'https://github.com/apphane-dev/nehir/releases' },
    ],
  },
];

/** Total windows in the strip: lit ones are shipped projects, dark ones are rooms being furnished. */
export const HOUSE_WINDOWS = 6;
