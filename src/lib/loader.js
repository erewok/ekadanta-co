import { error } from '@sveltejs/kit';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';

// Grab raw .svx file content at build time (Vite resolves glob statically)
const rawFiles = import.meta.glob('../content/**/*.svx', { query: '?raw', import: 'default' });

const processor = unified()
	.use(remarkParse)
	.use(remarkGfm)
	.use(remarkRehype, { allowDangerousHtml: true })
	.use(rehypePrism)
	.use(rehypeStringify, { allowDangerousHtml: true });

/** Strip YAML frontmatter block from raw .svx content */
function stripFrontmatter(raw) {
	// Normalize CRLF → LF so the regex works regardless of line-ending style
	return raw.replace(/\r\n/g, '\n').replace(/^---\n[\s\S]*?\n---\n?/, '');
}

/**
 * @param {string} contentType  'blog' | 'projects'
 * @param {string} slug
 */
export async function loader(contentType, slug) {
	const key = `../content/${contentType}/${slug}.svx`;

	// Use mdsvex-compiled component only for metadata (a named export)
	const post = await import(`../content/${contentType}/${slug}.svx`).catch(() => null);
	if (!post) throw error(404);
	const { metadata } = post;

	// Process raw markdown independently — avoids Svelte 5 render() compatibility issues
	const getRaw = rawFiles[key];
	if (!getRaw) throw error(404);
	const raw = await getRaw();

	const markdownBody = stripFrontmatter(raw);
	const result = await processor.process(markdownBody);

	return {
		metadata,
		content: String(result),
	};
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
				const slug = path.split('/').pop().replace('.svx', '');
				const { title, pubdate, lede, published, contentEncoding, resourceType, featuredImage, tags, imageAlt } = metadata;
				return { title, pubdate, lede, published, slug, contentEncoding, resourceType, featuredImage, tags, imageAlt };
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
