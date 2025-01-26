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
	{
		date: '2024/03/14',
		title: 'Codepen link',
		description: 'Added a link to Codepen to the main CTA.',
		changes: [
			'Add Codepen logo as SVG',
			'Add link to Codepen profile',
		]
	},
	{
		date: '2024/03/17',
		title: 'Design refactor',
		description: 'Removed the design route and all the boilerplate component styles I built a week or two ago... Essentially these elements were defined for the sake of definition, but were not going to be used. I have opted to build out styles as needed when composing varous elements across the site, vs a weighty library built up front.',
		changes: [
			'Restyle home hero, add animation',
			'Distills theme to base and muted colors',
			'Applies theme globally with bg and text styles',
			'Removes design route',
			'Removes all the CSS I wrote',
		]
	},
	{
		date: '2024/03/18',
		title: 'Content copy',
		description: 'Migrated content from old MD files to new site, nothing visible at this time.',
		changes: [
			'Add case study layout component with blocked content',
			'Add generic gallery component to show images',
			'Copy paste a whole mess of old content',
		]
	},
	{
		date: '2024/03/26',
		title: 'Featured Case Study',
		description: 'Added a featured case study to the home page with some light styling.',
		changes: [
			'Add featured case study to home page',
			'Add basic styles to this element',
			'Make dark mode darker',
		]
	},
	{
		date: '2024/04/02',
		title: 'Style Case Study Content',
		description: 'Added some basic styles and formatting for case study content.',
		changes: [
			'Add styles for header, section titles, and body copy',
			'Move animation script to global component',
			'Improve gallery component spacing',
		]
	},
	{
		date: '2024/04/03',
		title: 'Update Case Study List',
		description: 'Refined case study content and added all case studies to home page.',
		changes: [
			'Add dynamic route for collection of case studies',
			'Convert featured case study element to reusable component',
			'Update animation script to handle other animation types',
			'Update responsive sizing and layout for case study body',
		]
	},
	{
		date: '2024/04/06',
		title: 'Update Case Study Previews',
		description: 'Added progressive disclosure pattern to case study list.',
		changes: [
			'Show 3 case studies at a time with action to show more',
			'Fix padding bug on case study details',
			'Add additional summary content to case study section',
		]
	},
	{
		date: '2024/04/23',
		title: 'Add Personal Projects',
		description: 'Added some personal projects to home page.',
		changes: [
			'Show a grid of personal projects',
			'Add relevant content to project pages',
			'Add relevant media to project pages',
		]
	},
	{
		date: '2025/01/19',
		title: 'Remove Legacy Content',
		description: 'I am finding less time to document my work the older I get and feel that the legacy content on my site is not adding much value (and does not age well). Time for some cleanup!',
		changes: [
			'Remove professional projects, assets available on Dribbble',
			'Remove personal projects',
			'New, focused content on home page',
			'Added professional recommendations',
			'Updated design and animations',
		]
	},
	{
		date: '2025/01/24',
		title: 'Subtle Animations',
		description: 'Added some additional animations to the navigation, hero, and section content. Also updated responsive styling for phones.',
		changes: [
			'Add animations to nav links',
			'Add animations to section elements',
			'Fix padding issue for references on mobile',
			'Fix grid layout for mobile',
		]
	},
	{
		date: '2025/01/25',
		title: 'Added About Page',
		description: 'To help tell my story I am including a new about page. This content covers my professional resume with some flavor about my career and journey in tech.',
		changes: [
			'Add about page and corresponding link',
			'Fix fade issue for index hero',
			'Fix fade issue for index summary',
		]
	},
	{
		date: '2025/01/25',
		title: 'Added Contact Section',
		description: 'Added a contact form to the site which will probably get tons of spam (hooray bots!). If you read this, send me a message so I know it works!',
		changes: [
			'Add contact form',
			'Update nav styling',
			'Fix minor style bugs throughout',
		]
	},
]
---
