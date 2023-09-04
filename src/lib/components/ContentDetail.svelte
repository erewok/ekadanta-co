<script>
	export let content;
    export let metadata
    
    import {Heading, Img} from 'flowbite-svelte';

    const { title, pubdate, featuredImage, tags } = metadata
    const imageAlt = ''; // should come from metadata too
    const date = (new Date(pubdate)).toLocaleDateString();
</script>


<article class="mx-auto prose lg:prose-xl">
    <div class="flex-shrink-0 flex flex-col">
        <Heading class="pyt-12 pyb-4" tag="h1" customSize="text-3xl">{title}</Heading>
        <span class="font-semibold title-font text-gray-500">{date}</span>
    </div>
    <Img class="w-full rounded-lg object-cover mx-auto" alt="{imageAlt}"  size="max-w-xl" src="{featuredImage}" />
	
    {@html content}

    <span class="mt-10 pt-10 text-gray-500 text-sm">Tags: {tags}</span>

</article>