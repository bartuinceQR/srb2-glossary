import { defineConfig, passthroughImageService } from 'astro/config'

import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [mdx(), preact(), react(), sitemap()],
  base: `/`,
  output: "static",
  site: `https://bartuinceqr.github.io`
})
