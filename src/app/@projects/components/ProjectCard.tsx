"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGlobalStore } from "@/stores/useGlobalStore";
import { useProjectStore } from "@/stores/useProjectStore";
import { useInView } from "motion/react";
import Image from "next/image";
import type { Project } from "project";
import { useRef } from "react";
import { ProjectAwards } from "./ProjectAwards";
import ProjectTags from "./ProjectTags";

type ProjectCardProps = {
	className?: string;
	project: Project;
};

export default function ProjectCard({
	className = "",
	project,
}: ProjectCardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { setIsViewingProject } = useGlobalStore();
	const { setProject } = useProjectStore();
	const isInView = useInView(ref, {
		once: true,
		amount: "all",
	});

	const handleViewDetails = () => {
		setIsViewingProject(true);
		setProject(project);
	};

	return (
		<div
			ref={ref}
			className={cn(
				"relative rounded-lg hover:shadow-md bg-secondary/10 dark:bg-secondary/10 duration-300 shadow-gray-800 border-secondary/20 dark:border-secondary/40 border-[1px] h-fit overflow-hidden flex",
				className
			)}
		>
			<div className="relative w-full h-full grid grid-cols-3">
				<ProjectAwards {...project} isInView={isInView} />
				<div className="relative col-span-1 group">
					<div className="absolute top-0 left-0 flex justify-center items-center w-full h-full z-10 bg-black/10 dark:bg-black/40 group-hover:bg-black/20 duration-300"></div>
					<div className="absolute top-0 left-0 w-full h-full flex flex-col">
						<div className="relative w-full h-full overflow-hidden">
							<Image
								src={project.image}
								alt={project.title}
								className="w-full h-full object-cover rounded-sm scale-110 group-hover:scale-100 duration-1000"
								height={200}
								width={300}
							/>
						</div>
					</div>
				</div>
				<div className="min-h-[250px] col-span-2 px-6 py-4 flex flex-col justify-between">
					<div>
						<div className="text-2xl font-bold dark:text-white">
							{project.title}
						</div>
						<div className="mb-4 text-md text-secondary dark:text-primary">
							{project.longTitle}
						</div>
						<div className="text-md text-justify">
							{project.description}
						</div>
					</div>
					<div className="flex gap-2 items-end justify-between pt-6">
						<div className="flex gap-2 flex-wrap">
							<ProjectTags project={project} />
						</div>
						<div className="w-fit">
							<Button onClick={handleViewDetails}>
								View details
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
