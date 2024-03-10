/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{html,js}", "*.{html,js}"],
	theme: {
		colors: {
			primary: {
				50: "#fdf5fe",
				100: "#fbeafd",
				200: "#f7d4fa",
				300: "#f2b2f5",
				400: "#eb84ee",
				500: "#dc55e0",
				600: "#c335c4",
				700: "#a229a0",
				800: "#92278f",
				900: "#6d2269",
				950: "#470b44",
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
