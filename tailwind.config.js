/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/sections/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "media",
	theme: {
		extend: {
			colors: {
				accent: {
					DEFAULT: "#09F1A4",
					600: "#0CE8A0",
				},
			},
			fontFamily: {
				sans: ["var(--font-geist-sans)", "Inter", "ui-sans-serif", "system-ui"],
				mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
			},
		},
	},
	plugins: [],
};
