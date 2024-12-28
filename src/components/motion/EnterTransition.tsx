"use client";

import { cn } from "@/lib/utils";
import { useInView } from "motion/react";
import { useRef } from "react";

type EnterTransition = {
	once?: boolean;
	children: React.ReactNode;
	className?: string;
};

export default function EnterTransition({
	once = false,
	children,
	className = "",
}: EnterTransition) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, {
		once,
	});

	return (
		<div
			ref={ref}
			className={cn(
				"opacity-0 translate-y-5 duration-700 [transition-timing-function:cubic-bezier(0.785,0.135,0.150,0.860)]",
				className,
				isInView && "opacity-100 translate-y-0"
			)}
		>
			{children}
		</div>
	);
}
