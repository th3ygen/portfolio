"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import type { Project } from "project";
import { cn } from "@/lib/utils";
import ProjectTags from "./ProjectTags";

type ProjectExpandableProps = {
	projects: Project[];
};

export function ProjectExpandable({ projects }: ProjectExpandableProps) {
	const [active, setActive] = useState<Project | boolean | null>(null);
	const ref = useRef<HTMLDivElement>(null);
	const id = useId();

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setActive(false);
			}
		}

		if (active && typeof active === "object") {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

	useOutsideClick(ref, () => setActive(null));

	return (
		<>
			{/* OVERLAY */}
			<AnimatePresence>
				{active && typeof active === "object" && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/80 h-full w-full z-50"
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{active && typeof active === "object" ? (
					<div className="fixed inset-0 grid place-items-center z-[100]">
						{/* CLOSE BTN */}
						<motion.button
							key={`button-${active.title}-${id}`}
							layout
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							exit={{
								opacity: 0,
								transition: {
									duration: 0.05,
								},
							}}
							className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
							onClick={() => setActive(null)}
						>
							<CloseIcon />
						</motion.button>
						<motion.div
							layoutId={`card-${active.title}-${id}`}
							ref={ref}
							className="w-full h-full flex flex-col bg-white dark:bg-neutral-900 overflow-hidden"
						>
							{/* IMAGE */}
							<motion.div
								layoutId={`image-${active.title}-${id}`}
							>
								<Image
									priority
									width={200}
									height={200}
									src={active.image}
									alt={active.title}
									className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
								/>
							</motion.div>

							<div>
								<div className="flex justify-between items-start p-4">
									<div className="">
										<motion.h3
											layoutId={`title-${active.title}-${id}`}
											className="font-bold text-neutral-700 dark:text-neutral-200"
										>
											{active.title}
										</motion.h3>
										<motion.div
											className="flex gap-2 pt-2 pb-4"
											layoutId={`tags-${active.title}-${id}`}
										>
											<ProjectTags project={active} />
										</motion.div>
										<motion.p
											layoutId={`description-${active.description}-${id}`}
											className="text-neutral-600 dark:text-neutral-400"
										>
											{active.longTitle}
										</motion.p>
									</div>

									<motion.a
										layoutId={`button-${active.title}-${id}`}
										href={""}
										target="_blank"
										className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
									>
										More
									</motion.a>
								</div>
								<div className="pt-4 relative px-4">
									<motion.div
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
									>
										{active.description}
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>
				) : null}
			</AnimatePresence>
			<div className="max-w-2xl mx-auto w-full gap-4 flex flex-col">
				{projects.map((card: Project) => (
					<motion.div
						layoutId={`card-${card.title}-${id}`}
						key={`card-${card.title}-${id}`}
						onClick={() => setActive(card)}
						className={cn(
							"p-4 w-full flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer",
							"rounded-lg hover:shadow-md bg-secondary/10 dark:bg-secondary/10 shadow-gray-800 border-secondary/20 dark:border-secondary/40 border-[1px]"
						)}
					>
						<div className="w-full flex gap-4 flex-col items-center md:items-start ">
							<motion.div
								layoutId={`image-${card.title}-${id}`}
								className="flex items-center justify-between w-full"
							>
								<div className="flex flex-col items-center md:items-start justify-center w-full md:w-fit md:flex-row gap-4">
									<Image
										width={100}
										height={100}
										src={card.image}
										alt={card.title}
										className="h-40 w-40 md:h-16 md:w-16 rounded-lg object-cover object-top"
									/>
									<div className="flex-col hidden md:flex gap-2">
										<motion.h3
											layoutId={`title-${card.title}-${id}`}
											className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
										>
											{card.title}
										</motion.h3>
										<motion.div
											className="flex gap-2"
											layoutId={`tags-${card.title}-${id}`}
										>
											<ProjectTags project={card} />
										</motion.div>
									</div>
								</div>
								<motion.button
									layoutId={`button-${card.title}-${id}`}
									className="hidden md:block px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
								>
									View details
								</motion.button>
							</motion.div>
							<div className="">
								<motion.p
									layoutId={`description-${card.description}-${id}`}
									className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
								>
									{card.description}
								</motion.p>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</>
	);
}

export const CloseIcon = () => {
	return (
		<motion.svg
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
				transition: {
					duration: 0.05,
				},
			}}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-4 w-4 text-black"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M18 6l-12 12" />
			<path d="M6 6l12 12" />
		</motion.svg>
	);
};
