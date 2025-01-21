"use client";

import { cn } from "@/lib/utils";
import type { CareerSnapshot } from "career";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import SnapshotContent from "./SnapshotContent";
import SnapshotSelector from "./SnapshotSelector";

type CareerSnapshotsProps = {
	className?: string;
	snapshots: CareerSnapshot[];
};

export default function CareerSnapshots({
	className = "",
	snapshots,
}: CareerSnapshotsProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSetActive = (index: number) => {
		setActiveIndex(index);
	};

	const selectors = () => {
		return snapshots.map((snapshot, index) => (
			<SnapshotSelector
				key={"snapshot-selector-" + index}
				{...snapshot}
				onClick={() => handleSetActive(index)}
				active={activeIndex === index}
			/>
		));
	};

	const Banner = () => {
		return (
			<div className="w-full h-fit absolute left-2 top-0 -z-10 opacity-10">
				<Image
					src={snapshots[activeIndex].banner}
					alt={snapshots[activeIndex].company + "-banner"}
					height={100}
					width={400}
				/>
			</div>
		);
	};

	return (
		<div className={cn("grid grid-cols-12", className)}>
			<div className="hidden lg:block col-span-3">{selectors()}</div>
			<AnimatePresence>
				<motion.div
					className="col-span-12 lg:col-span-9 relative overflow-hidden"
					layout
				>
					<SnapshotContent {...snapshots[activeIndex]} />
					<Banner />
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
