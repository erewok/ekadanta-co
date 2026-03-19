<svelte:head>
	<link rel="icon" href="/images/favicon.ico" />
	<link rel="stylesheet" href="/prism/prism.css" type="text/css" />
</svelte:head>

<script>
	import '../app.css';
	import Nav from './Nav.svelte';
	import Footer from './Footer.svelte';

	let { children } = $props();
</script>


<a href="#main-content" class="skip-link">Skip to main content</a>

<Nav />

<main id="main-content" tabindex="-1" class="max-w-[900px] mx-auto px-4 sm:px-8 py-10">
{@render children()}
</main>

<Footer />
