const nextConfig = {
	images: {
		// Allow remote image origins used in project data or external embeds.
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
				port: "",
				pathname: "/**",
			},
		],
	},
	turbopack: {
		// options
	},
};

export default nextConfig;
