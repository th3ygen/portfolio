"use client";

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Project } from "project";
import { FaMedal } from "react-icons/fa";
import { motion } from "motion/react";

type ProjectAwardsProps = {
	isInView: boolean;
} & Project;

export function ProjectAwards({
	title: projectTitle,
	awards,
	isInView,
}: ProjectAwardsProps) {
	if (!awards || awards.length === 0) return null;

	const awardIcons = {
		gold: (
			<FaMedal
				className="text-2xl text-orange-300 dark:text-yellow-300"
				size={40}
			/>
		),
		silver: (
			<FaMedal
				className="text-2xl text-gray-300 dark:text-gray-300"
				size={40}
			/>
		),
		bronze: (
			<FaMedal
				className="text-2xl text-orange-600 dark:text-yellow-600"
				size={40}
			/>
		),
	};

	const Medals: React.FC = () =>
		awards.map((award, index) => {
			const { title, medal } = award;
			return (
				<div
					key={projectTitle + "-award-" + title + index}
					className={cn(
						"opacity-0 -translate-y-5 duration-500 delay-300",
						isInView && "opacity-100 translate-y-0"
					)}
				>
					<Tooltip delayDuration={0}>
						<TooltipTrigger className="cursor-auto">
							{awardIcons[medal!]}
						</TooltipTrigger>
						<TooltipContent className="relative z-[999] border-2 border-accent/20 bg-background text-accent dark:bg-secondary dark:text-primary capitalize">
							<span>{`${medal} @${title}`}</span>
						</TooltipContent>
					</Tooltip>
				</div>
			);
		});

	return (
		<div className="absolute top-0 right-0">
			<motion.div layoutId={`project-awards-${projectTitle}`} className="flex gap-2">
				<Medals />
			</motion.div>
		</div>
	);
}
