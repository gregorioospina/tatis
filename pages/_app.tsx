import type { AppProps } from "next/app";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import { appWithTranslation } from 'next-i18next';

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--playfair" });
const opensans = Open_Sans({ subsets: ["latin"], variable: "--opensans" });

function App({ Component, pageProps }: AppProps) {
	return (
		<div className={`${playfair.variable} ${opensans.variable} bg-black text-white min-h-screen`}>
			<Component {...pageProps} />
		</div>
	);
}

export default appWithTranslation(App);
