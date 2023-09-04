<script>
	export let content;
    export let metadata
    const { title, pubdate, lede, published, pid, contentEncoding, resourceType, featuredImage, tags } = metadata
</script>


<article>
    <h1>{title} </h1>
    
	{@html content}
</article>