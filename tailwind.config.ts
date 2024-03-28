import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				default: {
					body: "#04001A",
				},
				primary: {
					50: "#E9E6F8",
					200: "#988ADF",
					500: "#1E00B9",
				},
				secondary: {
					200: "#DDF1A5",
					400: "#C3E763",
					500: "#B4E13C",
					800: "#637C21",
				},
				neutral: {
					50: "#E6E6E8",
					100: "#B1B0B8",
					200: "#8C8A96",
				},
				warning: {
					100: "#F3DCB0",
					500: "#D88E00",
				},
				danger: {
					50: "#FCE6E6",
					300: "#EC5454",
					600: "#CE0000",
				},
			},
			backgroundImage: {},
		},
	},
	plugins: [],
};
export default config;
