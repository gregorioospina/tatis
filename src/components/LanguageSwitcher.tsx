import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

export const LANG_COOKIE = "language_pref";

const languages = [
	{ code: "es", name: "Español", flag: "🇪🇸" },
	{ code: "en", name: "English", flag: "🇺🇸" },
	{ code: "ru", name: "Русский", flag: "🇷🇺" },
];

export default function LanguageSwitcher() {
	const router = useRouter();

	const changeLanguage = (lng: string) => {
		// Use Next.js locale routing instead of query parameters
		const { pathname, asPath, query } = router;
		setCookie(LANG_COOKIE, lng);
		router.push({ pathname, query }, asPath, { locale: lng });
	};

	return (
		<div className="flex gap-2">
			{languages.map((lang) => (
				<button
					key={lang.code}
					onClick={() => changeLanguage(lang.code)}
					className={`px-2 py-1 text-sm rounded-md transition-colors bg-transparent text-white/70 hover:text-white hover:bg-white/10`}
					title={lang.name}>
					{lang.flag}
				</button>
			))}
		</div>
	);
}
