module.exports = {
	i18n: {
		defaultLocale: "ru",
		locales: ["es", "en", "ru"],
		localeDetection: false,
	},
	localePath: "./locales",
	reloadOnPrerender: process.env.NODE_ENV === "development",
};
