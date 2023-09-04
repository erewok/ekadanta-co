import adapter from '@sveltejs/adapter-cloudflare';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Using cloudflare pages
		adapter: adapter()
	},
	extensions: ['.svelte', '.svx'],

  	preprocess: [
    	mdsvex({
			extensions: [".svx"]
		})
  	]
};

export default config;
