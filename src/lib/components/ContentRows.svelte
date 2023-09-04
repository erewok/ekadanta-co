<script>
	export let data;
    export let contentType;
    
    import ContentListRow from '$lib/components/ContentListRow.svelte';
</script>

<section class="text-gray-600 body-font overflow-hidden">
	{#each data.posts as metadata (metadata.pid) }
		{#if metadata}
			<ContentListRow {contentType} {metadata} />
		{/if}
	{/each}
</section>
