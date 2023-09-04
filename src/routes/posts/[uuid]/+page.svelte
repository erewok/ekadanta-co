<script>
	import { browser } from '$app/environment';
	import lazyload from 'vanilla-lazyload';
	
	import ContentDetail from '$lib/components/ContentDetail.svelte';

	export let data;

	const { content, metadata } = data;
	
	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}
</script>

<ContentDetail {content} {metadata} />