import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--playfair" });
const opensans = Open_Sans({ subsets: ["latin"], variable: "--opensans" });

export const metadata: Metadata = {
	title: "Tatiana Voronetska",
	description: "Aprender no tiene límites",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-black text-white">
			<body className={`${playfair.variable} ${opensans.variable}`}>{children}</body>
		</html>
	);
}
