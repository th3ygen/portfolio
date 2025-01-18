declare module "toolkit" {
    export type Tool = {
		name: string;
		icon: React.ReactNode;
		link?: string;
	};
    export type ToolKit = Record<string, Tool[]>;
}