/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter"],
			},
			backgroundImage: {
				night: "url('/night-background.jpg)",
				day: "url('/day-background.jpg)",
			},
		},
	},
	plugins: [],
};
