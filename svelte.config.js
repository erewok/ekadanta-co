import adapter from '@sveltejs/adapter-cloudflare';
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Using cloudflare pages
		adapter: adapter()
	},
	extensions: ['.svelte', ...mdsvexConfig.extensions],

  	preprocess: [
		mdsvex(mdsvexConfig)
	]
};

export default config;
