"use client";

import { useGlobalStore } from "@/stores/useGlobalStore";
import { useProjectStore } from "@/stores/useProjectStore";
import { AnimatePresence, motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGlobe } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdOutlineClose } from "react-icons/md";
import React, { useEffect, useRef } from "react";
import { ProjectAwards } from "./ProjectAwards";
import ProjectTags from "./ProjectTags";
import ProjectGallery from "./ProjectGallery";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/hooks/use-outside-click";

const CV_PATH = process.env.NEXT_PUBLIC_CV_PATH;

function CVLink() {
	return (
		<Link
			href={CV_PATH || "/#"}
			target="_blank"
			className="text-primary underline flex items-center gap-1"
		>
			CV
			<FaExternalLinkAlt size={12} />
		</Link>
	);
}

function Container() {
	const ref = useRef<HTMLDivElement>(null);
	const { setIsViewingProject } = useGlobalStore();
	const { project, setSelectedProject } = useProjectStore();
	const bottomRef = useRef<HTMLDivElement>(null);
	const hasHitBottom = useInView(bottomRef, {
		amount: "all",
	});

	useOutsideClick(ref, () => {
		setIsViewingProject(false);
		setSelectedProject(-1);
	});

	// on esc press
	useEffect(() => {
		const listener = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsViewingProject(false);
				setSelectedProject(-1);
			}
		};

		document.addEventListener("keydown", listener);

		return () => {
			document.removeEventListener("keydown", listener);
		};
	}, [setIsViewingProject, setSelectedProject]);

	const handleClose = () => {
		setIsViewingProject(false);
		setSelectedProject(-1);
	};

	const Descriptions: React.FC = () => {
		const { title, longDescription } = project;

		if (!longDescription || longDescription.length === 0) return null;

		return longDescription.map((desc, index) => {
			return (
				<p key={title + index} className="text-justify lg:leading-8">
					{desc}
				</p>
			);
		});
	};

	const Clients: React.FC = () => {
		const { title, clients } = project;

		if (!clients || clients.length === 0) return null;

		return clients.map((client, index) => {
			return (
				<div
					key={title + "-client-" + index}
					className="flex flex-col justify-between group gap-2"
				>
					<div className="h-[80px] flex items-center justify-center rounded-md group-hover:bg-white hover:scale-110 duration-300 cursor-pointer">
						<Link href={client.link} target="_blank">
							<div className="h-fit w-fit px-2 py-1 flex flex-col items-center">
								<Image
									alt={client.shortName}
									src={client.logo.src}
									height={client.logo.height}
									width={client.logo.width}
									className="object-contain"
								/>
							</div>
						</Link>
					</div>
					<div className="text-center text-lg font-bold opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-1 duration-700">
						{client.shortName}
					</div>
				</div>
			);
		});
	};

	const totalTechnologies = project.technologies
		? project.technologies.split(", ").length
		: 0;

	return (
		<motion.div
			className="fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center z-50 overflow-hidden"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="absolute top-0 left-0 w-full h-full  bg-black/40 backdrop-blur-sm"></div>

			<motion.div
				ref={ref}
				className="relative z-10 max-w-full lg:max-w-7xl h-full lg:h-5/6 grid grid-cols-1 lg:grid-cols-5 bg-black overflow-hidden rounded-lg"
				layoutId={`project-container-${project.title}`}
			>
				{/* close button */}
				<Button
					className="absolute top-0 right-0 p-4 m-4 z-50 flex items-center"
					variant="ghost"
					onClick={handleClose}
				>
					<MdOutlineClose className="text-5xl" />
					<span>Close</span>
				</Button>

				{/* image overlay */}
				<div className="absolute left-0 top-0 w-full h-full z-0 opacity-15">
					<Image
						alt={project.title}
						src={project.image}
						height={768}
						width={1024}
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="absolute top-0 left-0 w-full h-[50px] bg-gradient-to-b from-black from-20% to-transparent z-10 pointer-events-none"></div>
				<div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black from-20% to-transparent z-10 pointer-events-none"></div>
				<div className="absolute left-0 bottom-0 w-full lg:w-3/5 h-[150px] flex items-center justify-center pt-20 z-10 pointer-events-none">
					<div
						className={cn(
							"text-primary animate-bounce opacity-100 transition-opacity",
							hasHitBottom && "opacity-0"
						)}
					>
						Scroll down
					</div>
				</div>
				<div className="relative col-span-3 w-full h-full pt-14 p-8 lg:p-20 space-y-2 overflow-y-scroll no-scrollbar pb-32">
					<motion.div
						className="flex flex-col space-y-1"
						layoutId={`project-title-${project.title}`}
					>
						<h1 className="text-5xl text-white uppercase font-bold tracking-widest">
							{project.title}
						</h1>
						<div className="text-secondary text-lg">
							<span>a.k.a </span>
							<span className="font-bold">
								{project.longTitle}
							</span>
						</div>
					</motion.div>

					<div className="absolute top-[54px] right-10 lg:top-20 lg:right-20">
						<ProjectAwards isInView={true} {...project} />
					</div>

					<motion.div
						className="flex gap-2 pt-4"
						layoutId={`project-tags-${project.title}`}
					>
						<ProjectTags project={project} />
					</motion.div>

					<div className="py-4">
						<div className="text-accent">
							<span>Contributed as a </span>
							<span className="font-bold">{project.role}</span>,
							utilizing over{" "}
							<span className="font-bold">
								{totalTechnologies}
							</span>{" "}
							technologies
						</div>
					</div>

					{project.link !== "#" && project.link !== "" && (
						<div className="pb-4 flex items-center gap-2">
							<span>
								<FaGlobe size={18} />
							</span>
							<Link
								href={project.link!}
								target="_blank"
								className="flex items-center gap-2 text-primary/60 hover:text-primary duration-150"
							>
								{project.title}
								<FaExternalLinkAlt size={12} />
							</Link>
						</div>
					)}

					<div className="flex flex-col">
						<div className="mb-2">
							<h2 className="text-primary font-bold text-lg">
								A little bit about the project
							</h2>
						</div>
						<motion.div
							className="space-y-2"
							layoutId={`project-description-${project.title}`}
						>
							<Descriptions />
						</motion.div>
					</div>
					<div ref={bottomRef} className="grid pt-4">
						<div className="flex flex-col">
							<div className="mb-2">
								<h2 className="text-primary font-bold text-lg">
									Stakeholders
								</h2>
							</div>
							<div className="flex space-x-4">
								<Clients />
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<div className="mb-2">
								<h2 className="text-primary font-bold text-lg">
									Learn more
								</h2>
							</div>
							<div className="flex space-x-2">
								<span>Check my</span> <CVLink />
								<span>to learn more</span>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden lg:block relative col-span-2 h-full">
					<ProjectGallery {...project} />
				</div>
			</motion.div>
		</motion.div>
	);
}

export default function ProjectDetails() {
	const { isViewingProject } = useGlobalStore();

	return (
		<AnimatePresence>{isViewingProject && <Container />}</AnimatePresence>
	);
}
