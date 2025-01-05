/** @type {import("prettier").Config} */
const config  = {
	printWidth: 110,
	singleQuote: true,
	jsxSingleQuote: false,
	bracketSameLine: true,
	useTabs: true,
	tabWidth: 4,
	trailingComma: 'es5',
	arrowParens: 'always',
	plugins: ['prettier-plugin-tailwindcss']
}

export default config;