/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		colors: {
			primary: {
				700: "#92278F",
				600: "#B54BB1",
				500: "#DA6DD4",
				400: "#FF90F8",
				300: "#FFB3FF",
			},
		},
		fontFamily: {
			sans: ["Cairo", "sans-serif"],
		},
		extend: {
			colors: {
				...colors,
			},
		},
	},
	plugins: [],
};
