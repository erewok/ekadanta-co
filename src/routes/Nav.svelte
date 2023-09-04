<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
	} from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img
			src="/images/favicon.ico"
			class="mr-3 h-6 sm:h-9"
			alt="Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ekadanta.co</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/podcast">Podcast</NavLi>
		<NavLi href="/posts">Blog</NavLi>
		<NavLi href="/projects">Projects</NavLi>
		<NavLi>
			<div>
				<DarkMode btnClass={darkmodebtn} />
			</div>
		</NavLi>
	</NavUl>
</Navbar>
