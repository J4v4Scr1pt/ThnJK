/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
const svgToDataUri = require('mini-svg-data-uri');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

const config: Config = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			keyframes: {
				'scrolling-banner': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-50% - var(--gap)/2))' },
				},
				'scrolling-banner-vertical': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-50% - var(--gap)/2))' },
				},
			},
			animation: {
				'scrolling-banner': 'scrolling-banner var(--duration) linear infinite',
				'scrolling-banner-vertical': 'scrolling-banner-vertical var(--duration) linear infinite',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: '#f02931',
							'50': '#200000',
							'100': '#4a0005',
							'200': '#78040b',
							'300': '#a80911',
							'400': '#d60f18',
							'500': '#f02931',
							'600': '#f4575f',
							'700': '#f9878c',
							'800': '#ffb6b8',
							'900': '#ffe3e5',
						},
						secondary: {
							DEFAULT: '#d2ad49',
							'50': '#181000',
							'100': '#3e310c',
							'200': '#675219',
							'300': '#907325',
							'400': '#907325',
							'500': '#d2ad49',
							'600': '#dcbf70',
							'700': '#e6d198',
							'800': '#f1e4be',
							'900': '#fcf6e2',
						},
					},
				},
				dark: {
					colors: {
						primary: {
							DEFAULT: '#f02931',
							'50': '#ffe3e5',
							'100': '#ffb6b8',
							'200': '#f9878c',
							'300': '#f4575f',
							'400': '#f02931',
							'500': '#d60f18',
							'600': '#a80911',
							'700': '#78040b',
							'800': '#4a0005',
							'900': '#200000',
						},
						secondary: {
							DEFAULT: '#907325',
							'50': '#fcf6e2',
							'100': '#f1e4be',
							'200': '#e6d198',
							'300': '#dcbf70',
							'400': '#d2ad49',
							'500': '#907325',
							'600': '#907325',
							'700': '#675219',
							'800': '#3e310c',
							'900': '#181000',
						},
					},
				},
			},
		}),
		addVariablesForColors,
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					'bg-dot-thick': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			);
		},
	],
};

function addVariablesForColors({ addBase, theme }: any) {
	const allColors = flattenColorPalette(theme('colors'));
	const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

	addBase({
		':root': newVars,
	});
}

export default config;
