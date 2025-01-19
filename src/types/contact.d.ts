declare module "contact" {
    export type Contact = {
		link?: string;
		icon: React.ReactNode;
	};

	export type ContactCardType = {
		link: string;
		content: string;
	}
}