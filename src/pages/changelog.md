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
		title: 'Navbar update',
		description: 'Updates the navbar to be a dedicated component with Tailwind style logic for theme toggle.',
		changes: [
			'Set page height to be dynamic',
			'Style theme toggle with Tailwind classes',
			'Add logo to navbar, make nav its own component',
		]
	},
]
---
