"use client";
import Image from "next/image";
import type { Project } from "project";
import { motion } from "motion/react";
import { useProjectStore } from "@/stores/useProjectStore";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useGlobalStore } from "@/stores/useGlobalStore";

type ProjectIconProps = {
	id: number;
	project: Project;
	delay: number;
};

export default function ProjectIcon({ id, project, delay }: ProjectIconProps) {
	const { title, image } = project;
	const { setSelectedProject, selectedProject, setProject } =
		useProjectStore();
	const { setIsViewingProject } = useGlobalStore();

	const handleClick = () => {
		setSelectedProject(id);
	};

	const [isReady] = useDebounce(selectedProject === id, 500);

	useEffect(() => {
		if (isReady) {
			setProject(project);
			setIsViewingProject(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isReady]);

	return (
		<motion.div
			className={cn(
				"relative w-full h-[140px] flex flex-col items-center gap-2 group cursor-pointer"
			)}
			layout
			initial={{ opacity: 0, scale: 0.3 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				delay,
			}}
			onClick={handleClick}
		>
			{/* <motion.div
				className={cn(
					"absolute top-0 left-0 h-full w-full z-0 pointer-events-none",
					selectedProject === id && "fixed z-[100]"
				)}
				layout
				transition={{
					duration: 0.5,
					ease: [0.785, 0.135, 0.15, 0.86],
				}}
			>
				<div
					className={cn(
						"absolute left-0 top-0 h-full w-full bg-black/90 backdrop-blur-lg blur-[10px] opacity-0 duration-1000",
						selectedProject === id && "opacity-100",
					)}
				></div>
				<div
					className={cn(
						"absolute top-0 left-0 opacity-0 w-full h-full flex items-center justify-center duration-500",
						selectedProject === id && "opacity-100"
					)}
				>
					<div className="relative z-10 w-full h-full grid grid-cols-5">
						<div className="col-span-3 w-full h-full p-20 space-y-2">
							<div className="flex flex-col space-y-1 ">
								<h1 className="text-5xl text-white uppercase font-bold tracking-widest">
									{project.title}
								</h1>
								<div className="text-secondary text-lg">
									<span>a.k.a </span>
									<span className="font-bold">
										{project.longTitle}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div> */}
			<div className="relative h-full w-[120px] bg-primary rounded-ss-3xl rounded-br-3xl border-secondary border-2 overflow-hidden duration-300 group-hover:-translate-y-1">
				<div className="absolute top-0 left-0 bg-black/40 w-full h-full duration-300 group-hover:bg-black/20 z-10"></div>
				<Image
					alt={title}
					src={image}
					height={128}
					width={128}
					className="object-cover h-full w-full duration-300 scale-110 group-hover:scale-100"
				/>
			</div>
			<div className="font-bold text-center truncate max-w-[90%] duration-300 group-hover:text-primary">
				{title}
			</div>
		</motion.div>
	);
}
