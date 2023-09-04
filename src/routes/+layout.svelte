<svelte:head>
	<link rel="icon" href="/images/favicon.ico" />
	<link rel="stylesheet" href="/prism/prism.css" type="text/css" />
</svelte:head>

<script>
	import '../app.css';
	import Nav from './Nav.svelte';
	import Footer from './Footer.svelte';
</script>


<Nav />

<main class="px-20 py-10 mx-auto">
<slot />
</main>

<Footer />
