declare module "career" {
	export type CareerSnapshot = {
		role: string;
		company: string;
		start: Date;
		end?: Date;
		logo: string;
		banner: string;
		address: string;
		bullets: string[];
		height?: number;
		width?: number;
		className?: string;
		active?: boolean;
		onClick?: () => void;
	};
}
