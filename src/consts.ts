export const SITE = {
  title: 'SRB2 Lua Glossary',
  description: 'A way to quickly check up on SRB2 related Lua troubles.',
  defaultLanguage: 'en-us'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
}

export const KNOWN_LANGUAGES = {
  English: 'en'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/advanced-astro/astro-docs-template/tree/main`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX'
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  en: {
    'Introduction': [
      { text: 'Introduction', link: 'srb2-glossary/en/introduction' },
    ],
    'Essential Math': [
      { text: 'Bit Math', link: 'srb2-glossary/en/basics/bitmath' },
      { text: 'FRACUNIT', link: 'srb2-glossary/en/basics/fracunit' },
      { text: 'Flags, AND/OR', link: 'srb2-glossary/en/basics/flags' }
    ],
    'About Lua': [
      { text: 'Hooks and Functions', link: 'srb2-glossary/en/lua/functions' },
      { text: 'Rawset', link: 'srb2-glossary/en/lua/rawsets' },
      { text: 'Save/Load', link: 'srb2-glossary/en/lua/saveload' },
    ],
  }
}
