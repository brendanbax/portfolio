/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			"brand-light": '#31C8FF',
			"brand": '#00BAFF',
			"brand-dark": '#00A9EF',
			"slate-light": '#334155',
			"slate": '#1e293b',
			"slate-dark": '#0f172a',
			"pearl-light": '#f8fafc',
			"pearl": '#e2e8f0',
			"pearl-dark": '#cbd5e1',
			"transparent": 'rgba(255,255,255,0)',
			"inherit": "inherit",
		},
		borderRadius: {
			sm: '0.5rem',
			DEFAULT: '1rem',
			lg: '2rem',
		},
		fontFamily: {
			'sans': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
			'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
		}
	},
	plugins: [],
}
