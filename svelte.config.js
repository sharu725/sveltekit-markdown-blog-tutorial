import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },

  preprocess: [mdsvex(mdsvexConfig)],
};

export default config;
