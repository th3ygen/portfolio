"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Project } from "project";
import { FaMedal } from "react-icons/fa";

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
		gold: <FaMedal className="text-2xl text-yellow-300" size={40} />,
		silver: <FaMedal className="text-2xl text-gray-300" size={40} />,
		bronze: <FaMedal className="text-2xl text-yellow-600" size={40} />,
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
						<TooltipContent className="relative z-[999] dark:bg-secondary text-primary capitalize">
							<span>{`${medal} @${title}`}</span>
						</TooltipContent>
					</Tooltip>
				</div>
			);
		});

	return (
		<div className="absolute top-0 right-0 flex gap-2">
			<Medals />
		</div>
	);
}
