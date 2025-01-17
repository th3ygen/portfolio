"use client";

import { cn } from "@/lib/utils";
import { useInView } from "motion/react";
import { useRef } from "react";

type EnterTransition = {
	once?: boolean;
	children: React.ReactNode;
	direction?: "up" | "down" | "left" | "right";
	amount?: "some" | "all";
	className?: string;
};

export default function EnterTransition({
	once = false,
	children,
	direction = "up",
	className = "",
	amount = "some",
}: EnterTransition) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, {
		once,
		amount,
	});
	const intial = () => {
		if (direction === "up") return "opacity-0 translate-y-14";
		if (direction === "down") return "opacity-0 translate-y-[-14px]";
		if (direction === "left") return "opacity-0 translate-x-20";
		if (direction === "right") return "opacity-0 translate-x-[-20px]";
	};
	const target = () => {
		if (direction === "up") return "opacity-100 translate-y-0";
		if (direction === "down") return "opacity-100 translate-y-0";
		if (direction === "left") return "opacity-100 translate-x-0";
		if (direction === "right") return "opacity-100 translate-x-0";
	};

	return (
		<div
			ref={ref}
			className={cn(
				intial(),
				"duration-700 [transition-timing-function:cubic-bezier(0.785,0.135,0.150,0.860)]",
				className,
				isInView && target()
			)}
		>
			{children}
		</div>
	);
}
