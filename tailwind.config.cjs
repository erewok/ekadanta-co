const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts,svx}',
	],

	theme: {
		extend: {
			colors: {
				'teal-deep': '#1a3a4a',
				'teal-mid': '#0f7a6e',
				'teal-dark-tag': '#0f5c54',
				'seafoam': '#a8d5cc',
				'seafoam-pale': '#d4e9e5',
				'code-bg': '#f0f4f3',
				'sand': '#e8dfc8',
			}
		}
	},

	plugins: [
		require('@tailwindcss/typography'),
	]
};

module.exports = config;
