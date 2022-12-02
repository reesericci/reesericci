import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import webfinger from 'astro-webfinger'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx(), webfinger({
      instance: 'social.dino.icu',
      username: 'reesericci',
    })]
});
