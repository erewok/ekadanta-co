import { loader } from '$lib/loader.js';


export async function load({ params }) {
	return await loader('blog', params.uuid);
}
