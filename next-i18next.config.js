module.exports = {
	i18n: {
		defaultLocale: "ru",
		locales: ["es", "en", "ru"],
	},
	localePath: "./locales",
	reloadOnPrerender: process.env.NODE_ENV === "development",
};
