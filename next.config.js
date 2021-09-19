module.exports = {
	reactStrictMode: true,
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./utils/generateSiteMap");
		}

		return config;
	},
	// async headers() {
	// 	return [
	// 		{
	// 			source: "/(.*)",
	// 			headers: [
	// 				{
	// 					key: "X-Content-Type-Options",
	// 					value: "nosniff",
	// 				},
	// 				{
	// 					key: "X-Frame-Options",
	// 					value: "DENY",
	// 				},
	// 				{
	// 					key: "X-XSS-Protection",
	// 					value: "1; mode=block",
	// 				},
	// 			],
	// 		},
	// 	];
	// },
};
