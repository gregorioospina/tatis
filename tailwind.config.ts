import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				title: "var(--playfair)",
				body: "var(--opensans)",
			},
			colors: {
				"t-black": "#333333",
				"t-white": "#ECECEC",
				"t-blue": "#293F48",
				"t-green": "#5FAC62",
			},
			animation: {
				"loop-scroll": "loop-scroll 1.3s linear infinite",
			},
			keyframes: {
				"loop-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};

export default config;
