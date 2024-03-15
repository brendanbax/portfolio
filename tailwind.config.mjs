/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				topography: "url('/topography.svg')"
			},
			colors: {
				bolt: '#FFA903',
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				accent: 'var(--color-accent)',
				brand: 'var(--color-brand)',
				default: 'var(--color-default)',
				muted: 'var(--color-muted)'
			},
			fontFamily: {
				brand: 'var(--font-brand)',
				sans: 'var(--font-sans)',
				serif: 'var(--font-serif)',
				heading: 'var(--font-serif)'
			},
			screens: {
				xs: '480px'
			}
		}
	},
	plugins: []
}
