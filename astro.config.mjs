import { defineConfig, passthroughImageService } from 'astro/config'

import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  site: 'https://bartuinceQR.github.io',
  base: '/srb2-glossary',
  integrations: [mdx(), preact(), react(), sitemap()],
  output: "static"
})
