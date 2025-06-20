import { Analytics } from "@vercel/analytics/next";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en" className="bg-black text-white">
			<Head>
				<meta name="theme-color" content="#000000" />
			</Head>
			<body>
				<Main />
				<NextScript />
				<Analytics />
			</body>
		</Html>
	);
}
