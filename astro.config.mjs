import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.fvcoder.com',
	integrations: [
		starlight({
			title: 'fvcoder docs',
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
				},
				es: {
					label: 'Español',
				}
			},
			sidebar: [
				{
					label: 'wasap-core',
					items: [
						{
							label: 'start',
							translations: {
								es: "Inicio",
								en: "Get Started"
							},
							link: '/wasap-core/start'
						}
					]
				},
			],
		}),
	],
});
