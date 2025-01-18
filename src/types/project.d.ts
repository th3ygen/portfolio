declare module "project" {
	export type Photo = {
		path: string;
		caption: string;
		category: "ui" | "camera";
	};

	export type ProjectTag = {
		name: string;
		color: string;
		icon: React.ReactNode;
		tooltip: string;
	};

    type ProjectTagName =
		| "pnc"
		| "pub"
		| "internal"
		| "research"
		| "iot"
		| "ai_ml"
		| "payment_gateway"
		| "geospatial"
		| "real_time"
		| "automation"
		| "compliance"
		| "award"
		| "collaborative"
		| "prototype"
		| "seo"
		| "cms"
		| "no_backend"
		| "static";

	export type Client = {
		name: string;
		shortName: string;
		logo: {
			src: string;
			width: number;
			height: number;
		};
		link: string;
	};

	export type ProjectAward = {
		title: string;
		medal?: "gold" | "silver" | "bronze";
	};

	export type Project = {
		title: string;
		longTitle?: string;
		description: string;
		longDescription?: string[];
		clients?: Client[];
		role?: string;
		highlights?: string;
		technologies?: string;
		awards?: ProjectAward[];
		image: string;
		link?: string;
		gallery?: Photo[];
		tags?: Array<ProjectTagName>;
	};
}
