<script>
	export let content;
    export let metadata
    
    import {Heading, Img} from 'flowbite-svelte';
    import TagList from './TagList.svelte';

    const { title, pubdate, featuredImage, tags } = metadata
    const date = (new Date(pubdate)).toLocaleDateString();
</script>


<article class="mx-auto prose lg:prose-xl">
    <div class="flex-shrink-0 flex flex-col">
        <Heading class="pyt-12 pyb-4" tag="h1" customSize="text-3xl">{title}</Heading>
        <span class="font-semibold title-font text-gray-500">{date}</span>
    </div>
    <Img class="w-full rounded-lg object-cover mx-auto" alt="{metadata.imageAlt}"  size="max-w-xl" src="{featuredImage}" />
	
    {@html content}

    <TagList {tags} />

</article>