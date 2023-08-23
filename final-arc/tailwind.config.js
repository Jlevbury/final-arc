/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				crafttone: ["crafttone", "sans"],
				digitalo: ["digitalo", "sans"],
				nemesys: ["NEMESYS-Regular", "sans"],
				robotika: ["RobotikaBold", "sans"],
				sabiko: ["sabiko", "sans"],
			},
		},
	},
	plugins: [],
};
