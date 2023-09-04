<script>
	import {Heading, Img} from 'flowbite-svelte';

</script>

<Heading class="p-8" tag="h1" customSize="text-3xl">Podcast</Heading>

<div class="container px-5 py-12 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
        <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
			<Img class="rounded-lg object-cover h-48 w-56 mx-auto" alt="Surfing on a wave"  size="max-w-xs max-h-xs" src="/images/podcast-screenshot.png" />
		</div>
        <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Picture Me Coding</h2>
            <p class="leading-relaxed">I appear on a weekly podcast about software with my friend Mike Mull. We cover topics relevant to our industry and also chat about music.</p>
            <a class="text-indigo-500 inline-flex items-center mt-4" href="https://www.picturemecoding.com/" target="_blank">Listen here
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
            </svg>
            </a>
        </div>
    </div>
    </div>
</div>
