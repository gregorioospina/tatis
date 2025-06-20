import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
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
				"rotate-y-1": "rotate-y 19.3s linear infinite",
				"rotate-y-2": "rotate-y 3.3s linear infinite",
				"rotate-y-3": "rotate-y 7.3s linear infinite",
				"fade-out": "fade-out 0.3s ease-in-out",
			},
			keyframes: {
				"loop-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
				"rotate-y": {
					from: { transform: "rotateY(0deg)" },
					to: { transform: "rotateY(360deg)" },
				},
				"fade-out": {
					from: { opacity: "1" },
					to: { opacity: "0" },
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
