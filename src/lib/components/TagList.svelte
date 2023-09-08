<script>
    /**
	 * @type {string[]}
	 */
	export let tags;
</script>


<p class="pt-5 text-gray-500 text-sm mx-auto">Tags:
    {#each tags as tag, index } {tag}{#if index != tags.length - 1}, {/if} {/each}
</p>