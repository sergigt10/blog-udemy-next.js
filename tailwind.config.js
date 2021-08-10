module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		backgroundColor: (theme) => ({
			...theme("colors"),
			header: "#049669",
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
