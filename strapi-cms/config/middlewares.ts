export default [
	"strapi::logger",
	"strapi::errors",
	"strapi::security",
	{
		name: "strapi::cors",
		config: {
			origin: ["http://localhost:5173"],
			methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
			allowedHeaders: ["Content-Type", "Authorization"],
		},
	},
	"strapi::poweredBy",
	"strapi::query",
	"strapi::body",
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];
