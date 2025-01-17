"use client";

import { useGlobalStore } from "@/stores/useGlobalStore";
import { useProjectStore } from "@/stores/useProjectStore";
import { motion } from "motion/react";
import BoxReveal from "@/components/motion/BoxReveal";
import type { Photo } from "./ProjectCard";
import Image from "next/image";
import { Awards, placeTags, Project } from "./ProjectCard";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdOutlineClose } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { cn } from "@/lib/utils";

const CV_PATH = process.env.NEXT_PUBLIC_CV_PATH;

function Overlay() {
	return (
		<div className="absolute top-0 left-0 w-full h-full  bg-black/90 backdrop-blur-lg"></div>
	);
}

function ImageEnterTransition({
	photo,
	className = "",
	onReady = () => {},
}: {
	photo: Photo;
	className?: string;
	onReady?: () => void;
}) {
	const handleLoad = (image: HTMLImageElement) => {
		image.classList.add("opacity-100");
		onReady();
	};

	return (
		<Image
			className={cn("duration-500 opacity-0", className)}
			alt={photo.caption}
			src={photo.path}
			height={500}
			width={500}
			onLoadingComplete={(image) => handleLoad(image)}
		/>
	);
}

function Gallery({ gallery }: Project) {
	const [loadedImgCount, setLoadedImgCount] = useState(0);

	if (!gallery) return null;

	let len = gallery.length;

	if (len === 0) return null;

	if (len < 3) {
		return (
			<div className="relative w-full h-[100vh] pr-20 flex items-center">
				<div className="absolute top-0 left-0 w-full h-[250px] bg-gradient-to-b from-black from-20% to-transparent z-10 pointer-events-none"></div>
				<div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-black from-20% to-transparent z-10 pointer-events-none"></div>
				<div className="relative w-full h-[80%] items-center justify-center flex flex-col gap-4">
					{loadedImgCount < len && (
						<div className="absolute left-0 top-0 h-full w-full flex items-center justify-center animate-pulse">
							<span>Loading</span>
						</div>
					)}
					{gallery.map((photo) => {
						return (
							<div
								key={photo.path}
								className="relative h-auto w-full flex items-center justify-center py-2"
							>
								<ImageEnterTransition
									photo={photo}
									className="relative w-2/3 object-cover z-10 rounded-lg overflow-hidden"
									onReady={() =>
										setLoadedImgCount((count) => count + 1)
									}
								/>
							</div>
						);
					})}
				</div>
			</div>
		);
	}

	let id = 0;

	if (len < 4) {
		gallery = [...gallery, ...gallery];
		len *= 2;
	}

	const listPhotos = (g: typeof gallery) =>
		g.map((photo) => {
			return (
				<div
					key={photo.path + id++}
					className="relative h-auto w-full flex items-center justify-center py-2 delay-500"
				>
					<ImageEnterTransition
						photo={photo}
						className="relative w-full object-cover z-10"
						onReady={() => setLoadedImgCount((count) => count + 1)}
					/>
				</div>
			);
		});

	return (
		<div className="relative w-full h-[100vh] pr-20 grid grid-cols-2 gap-4">
			<div className="absolute top-0 left-0 w-full h-[250px] bg-gradient-to-b from-black from-20% to-transparent z-10 pointer-events-none"></div>
			<div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-black from-20% to-transparent z-10 pointer-events-none"></div>
			{loadedImgCount < len && (
				<div className="absolute left-0 top-0 h-full w-full flex items-center justify-center animate-pulse">
					<span>Loading</span>
				</div>
			)}
			<Slider
				className="gap-10 !h-full"
				dots={false}
				vertical
				arrows={false}
				autoplay
				speed={10000}
				autoplaySpeed={3000}
				infinite
				cssEase="cubic-bezier(0.785, 0.135, 0.15, 0.86)"
			>
				{listPhotos(gallery)}
			</Slider>
			<Slider
				className="gap-10"
				dots={false}
				vertical
				arrows={false}
				autoplay
				speed={10000}
				autoplaySpeed={3000}
				infinite
				cssEase="cubic-bezier(0.785, 0.135, 0.15, 0.86)"
				rtl
			>
				{listPhotos(gallery)}
			</Slider>
		</div>
	);
}

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

export default function ProjectDetails() {
	const { setIsViewingProject } = useGlobalStore();
	const { project, setSelectedProject } = useProjectStore();
	const [isMounted, setIsMounted] = useState(false);

	const handleClose = () => {
		setIsViewingProject(false);
		setSelectedProject(-1);
	};

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const writeDescriptions = ({ title, longDescription }: Project) => {
		if (!longDescription || longDescription.length === 0) return null;

		return longDescription.map((desc, index) => {
			return (
				<BoxReveal key={title + index} delay="delay-300">
					<p className="text-justify leading-8">{desc}</p>
				</BoxReveal>
			);
		});
	};

	const listClients = ({ title, clients }: Project) => {
		if (!clients || clients.length === 0) return null;

		return clients.map((client, index) => {
			return (
				<BoxReveal
					key={title + "-client-" + index}
					delay="delay-500"
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
				</BoxReveal>
			);
		});
	};

	const totalTechnologies = project.technologies
		? project.technologies.split(", ").length
		: 0;

	return (
		<motion.div
			className="fixed top-0 left-0 w-[100vw] h-[100vh] z-50 overflow-hidden"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Overlay />
			{/* close button */}
			<Button
				className="fixed top-0 right-0 p-4 m-4 z-50 flex items-center"
				variant="ghost"
				onClick={handleClose}
			>
				<MdOutlineClose className="text-5xl" />
				<span>Close</span>
			</Button>
			<div className="relative z-10 w-full h-full grid grid-cols-5">
				<div className="relative col-span-3 w-full h-full p-20 space-y-2">
					<BoxReveal
						delay="delay-100"
						className="flex flex-col space-y-1"
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
					</BoxReveal>

					<div className="absolute top-20 right-20">
						<Awards isInView={isMounted} {...project} />
					</div>

					<BoxReveal delay="delay-150" className="flex gap-2 pt-4">
						{placeTags(project)}
					</BoxReveal>

					<BoxReveal delay="delay-200" className="py-4">
						<div className="text-accent">
							<span>Contributed as a </span>
							<span className="font-bold">{project.role}</span>,
							utilizing over{" "}
							<span className="font-bold">
								{totalTechnologies}
							</span>{" "}
							technologies
						</div>
					</BoxReveal>

					<div className="flex flex-col">
						<BoxReveal delay="delay-300" className="mb-2">
							<h2 className="text-primary font-bold text-lg">
								A little bit about the project
							</h2>
						</BoxReveal>
						<div className="space-y-2">
							{writeDescriptions(project)}
						</div>
					</div>
					<div className="grid grid-cols-2 pt-4">
						<div className="flex flex-col">
							<BoxReveal delay="delay-500" className="mb-2">
								<h2 className="text-primary font-bold text-lg">
									Stakeholders
								</h2>
							</BoxReveal>
							<div className="flex space-x-4">
								{listClients(project)}
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<BoxReveal delay="delay-500" className="mb-2">
								<h2 className="text-primary font-bold text-lg">
									Learn more
								</h2>
							</BoxReveal>
							<BoxReveal delay="delay-500" className="flex space-x-2">
								<span>Check my</span> <CVLink />
								<span>to learn more</span>
							</BoxReveal>
						</div>
					</div>
				</div>
				<div className="col-span-2">
					<Gallery {...project} />
				</div>
			</div>
		</motion.div>
	);
}
