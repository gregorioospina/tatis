const path = require("path");

module.exports = {
	i18n: {
		defaultLocale: "ru",
		locales: ["es", "en", "ru"],
	},
	localePath: path.resolve("./public/locales"),
};
