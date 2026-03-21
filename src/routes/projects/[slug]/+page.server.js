import { redirect } from '@sveltejs/kit';
import { loader } from '$lib/loader.js';
import { projectRedirects } from '$lib/redirects.js';

export async function load({ params }) {
	const newSlug = projectRedirects[params.slug];
	if (newSlug) throw redirect(301, `/projects/${newSlug}`);
	return await loader('projects', params.slug);
}
