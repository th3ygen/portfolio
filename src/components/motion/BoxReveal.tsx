import { cn } from "@/lib/utils";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type BoxRevealProps = {
	className?: string;
	children: React.ReactNode;
	delay?:
		| "delay-0"
		| "delay-75"
		| "delay-100"
		| "delay-150"
		| "delay-200"
		| "delay-300"
		| "delay-500"
		| "delay-700"
		| "delay-1000";
	duration?: number;
};

export default function BoxReveal({
	className = "",
	children,
	delay = "delay-0",
}: BoxRevealProps) {
	const [isMounted, setIsMounted] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<div
			className={cn(
				"relative flex w-fit delay transform translate-y-10 duration-500 opacity-0",
				delay,
				className,
				isMounted && isInView && "translate-y-0 opacity-100"
			)}
		>
			<div
				ref={ref}
				className={cn(
					"absolute top-0 left-0 h-full w-full bg-primary transition-all z-10 pointer-events-none",
					`duration-1000 ${delay}`,
					isInView && "w-0"
				)}
			></div>
			{children}
		</div>
	);
}
