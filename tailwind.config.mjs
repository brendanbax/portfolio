/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'fg-muted': 'var(--text-muted)',
				fg: 'var(--text-default)',
				'fill-muted': 'var(--fill-muted)',
				fill: 'var(--fill-default)',
				'accent-muted': 'var(--accent-muted)',
				accent: 'var(--accent-default)'
			},
			fontFamily: {
				sans: 'Quicksand Variable'
			},
			screens: {
				xs: '480px'
			}
		}
	},
	plugins: []
}
