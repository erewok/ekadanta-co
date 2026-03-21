import { redirect } from '@sveltejs/kit';
import { loader } from '$lib/loader.js';
import { blogRedirects } from '$lib/redirects.js';

export async function load({ params }) {
	const newSlug = blogRedirects[params.slug];
	if (newSlug) throw redirect(301, `/posts/${newSlug}`);
	return await loader('blog', params.slug);
}
