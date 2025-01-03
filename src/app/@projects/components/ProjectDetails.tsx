"use client";

import { useGlobalStore } from "@/stores/useGlobalStore";
import { useProjectStore } from "@/stores/useProjectStore";
import { motion } from "motion/react";

function Overlay() {
	return (
		<div className="absolute top-0 left-0 w-full h-full  bg-black/90"></div>
	);
}

export default function ProjectDetails() {
	const { setIsViewingProject } = useGlobalStore();
	const { project } = useProjectStore();

	const handleClose = () => {
		setIsViewingProject(false);
	};

	return (
		<motion.div
			className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[100] overflow-hidden"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={handleClose}
		>
			<Overlay />
			<div className="relative z-10 w-full h-full grid grid-cols-2">
				<div className="w-full h-full p-20">
					<h1 className="text-4xl text-white uppercase font-bold tracking-widest">{project.title}</h1>
                    <p className="pt-4">{project.description}</p>
				</div>
			</div>
		</motion.div>
	);
}
