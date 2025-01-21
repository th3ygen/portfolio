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
