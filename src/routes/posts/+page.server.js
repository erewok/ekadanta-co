import { contentList } from '$lib/loader.js';


export async function load() {
	return await contentList("blog");
}