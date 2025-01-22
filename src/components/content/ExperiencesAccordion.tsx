"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import type { CareerSnapshot } from "career";
import { motion } from "motion/react";
import Image from "next/image";
import EnterTransition from "../motion/EnterTransition";

type ExperiencesAccordionProps = {
	career: CareerSnapshot[];
};

export default function ExperiencesAccordion({
	career,
}: ExperiencesAccordionProps) {
	const Bullets: React.FC<{ bullets: string[] }> = ({ bullets }) => {
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

	const Duration: React.FC<{ start: Date; end: Date | undefined }> = ({
		start,
		end,
	}) => {
		// function to get Mon YYYY format
		const getMonthYear = (date: Date) => {
			return `${date.toLocaleString("default", {
				month: "short",
			})} ${date.getFullYear()}`;
		};

		// get duration of the job
		// start: Date, end?: Date
		// end: Date | undefined
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
			return [yearPart, monthPart].filter((part) => part).join(" ");
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

	const snapshots = () => {
		return career.map((snapshot, index) => (
			<AccordionItem
				key={"exp-accordion-" + index}
				value={"item-" + index}
			>
				<AccordionTrigger>
					<div className="text-accent flex items-center gap-4">
						<Image
							src={snapshot.logo}
							alt={snapshot.company}
							height={20}
							width={20}
						/>
						<div className="text-left">{snapshot.company}</div>
					</div>
				</AccordionTrigger>
				<AccordionContent>
					<div className="pb-2">
						<h3 className="text-xl font-bold">{snapshot.role}</h3>
						<Duration start={snapshot.start} end={snapshot.end} />
						<p className="text-sm">{snapshot.address}</p>
					</div>
					<Bullets bullets={snapshot.bullets} />
				</AccordionContent>
			</AccordionItem>
		));
	};

	return (
		<EnterTransition once className="w-full">
			<Accordion type="multiple" className="w-full">
				{snapshots()}
			</Accordion>
		</EnterTransition>
	);
}
