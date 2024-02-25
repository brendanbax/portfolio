/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				topography: "url('./topography.svg')"
			},
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				accent: 'var(--color-accent)',
				default: 'var(--color-text-default)',
				muted: 'var(--color-text-muted)'
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
				serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
				heading: ['var(--font-heading)', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
}
