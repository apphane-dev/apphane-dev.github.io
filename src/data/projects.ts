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
  {
    id: 'kahraman',
    name: 'kahraman',
    turkish: { word: 'kahraman', meaning: 'hero' },
    tagline: 'Accessibility-first tests that read like a user’s story.',
    description:
      'A codecept-style test actor and fluent locator DSL for Storybook portable stories and Vitest browser mode. Kahraman steers tests toward roles, accessible names, and visible text so the easiest tests to write are also the ones that reflect what users perceive.',
    features: [
      'Declarative I.see / I.click actor',
      'Accessibility-first locator DSL',
      'Storybook portable stories',
      'Vitest browser mode',
      'Readable failure diagnostics',
      'Extensible page actors',
      'React, Vue, and Svelte ready',
    ],
    install: {
      label: 'Install from npm',
      command: 'npm install --save-dev kahraman',
    },
    license: 'MIT',
    platform: 'Storybook / Vitest',
    language: 'TypeScript',
    links: [
      { label: 'GitHub', href: 'https://github.com/apphane-dev/kahraman' },
      { label: 'npm', href: 'https://www.npmjs.com/package/kahraman' },
      { label: 'Releases', href: 'https://github.com/apphane-dev/kahraman/releases' },
    ],
  },
];

/** Total windows in the strip: lit ones are shipped projects, dark ones are rooms being furnished. */
export const HOUSE_WINDOWS = 6;
