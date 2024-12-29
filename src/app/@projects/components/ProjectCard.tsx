import { cn } from "@/lib/utils";

export type Project = {
	title: string;
	longTitle?: string;
	description: string;
	image: string;
	link?: string;
};

type ProjectCardProps = {
	className?: string;
	project: Project;
};

export default function ProjectCard({
	className = "",
	project,
}: ProjectCardProps) {
	return (
		<div className={cn("rounded-sm p-2", className)}>{project.title}</div>
	);
}
