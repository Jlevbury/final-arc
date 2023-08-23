/** @type {import('tailwindcss').Config} */

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/tw-elements-react/dist/js/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				crafttone: ["crafttone", "sans"],
				digitalo: ["digitalo", "sans"],
				nemesys: ["NEMESYS-Regular", "sans"],
				robotika: ["RobotikaBold", "sans"],
				sabiko: ["sabiko", "sans"],
				neowave: ["neowave", "sans"],
				modifi: ["modifi", "sans"],
			},
		},
	},
	darkMode: "class",
	plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
