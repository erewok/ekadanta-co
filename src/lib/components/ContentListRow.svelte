<script> 
    export let contentType;
	export let metadata;

    import {Img} from 'flowbite-svelte';
    import TagList from './TagList.svelte';
    const tags = metadata.tags;

    const date = (new Date(metadata.pubdate)).toLocaleDateString();
</script>


<div class="container px-5 py-12 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
        <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 lg:w-80 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <Img class="rounded-lg object-cover w-40 md:w-48 lg:w-56 mx-auto" alt="{metadata.imageAlt}" size="max-w-xs max-h-xs" src="{metadata.featuredImage}" />
            <span class="font-semibold title-font text-gray-700 mx-auto">{date}</span>
            <TagList {tags} />
        </div>
        <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{metadata.title}</h2>
            <p class="leading-relaxed">{metadata.lede}</p>
            <a class="text-indigo-500 inline-flex items-center mt-4" href="/{contentType}/{metadata.pid}">Read More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
            </svg>
            </a>
        </div>
    </div>
    </div>
</div>

