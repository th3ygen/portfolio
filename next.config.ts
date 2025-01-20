import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ngmuxtumi9qvxe9g.public.blob.vercel-storage.com",
				port: "",
				pathname: "**",
				search: "",
			},
			{
				protocol: "https",
				hostname: "assets.aceternity.com",
				port: "",
				pathname: "**",
				search: "",
			},
		],
	},
};

export default nextConfig;
