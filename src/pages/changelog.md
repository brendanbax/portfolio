---
layout: '../layouts/Changelog.astro'
title: 'Changelog'
changelog: [
	{
		date: '2024/02/24',
		title: 'Initial release',
		description: 'A new chapter begins! This is a complete overhaul of my site using new technology, creating new content, and taking a very different development approach.',
		changes: [
			'Create a blank Astro site, deployed to Netlify',
			'Style placeholder content for homepage',
			'Add changelog page and data structure',
		]
	},
	{
		date: '2024/02/27',
		title: 'Theme build',
		description: 'Leveraged Tailwind to create a custom theme, supporting light and dark modes.',
		changes: [
			'Create a theme toggle in header',
			'Create a color theme for both modes',
			'Connect theme selection to local storage and OS prefs',
			'Add link to changelog in footer',
		]
	},
	{
		date: '2024/03/04',
		title: 'Layout update',
		description: 'Updated the layout for a fixed navbar. The nav and footer are now dedicated components.',
		changes: [
			'Set page height to be dynamic',
			'Style theme toggle with Tailwind classes',
			'Add logo to navbar, make nav its own component',
			'Add dedicated footer component with links to source'
		]
	},
	{
		date: '2024/03/05',
		title: 'Design system documentation',
		description: 'Created a dedicated design page to document the evolving type scale and styles.',
		changes: [
			'Add design route, link in footer',
			'Build semantic CSS classes for typography',
			'Build basic component styles for cards and buttons'
		]
	},
	{
		date: '2024/03/06',
		title: 'Minor style updates',
		description: 'Applied container styles to changelog and added some padding for mobile users.',
		changes: [
			'Add WIP link styles to navigation',
			'Add padding to content pages',
			'Apply card styles to changelog cards'
		]
	},
	{
		date: '2024/03/12',
		title: 'Responsive style updates',
		description: 'Applied design system styles to changelog, improved responsive layout for design page.',
		changes: [
			'Add xs breakpoint to Tailwind config',
			'Add responsive styles to 2 col grid on design page',
			'Apply type scale to changelog cards and page header'
		]
	},
]
---
