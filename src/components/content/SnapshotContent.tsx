"use client";

import { cn } from "@/lib/utils";
import type { CareerSnapshot } from "career";
import { motion } from "motion/react";

type SnapshotContentProps = CareerSnapshot;

export default function SnapshotContent({
	role,
	company,
	start,
	end,
	address,
	bullets,
}: SnapshotContentProps) {
	const Duration = () => {
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
			<p className="text-sm">
				{`${getMonthYear(start)} - ${
					end ? getMonthYear(end) : "Present"
				}
				(${getDuration(start, end)})`}
			</p>
		);
	};

	const Bullets = () => {
		return bullets.map((bullet, index) => (
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
		));
	};

	return (
		<motion.div
			key={company}
			className={cn(
				"relative grid grid-cols-12 gap-4 lg:pl-4 text-justify z-10"
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
				<Duration />
				<p className="text-sm">{address}</p>
			</div>
			<div className="col-span-12">
				<ul className="pl-4">
					<Bullets />
				</ul>
			</div>
		</motion.div>
	);
}
