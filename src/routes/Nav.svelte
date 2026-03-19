<script>
	import { page } from '$app/stores';

	let menuOpen = false;

	const links = [
		{ href: '/posts', label: 'Blog' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/podcast', label: 'Podcast' }
	];

	$: activePath = $page.url.pathname;

	function isActive(href) {
		if (href === '/') return activePath === '/';
		return activePath.startsWith(href);
	}

	function handleKeydown(event) {
		if (event.key === 'Escape' && menuOpen) {
			menuOpen = false;
		}
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<header>
	<div class="nav-inner max-w-[900px] mx-auto px-4 sm:px-8">
		<!-- Brand -->
		<a href="/" class="nav-brand">
			<img src="/images/favicon.ico" alt="" aria-hidden="true" class="h-7 w-7" />
			<span>erikaker.com</span>
		</a>

		<!-- Hamburger — mobile only -->
		<button
			class="hamburger"
			aria-label="Toggle navigation"
			aria-expanded={menuOpen}
			on:click={() => (menuOpen = !menuOpen)}
		>
			{#if menuOpen}
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					fill="none" stroke="currentColor" stroke-width="2"
					stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					fill="none" stroke="currentColor" stroke-width="2"
					stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="3" y1="12" x2="21" y2="12" />
					<line x1="3" y1="6" x2="21" y2="6" />
					<line x1="3" y1="18" x2="21" y2="18" />
				</svg>
			{/if}
		</button>

		<!-- Desktop nav -->
		<nav aria-label="Main navigation" class="desktop-nav">
			<ul id="nav-menu">
				{#each links as link}
					<li>
						<a
							href={link.href}
							aria-current={isActive(link.href) ? 'page' : undefined}
							on:click={closeMenu}
							class="nav-link"
							class:active={isActive(link.href)}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<!-- Mobile nav -->
	{#if menuOpen}
		<nav aria-label="Mobile navigation" class="mobile-nav">
			<ul>
				{#each links as link}
					<li>
						<a
							href={link.href}
							aria-current={isActive(link.href) ? 'page' : undefined}
							on:click={closeMenu}
							class="nav-link"
							class:active={isActive(link.href)}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>

<style>
	header {
		background-color: #fdf6e3;
		border-bottom: 1px solid #e8dfc8;
		position: sticky;
		top: 0;
		z-index: 50;
	}

	.nav-inner {
		display: flex;
		align-items: center;
		height: 56px;
	}

	.nav-brand {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		flex: 1;
		color: #1a3a4a;
		font-weight: 600;
		font-size: 18px;
	}

	/* Hamburger: flex on mobile, hidden on desktop */
	.hamburger {
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.25rem;
		color: #1a3a4a;
	}

	@media (min-width: 640px) {
		.hamburger {
			display: none;
		}
	}

	/* Desktop nav: hidden on mobile, visible on desktop */
	.desktop-nav {
		display: none;
	}

	@media (min-width: 640px) {
		.desktop-nav {
			display: block;
		}
	}

	.desktop-nav ul {
		display: flex;
		flex-direction: row;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 1.5rem;
	}

	/* Mobile nav */
	.mobile-nav {
		background-color: #fdf6e3;
		border-top: 1px solid #e8dfc8;
	}

	.mobile-nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.mobile-nav .nav-link {
		display: block;
		padding: 12px 16px;
	}

	.nav-link {
		color: #475569;
		font-size: 15px;
		text-decoration: none;
	}

	.nav-link:hover {
		color: #0f7a6e;
		text-decoration: underline;
	}

	.nav-link.active {
		color: #0f7a6e;
		font-weight: 500;
		text-decoration: underline;
	}

	.nav-link:focus-visible {
		outline: 2px solid #0f7a6e;
		outline-offset: 3px;
	}
</style>
