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
import { motion } from "motion/react";
import EnterTransition from "../motion/EnterTransition";

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
		<motion.div
			ref={ref}
			layoutId={`project-container-${project.title}`}
			className={cn(
				"relative rounded-lg hover:shadow-md bg-secondary/10 dark:bg-secondary/10 duration-300 shadow-gray-800 border-secondary/20 dark:border-secondary/40 border-[1px] h-fit overflow-hidden flex",
				className
			)}
		>
			<EnterTransition direction="right" once className="relative w-full h-full grid grid-cols-1 lg:grid-cols-3">
				<ProjectAwards {...project} isInView={isInView} />
				<div className="relative col-span-1 group h-[200px] w-full lg:h-full">
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
				<div className="min-h-[250px] lg:col-span-2 px-4 lg:px-6 py-4 flex flex-col justify-between">
					<motion.div layoutId={`project-title-${project.title}`}>
						<div className="text-center lg:text-left text-2xl font-bold dark:text-white">
							{project.title}
						</div>
						<div className="text-center lg:text-left mt-2 lg:mt-0 mb-4 text-secondary dark:text-primary">
							{project.longTitle}
						</div>
					</motion.div>
					<motion.div
						className="text-justify"
						layoutId={`project-description-${project.title}`}
					>
						{project.description}
					</motion.div>
					<div className="flex flex-col lg:flex-row gap-4 lg:gap-2 items-center lg:items-end justify-between pt-6">
						<motion.div
							className="flex gap-2 flex-wrap"
							layoutId={`project-tags-${project.title}`}
						>
							<ProjectTags project={project} />
						</motion.div>
						<div className="w-fit">
							<Button onClick={handleViewDetails}>
								View details
							</Button>
						</div>
					</div>
				</div>
			</EnterTransition>
		</motion.div>
	);
}
