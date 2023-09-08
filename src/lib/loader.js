import { error } from '@sveltejs/kit';

/**
 * @param {string} contentType
 * @param {string} uuid
 */

export async function loader(contentType, uuid) {

	const post = await import(`../content/${contentType}/${uuid}.svx`)
	if (!post) throw error(404);

	const { default: renderer, metadata } = post;
	const content = renderer.render().html;

	return {
		metadata,
		content,
	}
}

/**
 * @param {string} contentType
 */
export async function contentList(contentType) {
	const blogModules = import.meta.glob('../content/blog/*.svx');
	const projectModules = import.meta.glob('../content/projects/*.svx');
	let mdModules = blogModules;
	if (contentType === 'projects') {
		mdModules = projectModules;
	}

	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const { metadata } = await mdModules[path]();
			if (metadata) {
				const { title, pubdate, lede, published, pid, contentEncoding, resourceType, featuredImage, tags, imageAlt } = metadata;
				return { title, pubdate, lede, published, pid, contentEncoding, resourceType, featuredImage, tags, imageAlt  };
			}
		})
	);
	// sort latest first
	posts.sort( (a, b) => {
		const adate = new Date(a.pubdate);
		const bdate = new Date(b.pubdate);
		return bdate - adate;
	});
	return { posts };
}