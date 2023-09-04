<script>
	export let data;

	import { browser } from '$app/environment';
	import lazyload from 'vanilla-lazyload';
	import { Heading } from 'flowbite-svelte';

	const contentType = 'posts';
	import ContentRows from '$lib/components/ContentRows.svelte';

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}
</script>

<Heading class="p-8" tag="h1" customSize="text-3xl">Blog</Heading>

<ContentRows {contentType} {data} />