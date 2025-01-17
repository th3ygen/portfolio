"use client";

import EnterTransition from "@/components/motion/EnterTransition";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export type CareerSnapshotProps = {
	role: string;
	company: string;
	start: Date;
	end?: Date;
	logo: string;
	banner: string;
	address: string;
	bullets: string[];
	height?: number;
	width?: number;
	className?: string;
	active?: boolean;
	onClick?: () => void;
};

const CareerSelector: React.FC<CareerSnapshotProps> = ({
	role,
	company,
	logo,
	height = 80,
	width = 80,
	className = "",
	active = false,
	end,
	onClick,
}) => {
	const year = (end || new Date()).getFullYear();

	return (
		<div
			className={cn(
				"relative flex h-[100px] w-full justify-center cursor-pointer border-r-2 duration-300 border-accent hover:bg-secondary/10",
				active &&
					"bg-secondary/15 border-r-8 border-primary hover:border-primary hover:bg-secondary/20"
			)}
			onClick={onClick}
		>
			<div
				className={cn(
					"absolute top-0 right-0 text-primary h-full flex items-center",
					active && ""
				)}
			>
				<div
					className={cn(
						"-rotate-90 text-xs translate-x-2 duration-1000 tracking-[4px]",
						active && "translate-x-0"
					)}
				>
					{year}
				</div>
			</div>
			<Image
				src={logo}
				alt={company + role + "-logo"}
				height={height}
				width={width}
				className={cn("object-contain", className)}
			/>
		</div>
	);
};

const CareerContent: React.FC<CareerSnapshotProps> = ({
	role,
	company,
	start,
	end,
	address,
	bullets,
}) => {
	// function to get Mon YYYY format
	const getMonthYear = (date: Date) => {
		return `${date.toLocaleString("default", {
			month: "short",
		})} ${date.getFullYear()}`;
	};

	// get duration of the job
	const getDuration = (start: Date, end?: Date) => {
		end = end || new Date();

		let years = end.getFullYear() - start.getFullYear();
		let months = end.getMonth() - start.getMonth();

		if (months < 0) {
			months += 12;
			years = 0;
		}

		if (years === 0) {
			return `${months} months`;
		}

		return `${
			years === 1 ? "a year" : years + " years"
		} and ${months} months`;
	};

	return (
		<motion.div
			key={company}
			className={cn(
				"relative grid grid-cols-12 gap-4 pl-4 text-justify z-10"
			)}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div className="col-span-12">
				<h3 className="text-2xl font-bold">{role}</h3>
				<h4 className="text-lg font-bold dark:text-primary">
					{company}
				</h4>
				<p className="text-sm">
					{getMonthYear(start)} -{" "}
					{end ? getMonthYear(end) : "Present"}{" "}
					<span>({getDuration(start, end)})</span>
				</p>
				<p className="text-sm">{address}</p>
			</div>
			<div className="col-span-12">
				<ul className="pl-4">
					{bullets.map((bullet, index) => (
						<motion.li
							key={index}
							className="text-sm flex gap-2 pb-2"
							initial={{
								opacity: 0,
								x: -10,
							}}
							animate={{
								opacity: 1,
								x: 0,
							}}
							exit={{
								opacity: 0,
								x: -10,
							}}
							transition={{
								duration: 0.2,
								delay: 0.1 + index * 0.1,
							}}
						>
							<div className="text-primary">•</div>
							<div>{bullet}</div>
						</motion.li>
					))}
				</ul>
			</div>
		</motion.div>
	);
};

type CareerSnapshotsProps = {
	className?: string;
	snapshots: CareerSnapshotProps[];
};

export default function CareerSnapshots({
	className = "",
	snapshots,
}: CareerSnapshotsProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSetActive = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<div className={cn("grid grid-cols-12", className)}>
			<div className="col-span-3">
				{snapshots.map((snapshot, index) => (
					<EnterTransition once key={index}>
						<CareerSelector
							{...snapshot}
							onClick={() => handleSetActive(index)}
							active={activeIndex === index}
						/>
					</EnterTransition>
				))}
			</div>
			<AnimatePresence>
				<motion.div
					className="col-span-9 relative overflow-hidden"
					layout
				>
					<CareerContent {...snapshots[activeIndex]} />
					<div className="w-full h-fit absolute left-2 top-0 -z-10 opacity-10">
						<Image
							src={snapshots[activeIndex].banner}
							alt={snapshots[activeIndex].company + "-banner"}
							height={100}
							width={400}
						/>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
