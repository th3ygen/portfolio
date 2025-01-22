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
		function getDuration(start: Date, end?: Date): string {
			const endDate = end || new Date();

			if (endDate < start) {
				throw new Error("End date cannot be earlier than start date.");
			}

			// Extract year and month from the start and end dates
			const startYear = start.getFullYear();
			const startMonth = start.getMonth(); // 0-based
			const endYear = endDate.getFullYear();
			const endMonth = endDate.getMonth(); // 0-based

			// Calculate the difference in years and months
			let years = endYear - startYear;
			let months = endMonth - startMonth;

			// Adjust for negative months
			if (months < 0) {
				years -= 1;
				months += 12;
			}

			// Generate the output based on the calculated years and months
			const yearPart =
				years === 0 ? "" : years === 1 ? "a year" : `${years} years`;

			const monthPart =
				months === 0
					? ""
					: months === 1
					? "a month"
					: `${months} months`;

			// Combine year and month parts with proper spacing
			return [yearPart, monthPart].filter((part) => part).join(" and ");
		}

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
